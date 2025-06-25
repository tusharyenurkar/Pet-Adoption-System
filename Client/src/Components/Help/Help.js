import React from "react";
import "./Help.css"; // Optional: only if you want to style it

const Help = () => {
  return (
    <div className="help-page" style={{ padding: "2rem" }}>
      <h1>How to Use the PawFinds App</h1>
      <ol style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        <li><strong>Browse Pets:</strong> Go to the "Pets" page to see all available animals for adoption.</li>
        <li><strong>View Details:</strong> Click on a pet to view more information and images.</li>
        <li><strong>Adoption Form:</strong> Click "Adopt" and fill out the adoption form with your details.</li>
        <li><strong>Contact Us:</strong> Use the "Contact" page to reach us with questions or updates.</li>
        <li><strong>Admin Login:</strong> Admins can access the dashboard from the login page.</li>
      </ol>
      <p>Thank you for choosing to adopt a pet and give them a loving home!</p>
    </div>
  );
};

export default Help;
