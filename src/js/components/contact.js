import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../../styles/contact.css"

const Contact = () => {

    const formik = useFormik({
        initialValues: {
          
          email: '',
          subject: '',
          message: '',
        },
        validationSchema: Yup.object({
          subject: Yup.string()
            .max(50, 'Must be 50 characters or less'),
          message: Yup.string()
            .max(250, 'Must be 250 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <div className="contact min-h-1/2vh
            px-24 py-10 sm:px-32 lg:px-36 xl:px-72 2xl:px-[30rem]">

            <div className="text-3xl mb-24">
                Send me a message
            </div>

            <div className="contact-form">
                <form onSubmit={formik.handleSubmit}>

                    <div className="grid gap-3">
                        <label htmlFor="email" className="text-base">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                   
                    
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}


                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                        <div>{formik.errors.subject}</div>
                    ) : null}
                
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea rounded-md"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                    ) : null}
                
                    <button type="submit">Send</button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Contact;