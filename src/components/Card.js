import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "auto",
    background: "#17191d"
  },
  paper: {
    height: 250,
    width: 250,
    padding: theme.spacing(2),
  },
  media: {
    paddingTop: '100%',
    paddingBottom: "2%", 
    paddingRight: "",
    // minWidth: "200px",
    // minHeight: "120px"
    width: "100%",
    height: "120px"
  },
  control: {
    padding: theme.spacing(2),
  },
  text: {
    color: "white"
  },
}));

const Cards = ({ game }) => {
  const classes = useStyles();

  return (
    <Grid item>
       <Card className={classes.root}>
           <CardHeader id = "text"
             action={
               <IconButton aria-label="settings">
               </IconButton>
             }
             title={game.title}
             subheader={game.genre}
           />
           <Link to={`/game/${game.id}`}>
           <CardMedia 
             id="cardpic"
             className={classes.media}
             image={game.image_url}
             title="gif"
           />
           </Link>
           <CardContent>
             <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
               Platform: {game.platform}
               <br></br>
               Publisher: {game.publisher}
               <br></br>
               Rating: {game.avg}/10
             </Typography>
           </CardContent>
           </Card>
    </Grid>
  );
};

export default Cards;
