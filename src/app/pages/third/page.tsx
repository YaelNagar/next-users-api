import Card from "@/app/components/Card";
import React from "react";

const page = () => {
  return (
    <Card
      text="third"
      link={"/"}
      imageSrc={
        "https://i1.pickpik.com/photos/93/250/485/sun-sunlight-winter-sky-preview.jpg"
      }
      details={true}
    />
  );
};

export default page;
