export const validateLoginInData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};

export const validateSignUpData = (email, name, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isNameValid = /^[A-Za-z\s]+$/.test(name);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  console.log(isEmailValid, isNameValid, isPasswordValid);

  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  if (!isNameValid) {
    return "Name is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
