import React from "react";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h1>"Drive With Confidence, Learn With Us!"</h1>
        <p>
          Please fill out the below form to get registered and become a part of our Perera Driving
          School family!
        </p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register Online Now
        </button>
      </header>

      {/* Illustration Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Wf_9tOxgvVMjlLXSWxtdBAAAAA&pid=Api"
          alt="Driving School Illustration 1"
          style={{ width: "300px", height: "auto" }}
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.pVvRhs-UvTiC5hcdwaW3owHaEn&pid=Api"
          alt="Driving School Illustration 2"
          style={{ width: "300px", height: "auto" }}
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.omkxyy4RUWj19HisN8tGJwHaH6&pid=Api"
          alt="Driving School Illustration 3"
          style={{ width: "300px", height: "auto" }}
        />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
