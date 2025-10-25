import React from "react";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-4">
            <Logo></Logo>
            <ul className="flex gap-8 items-center">
              <li>
                <a className="nav-Items"> Orders</a>
              </li>
              <li>
                <a className="nav-Items"> Foods</a>
              </li>
              <li>
                <a className="nav-Items">Tables</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
