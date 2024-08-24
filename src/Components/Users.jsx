import React, { useState, useEffect } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("deleted");
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  if (!Array.isArray(users)) {
    return <div>No users found or data is not in the correct format.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>UID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.uid}</td>
              <td>
                <MdOutlineDeleteSweep onClick={() => handleDelete(user._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
