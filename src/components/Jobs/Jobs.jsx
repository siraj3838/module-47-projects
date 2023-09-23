import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job/Job";

const Jobs = () => {
    const [jobsData, setJobsData] = useState([])
    const jobsList = useLoaderData();
    useEffect(()=>{
        setJobsData(jobsList)
    },[jobsList])
    return (
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 gap-4 my-10">
            {
                jobsData.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
    );
};

export default Jobs;