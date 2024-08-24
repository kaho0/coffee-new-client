import React from "react";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form values
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log("New Coffee:", newCoffee);

    // POST request to server
    fetch("http://localhost:8000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "User Added Successfully",
            showConfirmButton: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-formBg flex items-center justify-center p-6">
      <form
        onSubmit={handleAddCoffee}
        className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-md"
      >
        <h2
          className="text-4xl font-ranch text-center mb-4"
          style={{ color: "#374151" }}
        >
          Add New Coffee
        </h2>
        <p className="text-center text-inputText mb-8">
          It is a well-known truth that coffee lovers are captivated by the
          rich, inviting aroma of freshly brewed coffee. The art of coffee
          brewing lies in the balance of flavors, carefully selected beans, and
          the passion of those who craft it. Our website brings you closer to
          this experience, offering a journey through the world of exceptional
          coffee.
        </p>
        <div className="font-raleway grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Chef
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full text-inputText font-raleway"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-inputText font-raleway text-left">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
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
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
