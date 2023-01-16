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

import useStyles from "./useStyles";

const calculateTime = (minutes) => {
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

const CourseItem = ({ item }) => {
  const styles = useStyles({ rating: item?.rating });

  const { hours, minutes } = calculateTime(item?.time);

  return (
    <Card className={styles.courseItem}>
      <CardMedia component="img" image={item.imgUrl} alt={item.title} />

      <CardActions>
        <Typography>{item.teacher}</Typography>

        <Button variant="contained" color="secondary">
          {item.price ? "Purchase" : "Add"}
        </Button>
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
