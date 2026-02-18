import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"

const Formikk = () => {
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      console.log(values);

    },

    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup.string().required("Email is required").email('Invalid email format'),
      password: yup.string().required("Password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
    })
  })

  // console.log(formik.errors);
  console.log(formik.touched);
  

  
  return (
    <div>
      <input type="text" placeholder='first name' name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
      {(formik.touched.firstName&&formik.errors.firstName)&& <small className='text-danger'>{formik.errors.firstName}</small>}
      <br />
      <input type="text" placeholder='last name' name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /> 
      {(formik.touched.lastName&&formik.errors.lastName)&& <small className='text-danger'>{formik.errors.lastName}</small>}
      <br />
      <input type="text" placeholder='email' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /> 
      {(formik.touched.email&&formik.errors.email)&& <small className='text-danger'>{formik.errors.email}</small>}
      <br />
      <input type="text" placeholder='password' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /> 
      {(formik.touched.passsword&&formik.errors.password)&& <small className='text-danger'>{formik.errors.password}</small>}
      <br />

      <button type='submit' onClick={formik.handleSubmit}>Submit</button>
    </div>
  )
}

export default Formikk