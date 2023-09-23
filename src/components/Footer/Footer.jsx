import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <footer className="footer gap-32 p-10 text-white">
            <aside>
                <h3 className="text-2xl font-semibold">CareerHub</h3>
                <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-3 items-center'>
                    <BsFacebook className='text-3xl bg-blue-700 rounded-full'></BsFacebook>
                    <AiFillTwitterCircle className='text-4xl bg-blue-700 rounded-full'></AiFillTwitterCircle>
                    <BsInstagram className='text-3xl text-pink-700'></BsInstagram>
                </div>
            </aside>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Work</a>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">Careers</a>
            </nav>
            <nav>
                <header className="footer-title">Product</header>
                <a className="link link-hover">Prototype</a>
                <a className="link link-hover">Plans & Pricing</a>
                <a className="link link-hover">Customers</a>
                <a className="link link-hover">Integrations</a>
            </nav>
            <nav className="">
                <header className="footer-title">Support</header>
                <a className="">Help Desk</a>
                <a className="link link-hover">Sales</a>
                <a className="link link-hover">Become a Partner</a>
                <a className="link link-hover">Developers</a>
            </nav>
            <nav className="">
                <header className="footer-title">Contact</header>
                <a className="">524 Broadway , NYC</a>
                <a className="link link-hover">+1 777 - 978 - 5570</a>
            </nav>
        </footer>
            <p className='border-t-2 text-[rgb(91,88,88)] py-10 flex justify-between items-center'><span className='ml-10'>@2023 CareerHub. All Rights Reserved</span><span>Powered by CareerHub</span></p>
        </div>
    );
};

export default Footer;