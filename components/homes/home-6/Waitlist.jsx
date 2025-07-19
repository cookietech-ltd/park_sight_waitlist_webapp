"use client";
import React, { useState } from "react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Waitlist() {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage("");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const userType = formData.get("user_type");

    try {
      // Add document to Firebase
      await addDoc(collection(db, "waitlist"), {
        fullName: name,
        email: email,
        userType: userType,
        timestamp: new Date(),
        createdAt: new Date().toISOString()
      });

      // Success message
      setFormMessage("Thank you! You've been successfully added to our waitlist. We'll be in touch soon!");
      setMessageType("success");
      
      // Reset form
      e.target.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormMessage("Oops! Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Join Waitlist</h2>
          <h3 className="section-title mb-20 mb-sm-15">
            Be among the first to experience Park Sight.
          </h3>
          {/* Benefits Section */}
          <div className="mb-40 mb-sm-20">
            <p className="section-descr mb-0" style={{ fontSize: '0.875rem' }}>
              Waitlist members get <strong style={{ color: '#3b82f6' }}>$10 off their first booking</strong>. Potential Hosts are eligible for our <strong style={{ color: '#3b82f6' }}>Founding Host Program</strong> with 0% commission for 3 months!
            </p>
          </div>
          {/* End Benefits Section */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            {/* Decorative Image */}
            <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/images/early_bird_discount.svg"
                  width={225}
                  height={250}
                  alt=""
                />
              </div>
            </div>
            {/* End Decorative Image */}
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Join Our Waitlist</h4>
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your full name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email address"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                {/* User Type Selection */}
                <div className="form-group">
                  <label htmlFor="user_type">I am a:</label>
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label className="d-flex align-items-center p-3 bg-light round cursor-pointer hover-bg-light-2">
                        <input
                          type="radio"
                          name="user_type"
                          value="driver"
                          className="me-3"
                          required
                        />
                        <span className="font-medium">Driver</span>
                      </label>
                    </div>
                    <div className="col-md-4">
                      <label className="d-flex align-items-center p-3 bg-light round cursor-pointer hover-bg-light-2">
                        <input
                          type="radio"
                          name="user_type"
                          value="host"
                          className="me-3"
                        />
                        <span className="font-medium">Host</span>
                      </label>
                    </div>
                    <div className="col-md-4">
                      <label className="d-flex align-items-center p-3 bg-light round cursor-pointer hover-bg-light-2">
                        <input
                          type="radio"
                          name="user_type"
                          value="both"
                          className="me-3"
                        />
                        <span className="font-medium">Both</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Form Message */}
                {formMessage && (
                  <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}>
                    {formMessage}
                  </div>
                )}
                
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                        disabled={isLoading}
                      >
                        <span>
                          {isLoading ? (
                            <>
                              <i className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></i>
                              Joining...
                            </>
                          ) : (
                            "Join Waitlist"
                          )}
                        </span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      Join our exclusive waitlist to get early access. We'll notify you as soon as we launch.
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                />
              </form>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
} 