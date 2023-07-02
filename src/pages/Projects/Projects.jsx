import project1 from '../../assets/all skills/Kids Zoon Bd.png'
import './Projects.css'
import project2 from '../../assets/all skills/Japanese Fodd Bd.png'
import './Projects.css'
import project3 from '../../assets/all skills/A.Y Meditation __ Popular Classes.png'
import './Projects.css'



const Projects = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold text-center my-4 text-[#2e409e;]'>My Projects</h1>
            <div id="projects" className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div data-aos="zoom-in-right" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-purple-400'>
                    <div className="project-box  w-full " style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={project1}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://kids-zone-bd.firebaseapp.com/">Live Link</a>
                        <a href="https://github.com/Mosarof5228/Kids-Zone-Bd-Client.git">Code Link</a>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-purple-400'>
                    <div className="project-box  w-full " style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={project2}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://japanees--food-worlds.firebaseapp.com/">Live Link</a>
                        <a href="https://github.com/Mosarof5228/Japanese-Food-World-Client.git">Code Link</a>
                    </div>
                </div>
                <div data-aos="zoom-in-right" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-purple-400'>
                    <div className="project-box  w-full " style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={project3}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://adgi-yoga-meditation-school.firebaseapp.com/">Live Link</a>
                        <a href="https://github.com/Mosarof5228/Adhi-Yoga-Meditaion-School-Client.git">Code Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;