"use client";
import React from "react";
import Link from "next/link";
import useStore from "@/app/store/store";

interface ButtonProps {
  text: string;
  href?: string;
  id: number;
  firstName?: string;
  lastName?: string;
  image?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, href = "#", id, onClick ,className}) => {
  const deleteUser = useStore((state) => state.delete);

  const handleClick = (e: React.MouseEvent) => {
    console.log("click", href);
    if (text.toLowerCase() === "delete") {
      e.preventDefault();
      deleteUser(id);
    } else if (text.toLowerCase() === "edit" && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={href}>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
