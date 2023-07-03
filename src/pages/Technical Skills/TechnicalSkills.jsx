import './TechnicalSkills.css'
import img1 from '../../assets/all skills/download.jpg'
import img2 from '../../assets/all skills/css.png'
import img3 from '../../assets/all skills/tailwing.png'
import img4 from '../../assets/all skills/bootstrap.jpg'
import img5 from '../../assets/all skills/js.png'
import img6 from '../../assets/all skills/react.png'
import img7 from '../../assets/all skills/monggodb.jpg'
import img8 from '../../assets/all skills/express js.png'
import img9 from '../../assets/all skills/firebase.png'
import img11 from '../../assets/all skills/github.png'
import img10 from '../../assets/all skills/git.png'



const TechnicalSkills = () => {
    return (
        <div id='skills' className="mt-6 technicalSection p-4 mt-0 border-spacing-4 border-black bg-[#252731]">
            <h1 className="text-6xl font-bold text-center mb-6 technical-title">Technical Skills</h1>
            <div className="grid grid-cols-1 border-black border-8 p-4  md:grid-cols-5 gap-4">
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">HTML</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">CSS</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Tailwind</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Bootstrap</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">JavaScript</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">React</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img7} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">MongoDB</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img8} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Express JS</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img9} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Firebase</h2>
                    </div>
                </div>

                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img10} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Node JS</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/all skills/express js.png" alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Express JS</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img11} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Github</h2>
                    </div>
                </div>
                {/* <div data-aos="zoom-in-right" className="card w-full bg-base-100 shadow-xl shadow-purple-400 hover:bg-blue-400 ">
                    <figure className="px-10 pt-10">
                        <img src={img12} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Git</h2>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default TechnicalSkills;