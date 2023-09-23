import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <div className="bg-[#9873FF0D]">
            <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;