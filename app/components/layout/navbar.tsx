import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand
} from "flowbite-react";

const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="dark">
      <NavbarBrand href="https://github.com/Rosalioalfre2/mop-prueba-tecnica">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MOP - Prueba técnica</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <DarkThemeToggle className="mr-4" />
      </div>
    </Navbar>
  );
}


export default NavbarComponent;