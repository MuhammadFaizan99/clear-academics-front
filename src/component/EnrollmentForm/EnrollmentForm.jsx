import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnrollmentFormStyles from "./EnrollmentForm.module.css";

export default function EnrollmentForm() {
  // State variables to store form data and error messages
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    contactTime: "",
    childFirstName: "",
    childLastName: "",
    childDOB: "",
    schoolLevel: "",
    schoolName: "",
    subjects: [],
    areasOfInterest: "",
    tutoringGoals: "",
    parentConsent: false,
    cancellationPolicy: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    contactTime: "",
    childFirstName: "",
    childLastName: "",
    childDOB: "",
    schoolLevel: "",
    schoolName: "",
    subjects: "",
    areasOfInterest: "",
    tutoringGoals: "",
    parentConsent: "",
    cancellationPolicy: "",
    privacyPolicy: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasErrors = false;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: "Please fill this field",
        }));
        hasErrors = true;
      }
    });

    if (hasErrors) return;

    try {
      // Send form data to the API endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}create-enrollment`,
        formData
      );
      console.log(response.data); // Log response from the server
      toast.success("Enrollment submitted successfully!");
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      toast.error("Failed to submit enrollment. Please try again.");
      // Handle error, maybe show an error message to the user
    }
  };

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      // If it's a checkbox for subjects, update the subjects array
      if (name === "subjects") {
        const updatedSubjects = formData.subjects.includes(value)
          ? formData.subjects.filter((subject) => subject !== value)
          : [...formData.subjects, value];

        setFormData((prevData) => ({
          ...prevData,
          subjects: updatedSubjects,
        }));
      } else {
        // For other checkboxes, update their respective values
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    } else {
      // For other input types, update their values directly
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear error message when the field is filled
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className={EnrollmentFormStyles.container}>
      <h2 className={EnrollmentFormStyles.heading}>Enrollment Form</h2>
      <div className={EnrollmentFormStyles.formContainer}>
        {/* Form 1: Parent/Guardian Information */}
        <form className={EnrollmentFormStyles.form}>
          <h3>Parent/Guardian Information</h3>
          <div className={EnrollmentFormStyles.formFields}>
            <label>First Name</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="parentFirstName"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.parentFirstName}</span>
            <label>Last Name</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="parentLastName"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.parentLastName}</span>
            <label>Email Address</label>
            <input
              type="email"
              className={EnrollmentFormStyles.input}
              name="parentEmail"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.parentEmail}</span>
            <label>Phone Number</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="parentPhone"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.parentPhone}</span>
            <label>Best Time to Contact</label>
            <select
              className={EnrollmentFormStyles.select}
              name="contactTime"
              onChange={handleChange}
            >
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <span className={EnrollmentFormStyles.error}>{errors.contactTime}</span>
          </div>
        </form>

        {/* Form 2: Student Information */}
        <form className={EnrollmentFormStyles.form}>
          <h3>Student Information</h3>
          <div className={EnrollmentFormStyles.formFields}>
            <label>Child's First Name</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="childFirstName"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.childFirstName}</span>
            <label>Child's Last Name</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="childLastName"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.childLastName}</span>
            <label>Child's Date of Birth</label>
            <input
              type="date"
              className={EnrollmentFormStyles.input}
              name="childDOB"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.childDOB}</span>
            <label>Current School Level</label>
            <select
              className={EnrollmentFormStyles.select}
              name="schoolLevel"
              onChange={handleChange}
            >
              <option>Elementary</option>
              <option>Middle School</option>
              <option>High School</option>
              <option>Other</option>
            </select>
            <span className={EnrollmentFormStyles.error}>{errors.schoolLevel}</span>
            <label>School Name (Optional)</label>
            <input
              type="text"
              className={EnrollmentFormStyles.input}
              name="schoolName"
              onChange={handleChange}
            />
            <span className={EnrollmentFormStyles.error}>{errors.schoolName}</span>
          </div>
        </form>

        {/* Form 3: Tutoring Details */}
        <form className={EnrollmentFormStyles.form}>
          <h3>Tutoring Details</h3>
          <div className={EnrollmentFormStyles.formFields}>
            <div
              className={EnrollmentFormStyles.checkboxContainer1}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="checkbox"
                id="math"
                className={EnrollmentFormStyles.checkbox1}
                name="subjects"
                value="Math"
                onChange={handleChange}
              />
              <label
                htmlFor="math"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                Math
              </label>
              <input
                type="checkbox"
                id="science"
                className={EnrollmentFormStyles.checkbox1}
                name="subjects"
                value="Science"
                onChange={handleChange}
              />
              <label
                htmlFor="science"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                Science
              </label>
              <input
                type="checkbox"
                id="languageArts"
                className={EnrollmentFormStyles.checkbox1}
                name="subjects"
                value="Language Arts"
                onChange={handleChange}
              />
              <label
                htmlFor="languageArts"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                Language Arts
              </label>
              <input
                type="checkbox"
                id="other"
                className={EnrollmentFormStyles.checkbox1}
                name="subjects"
                value="Other"
                onChange={handleChange}
              />
              <label
                htmlFor="other"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                Other
              </label>
            </div>
            <span className={EnrollmentFormStyles.error}>{errors.subjects}</span>
            <label>Areas of Difficulty/Interest</label>
            <textarea
              className={EnrollmentFormStyles.textarea}
              rows={7}
              name="areasOfInterest"
              onChange={handleChange}
            ></textarea>
            <span className={EnrollmentFormStyles.error}>{errors.areasOfInterest}</span>
            <label>Goals for Tutoring</label>
            <textarea
              className={EnrollmentFormStyles.textarea}
              name="tutoringGoals"
              rows={7}
              onChange={handleChange}
            ></textarea>
            <span className={EnrollmentFormStyles.error}>{errors.tutoringGoals}</span>
          </div>
        </form>

        {/* Form 4: Consent and Policies */}
        <form className={EnrollmentFormStyles.form} style={{ padding: "30px" }}>
          <h3>Consent and Policies</h3>
          <div className={EnrollmentFormStyles.formFields}>
            <div
              className={EnrollmentFormStyles.checkboxContainer}
              style={{ margin: "10px 0px" }}
            >
              <input
                type="checkbox"
                id="parentConsent"
                className={EnrollmentFormStyles.checkbox}
                name="parentConsent"
                onChange={handleChange}
              />
              <label
                htmlFor="parentConsent"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                I consent to my child's participation...
              </label>
            </div>
            <span className={EnrollmentFormStyles.error}>{errors.parentConsent}</span>
            <div className={EnrollmentFormStyles.checkboxContainer}>
              <input
                type="checkbox"
                id="cancellationPolicy"
                className={EnrollmentFormStyles.checkbox}
                name="cancellationPolicy"
                onChange={handleChange}
              />
              <label
                htmlFor="cancellationPolicy"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                I have read and agree to the cancellation policy.
              </label>
              <span className={EnrollmentFormStyles.error}>{errors.cancellationPolicy}</span>
            </div>
            <div className={EnrollmentFormStyles.checkboxContainer}>
              <input
                type="checkbox"
                id="privacyPolicy"
                className={EnrollmentFormStyles.checkbox}
                name="privacyPolicy"
                onChange={handleChange}
              />
              <label
                htmlFor="privacyPolicy"
                className={EnrollmentFormStyles.checkboxLabel}
              >
                I agree to the Privacy Policy and Terms of Service.
              </label>
              <span className={EnrollmentFormStyles.error}>{errors.privacyPolicy}</span>
            </div>
            <p className={EnrollmentFormStyles.permissionHeading}>
              Use the permission form below
            </p>
          </div>
        </form>
      </div>
      {/* Submit button */}
      <button
        className={EnrollmentFormStyles.submitButton}
        onClick={handleSubmit}
      >
        Submit Enrollment
      </button>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}