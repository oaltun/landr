import React from "react";
import Script from "next/script";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="h-100 text-center m-auto ">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href={"/about/"}>About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href={"/contact/"}>Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href={"/tos/"}>Terms of Service</a>
                </li>

                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href={"/license_terms/"}>License Terms</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href={"/privacy/"}>Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                © ACME {year}. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        <Script src="https://unpkg.com/react/umd/react.production.min.js"></Script>

        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></Script>

        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></Script>
      </footer>
    </div>
  );
};

export default Footer;
