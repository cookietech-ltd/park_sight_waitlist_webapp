"use client";
import { archiveLinks } from "@/data/archeve";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import React from "react";

export default function Widget2({
  btnClass = "btn btn-mod btn-color btn-medium btn-round btn-hover-anim form-control",
}) {
  return (
    <>
      <div className="col-sm-6 col-lg-3 mt-60">
        {/* Widget */}
        <div className="widget mb-0">
          <h3 className="widget-title">Categories</h3>
          <div className="widget-body">
            <ul className="clearlist widget-menu">
              {categories.map((category) => (
                <li key={category.id}>
                  <a href="#" title="">
                    {category.name}
                  </a>
                  <small> - {category.count} </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End Widget */}
      </div>
      <div className="col-sm-6 col-lg-3 mt-60">
        {/* Widget */}
        <div className="widget mb-0">
          <h3 className="widget-title">Tags</h3>
          <div className="widget-body">
            <div className="tags">
              {tags.map((tag) => (
                <a href="#" key={tag.id}>
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* End Widget */}
      </div>
      <div className="col-sm-6 col-lg-3 mt-60">
        {/* Widget */}
        <div className="widget mb-0">
          <h3 className="widget-title">Archive</h3>
          <div className="widget-body">
            <ul className="clearlist widget-menu">
              {archiveLinks.map((link) => (
                <li key={link.id}>
                  <a href="#" title="">
                    {link.date}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End Widget */}
      </div>


    </>
  );
}
