
const CategoryCard = ({ jobCate }) => {
    const { logo, category_name, availability } = jobCate;
    return (
        <div className="bg-[#9873FF0D] p-10 space-y-3">
            <img src={logo} alt="" />
            <h2 className="text-2xl">{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default CategoryCard;