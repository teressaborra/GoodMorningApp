import React, { useState } from "react";
import axios from "axios";
import "./GoodMorningPage.css";

function GoodMorningPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/users", formData);
      alert("✅ Data submitted successfully!");
      setFormData({ name: "", phone: "", email: "" }); // clear fields
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting data");
    }
  };

  return (
    <div className="good-morning-container">
      <h1 className="good-morning-title">Good Morning 🌞</h1>
      <div className="good-morning-form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default GoodMorningPage;
