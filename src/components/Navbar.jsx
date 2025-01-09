import { useState } from "react";
import { RxCross1,RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

    const NavigationLinks = [
        {label:'about', href:'#about'},
        {label:'experience', href:'#experience'},
        {label:'projects', href:'#projects'},
        {label:'skills', href:'#skills'},
        {label:'contact', href:'#contact'},
    ]

  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = (e,href) =>{
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false);
  }
  return (
    <div>
        <nav className='fixed left-0 right-0 top-4 z-50'>
            {/* Desktop Menu */}
            <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                <div className="flex justify-between gap-6">
                    <div>
                        <a href="#">
                            SAHIL MANE
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                            {
                                NavigationLinks.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-sm hover:text-yellow-400"
                                        href={item.href}
                                        onClick={(e)=>handleLinkClick(e,item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="rounded-lg  p-3 mx-2 bg-black/40 backdrop-blur-md lg:hidden">
                <div className="flex items-center justify-between">
                    <div>
                        <a href="#" className="m-2">SAHIL MANE</a>
                    </div>
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <RxCross1 />
                            ) : (
                                <RxHamburgerMenu />
                            )}
                        </button>
                    </div>
                </div>
                {
                    isMobileMenuOpen &&(
                        <ul className="ml-4 mt-4 flex flex-col gap-4 ">
                            {NavigationLinks.map((item,index)=>(
                                <li key={index}>
                                    <a className="block w-full text-xl font-semibold" href={item.href} onClick={(e)=>handleLinkClick(e, item.href)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    )

                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar