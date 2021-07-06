import React from "react";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
    border: "1px solid rgba(0,0,0,0.1)",
    backgroundColor: "transparent",
    flexBasis: "50%",
  },
  media: {
    // height: 140,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "2vw",
    margin: "10px 10px 0 10px",
    minHeight: "40%",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WPROWADŹ DANE UŻYTKOWNIKA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            (przy wprowadzeniu danych - nr PESEL powininen wysokczyć komunikat,
            że dana osoba już widnieje w projekcie i przekierować do audycji
            danych)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PROJEKTY
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            EDYTUJ DANE UCZESTNIKA
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            WYPŁATY DLA UP
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
    </div>
  );
}
