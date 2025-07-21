"use client";
import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

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

    // Basic validation
    if (!name || !email || !userType) {
      setFormMessage("Please fill out all fields.");
      setMessageType("error");
      setIsLoading(false);
      return;
    }

    try {
      // Check if email already exists
      const emailQuery = query(
        collection(db, "waitlist"), 
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(emailQuery);

      if (!querySnapshot.empty) {
        // Email already exists
        setFormMessage("This email is already registered on our waitlist. Thank you for your interest!");
        setMessageType("error");
        return;
      }

      // Add document to Firebase if email doesn't exist
      await addDoc(collection(db, "waitlist"), {
        fullName: name,
        email: email,
        userType: userType,
        timestamp: new Date(),
        createdAt: new Date().toISOString()
      });

      // Success message
      setFormMessage(`Thank you, ${name}! ${email} has been added to the waitlist. We'll be in touch!`);
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
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="section-title mb-30 white">Be the First to Park Smarter.</h2>
          <p className="section-descr mb-40 white opacity-08" style={{ fontSize: '1.125rem' }}>
            ParkSight launches in Cincinnati, Columbus, and Cleveland on <strong>September 2nd, 2025</strong>. Join the exclusive waitlist today to be the first to know when we go live.
          </p>
          
          {/* Benefits Box */}
          <div className="mb-50 p-4 rounded" style={{ backgroundColor: 'var(--color-primary-1)', color: 'white' }}>
            <p className="mb-0" style={{ fontWeight: '600' }}>
              Waitlist members get <strong>$10 off their first booking</strong>. Potential Hosts are eligible for our <strong>Founding Host Program</strong> with 0% commission for 3 months!
            </p>
          </div>

          {/* Waitlist Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form"
            style={{ maxWidth: '500px', margin: '0 auto' }}
          >
            {/* Form Message */}
            {formMessage && (
              <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                {formMessage}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="visually-hidden">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-lg round form-control"
                placeholder="Enter your full name"
                required
                aria-required="true"
                style={{ padding: '16px', fontSize: '16px' }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="visually-hidden">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-lg round form-control"
                placeholder="Enter your email address"
                required
                aria-required="true"
                style={{ padding: '16px', fontSize: '16px' }}
              />
            </div>

            {/* User Type Selection */}
            <div className="mb-4 text-start">
              <label className="form-label white" style={{ fontWeight: '500' }}>I am a:</label>
              <div className="row g-3 mt-2">
                <div className="col-md-4">
                  <label className="d-flex align-items-center p-3 rounded cursor-pointer transition-all" 
                         style={{ backgroundColor: 'var(--color-dark-3)', border: 'none' }}>
                    <input
                      type="radio"
                      name="user_type"
                      value="driver"
                      className="me-3"
                      required
                      style={{ accentColor: 'var(--color-primary-1)' }}
                    />
                    <span className="white" style={{ fontWeight: '500' }}>Driver</span>
                  </label>
                </div>
                <div className="col-md-4">
                  <label className="d-flex align-items-center p-3 rounded cursor-pointer transition-all"
                         style={{ backgroundColor: 'var(--color-dark-3)', border: 'none' }}>
                    <input
                      type="radio"
                      name="user_type"
                      value="host"
                      className="me-3"
                      style={{ accentColor: 'var(--color-primary-1)' }}
                    />
                    <span className="white" style={{ fontWeight: '500' }}>Host</span>
                  </label>
                </div>
                <div className="col-md-4">
                  <label className="d-flex align-items-center p-3 rounded cursor-pointer transition-all"
                         style={{ backgroundColor: 'var(--color-dark-3)', border: 'none' }}>
                    <input
                      type="radio"
                      name="user_type"
                      value="both"
                      className="me-3"
                      style={{ accentColor: 'var(--color-primary-1)' }}
                    />
                    <span className="white" style={{ fontWeight: '500' }}>Both</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100"
                disabled={isLoading}
                style={{ 
                  padding: '16px 24px', 
                  fontSize: '18px', 
                  fontWeight: '700',
                  backgroundColor: 'var(--color-primary-1)',
                  color: 'white'
                }}
              >
                <span>
                  {isLoading ? (
                    <>
                      <i className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></i>
                      Submitting...
                    </>
                  ) : (
                    "Join the ParkSight Waitlist"
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 