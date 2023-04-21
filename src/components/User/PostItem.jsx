import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TrashFill, PencilFill } from "react-bootstrap-icons";

const PostItem = ({ post }) => {
  return (
    <Link to={`/post/${post.id}/`} style={{ textDecoration: "none" }}>
      <div className="card-background">
        <Card
          style={{ cursor: "pointer" }}
          border={"light"}
          className="shadow-sm mb-5 bg-body rounded"
        >
          <div className="card-img-user-post-wrapper">
            <Card.Img
              className="card-img-user-post-back"
              variant="top"
              height={300}
              src={process.env.REACT_APP_API_URL + post.img[0]}
            />

            <Card.Img
              className="card-img-user-post-main"
              src={process.env.REACT_APP_API_URL + post.img[0]}
            />
          </div>
          <div className="p-1">
            <div className="text-black-50 d-flex justify-content-between align-items-center">
              <div>{post.title}</div>
            </div>
            <div style={{ color: "black" }}>{post.description}</div>
          </div>
          <Card.Footer>
            {post.createdAt === post.updatedAt ? (
              <>
                <small className="text-muted">
                  Опубліковано {new Date(post.createdAt).getDate()}/{new Date(post.createdAt).getMonth() + 1}/{new Date(post.createdAt).getFullYear()} {new Date(post.createdAt).getHours()}:{new Date(post.createdAt).getMinutes()}
                </small>
              </>
            ) : (
              <>
                <small className="text-muted">
                  Редаговано {new Date(post.createdAt).getDate()}/{new Date(post.createdAt).getMonth() + 1}/{new Date(post.createdAt).getFullYear()} {new Date(post.createdAt).getHours()}:{new Date(post.createdAt).getMinutes()}
                </small>
              </>
            )}
            {post.post_category.name}
          </Card.Footer>
        </Card>
      </div>
    </Link>
  );
};

export default PostItem;
