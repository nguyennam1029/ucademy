import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";

import Heading from "@/components/typography/Heading";
import { connectToDatabase } from "@/lib/mongoose";
import React from "react";

const page = async () => {
  const connectDb = connectToDatabase();

  return (
    <>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  );
};

export default page;
