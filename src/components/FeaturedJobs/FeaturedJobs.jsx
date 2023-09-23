
import { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
                <h2 className="text-4xl font-semibold mb-4 text-center">Featured Jobs</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJobsCard key={job.id} job={job}></FeaturedJobsCard>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center my-7'}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;