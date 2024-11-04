import React from "react";
import { getUser } from "@/app/services/userService";
import { Params } from "@/app/types/userId";
import Card from "@/app/components/Card";

const page = async (props: Params) => {
  const { userId } = props.params;
  const { id, firstName, image } = await getUser(userId);

  return (
    <>
      <Card key={id} text={firstName} imageSrc={image} discription={false} />
    </>
  );
};

export default page;
