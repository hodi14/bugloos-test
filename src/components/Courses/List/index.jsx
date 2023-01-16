import { useState } from "react";

import { Grid } from "@mui/material";

import coursesData from "../../../Data/courses";
import CourseItem from "../Item";
import CoursePurchaseDrawer from "../PurchaseDrawer";

const CoursesList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [purchaseDrawerOpen, setPurchaseDrawerOpen] = useState(false);
  const [userCourses, setUserCourses] = useState(
    JSON.parse(localStorage.getItem("userCourses") || "[]")
  );

  const onCompleted = () => {
    setUserCourses([...userCourses, selectedCourse?.id]);
    localStorage.setItem(
      "userCourses",
      JSON.stringify([...new Set(...userCourses, selectedCourse?.id)])
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        {coursesData.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <CourseItem
              item={item}
              owned={userCourses.includes(item?.id)}
              onClick={() => {
                setSelectedCourse(item);
                setPurchaseDrawerOpen(true);
              }}
            />
          </Grid>
        ))}
      </Grid>

      <CoursePurchaseDrawer
        open={purchaseDrawerOpen}
        toggleDrawer={() => setPurchaseDrawerOpen(false)}
        selectedCourse={selectedCourse}
        onCompleted={onCompleted}
      />
    </>
  );
};

export default CoursesList;
