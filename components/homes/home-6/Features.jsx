import { features3, driverFeatures, hostFeatures } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="container position-relative" id="drivers">
        <div className="row">
          {/* Image */}
          <div className="col-lg-6 col-xl-7 d-flex align-items-center">
            <div className="w-100">
              <div className="mb-20">
                <Image
                  src="/assets/images/driver.svg"
                  alt="Image Description"
                  width={1200}
                  height={658}
                  className="w-100"
                />
              </div>
            </div>
          </div>
          {/* End Images */}
          {/* Section Text */}
          <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
            <div className="w-100">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Why Drivers Choose ParkSight
              </h2>
              <h3 className="section-title-small mb-30">
                Never circle the block again.
              </h3>
              <p className="section-descr mb-30">
                ParkSight connects drivers with available parking spaces in real-time, eliminating the frustration of searching for parking and saving you valuable time and money.
              </p>
              {/* Features List */}
              <div className="row features-list">
                {/* Features List Item */}
                {driverFeatures.map((feature, index) => (
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
        </div>
      </div>

      {/* Copy of Why Choose ParkSight Section with Image on Right */}
      <div className="container position-relative mt-100" id="hosts">
        <div className="row">
          {/* Section Text */}
          <div className="col-lg-6 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
            <div className="w-100">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Why Hosts Choose ParkSight
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
    </>
  );
}
