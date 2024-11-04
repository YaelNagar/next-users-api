"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "@/app/services/userService";
import User from "@/app/types/user";
import Card from "@/app/components/Card";

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="w-100% flex flex-row flex-wrap place-content-center items-center">
      {users.map((user) => (
        <Card key={user.id} text={user.firstName} imageSrc={user.image} />
      ))}
    </div>
  );
};

export default Page;
