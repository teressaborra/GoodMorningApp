import React, { useState } from "react";
import axios from "axios";

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Good Morning 🌞</h1>
      <div style={{
        border: "1px solid gray",
        padding: "20px",
        width: "300px",
        margin: "auto",
        borderRadius: "10px"
      }}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />
        
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
        /><br /><br />
        
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />
        
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default GoodMorningPage;
