import React from "react";
import About from "./About";
import Service from "./Service";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Waitlist from "./Waitlist";
import Link from "next/link";
import Image from "next/image";
import { hostFeatures } from "@/data/features";

export default function Home6({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-xs-40">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">About ParkSight</h2>
              <h3 className="section-title mb-30 mb-xs-20 wow fadeInUp">
                Built for City‑Dwellers, by City‑Dwellers
              </h3>
              <p
                className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                Parking shouldn't be a headache. ParkSight connects Drivers and Hosts in seconds—transforming idle spaces into income and drivers' commutes into stress‑free journeys.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.12s">
                {onePage ? (
                  <>
                    <a
                      href="#services"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn How We Work{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn How We Work{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/fancy-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn How We Work{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn How We Work{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Images Composition */}
          <About />
          {/* End Images Composition */}
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section scrollSpysection  ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 col-lg-6">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                How It Works
              </h2>
              <h3 className="section-title mb-0 mb-sm-20">
                Four Steps to Hassle‑Free Parking
              </h3>
            </div>
            <div className="col-md-4 col-lg-6 d-flex align-items-end">
              <div className="local-scroll text-md-end w-100">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#waitlist"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Get Started{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Get Started{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/fancy-services${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Get Started{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Get Started{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Services Grid */}
          <Service />
        </div>
      </section>
      <section
        className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""} `}
        id="drivers"
      >
        <Features />
      </section>
      
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section
        className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""} `}
        id="hosts"
      >
        <div className="container position-relative">
          <div className="row">
            {/* Section Text */}
            <div className="col-lg-6 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
              <div className="w-100">
                                 <h2 className="section-caption-fancy mb-20 mb-xs-10">
                   For Hosts
                 </h2>
                <h3 className="section-title-small mb-30">
                  Turn your unused space into income.
                </h3>
                <p className="section-descr mb-30">
                  Whether you have a driveway, garage, or commercial parking space, ParkSight helps you monetize your unused parking areas with complete control over your listings.
                </p>
                {/* Features List */}
                <div className="row features-list">
                  {/* Features List Item */}
                  {hostFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mb-3"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{feature.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
            {/* End Section Text */}
            {/* Image */}
            <div className="col-lg-6 col-xl-7 d-flex align-items-center">
              <div className="w-100">
                <div className="mb-20">
                  <Image
                    src="/assets/images/host.svg"
                    alt="Image Description"
                    width={1200}
                    height={658}
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
      </section>
      
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section
        className={`page-section scrollSpysection light-content`}
        id="waitlist"
        style={{ backgroundColor: '#1e293b' }}
      >
        <Waitlist />
      </section>
    </>
  );
}
