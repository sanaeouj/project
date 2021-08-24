import CustomNavbar from "./components/CustomNavbar";
import { customNavbarProps } from "./constants";
import Logo from "./components/CustomNavbar/Logo";
import { navLinks, CardProps, buttonProps,slidesProps,lesSlides } from "./constants";

function App() {
  return (
    <div>
      <CustomNavbar
        background={customNavbarProps.dark.background}
        variant={customNavbarProps.dark.variant}
        logo={<Logo />}
        navLinks={navLinks}
      />
           
    </div>
  );
}
export default App;