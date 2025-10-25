import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";

/**
 * UserPhotos — hiển thị toàn bộ ảnh và bình luận của một người dùng.
 */
function formatDate(dateString) {
  return new Date(dateString).toLocaleString();
}

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="body1" sx={{ m: 2 }}>
        No photos available for this user.
      </Typography>
    );
  }

  return (
    <div>
      {photos.map((photo) => {
        const imgSrc = require(`../../images/${photo.file_name}`);
        return (
          <Card key={photo._id} sx={{ margin: 2, padding: 1 }}>
            <CardContent>
              <img
                src={imgSrc}
                alt={photo.file_name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "0.5em",
                }}
              />
              <Typography variant="caption" color="text.secondary">
                Uploaded: {formatDate(photo.date_time)}
              </Typography>

              {photo.comments && photo.comments.length > 0 && (
                <div style={{ marginTop: "1em" }}>
                  <Divider />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Comments:
                  </Typography>
                  {photo.comments.map((comment) => (
                    <div key={comment._id} style={{ marginTop: "0.5em" }}>
                      <Typography variant="body2">
                        <Link to={`/users/${comment.user._id}`}>
                          {comment.user.first_name} {comment.user.last_name}
                        </Link>
                        : {comment.comment}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(comment.date_time)}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default UserPhotos;
