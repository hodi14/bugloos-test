import { useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import coursesData from "../../../Data/courses";
import CourseItem from "../Item";
import CoursePurchaseDrawer from "../PurchaseDrawer";

import useStyles from "./useStyles";

const CoursesList = ({ sort = true, filter = true }) => {
  const styles = useStyles();

  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState([]);

  const [currentCourses, setCurrentCourses] = useState(coursesData);
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

  const onFilterChange = (filterInput) => {
    if (filterBy.includes(filterInput)) {
      setCurrentCourses([...coursesData]);

      setFilterBy([...filterBy.filter((filter) => filter !== filterInput)]);
    } else {
      setFilterBy([...filterBy, filterInput]);

      if (filterInput === "owned")
        setCurrentCourses(
          currentCourses.filter((course) => userCourses.includes[course.id])
        );

      if (filterInput === "free")
        setCurrentCourses(currentCourses.filter((course) => !course.price));
    }
  };

  const onSortChange = (sortInput) => {
    setSortBy(sortInput);

    if (sortInput)
      setCurrentCourses([
        ...currentCourses.sort((c1, c2) =>
          c1[sortInput] > c2[sortInput]
            ? 1
            : c1[sortInput] < c2[sortInput]
            ? -1
            : 0
        ),
      ]);
    else setCurrentCourses([...coursesData]);
  };

  return (
    <>
      {(sort || filter) && (
        <Grid container alignItems="center" className={styles.topSelector}>
          {sort && (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={styles.sortSelect}>
                <InputLabel id="sortSelect">Sort By</InputLabel>
                <Select
                  labelId="sortSelectLabel"
                  id="sortSelect"
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => onSortChange(e.target.value)}
                >
                  <MenuItem value="price">Price</MenuItem>
                  <MenuItem value="duration">Duration</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  {sortBy && <MenuItem value={null}>Deafult</MenuItem>}
                </Select>
              </FormControl>
            </Grid>
          )}

          {filter && (
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                label="Owned by You"
                control={<Checkbox checked={filterBy.includes("owned")} />}
                onChange={() => onFilterChange("owned")}
              />

              <FormControlLabel
                label="Free Courses"
                control={
                  <Checkbox
                    checked={filterBy.includes("free")}
                    onChange={() => onFilterChange("free")}
                  />
                }
              />
            </Grid>
          )}
        </Grid>
      )}

      <Grid container spacing={2} className={styles.coursesList}>
        {currentCourses?.length ? (
          currentCourses.map((item) => (
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
          ))
        ) : (
          <Typography className={styles.noData}>
            No courses were found :(
          </Typography>
        )}
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
