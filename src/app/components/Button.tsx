import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href = "/" }) => {
  return (
    <Link href={href}>
      <button className="text-white px-4 py-2 rounded">
        {text}
      </button>
    </Link>
  );
};

export default Button;
