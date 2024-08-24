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
                        } fixed top-0 h-full w-full flex flex-col bg-[#1D1C20] gap-12 p-8 transition-all duration-300 md:static md:flex-row md:gap-12 md:h-auto md:w-auto md:bg-transparent md:items-center md:p-0`}>
                    <button onClick={toggleMenu} className='block md:hidden z-50'>
                        {isOpen ? <X size={24} color='white' className='z-50' /> : <Menu size={24} />}
                    </button>
                    <a href="#" onClick={toggleMenu}>Work</a>
                    <a href="#" onClick={toggleMenu}>About</a>
                    <a href="#" onClick={toggleMenu}>Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
