let inputObject = {
  userName: undefined,
  email: undefined,
  password: undefined,
};

let arr = [];
const setValues = () => {
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let male = document.querySelector("#male");
  let female = document.querySelector("#female");
  inputObject.userName = username.value;
  inputObject.email = email.value;
  inputObject.password = password.value;
  inputObject.gender = male.checked
    ? "Male"
    : female.checked
    ? "Female"
    : undefined;
  arr.push(inputObject);
  console.log(arr);
};
