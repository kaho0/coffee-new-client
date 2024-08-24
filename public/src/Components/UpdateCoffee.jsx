import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form values
    const updatedCoffee = {
      name: form.name.value,
      chef: form.chef.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log("Updated Coffee:", updatedCoffee);

    try {
      const res = await fetch(`http://localhost:8000/coffee/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      });

      const data = await res.json();
      console.log("Response from server:", data);

      if (data.success) {
        await Swal.fire({
          position: "top",
          icon: "success",
          title: "Coffee Updated Successfully",
          showConfirmButton: true,
        });
      } else {
        await Swal.fire({
          position: "top",
          icon: "error",
          title: "Failed to Update Coffee",
          text: data.message,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      await Swal.fire({
        position: "top",
        icon: "error",
        title: "Failed to Update Coffee",
        text: "An error occurred while updating coffee.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-formBg flex items-center justify-center p-6">
      <form
        onSubmit={handleUpdateCoffee}
        className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-md"
      >
        <h2
          className="text-4xl font-ranch text-center mb-4"
          style={{ color: "#374151" }}
        >
          Update Coffee
        </h2>
        <p className="text-center text-inputText mb-8">
          Update the details of the selected coffee. Ensure all fields are
          accurate.
        </p>
        <div className="font-raleway grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-inputText font-raleway text-left">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
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
              defaultValue={chef}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={category}
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
              defaultValue={details}
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
              defaultValue={photo}
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
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
