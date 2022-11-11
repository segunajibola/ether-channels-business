import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaStackOverflow,
    FaFacebook,
    FaDev,
    FaCodepen,
    FaArrowUp,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='w-full text-left text-gray-300 bg-[#2b4b77] md:pt-10 dark:bg-gray-300 dark:text-gray-800'>
        <div className='border-t-2 border-gray-300 dark:border-gray-500 border-solid'></div>
            <div className='grid max-w-7xl md:grid-cols-2 gap-1 space-y-1 md:mx-2 border-4 border-red-500 p-2'>
                <div className=''>
                    <h5 className='text-xl underline font-semibold'>
                       Quick Links
                    </h5>
                    <p>
                        <HashLink className="cursor-pointer" to='/#about'>
                            Home
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#tools'>
                            About Us
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#projects'>
                            What We Do
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#testimonials'>
                            Meet Our Staff
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#testimonials'>
                            Contact Us
                        </HashLink>
                    </p>
                </div>

                <div className=''>
                <h5 className='mb-1 text-lg font-semibold'>
                    Other Links
                </h5>
                    <a href="https://blog.segunajibola.com">
                        Blog
                    </a>
                    <a href="https://calendly.com/segunajibola/30min" className='mt-[1px] block'>
                        Schedule a Meeting
                    </a>
                    <div className='flex gap-1.5 mt-2'>
                        <a href='https://www.twitter.com/iamsegunajibola'>
                            <FaTwitter size={24} className='text-blue-500' />
                        </a>
                        <a href='https://www.linkedin.com/in/segunajibola/'>
                            <FaLinkedin size={24} className='text-blue-500' />
                        </a>
                        <a href='https://www.github.com/segunajibola'>
                            <FaGithub size={24} className='text-white dark:text-gray-800' />
                        </a>
                        <a href='https://wa.me/'>
                            <FaWhatsapp size={24} className='text-green-500' />
                        </a>
                        <a href='https://www.facebook.com/ajibola.segunemmanuel'>
                            <FaFacebook size={22} className='text-blue-300' />
                        </a>
                    </div>
                    <div className='flex gap-1 mt-2'>
                        <a href='https://www.instagram.com/iamsegunajibola'>
                            <FaInstagram size={24} className='text-red-300 dark:text-red-900' />
                        </a>
                        <a href='mailto:ajbl.segun@gmail.com'>
                            <HiOutlineMail size={29} className='-mt-[2px] text-gray-300 dark:text-gray-600' />
                        </a>
                        <a href='https://codepen.io/iamsegunajibola'>
                            <FaCodepen size={25} className='mt-[1px] text-gray-600' />
                        </a>
                        <a href='https://stackoverflow.com/users/15411958/segunajibola'>
                            <FaStackOverflow size={26} className='text-yellow-300 dark:text-yellow-800' />
                        </a>
                        <a href='https://dev.to/iamsegunajibola'>
                            <FaDev size={25} className='mt-[2px] text-gray-500' />
                        </a>
                    </div>
                </div>
            </div>
            <Link to="/" className="flex justify-center">
                <button className='text-gray-100 border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-2 md:my-2 dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800' onClick={() => window.scrollTo(0, 0)}>
                Back to Top <FaArrowUp className='inline'/></button>
            </Link>
    <p className='p-2 '>
    Copyright &copy; {new Date().getFullYear()}. All right reserved.
    </p>
  </footer>
  )
}

export default Footer