"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import CardProps from "@/app/types/CardProps";
import useStore from "@/app/store/store";

const Card: React.FC<CardProps> = ({
  id,
  firstName,
  lastName,
  imageSrc,
  details,
  link,
  text,
}) => {
  const [isEditing, setIsEditing] = useState(false); // מצב עריכה
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const updateUser = useStore((state) => state.update);

  const handleBlur = () => {
    updateUser(id, { firstName: newFirstName, lastName: newLastName });
    setIsEditing(false);
  };

  return (
    <div className="w-100% flex flex-col items-center mr-5">
      <div className="w-60 flex flex-col items-center shadow p-5 mt-10">
        <Image width={200} height={200} src={imageSrc} alt="User image" />
        {isEditing ? (
          <div className="text-center">
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              onBlur={handleBlur}
              className="border rounded p-1 mb-1"
              placeholder="First Name"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              onBlur={handleBlur}
              className="border rounded p-1 mb-1"
              placeholder="Last Name"
            />
          </div>
        ) : (
          <p className="text-center">{firstName + " " + lastName}</p>
        )}

        <div className="flex space-x-4 mt-6 w-full">
          {!details && (
            <>
              <Button
                id={Number(id)}
                text="Edit"
                href="#"
                onClick={() => setIsEditing(true)}
                className="flex-1 text-center bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-700 transition duration-200"
              />
              <Button
                id={Number(id)}
                text="Delete"
                href="#"
                className="flex-1 text-center bg-red-600 text-white rounded-md px-2 py-2 hover:bg-red-700 transition duration-200"
              />
              <Button
                id={Number(id)}
                text={text}
                href={link}
                className="flex-1 text-center bg-gray-300 text-gray-800 rounded-md px-2 py-2 hover:bg-gray-400 transition duration-200"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
