import TypewriterComponent from "typewriter-effect";
import './Banner.css'





const Banner = () => {
    return (


        <div className="hero bg-base-200 banner">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="/src/assets/profile.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">Hi,My Name is Md.Mosarof</h1>
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