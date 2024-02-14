import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/contants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
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

  return (
    <div className="absolute w-screen px-8 py-2 z-10 flex justify-between">
      <div className="absolute inset-0 bg-black opacity-15"></div>
      <img className="w-40" src={LOGO} alt="netflix logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 m-2 rounded-lg"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold text-black z-20"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
