import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "./Header";

const CoffeeCard = ({ coffee, backgroundImage, setCoffees }) => {
  <Header></Header>;
  const { name, chef, photo, _id, category } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-4 relative"
      style={{
        backgroundColor: "rgba(245, 244, 241, 0.8)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <figure className="w-full md:w-40 md:h-40 flex-shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </figure>

      <div className="flex-1 mt-4 md:mt-0 md:pl-6 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Chef:</strong> {chef}
        </p>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Category:</strong> {category}
        </p>
      </div>

      <div className="absolute right-4 top-4 md:relative md:right-0 md:top-0 md:ml-auto flex flex-col space-y-4 mt-4 md:mt-0">
        <button className="text-[#A0522D]">
          <FaEye size={22} />
        </button>
        <Link to={`updateCoffee/${_id}`}>
          <button className="text-[#8B4513]">
            <FaEdit size={22} />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="text-[#4B2E2A]">
          <FaTrash size={22} />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    chef: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    setCoffees: PropTypes.string.isRequired,
  }).isRequired,
  backgroundImage: PropTypes.string,
};

export default CoffeeCard;
