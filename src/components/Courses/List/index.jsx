import { Grid } from "@mui/material";

import coursesData from "../../../Data/courses";
import CourseItem from "../Item";

const CoursesList = () => {
  return (
    <Grid container spacing={2}>
      {coursesData.map((item) => (
        <Grid item xs={12} sm={6} key={item.id}>
          <CourseItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoursesList;
