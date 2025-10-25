import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  let rightText = "Photo Sharing App";

  if (location.pathname.startsWith("/users/") && !location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    if (user) {
      rightText = `${user.first_name} ${user.last_name}`;
    }
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    if (user) {
      rightText = `Photos of ${user.first_name}`;
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit">
          Nguyen Gia Hoang Viet
        </Typography>
        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
