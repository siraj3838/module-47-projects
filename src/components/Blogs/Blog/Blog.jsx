
const Blog = ({blog}) => {
    const {title,description,price,brand,images} = blog;
    return (
        <div className="shadow-xl p-6 space-y-3">
            <img className="h-44" src={images[0]} alt="" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="h-32">{description}</p>
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold text-pink-600">{brand}</h4>
                <h3 className="text-2xl font-bold text-sky-800">{price}</h3>
            </div>
        </div>
    );
};

export default Blog;