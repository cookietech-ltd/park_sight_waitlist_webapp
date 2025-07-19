"use client";
import { blogs8 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      <div className="row">
        <div className="col-8 col-sm-7">
          <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
            <span className="d-block wow fadeRotateIn"> Latest </span>
            <span className="d-block text-end wow fadeRotateIn"> News </span>
          </h3>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {blogs8.map((post, index) => (
          <div
            key={index}
            className={`post-prev-2 col-md-6 col-lg-4`}
            data-rellax-y={post.rellaxY}
            data-rellax-speed={post.rellaxSpeed}
            data-rellax-percentage={post.rellaxPercentage}
          >
            <div
              className={`
              ${index == 0 ? "mt-140 mt-md-0" : ""}
              ${index == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            >
              <div className="post-prev-2-img">
                <Link href={`/modern-blog-single/${post.id}`}>
                  <Image
                    src={post.imageSrc}
                    width={700}
                    height={479}
                    alt="Image Description"
                  />
                </Link>
              </div>
              <h3 className="post-prev-2-title">
                <Link href={`/modern-blog-single/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="post-prev-2-info">{post.date}</div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Grid */}
    </>
  );
}
