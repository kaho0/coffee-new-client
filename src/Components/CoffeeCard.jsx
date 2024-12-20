import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "./Header";

const CoffeeCard = ({ coffee, backgroundImage, setCoffees }) => {
  const [showMore, setShowMore] = useState(false); // State to toggle additional details

  const {
    _id,
    name,
    image,
    category,
    strength,
    price,
    size,
    description,
    ingredients,
    temperature,
    calories,
  } = coffee;

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
                text: "Your coffee has been deleted.",
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
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </figure>

      <div className="flex-1 mt-4 md:mt-0 md:pl-6 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Strength:</strong> {strength}
        </p>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Price:</strong> ${price.toFixed(2)}
        </p>
        <p className="text-gray-600 text-sm md:text-lg">
          <strong>Size:</strong> {size}
        </p>

        {/* Show more details when the user clicks the eye button */}
        {showMore && (
          <div className="mt-4 text-gray-600 text-sm md:text-lg">
            <p>
              <strong>Temperature:</strong> {temperature}
            </p>
            <p>
              <strong>Calories:</strong> {calories} kcal
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Ingredients:</strong> {ingredients.join(", ")}
            </p>
          </div>
        )}
      </div>

      <div className="absolute right-4 top-4 md:relative md:right-0 md:top-0 md:ml-auto flex flex-col space-y-4 mt-4 md:mt-0">
        {/* Eye button toggles the 'showMore' state */}
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="text-[#A0522D]"
        >
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
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    strength: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    description: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    temperature: PropTypes.string,
    calories: PropTypes.number,
  }).isRequired,
  backgroundImage: PropTypes.string,
  setCoffees: PropTypes.func.isRequired,
};

export default CoffeeCard;
