import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setData } from "../Utility/localStorage";


const JobDetails = () => {
    const jobList = useLoaderData();
    const {id} = useParams();
    const idItn = parseInt(id)
    const job = jobList.find(job => job.id === idItn)
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information} = job;


    const applyJobHandle = () =>{
        setData(idItn)
        toast('You have Applied this Job Successfully')
    }

    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <div className="grid md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div>
                        <h2 className="text-base"><span className="text-[#1A1919] font-extrabold">Job Description:</span> <span>{job_description}</span>
                        </h2>
                    </div>
                    <div>
                        <h2><span className="text-[#1A1919] font-extrabold">Job Responsibility:</span> <span>{job_responsibility}</span></h2>
                    </div>
                    <div>
                        <h2 className="text-[#1A1919] font-extrabold">Educational Requirements:</h2>
                        <p>{educational_requirements}</p>
                    </div>
                    <div>
                        <h2 className="text-[#1A1919] font-extrabold">Experiences:</h2>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-[#7E90FE19] p-7 rounded-lg">
                        <h3 className="text-xl font-semibold">Job Details</h3>

                        <hr className="my-6"/>

                        <h4 className="flex gap-1"><span className="font-medium text-lg">Salary:</span><span className="mt-1">{salary} (Per Mounth)</span></h4>
                        <h4 className="flex gap-1"><span className="font-medium text-lg">Job Title:</span><span className="mt-[2px]">{job_title}</span></h4>

                        <h3 className="text-xl font-semibold mt-8">Contact Information</h3>

                        <hr className="my-6"/>

                        <h4 className=""><span className="font-medium text-lg">Phone:</span><span className=" mt-[2px] ml-1">{contact_information.phone}</span></h4>
                        <h4 className=""><span className="font-medium text-lg">Email:</span><span className=" mt-[2px] ml-1">{contact_information.email}</span></h4>
                        <h4><span className="font-medium text-lg">Address:</span><span className=" mt-[2px] ml-1">{contact_information.address}</span></h4>
                    </div>
                    <button onClick={applyJobHandle} className="btn btn-primary w-full mt-6">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;