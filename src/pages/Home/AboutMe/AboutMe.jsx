import { useEffect } from 'react';
import './AboutMe.css'
import AOS from 'aos'
import 'aos/dist/aos.css';


const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh();
    }, [])
    return (
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 justify-center about-me p-4 shadow-xl shadow-purple-400">
            <div data-aos="flip-left">
                <img src="/src/assets/profile.jpg" alt="" />
            </div>
            <div data-aos="flip-right">
                <h1 className="text-5xl font-bold m-4 aboutMe-title">About Me</h1>
                <p className="tracking-widest ml-4 text-2xl text-justify">Hello, I’m a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.</p>
                <p className="ml-4 mt-6 tracking-normal text-xl text-justify">Welcome to my portfolio! I am Moriam Akter Swarna, a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
                    With a Bachelor degree in Computer Science and Engineering from Daffodil International University, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.</p>

            </div>
        </div>
    );
};

export default AboutMe;