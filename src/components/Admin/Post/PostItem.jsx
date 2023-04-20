import React from "react";
import { Card, Button } from "react-bootstrap";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="card-background">
      <Card
        style={{ cursor: "pointer" }}
        border={"light"}
        className="shadow-sm mb-5 bg-body rounded"
      >
        <div className="editButtons">
          <Link>
            <Button variant="primary" size="sm" className="me-2">
              <PencilFill />
            </Button>
          </Link>
          <Button variant="danger" size="sm">
            <TrashFill />
          </Button>
        </div>
        <div className="card-img-user-post-wrapper">
          <Card.Img
            className="card-img-user-post-back"
            variant="top"
            height={300}
            src={process.env.REACT_APP_API_URL + post.img}
          />

          <Card.Img
            className="card-img-user-post-main"
            src={process.env.REACT_APP_API_URL + post.img}
          />
        </div>
        <Link to={`/post/${post.id}/`} style={{ textDecoration: "none" }}>
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
                  Опубліковано {new Date(post.createdAt).getDate()}/
                  {new Date(post.createdAt).getMonth() + 1}/
                  {new Date(post.createdAt).getFullYear()}{" "}
                  {new Date(post.createdAt).getHours()}:
                  {new Date(post.createdAt).getMinutes()}
                </small>
              </>
            ) : (
              <>
                <small className="text-muted">
                  Редаговано {new Date(post.createdAt).getDate()}/
                  {new Date(post.createdAt).getMonth() + 1}/
                  {new Date(post.createdAt).getFullYear()}{" "}
                  {new Date(post.createdAt).getHours()}:
                  {new Date(post.createdAt).getMinutes()}
                </small>
              </>
            )}
          </Card.Footer>
        </Link>
      </Card>
    </div>
  );
};

export default PostItem;
