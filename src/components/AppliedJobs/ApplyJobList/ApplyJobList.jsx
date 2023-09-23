import { AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
const ApplyJobList = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-4 gap-8 my-5 border'>
                <div className='col-span-1 py-20 px-10 bg-[#F4F4F4] flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='col-span-2 mt-6 space-y-3'>
                    <h2>{job_title}</h2>
                    <h4>{company_name}</h4>
                    <div className="flex gap-4">
                        <button className='border p-2 border-[#7E90FE] text-[#7E90FE] rounded hover:text-blue-800'>{remote_or_onsite}</button>
                        <button className='border p-2 border-[#7E90FE] rounded text-[#7E90FE] hover:text-blue-800'>{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <p className='flex gap-2 items-center'><CiLocationOn></CiLocationOn><span>{location}</span></p>
                        <p className='flex gap-2 items-center'><AiOutlineDollar></AiOutlineDollar> <span>{salary}</span></p>
                    </div>
                </div>
                <div className='flex justify-end items-center mr-8'>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>

        </div>
    );
};

export default ApplyJobList;