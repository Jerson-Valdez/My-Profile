import { useState, useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { 
        IconMail,
        IconPhone,
        IconLink,
        IconBrandLinkedin,
        IconBrandGithub,
        IconBrandFacebook
 } from '@tabler/icons-react';

export default function Contact() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                toast.success('Message sent successfully!');
                e.target.reset();
            },
            (error) => {
                toast.error('An error occurred, please try again.');
            }
        )
    }

    function onNameChange(e) {
        const temp = e.target.value;
        const nameError = document.getElementById('nameError');
        setFullname(null)

        if (!temp.trim()) {
            nameError.textContent = 'Full Name is required.';
        }else {
            nameError.textContent = '';
            setFullname(temp);
        }
    }

    function onEmailChange(e) {
        const temp = e.target.value;
        const emailError = document.getElementById('emailError');
        setEmail(null)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!temp.trim()) {
            emailError.textContent = 'Email Address is required.';
        } else if (!emailRegex.test(temp)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
            setEmail(temp);
        }
    }

    function onMessageChange(e) {
        const temp = e.target.value;
        const messageError = document.getElementById('messageError');
        setMessage(null)
        if (!temp.trim()) {
            messageError.textContent = 'Message is required.';
        } else {
            messageError.textContent = '';
            setMessage(temp);
        }
    }

    return(
        <section className='contact-container' id='contact'>
            <div className="header">
                <div className="title">
                    <h2>Get</h2>
                    <h2>In Touch</h2>
                </div>
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!</p>
            </div>
            <div className="contact-info" data-aos="fade-up" data-aos-duration="1000">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <div className="input-group">
                        <label htmlFor="fullname">
                            Full Name *
                        </label>
                        <input type="text" id='fullname' name='fullname' placeholder='Jerson Valdez' required onChange={onNameChange}/>
                        <span className='error-message' id='nameError'></span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">
                            Email Address *
                        </label>
                        <input type="email" id='email' name='email' placeholder='valdezjersonpatrick.spnhs@gmail.com' required onChange={onEmailChange}/>
                        <span className='error-message' id='emailError'></span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">
                            Message *
                        </label>
                        <textarea id='message' name='message' placeholder='Your Message' required onChange={onMessageChange}></textarea>
                        <span className='error-message' id='messageError'></span>
                    </div>
                    <button type='submit' className='submit-btn'>Send Message</button>
                </form>
                <div className="socials">
                    <div className="email">
                        <IconMail />
                        <span>valdezjerson8624@gmail.com</span>
                    </div>
                    <div className="phone">
                        <IconPhone />
                        <span>+63 927 654 3210</span>
                    </div>
                    <div className="social-links">
                        <h3><IconLink /> Socials</h3>
                        <a href="
                            https://www.linkedin.com/in/jerson-valdez-962225382/" target="_blank" rel="noopener noreferrer">
                            <IconBrandLinkedin />
                            <span>Jerson Valdez</span>
                        </a>
                        <a href="
                            https://github.com/Jerson-Valdez" target="_blank" rel="noopener noreferrer">
                            <IconBrandGithub />
                            <span>Jerson-Valdez</span>
                        </a>
                        <a href="
                            https://www.facebook.com/valdez.jerson.5/" target="_blank" rel="noopener noreferrer">
                            <IconBrandFacebook />
                            <span>Jerson Patrick Valdez</span>
                        </a>
                    </div>
                    <div className="availability">
                        <h4>Availability</h4>
                        <ul>
                            <li>Freelance Projects</li>
                            <li>Simple Projects</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}