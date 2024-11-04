import React from "react";
import Button from "./Button";
import Image from "next/image";
import CardProps from "@/app/types/CardProps";

const Card: React.FC<CardProps> = ({ text, link, imageSrc, discription }) => {
  return (
    <>
      <div className="w-100% flex flex-column place-content-center items-center mr-5">
        <div className="w-60 place-content-center shadow p-5 mt-10">
          <Image
            width={200}
            height={200}
            src={imageSrc}
            alt="Sunset in the mountains"
          />

          {discription && (
            <div className="text-center pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </div>
          )}
          <div className="mt-5 text-center focus:outline-none text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 sm:bg-blue-500">
            <Button text={text} href={link} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
