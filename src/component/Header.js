import React, { Component } from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  tabChange = (event, value) => {
    switch (value) {
      case 0:
        document.getElementById("home").click();
        break;
      case 1:
        document.getElementById("classwork").click();
        break;
      case 2:
        document.getElementById("resume").click();
        break;
      case 3:
        document.getElementById("interests").click();
        break;
      case 4:
        document.getElementById("blog").click();
        break;
      case 5:
        document.getElementById("social").click();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Paper style={{ display: "grid", padding: 20, backgroundColor: "#29507a" }}>
          <Link to="/home">
            <img style={{ width: 150, height: 150 }} src="/resources/me.jpg" alt="Me" />
          </Link>
          <div
            style={{
              color: "#e8e8e8",
              gridColumn: 2,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Tabs onChange={this.tabChange}>
              <Tab style={{ width: 100 }} label="Home" />
              <Tab style={{ width: 100 }} label="Classwork" />
              <Tab style={{ width: 100 }} label="Resume" />
              <Tab style={{ width: 100 }} label="Interests" />
              <Tab style={{ width: 100 }} label="Blog" />
              <Tab style={{ width: 100 }} label="Social" />
            </Tabs>
          </div>
        </Paper>
        <Link id="home" to="/home" style={{ visibility: "hidden" }} />
        <Link id="classwork" to="/classwork" style={{ visibility: "hidden" }} />
        <Link id="resume" to="/resume" style={{ visibility: "hidden" }} />
        <Link id="interests" to="/interests" style={{ visibility: "collapse" }} />
        <Link id="blog" to="/blog" style={{ visibility: "collapse" }} />
        <Link id="social" to="/social" style={{ visibility: "collapse" }} />
      </div>
    );
  }
}

export default Header;
