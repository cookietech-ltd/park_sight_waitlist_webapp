import { services3 } from "@/data/services";
import React from "react";
import Image from "next/image";
const ServiceItem = ({ src, title, text }) => (
  <div className="col-md-6 d-flex align-items-stretch">
    <div className="services-5-item d-flex align-items-stretch text-center text-xl-start">
      <div className="d-xl-flex wow fadeInUpShort">
        <div className="services-5-image mb-lg-20 me-xl-4">
          <Image src={src} width={198} height={198} alt="Image Description" />
        </div>
        <div className="services-5-body d-flex align-items-center">
          <div className="w-100">
            <h4 className="services-5-title">{title}</h4>
            <p className="services-5-text mb-0">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default function Service() {
  return (
    <>
      <div className="row services-5-grid">
        {/* Services Item */}
        {services3.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
        {/* End Services Item */}
      </div>
      {/* End Services Grid */}
    </>
  );
}
