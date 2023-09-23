
const Banner = () => {
    return (
        <div className="flex justify-center items-center mb-10">
            <div className="space-y-3">
                <h2 className="md:text-7xl">
                One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span>
                </h2>
                <p className="text-xs lg:text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary text-white ">Get Started</button>
            </div>
            <div>
                <img className="w-[800px]" src="https://i.ibb.co/F3RKHnK/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;