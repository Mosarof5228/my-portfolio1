
import './MyServices.css'

const MyServices = () => {
    return (
        <div className='mb-4 ' id="service">
            <h1 className='font-bold text-5xl pt-4 text-center shadow-lg py-4 services-title'>My Services</h1>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2'>
                <div className="card w-fit bg-base-100 shadow-xl shadow-purple-400">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/web design.jpg" alt="Shoes" className="rounded-xl h-[60px] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>
                        <p>I specialize in creating custom websites using the MERN stack, tailored to your unique requirements. From front-end design to back-end development, I deliver high-quality, responsive websites that provide an exceptional user experience.</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="card w-fit bg-base-100 shadow-xl shadow-purple-400">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/web_devleopment-removebg-preview (1).png" alt="Shoes" className="rounded-xl h-[60px] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>
                        <p>I specialize in creating custom websites using the MERN stack, tailored to your unique requirements. From front-end design to back-end development, I deliver high-quality, responsive websites that provide an exceptional user experience.</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
                <div className="card w-fit bg-base-100 shadow-xl shadow-purple-400">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/data_integration-removebg-preview (1).png" alt="Shoes" className="rounded-xl h-[60px] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>
                        <p>I specialize in creating custom websites using the MERN stack, tailored to your unique requirements. From front-end design to back-end development, I deliver high-quality, responsive websites that provide an exceptional user experience.</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;
