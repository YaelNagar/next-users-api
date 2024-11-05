import Card from "@/app/components/Card";
import React from "react";

const page = () => {
  return (
    <Card
      text="second"
      link={"/"}
      imageSrc={
        "https://i1.pickpik.com/photos/555/608/851/sunset-sky-clouds-orange-preview.jpg"
      }
      details={true}
    />
  );
};

export default page;
