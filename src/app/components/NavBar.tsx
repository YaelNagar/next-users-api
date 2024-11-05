import React from "react";
import Button from "./Button";

const NavBar: React.FC = () => {
  interface ButtonProps {
    text: string;
    href?: string;
  }

  const buttonArr: ButtonProps[] = [
    { text: "first", href: "/pages/first" },
    { text: "second", href: "/pages/second" },
    { text: "third", href: "/pages/third" },
    { text: "users", href: "/pages/users" },
  ];

  return (
    <>
      <div className="bg-green-700 h-16 flex flex-row place-content-around items-center sm:bg-blue-500">
        <div className="text-white">My Website</div>
        <div className="text-white flex flex-row space-x-4 items-center">
          {buttonArr.map((button, index) => (
            <Button key={index} text={button.text} href={button.href || "/"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
