import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";

const Statistics = () => {
    const [jobData, setJobData] = useState([])
    const staticData = useLoaderData()
    useEffect(() => {
        setJobData(staticData)
    }, [staticData])
    return (
        <div>
            <div className="bg-[#9873FF0D] flex items-center gap-72">
                <img src="https://i.ibb.co/D47S5Rf/bg1.png" alt="" />
                <h2 className="text-center text-4xl font-semibold">Applied Jobs</h2>
            </div>
            <div className="grid px-4 lg:px-0 lg:grid-cols-3 gap-6 my-10 max-w-screen-xl mx-auto">
                {
                    jobData.map(job => <Card key={job.id} job={job}></Card>)
                }
            </div>
        </div>
    );
};

export default Statistics;