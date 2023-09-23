import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../Utility/localStorage";
import ApplyJobList from "./ApplyJobList/ApplyJobList";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [applyJob, setApplyJob] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(applyJob);
        }
        else if (filter === 'remote') {
            const remoteJobs = applyJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJob = applyJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJob)
        }
    }


    useEffect(() => {
        const storedId = getData();
        if (jobs.length > 0) {
            const jobApply = jobs.filter(job => storedId.includes(job.id))
            setApplyJob(jobApply)
            setDisplayJobs(jobApply)
        }
    }, [jobs])
    return (
        <div className="mb-20">
            <div className="bg-[#9873FF0D] flex items-center gap-72">
                <img src="https://i.ibb.co/D47S5Rf/bg1.png" alt="" />
                <h2 className="text-center text-4xl font-semibold">Applied Jobs</h2>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-end mt-10">
                    <details className="dropdown mb-7">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('all')}><a>All</a></li>
                            <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                            <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>
                {
                    displayJobs.map(job => <ApplyJobList key={job.id} job={job}></ApplyJobList>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;