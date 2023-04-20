import React from "react";
import { Button, Form } from "react-bootstrap";
import PostItem from "../Post/PostItem";
import { FaPlus } from "react-icons/fa";

const PostList = () => {
  const posts = [
    {
      id: 1,
      title: "title1",
      img: "fescfwqfa.jpg",
      description: "description1",
      partnerId: 1,
    },
    {
      id: 2,
      title: "title2",
      img: "img2",
      description: "description2",
      partnerId: 2,
    },
    {
      id: 3,
      title: "title3",
      img: "img3",
      description: "description3",
      partnerId: 3,
    },
    {
      id: 4,
      title: "title4",
      img: "img4",
      description: "description4",
      partnerId: 4,
    },
  ];
  return (
    <>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Пошук..." />
      </Form.Group>
      <div className="posts-container">
        <Form className="d-flex flex-column">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </Form>
      </div>
      <Button className="add-btn rounded-circle d-flex align-items-center justify-content-center">
        <FaPlus />
      </Button>
    </>
  );
};

export default PostList;
