import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    return (
        <header className='bg-primary container z-40 h-16 md:h-24 text-lg flex items-center justify-between flex-row'>
            <div>© Code by vidit</div>
            <div className='relative z-40'>
                <button onClick={toggleMenu} className='block md:hidden z-50'>
                    <p>Menu</p>
                </button>
                <nav
                    className={`${isOpen ? 'right-0' : '-right-full'
                        } fixed top-0 h-full w-full flex flex-col justify-between bg-[#1D1C20] gap-12 p-8 transition-all duration-300 md:static md:flex-row md:gap-12 md:h-auto md:w-auto md:bg-transparent md:items-center md:p-0`}>
                    <button onClick={toggleMenu} className='z-50 w-full flex justify-end'>
                        <X size={16} color='white' className='z-50 bg-[#445CE8] p-4 h-16 w-16 rounded-full' />
                    </button>
                    <p className='border-b font-thin text-xs pt-6 pb-2 -mt-40'>NAVIGATION</p>
                    <div className='flex flex-col gap-6 -mt-40'>
                        <a href="#" className='text-5xl' onClick={toggleMenu}>Home</a>
                        <a href="#" className='text-5xl' onClick={toggleMenu}>Work</a>
                        <a href="#" className='text-5xl' onClick={toggleMenu}>About</a>
                        <a href="#" className='text-5xl' onClick={toggleMenu}>Contact</a>
                    </div>
                    <div>
                    </div>
                    <div className='border-t flex flex-row gap-4 px-2'>
                        <a className='font-light' href="">Instagram</a>
                        <a className='font-light' href="">LinkedIn</a>
                        <a className='font-light' href="">Twitter</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
