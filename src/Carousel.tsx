// react
import * as React from "react";
import { FC } from "react";
// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// material-ui
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const lists = [
  {
    name: "Apple",
    image:
      "https://t3.ftcdn.net/jpg/01/78/91/98/240_F_178919820_P2pZcZaRlmdnPyzySimiwUO8gxUdXczm.jpg"
  },
  {
    name: "Google",
    image:
      "https://t4.ftcdn.net/jpg/03/08/54/37/240_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg"
  },
  {
    name: "Amazon",
    image:
      "https://t3.ftcdn.net/jpg/03/46/91/30/240_F_346913052_0q7EJ7E9rIMs1XKfFHeFPc5liv2gFpS6.jpg"
  },
  {
    name: "Facebook",
    image:
      "https://as1.ftcdn.net/jpg/03/60/06/64/500_F_360066448_MWBdpBisJyf1clYLUy1i1x0cO1osOj0b.jpg"
  },
  {
    name: "Microsoft",
    image:
      "https://t3.ftcdn.net/jpg/02/83/78/50/240_F_283785056_c1ty2nVY9PTYB1xjE9sCSkDHIHxruKoM.jpg"
  },
  {
    name: "IBM",
    image:
      "https://t4.ftcdn.net/jpg/03/84/16/97/240_F_384169717_uxv6MNLgZAhFHgMk9dsfLgxM80WwEjQz.jpg"
  }
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const useStyles = makeStyles({
  root: {
    margin: "8px"
  },
  media: {
    height: 150
  },
  content: {
    height: 10
  }
});

const Carousel: FC = () => {
  const classes = useStyles();

  const listItems = lists.map((lists) => (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={lists.image}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardContent className={classes.content}>{lists.name}</CardContent>
      </Card>
    </div>
  ));

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Slider {...settings}>{listItems}</Slider>
    </>
  );
};
export default Carousel;
