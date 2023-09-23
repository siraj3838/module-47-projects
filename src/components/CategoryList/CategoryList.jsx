import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const CategoryList = () => {
    const [jobsCate, setJobsCate] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobsCate(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-4">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 my-10">
                {
                    jobsCate.map(jobCate => <CategoryCard key={jobCate.id} jobCate={jobCate}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;