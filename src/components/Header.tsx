import { FaBabyCarriage } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the mobile menu toggle

const Header = () => {
  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaBabyCarriage className="text-4xl text-softpink mr-3 animate-bounce" />
          <h1 className="text-3xl font-bold text-navblue font-comic">Baby Boy Shower</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-navblue hover:text-pink-500 text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-navblue hover:text-pink-500 text-xl">
                Gallery
              </a>
            </li>
            <li>
              <a href="#wishes" className="text-navblue hover:text-pink-500 text-xl">
                Wishes
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Checkbox (Hidden) */}
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden peer"
        />

        {/* Mobile Menu Button (Label for Checkbox) */}
        <label htmlFor="menu-toggle" className="md:hidden text-navblue text-3xl cursor-pointer">
          <FiMenu />
        </label>

        {/* Mobile Navigation (Visible when Checkbox is Checked) */}
        <div className="md:hidden peer-checked:block hidden bg-white shadow-lg">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <a href="#home" className="text-navblue hover:text-pink-500 text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-navblue hover:text-pink-500 text-xl">
                Gallery
              </a>
            </li>
            <li>
              <a href="#wishes" className="text-navblue hover:text-pink-500 text-xl">
                Wishes
              </a>
            </li>
          </ul>
        </div>

        {/* Close Button for Mobile Menu (Label for Checkbox) */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden text-navblue text-3xl cursor-pointer absolute top-4 right-4"
        >
          <FiX />
        </label>
      </div>
    </header>
  );
};

export default Header;
