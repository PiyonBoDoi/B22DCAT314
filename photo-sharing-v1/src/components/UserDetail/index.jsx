import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import models from "../../modelData/models"; 

import "./styles.css";

function UserDetail() {
  const { userId } = useParams();        
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <Card className="user-detail-card" sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography>Location: {user.location}</Typography>
        <Typography>Occupation: {user.occupation}</Typography>
        <Typography variant="body1">
          Description:&nbsp;
          <span dangerouslySetInnerHTML={{ __html: user.description }} />
        </Typography>


        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          component={Link}
          to={`/photos/${user._id}`}   
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
