import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core/";
import Cart from "./Cart";

const Header = ({ toggleTheme, isDark }) => {

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <nav class="navbar navbar-transparent"></nav>
      <Typography variant="h3" color={isDark ? 'primary' : ''}>Dio Shopping</Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/contato">
        <Button color="primary">Contato</Button>
      </Link>
      <button
        className="btn btn-outline-info btn-lg ml-auto font-weight-bold"
        onClick={toggleTheme}
      >
        {isDark ? "🌙 Dark" : "🌞 Light"}
      </button>
      <Cart />
    </Grid>
  );
};

export default Header;
