import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react';
import emailjs  from '@emailjs/browser'
import { useForm } from 'react-hook-form';
import './Contact.css'

const Contact = () => {
    const {theme} = useTheme();

    const [successMessage, setSuccessMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const {register, handleSubmit, formState:{errors}} = useForm()

    const serviceID = "service_3uhx4jw";
    const templateID = "template_mzop8ib";
    const userID = "ZNCXO7JmF7qLrUS6E"

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID, 
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                company: data.company,
                subject: data.subject,
                message: data.message,
            },
            userID
        )
        r.target.reset();
    } 
 
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Your message has been sent. Thank you for the contact.");
            setErrorMessage("");
          }).catch(err => {
            setErrorMessage("Something went wrong. Please try again later.");
            console.error(`Something went wrong: ${err}`)
        });
      };

    return (
        <div id="contact" className={`contact ${theme}`}>
            <div className="text-center">
                <h1>Contact Me</h1>
                <p className="desc">Please fill in the form and let's collab</p>
                {successMessage &&
                    <div className="success-msg">
                        <span>{successMessage}</span>
                    </div>
                }
                {errorMessage &&
                    <div className="success-msg">
                        <span>{errorMessage}</span>
                    </div>
                }
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME */}
                            <label>Name <span className="required-star">*</span></label>        
                            <input type="text"
                                    id="name"
                                    className={`form-control ${theme}`}
                                    name="name" 
                                    {...register("name",{
                                            required: "Enter your name",
                                            maxLength: {
                                                value: 30,
                                                message: "Enter a valid name"
                                            }
                                        })
                                    }
                                    />
                            <div className="line"></div>
                            <p className="err-msg">
                                {errors.name && errors.name.message}
                            </p>
                            {/* PHONE */}
                            <label>Phone</label>
                            <input type="tel"
                                    id="phone"
                                    className={`form-control ${theme}`}
                                    name="phone"
                                    {...register("phone",{
                                        pattern: {
                                            value: /[0-9]{4}[0-9]{3}[0-9]{3}/,
                                            message: "Enter a valid phone number format"
                                        }
                                    })
                                } 
                                />
                            <div className="line"></div>
                            <p className="err-msg">
                                {errors.phone && errors.phone.message}
                            </p>
                            {/* EMAIL */}
                            <label>Email <span className="required-star">*</span></label> 
                            <input type="email"
                                    id="email"
                                    className={`form-control ${theme}`}
                                    name="email" 
                                    {...register("email",{
                                        required: "Enter your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Enter a valid email"
                                        }
                                    })
                                }
                                />
                            <div className="line"></div> 
                            <p className="err-msg">
                                {errors.email && errors.email.message}
                            </p>
                            {/* COMPANY */}
                            <label>Company/Organization</label>
                            <input type="text"
                                    id="company"
                                    className={`form-control ${theme}`}
                                    name="company" 
                                    {...register("company",{
                                        maxLength: {
                                                value: 50,
                                                message: "Enter a valid name"
                                        }
                                    })
                                }
                                />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                             {/* SUBJECT */}
                             <label>Subject <span className="required-star">*</span></label>
                            <input type="text"
                                    id="subject"
                                    className={`form-control ${theme}`}
                                    name="subject" 
                                    {...register("subject",{
                                        required: "Don't forget to add your subject"
                                    })
                                } 
                                />
                            <div className="line"></div>
                            <p className="err-msg">
                                {errors.subject && errors.subject.message}
                            </p>
                            {/* MESSAGE */}
                            <label>Message <span className="required-star">*</span></label>  
                            <textarea type="text"
                                        id="message"
                                        className={`form-control ${theme}`}
                                        name="message" 
                                        {...register("message",{
                                            required: "What is your message?"
                                        })
                                    } />
                            <div className="line"></div>
                            <p className="err-msg">
                                {errors.message && errors.message.message}
                            </p>
                            <button className={`btn-main-offer contact-btn ${theme}`}
                                    type="submit"
                                    >
                                    Contact Me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
