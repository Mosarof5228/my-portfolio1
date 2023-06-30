import TypewriterComponent from "typewriter-effect";
import './Banner.css'
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';






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


        <div className="hero bg-base-200 banner">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div data-aos="flip-left">
                    <img src="/src/assets/profile.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div data-aos="flip-right">
                    <h1 className="text-2xl">Hi,My Name is Md.Mosarof</h1>
                    <div className="text-5xl font-bold">
                        <TypewriterComponent
                            options={{
                                strings: ['I am a Web Developer', 'I am a Mearn Stack devleoper'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="py-6">Passionate web developer dedicated to crafting exceptional digital experiences that engage and inspire.</p>
                    <button className="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;