import React from "react";
import Swal from "sweetalert2";
import backgroundImage from "../../more/11.png"; // Adjust the path according to your structure

const LogIn = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form values
    const email = form.email.value;
    const password = form.password.value;

    const userCredentials = { email, password };

    console.log("User Credentials:", userCredentials);

    // POST request to server
    fetch("https://coffee-store-server-4ji8.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.success) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Logged In Successfully",
            showConfirmButton: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleLogIn}
        className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-md bg-opacity-80"
      >
        <h2
          className="text-4xl font-ranch text-center mb-4"
          style={{ color: "#374151" }}
        >
          Log In
        </h2>
        <div className="font-raleway grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 w-full bg-buttonBg border-2 border-borderCol py-3 rounded font-ranch text-2xl hover:bg-opacity-90 transition-opacity duration-200 ease-in-out"
          style={{
            color: "#374151",
            borderRadius: "5px",
            borderColor: "#331A15",
            backgroundColor: "#D2B48C",
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
