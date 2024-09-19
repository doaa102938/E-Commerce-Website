import './Contact.css'
import AddressIcon from '/public/Address.png'
import PhoneIcon from '/public/phoneIcon.png'
import clockIcon from '/public/clockIcon.png'
import VectorIcon from "/public/Vector1.png"
import { Link } from 'react-router-dom'
import Logo from "/public/Logo.png"
import { useState } from 'react'
import * as yup from 'yup'
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [errorsArray, setErrorsArray] = useState([])
    const userSchema = yup.object().shape({
        name: yup.string().min(10),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required()
    })

    async function Validtion() {
        try {
            const response = await userSchema.validate(formData, { abortEarly: false })
            console.log(response)

        } catch (err) {
            var errors = []
            err.inner.forEach((error) => {
                console.log(`${error.path}:${error.message}`)
                errors.push({ key: error.path, message: error.message })
            })
            setErrorsArray(errors)

        }

    }

    function HandelOnSubmit(event) {
        event.preventDefault()
        Validtion()
        setErrorsArray([])
        setFormData({ name: "", message: "", subject: "", email: "" })

    }
    function handelOnChange(event) {
        const keyName = event.target.name
        const keyValue = event.target.value
        setFormData({
            ...formData,
            [keyName]: keyValue
        })
    }



    return (
        <div className='ContactPage'>
            <div className="TopContact">
                <img src={Logo} alt="logo" />
                <h1 className='TitleContact'>Contact</h1>
                <div className='VectorSection'>
                    <Link to="/">Home</Link>
                    <img src={VectorIcon} alt="vectorIcon" />
                    <label >Contact</label>
                </div>
            </div>

            <div className='header'>
                <h1 className='headerTitle'>Get In Touch With Us</h1>
                <label className='HearderPrag'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</label>
            </div>
            <div className='ContactUs'>
                <div className='DetailWrapper'>
                    <div className='Detail' >
                        <img src={AddressIcon} alt="address" />
                        <div>
                            <h4>Address</h4>
                            <p >236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className='Detail'>
                        <img src={PhoneIcon} alt="address" />
                        <div>
                            <h4>Phone</h4>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Mobile: +(84) 546-6789</p>
                        </div>
                    </div>
                    <div className='Detail' >
                        <img src={clockIcon} alt="address" />
                        <div>
                            <h4>Working Time</h4>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>  Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={HandelOnSubmit}>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' placeholder='Abc' name='name' value={formData.name} onChange={handelOnChange} autoFocus></input>
                    {errorsArray.map((error) => {
                        if (error.key == "name") {
                            return <label className='ErrorMessage'>{error.message}</label>
                        }
                    })}

                    <label htmlFor='email'>Email address</label>
                    <input type='email' placeholder='Abc@def.com' name='email' value={formData.email} onChange={handelOnChange}></input>
                    {errorsArray.map((error) => {
                        if (error.key == "email") {
                            return <label className='ErrorMessage'>{error.message}</label>
                        }
                    })}
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' placeholder='This is an optional' name='subject' value={formData.subject} onChange={handelOnChange}></input>
                    {errorsArray.map((error) => {
                        if (error.key == "subject") {
                            return <label className='ErrorMessage'>{error.message}</label>
                        }
                    })}
                    <label htmlFor='message'>Message</label>
                    <textarea placeholder='Hi! i’d like to ask about' name='message' value={formData.message} onChange={handelOnChange}></textarea>
                    {errorsArray.map((error) => {
                        if (error.key == "message") {
                            return <label className='ErrorMessage'>{error.message}</label>
                        }
                    })}
                    <button type='submit' className='Submit'>Submit</button>
                </form>

            </div>

        </div>


    )
}
export default Contact