"use client";
import React, { useEffect } from "react";
import { getUsers } from "@/app/services/userService";
import useStore from "@/app/store/store";
import Card from "@/app/components/Card";

const Page = () => {
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);
  const addUser = useStore((state) => state.add);

  useEffect(() => {
    const fetchUsers = async () => {
      if (users.length === 0) {
        try {
          const data = await getUsers();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
    };
    fetchUsers();
  }, [setUsers, users]);

  const handleAddUser = () => {
    addUser({ id: new Date().getTime(), firstName: "New", lastName: "User" });
  };

  return (
    <>
      <div className="mt-5 mb-5 flex justify-center items-center h-[40px] w-full">
        <button
          onClick={handleAddUser}
          className="bg-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add User
        </button>
      </div>
      <div className="w-100% flex flex-row flex-wrap place-content-center items-center">
        {users.map((user, index) => (
          <Card
            key={index}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            text={"details"}
            imageSrc={
              user.image ||
              "https://toppng.com/uploads/preview/male-user-filled-icon-man-icon-115533970576b3erfsss1.png"
            }
            link={`users/${user.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
