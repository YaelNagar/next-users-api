"use client";
import React, { useEffect, useState } from "react";
import { getPractice } from "@/app/services/practice";
import Practice from "@/app/types/Practice";

const Page = () => {
  const [practice, setPractice] = useState<Practice[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getPractice();
        setPractice(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Practice List</h1>
      <div className="flex justify-center">
        <ul className="w-full max-w-md">
          {practice.map((p) => (
            <li
              key={p.id}
              className="bg-gray-100 p-4 mb-2 rounded-md shadow-md hover:bg-gray-200"
            >
              <p className="text-lg text-blue-600 font-medium hover:text-blue-400">
                {p.title}
              </p>
              <p className="text-gray-700">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
