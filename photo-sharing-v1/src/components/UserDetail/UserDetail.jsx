import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) return <div>User not found</div>;

  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
        <Typography>Location: {user.location}</Typography>
        <Typography>Occupation: {user.occupation}</Typography>
        <Typography>Description: {user.description}</Typography>
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
