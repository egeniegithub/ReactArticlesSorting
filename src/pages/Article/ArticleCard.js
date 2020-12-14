// global
import React from "react";

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
  Grid,
  Typography,
  Link,
  Divider,
} from "@material-ui/core";

import Content from "../../components/Content";
import Duration from "../../components/Duration";
import Votes from "../../components/Votes";

const useStyles = makeStyles({
  card: {
    display: "flex",
    minWidth: 840,
    margin: 10,
  },
  cardDetails: {
    textAlign: "left",
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

const ArticleCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Box width="100%">
      <Grid item xs={12}>
        <Card className={classes.card} key={post.id}>
          <CardContent className={classes.cardVotes}>
            <Button size="small" color="primary">
              <KeyboardArrowUp />
            </Button>
            <Button size="small" color="primary">
              <Votes vote={post.votes} />
            </Button>
            <Button size="small" color="primary" float="right">
              <KeyboardArrowDown />
            </Button>
          </CardContent>

          <Grid item xs={12} className={classes.cardDetails}>
            <CardActionArea component="a" href="#">
              <CardContent>
                <Typography component="h4" variant="h4">
                  {post.title}
                </Typography>

                <Typography component="span" variant="p">
                  {post.description}
                </Typography>
                <Divider style={{ marginTop: 50, marginBottom: 5 }} />
                <Typography variant="subtitle1" color="textSecondary">
                  posted by{" "}
                  <Link>
                    {post.author != null
                      ? post.author.username.split(" ").join("").toLowerCase()
                      : "username"}
                  </Link>
                  &nbsp;
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
