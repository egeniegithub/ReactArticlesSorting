// global
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid, TextField } from "@material-ui/core";
import uuid from "react-uuid";
import Data from "../Data.json";
import ArticleCardList from "./ArticleCardList";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: "20px 24px",
  },
}));

const Article = ({}) => {
  const classes = useStyles();
  const history = useHistory();

  const [articlesData, setArticlesData] = useState(
    Data.sort(function (a, b) {
      return new Date(b.createdDate) - new Date(a.createdDate);
    })
  );

  const applyFilter = (key) => {
    const data = [...Data];
    if (key === "createdDate") {
      new Date();
      let filterData = data.sort(function (a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
      setArticlesData(filterData);
      return;
    }
    let filterData = data.sort(function (a, b) {
      return b[key] - a[key];
    });
    setArticlesData(filterData);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.page}
      >
        <Grid container style={{ margin: 15 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" style={{ textShadow: "2px 2px grey" }}>
              Article's Sorting App
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} lg={10} xl={10} style={{ marginLeft: 11 }}>
          <Grid
            container
            item
            xs={12}
            lg={10}
            xl={10}
            spacing={3}
            style={{ marginBottom: "1px" }}
          >
            <Button
              variant="contained"
              style={{ marginRight: "11px" }}
              onClick={() => applyFilter("votes")}
            >
              Most Upvoted
            </Button>
            <Button
              variant="contained"
              onClick={() => applyFilter("createdDate")}
            >
              Most Recent
            </Button>
          </Grid>
        </Grid>

        <Box>
          <ArticleCardList key={uuid()} postData={articlesData} main={false} />
        </Box>
      </Grid>
    </>
  );
};

export default Article;
