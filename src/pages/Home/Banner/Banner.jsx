import TypewriterComponent from "typewriter-effect";
import './Banner.css'
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import resume from '../../../assets/all skills/Md.Mosarof Hossen Resume.pdf'
import profile from '../../../assets/all skills/profile.jpg'






const Banner = () => {
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


        <div id="home" className="hero bg-base-200 banner">
            <div className="hero-content flex-col shadow-sm  shadow-purple-400 lg:flex-row-reverse ">
                <div data-aos="flip-left">
                    <img src={profile} className="max-w-sm rounded-lg shadow-2xl shadow-purple-600" />
                </div>
                <div data-aos="flip-right">
                    <h1 className="text-2xl name">Hi,My Name is Md.Mosarof</h1>
                    <div className="text-5xl font-bold typewrite-text">
                        <TypewriterComponent
                            options={{
                                strings: ['I am a Web Developer', 'I am a Mearn Stack devleoper'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="py-6 banner-para">Passionate web developer dedicated to crafting exceptional digital experiences that engage and inspire.</p>
                    <a href={resume} download="resume"><button className="btn btn-primary">Download Resume</button></a>
                </div>
            </div>

        </div>

    );
};

export default Banner;


