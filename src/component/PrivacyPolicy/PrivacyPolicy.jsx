import React from "react";
import "./PrivacyPolicy.css"; // Import the CSS file containing styles

function PrivacyPolicy() {
  return (
    <div className="Privacy-Policy">
      <header>
        <h1>Terms of Service</h1>
      </header>
      <section id="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          At Clearacademics, we understand the importance of protecting your
          privacy and the confidentiality of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard the
          information provided by you when using our website and services. By
          accessing or using our website, you agree to the terms of this Privacy
          Policy.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We collect personal information necessary to facilitate our tutoring
          services for underprivileged students. The information we collect
          includes:
        </p>
        <ul>
          <li>
            Parent/Guardian Information:
            <ul>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Best Time to Contact</li>
            </ul>
          </li>
          <li>
            Student Information:
            <ul>
              <li>Child's First Name</li>
              <li>Child's Last Name</li>
              <li>Child's Date of Birth</li>
              <li>Current School Level</li>
              <li>School Name (Optional)</li>
            </ul>
          </li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>We use the information collected for the following purposes:</p>
        <ul>
          <li>
            To facilitate communication between tutors and parents/guardians.
          </li>
          <li>To ensure the safety and security of our tutoring sessions.</li>
          <li>
            To personalize and improve the tutoring experience for students.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h3>Data Security</h3>
        <p>
          We take appropriate measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. We employ
          industry-standard security practices and technologies to safeguard
          your data.
        </p>
        <h3>Third-Party Disclosure</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except where required by law or
          to fulfill our services.
        </p>
        <h3>Cookies and Tracking Technologies</h3>
        <p>
          We may use cookies and similar tracking technologies to enhance your
          experience on our website. You can control the use of cookies through
          your browser settings.
        </p>
        <h3>Links to Third-Party Websites</h3>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these websites. We
          encourage you to review the privacy policies of these third parties
          before providing any personal information.
        </p>
        <h3>Consent</h3>
        <p>
          By using our website and providing your personal information, you
          consent to the collection, use, and disclosure of your information as
          outlined in this Privacy Policy.
        </p>
        <h3>Updates to Privacy Policy</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting on our
          website. Your continued use of our website after any such changes
          indicates your acceptance of the revised Privacy Policy.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="tel:484-326-7070">484-326-7070</a> or{" "}
          <a href="mailto:support@clearacademics.com">
            support@clearacademics.com
          </a>
          .
        </p>
      </section>
      <footer>
        <p>
          Conclusion: Your privacy is of utmost importance to us. We are
          committed to protecting your personal information and ensuring a safe
          and secure experience on our website. By using our services, you trust
          us with your information, and we take that responsibility seriously.
          Thank you for choosing [Your Website Name] to connect underprivileged
          students with free tutoring opportunities.
        </p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
