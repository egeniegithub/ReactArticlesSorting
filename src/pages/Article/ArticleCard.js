// global
import React from "react";
import { useHistory } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";

import Content from "../../components/Content";
import Duration from "../../components/Duration";
import Votes from "../../components/Votes";

const useStyles = makeStyles({
  card: {
    display: "flex",
    maxWidth: 840,
    // adding to fill out short posts.
    minWidth: 840,
    margin: 10,
    boxShadow:
      "3px -2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 9px 1px 3px 0px rgba(0,0,0,0.12)",
    flexdirection: "row",
  },
  cardDetails: {
    //float: 'right',
    //padding: 140
  },
  cardVotes: {
    maxWidth: 120,
    flexDirection: "column",
    display: "flex",
  },
  cardMedia: {
    height: 140,
  },
});

const ArticleCard = ({ post, main }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      // ml={post.depth * 10}
      width="100%"
    >
      <Grid item xs={12}>
        <Card className={classes.card} key={post.id}>
          <CardContent className={classes.cardVotes}>
            <Button size="small" color="primary">
              <KeyboardArrowUp />
            </Button>
            <Button size="small" color="primary">
              {/*post.votes*/}
              <Votes vote={post.votes} />
            </Button>
            <Button size="small" color="primary" float="right">
              <KeyboardArrowDown />
            </Button>
          </CardContent>

          <Grid item xs={12} className={classes.cardDetails}>
            <CardActionArea component="a" href="#">
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  posted by{" "}
                  <Link>
                    u/
                    {post.author != null
                      ? post.author.username.split(" ").join("").toLowerCase()
                      : "username"}
                  </Link>{" "}
                  <Duration inputDate={post.createdDate} />
                </Typography>
                <Content content={post.content} mode="display" />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Comment
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Save
              </Button>
              <Button size="small" color="primary">
                Report
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
};

export default ArticleCard;
