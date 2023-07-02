import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_30gkx1s',
            'template_flq6vza',
            form.current,
            'zHht6Z62TQb57eyX6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contract" className='contact-form '>
            <h1 className='m-8 flex justify-center text-6xl font-bold mt-[2px] pt-4 contact-title'>Contact Me</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 p-4'>
                <div className='mt-4'>
                    <div>
                        <h1 className='text-4xl font-bold mb-4'>Contact Info</h1>
                        <div className='mb-4'>
                            <label className='font-semibold text-2xl text-blue-400'>Email Address</label>
                            <p>mosarofhossen5229@gmail.com</p>
                        </div>
                        <div className='mb-4'>
                            <label className='font-semibold text-2xl text-blue-400'>Phone Number</label>
                            <p>01701893841</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-2xl text-blue-400'>Location</h2>
                            <address>Mohakhali,Wairlessgate,Banani,Dhaka-1212</address>
                        </div>
                    </div>
                </div>
                <div className="contact-container">

                    <form className='shadow-2xl p-8' ref={form} onSubmit={sendEmail} >
                        <div >
                            <div>
                                <label className='mb-4'>Name(required)</label><br />
                                <input className='mt-2 w-[90%] py-2 outline-black text-black outline pl-2 outline-1' type="text" name="user_name" required />

                            </div>
                            <div className='mt-4'>
                                <label>Email(required)</label><br />
                                <input className='w-[90%] outline py-2 text-black outline-1 mt-2 pl-2' type="email" name="user_email" required />
                            </div>
                        </div>
                        <div className='mt-4'>

                        </div>
                        <div className='mt-4'>
                            <label>Message</label><br />
                            <textarea className='outline pl-2 text-black outline-1 mt-2 w-[90%] h-[100px]' name="message" />
                        </div>
                        <div className='text-center mt-4 '>
                            <input className='bg-blue-400 text-3xl px-6 py-2 text-white rounded-md text-center' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;