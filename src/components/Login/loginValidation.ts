import * as Yup from "yup";

export const LoginValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Enter valid email")
      .max(250, "Upto 250 characters allowed"),

    password: Yup.string()
      .trim()
      .required("Enter Your Password Name")
      .min(3, "Min 3 characters required"),
  });
};
