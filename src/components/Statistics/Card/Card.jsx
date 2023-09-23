import { AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const Card = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;
    return (
        <div className='py-7 pr-36 pl-7 bg-[#E8E8E8] border space-y-3'>
            <div>
                <img className='w-32' src={logo} alt="" />
            </div>
            <h2 className="text-lg">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-4">
                <button className='border p-2 border-[#7E90FE] text-[#7E90FE] rounded hover:text-blue-800'>{remote_or_onsite}</button>
                <button className='border p-2 border-[#7E90FE] rounded text-[#7E90FE] hover:text-blue-800'>{job_type}</button>
            </div>
            <p className='flex gap-2 items-center'><CiLocationOn></CiLocationOn><span>{location}</span></p>
            <p className='flex gap-2 items-center'><AiOutlineDollar></AiOutlineDollar> <span>{salary}</span></p>
            <button className='btn btn-primary text-white'>Apply Now</button>
        </div>
    );
};

export default Card;