import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import * as yup from "yup";
import Header from '../../components/Header.jsx'
import { Formik } from 'formik'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
}

const phoneRegEx = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// validations for each input
const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalied email").required("required"),
    contact: yup.string().matches(phoneRegEx, "Phone Number is not valied").required("required"),
    address: yup.string().required("required"),

})
const Form = () => {

    const isNonmobile = useMediaQuery("(min-width:600px)")
    // if screen-size is 600px then it will trigger the media queries

    const formSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />

            <Formik onSubmit={formSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {/* below all 6 values are accessed by Formik component */}
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Box acts as div and Textfiels acts as Input field */}
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0,1fr))">
                            <TextField
                                variant='filled' // sets style of input field giving it a slightly shaded background.
                                type='text' // Specifies that this is a text input field
                                label='First Name' // label as First Name
                                name='firstName'
                                value={values.firstName}
                                onBlur={handleBlur} //Calls the handleBlur function when the user clicks outside the input field. 
                                onChange={handleChange} // Calls the handleChange function whenever the user types something in the field.
                                error={!!touched.firstName && !!errors.firstName} // Checks if the field has been touched and has an error. 
                                // If both are true, it marks the input field as having an error (e.g., highlights it in red).
                                helperText={touched.firstName && errors.firstName} // Displays the error message below the input field,
                                //  if the field has been touched and contains an error.
                                sx={{ gridColumn: "span 2" }} // takes width of 50%
                            />
                            <TextField
                                variant='filled'
                                type='text'
                                name='lastName'
                                label='Last Name'
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                variant='filled'
                                type='email'
                                name='email'
                                label='Email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                variant='filled'
                                type='number'
                                name='contact'
                                label='Contact'
                                value={values.contact}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                name='address'
                                label='Address'
                                value={values.address}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 4" }}

                            />
                        </Box>
                        <Box display="flex" justifyContent="flex-end" mt="20px">
                            <Button type='submit' variant="contained" color='secondary'>Create New User</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form
