import { AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const FeaturedJobsCard = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="border p-10 space-y-3 bg-[#9873FF0D]">
            <img src={logo} alt="" />
            <h2 className="text-2xl">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-4">
                <button className='border p-2 border-[#7E90FE] text-[#7E90FE] rounded hover:text-blue-800'>{remote_or_onsite}</button>
                <button className='border p-2 border-[#7E90FE] rounded text-[#7E90FE] hover:text-blue-800'>{job_type}</button>
            </div>
            <div className="flex gap-6">
                <p className='flex gap-2 items-center'><CiLocationOn></CiLocationOn><span>{location}</span></p>
                <p className='flex gap-2 items-center'><AiOutlineDollar></AiOutlineDollar> <span>{salary}</span></p>
            </div>
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary text-white">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobsCard;