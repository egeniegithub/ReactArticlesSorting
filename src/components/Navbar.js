import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Articles Sorting App
        </Typography>
        <Button
          className={classes.link}
          onClick={() => {
            history.push("/");
          }}
        >
          Articles
        </Button>
        <Button
          className={classes.link}
          onClick={() => {
            history.push("/about");
          }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

export default Navbar;
