import * as yup from 'yup';

export const registerSchema = yup.object({

    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be 6 characters"),

    confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Password must match")
    .required()

});