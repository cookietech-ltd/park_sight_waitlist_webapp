"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer6() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="row pb-60 pb-sm-40 pb-xs-30">
        <div className="col-lg-3 text-gray mb-md-30">
          <div className="mb-20">
            <Image
              src="/assets/images/logo.svg"
              alt="Your Company Logo"
              width={154}
              height={35}
            />
          </div>
          <p>
            ParkSight is proudly preparing to launch in Ohio.
          </p>
          {/* <div className="clearlinks">
            <strong>T.</strong>
            <a href="tel:+14023158613">+1-402-315-8613</a>
          </div>
          <div className="clearlinks">
            <strong>E.</strong>
            <a href="mailto:HernMaurice@dielmassgroup.com">HernMaurice@dielmassgroup.com</a>
          </div> */}
        </div>
        <div className="col-lg-7 offset-lg-2">
          <div className="row mt-n20">
            {/* Footer Widget */}
            <div className="col-sm-4 mt-20">
              <h3 className="fw-title">Company</h3>
              <ul className="fw-menu clearlist local-scroll">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-20">
              <h3 className="fw-title">Social Media</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-20">
              <h3 className="fw-title">Legal &amp; Press</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a 
                      href={elm.path} 
                      target={elm.target}
                      rel={elm.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      {elm.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row text-gray">
        <div className="col-md-6 col-lg-5" style={{ whiteSpace: 'nowrap' }}>
          <b>© {new Date().getFullYear()} Dielmass Group, LLC. All rights reserved.</b>
        </div>
        <div className="col-md-6 col-lg-7 clearfix text-center">
          {/* Back to Top Link */}
          <div
            className="local-scroll float-end mt-n20 mt-sm-10"
            onClick={scrollToTop}
          >
            <a href="#top" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">Scroll to top</span>
            </a>
          </div>
          {/* End Back to Top Link */}
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
