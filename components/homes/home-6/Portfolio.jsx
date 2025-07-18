"use client";
import { portfolios6 } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Portfolio() {
  return (
    <>
      <div className="position-relative">
        {/* Decorative Waves */}
        <div
          className="decoration-6 d-none d-sm-block opacity-055"
          data-rellax-y=""
          data-rellax-speed="-0.7"
          data-rellax-percentage="0.5"
        >
          <Image
            src="/assets/images/demo-fancy/decoration-6.svg"
            width={148}
            height={148}
            alt=""
          />
        </div>
        {/* End Decorative Waves */}
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-3 work-grid-gut work-grid-fancy"
          id="work-grid"
        >
          <Gallery>
            {/* Work Item (Lightbox) */}
            {portfolios6.map((item, index) => (
              <li
                key={index}
                className="work-item"
              >
                <div>
                  <Item
                    original={item.lightboxLink || item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={746}
                    height={524}
                  >
                    {({ ref, open }) => (
                      <a
                        onClick={open}
                        className="work-lightbox-link mfp-image"
                      >
                        <div className="work-img">
                          <Image
                            ref={ref}
                            src={item.imgSrc}
                            width={746}
                            height={524}
                            alt="Work Description"
                          />
                        </div>
                        <div className="work-intro text-start">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </a>
                    )}
                  </Item>
                </div>
              </li>
            ))}
          </Gallery>
          {/* End Work Item */}
        </ul>
        {/* End Works Grid */}
      </div>

    </>
  );
}
