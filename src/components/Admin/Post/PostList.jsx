import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PostItem from "../Post/PostItem";
import { FaPlus, FaArrowLeft } from "react-icons/fa";
import PostEditor from "./PostEditor";

const PostList = () => {
  const [showPostEditor, setShowPostEditor] = useState(false);
  const handleAddClick = () => {
    setShowPostEditor(!showPostEditor);
  };
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
      {!showPostEditor && (
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
        </>
      )}

      {!showPostEditor ? (
        <Button
          className="rounded-circle d-flex align-items-center justify-content-center add-btn"
          onClick={handleAddClick}
        >
          <FaPlus />
        </Button>
      ) : (
        <Button
          className="rounded-circle d-flex align-items-center justify-content-center back-btn"
          onClick={handleAddClick}
        >
          <FaArrowLeft />
        </Button>
      )}
      {showPostEditor && <PostEditor />}
    </>
  );
};

export default PostList;
