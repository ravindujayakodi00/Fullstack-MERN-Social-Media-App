 import { useState } from "react";
 import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
 } from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"    
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().email("invalid email").required("required"),
    password: Yup.string().required("required"),
    location: Yup.string().required("required"),
    occupation: Yup.string().required("required"),
    picture: Yup.string().required("required"),
});

const loginSchema = Yup.object().shape({
    email: Yup.string().email("invalid email").required("required"),
    password: Yup.string().required("required"),
});

const intialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

const intialValuesLogin = {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { pallete } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const handleSubmit = async (values, onsubmitProps) => {};

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={isLogin ? intialValuesLogin : intialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFeildValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap= "30px"
                        gridTemplateColumns="repeat(4, minMax(0, 1fr))"
                        sx = {{
                            "& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" },
                        }}
                    >
                        {isRegister && (
                            <>
                                <TextField 
                                    label = "First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField 
                                    label = "Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="firstName"
                                    error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField 
                                    label = "Location"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    name="firstName"
                                    error={Boolean(touched.location) && Boolean(errors.location)}
                                    helperText={touched.location && errors.location}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField 
                                    label = "Occupation"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.occupation}
                                    name="firstName"
                                    error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                    helperText={touched.occupation && errors.occupation}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <Box>
                                    
                                </Box>
                            </>
                        )}
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default Form;