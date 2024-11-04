import Card from "@/app/components/Card";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Card
          text="first"
          link={"/"}
          imageSrc={
            "https://i1.pickpik.com/photos/306/534/563/cloud-sunset-sunrise-mountain-preview.jpg"
          }
        />
      </div>
    </>
  );
};

export default page;
