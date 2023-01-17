import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import useStyles from "./useStyles";

// each course has some attributes which woill be rendered here and their duration will be converted into hours and minutes using calculateDuration function

const calculateDuration = (minutes) => {
  return {
    hours: Math.floor(minutes / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
    minutes: (minutes - Math.floor(minutes / 60) * 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  };
};

const CourseItem = ({ item, onClick, owned }) => {
  const styles = useStyles({ rating: item?.rating });

  const { hours, minutes } = calculateDuration(item?.duration);

  return (
    <Card className={styles.courseItem}>
      <CardMedia component="img" image={item.imgUrl} alt={item.title} />

      <CardActions>
        <Typography>
          <PersonPinIcon />
          {item.teacher}
        </Typography>

        {owned ? (
          <Typography> Owned </Typography>
        ) : (
          <Button variant="contained" color="secondary" onClick={onClick}>
            {item.price ? "Purchase" : "Add"}
          </Button>
        )}
      </CardActions>

      <CardContent>
        <Typography>{item.title}</Typography>

        <Grid container alignItems="center">
          <AccessTimeIcon />

          <Typography>
            {hours > 0 ? `${hours} : ` : null}
            {minutes}
          </Typography>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={styles.courseInfoBackground}
        >
          <Typography>
            {item.price || "Free"} {item.price ? "$" : null}
          </Typography>

          <Box>
            <Grid>
              {[...new Array(5)].map((item, index) => (
                <StarIcon key={index} />
              ))}
            </Grid>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CourseItem;
