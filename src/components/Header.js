import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/contants";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configFile";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 z-20 flex justify-between bg-gradient-to-b from-black">
      <div className="absolute inset-0 bg-black opacity-[2%]"></div>
      <img className="w-40" src={LOGO} alt="netflix logo" />
      {user && (
        <div className="flex p-2">
          <select
            className="z-20 p-2 m-2 text-white bg-gray-900 border-none rounded-lg bg-opacity-5"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option
                className="text-black"
                key={language.identifier}
                value={language.identifier}
              >
                {language.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearchClick}
            className="px-4 text-white font-bold z-20 bg-opacity-10"
          >
            {showSearch ? "🎥 Home" : "🔍 Search"}
          </button>
          <img
            className="w-12 h-12 m-2 rounded-lg"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold text-white z-20"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
