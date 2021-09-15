import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 250,
    padding: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Card = ({ game }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper}>{game.title}</Paper>
    </Grid>
  );
};

export default Card;
