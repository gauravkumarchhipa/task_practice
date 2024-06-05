import * as Yup from 'yup';

export const ProfileValidation = () => {
    return Yup.object().shape({
        firstName: Yup.string()
            .trim()
            .required("Enter Your First Name")
            .test(
                'len',
                "Min 2 characters required",
                (val: any) => val && val.toString().length >= 2
            ),

        lastName: Yup.string()
            .trim()
            .required("Enter Your Last Name")
            .test(
                'len',
                "Min 2 characters required",
                (val: any) => val && val.toString().length >= 2
            ),

        age: Yup.string()
            .required("Enter your age")
            .max(3, "Max 3 characters required"),

        gender: Yup.object().required("Select your gender"),

        country: Yup.object().required("Select your country"),

        city: Yup.object().required("Select your city"),
    })
}
