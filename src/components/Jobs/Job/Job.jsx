import { CiLocationOn } from 'react-icons/ci';

const Job = ({ job }) => {
    const { job_title, salary, week_day, bonus, location, img } = job;
    return (
        <div className="p-4 shadow-lg space-y-3">
            <div className="flex justify-center items-center p-10 bg-gray-200">
                <img className='h-8' src={img} alt="" />
            </div>
            <h2 className="text-xl font-bold text-[#2c9ce7]">{job_title}</h2>
            <p className='flex items-center gap-1'><CiLocationOn></CiLocationOn>Location:{location}</p>

            <h2 className='text-lg font-bold text-[#c429adc9]'>Per Year Salary: {salary}</h2>
            <h2 className='text-lg font-semibold text-[#c429ada5]'>Bonus: {bonus}</h2>

            <p className='text-[#583f38]'>Week Day: <span className='font-semibold text-[#024b40e2]'>{week_day}</span></p>
        </div>
    );
};

export default Job;