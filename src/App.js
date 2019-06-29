import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => {
  const desktopBreakpoint = theme.breakpoints.up("md");
  return {
    root: {
      padding: "56px 16px",
      display: "flex",
      justifyContent: "center",
      minWidth: "320px",
      [desktopBreakpoint]: {
        paddingTop: "64px"
      }
    }
  };
});

const App = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TextField
        label="Username"
        name="username"
        variant="outlined"
        onChange={handleInputChange}
        value={searchQuery}
      />
    </div>
  );
};

export default App;
