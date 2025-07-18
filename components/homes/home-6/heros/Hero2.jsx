"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";

export default function Hero2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="section-caption-fancy large mb-30 mb-xs-20 wow fadeInUp">
                ParkSight™
              </h2>
              <h1
                className="hs-title-9 mb-30 wow fadeRotateIn"
                data-wow-delay="0.2s"
              >
                Park Smarter, Live Better—Reserve your spot in three clicks.
              </h1>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p
                    className="section-descr white mb-40 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    Access private driveways, garages, and commercial lots near you with AI‑powered availability and dynamic pricing.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.6s"
              >
                <a
                  href="#waitlist"
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim mx-1 mb-xs-10"
                >
                  <span>Early Bird Discount</span>
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-4 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="full-wrapper text-center">
            <a href="#about" className="scroll-down-4">
              <i className="mi-arrow-down size-24" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        setIsOpen={() => setOpen(false)}
      />{" "}
    </>
  );
}
