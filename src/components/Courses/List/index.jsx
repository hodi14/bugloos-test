import { Grid } from "@mui/material";

import coursesData from "../../../Data/courses";
import CourseItem from "../Item";

const CoursesList = () => {
  return (
    <Grid container spacing={2}>
      {coursesData.map((item) => (
        <Grid item xxs={12} xs={6} key={item.id}>
          <CourseItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoursesList;
