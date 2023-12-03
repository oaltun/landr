import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Navigation = ({ children, product, klass }) => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        variant="light"
        fixed="top"
        className={klass}
        collapseOnSelect
      >
        <Link href="/" className="navbar-left">
          <img
            src="/assets/img/logo32.png"
            alt="Logo"
            width={141}
            height={32}
          />
        </Link>

        {product && (
          <>
            <Navbar.Brand className="ml-3" href="#">
              {product}
            </Navbar.Brand>
          </>
        )}
        {children && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ml-auto mt-2 mt-lg-0">{children}</Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
