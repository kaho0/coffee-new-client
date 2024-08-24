import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import backgroundImage from "../../more/1.png"; // Adjust the path according to your structure
import { AuthContext } from "../../public/Firebase/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      setErrorMessage(
        "No internet connection. Please check your connection and try again."
      );
      return;
    }

    const form = e.target;

    // Extract form values
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Reset error message
    setErrorMessage("");

    createUser(email, password)
      .then((userCredential) => {
        // User created in Firebase successfully
        const user = {
          name: name,
          email: userCredential.user.email,
          uid: userCredential.user.uid, // Firebase user ID
        };

        // Make a POST request to your backend to store the user data in MongoDB
        fetch("http://localhost:8000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User saved to MongoDB:", data);
            Swal.fire({
              position: "top",
              icon: "success",
              title: "User Registered Successfully",
              showConfirmButton: true,
            });
          })
          .catch((error) => {
            console.error("Error saving user to MongoDB:", error);
            setErrorMessage("Failed to save user data.");
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage(error.message);
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
        onSubmit={handleSignUp}
        className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-md bg-opacity-80"
      >
        <h2
          className="text-4xl font-ranch text-center mb-4"
          style={{ color: "#374151" }}
        >
          Sign Up
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <div className="font-raleway grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
