import { Link } from "react-router-dom";

const ErrrorPage = () => {
    return (
        <div className="flex justify-center mt-64">
            <div>
                <h2 className="text-5xl mb-9 ">Opps!!! </h2>
                <Link to={'/'}><button className="btn btn-primary ml-8">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrrorPage;