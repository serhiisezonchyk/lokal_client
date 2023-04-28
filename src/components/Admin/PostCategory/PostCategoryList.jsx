import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import PostCategoryItem from "../PostCategory/PostCategoryItem";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import PostCategoryEditor from "./PostCategoryEditor";

const PostCategoryList = () => {
  const [showPostCategoryEditor, setShowPostCategoryEditor] = useState(false);
  const handleAddClick = () => {
    setShowPostCategoryEditor(!showPostCategoryEditor);
  };
  const categories = [
    {
      id: 1,
      name: "Новини",
      img: "img",
    },
    {
      id: 2,
      name: "Пропозиції",
      img: "img2",
    },
    {
      id: 3,
      name: "Благодійність",
      img: "img3",
    },
  ];
  return (
    <>
      {!showPostCategoryEditor && (
        <>
          <Form.Group className="my-3">
            <Form.Control type="text" placeholder="Пошук..." />
          </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Значок</th>
                <th>Категорія</th>
                <th>Дія</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <PostCategoryItem key={category.id} category={category} />
              ))}
            </tbody>
          </Table>
        </>
      )}

      {!showPostCategoryEditor ? (
        <Button
          className="add-btn rounded-circle d-flex align-items-center justify-content-center"
          onClick={handleAddClick}
        >
          <FaPlus />
        </Button>
      ) : (
        <>
          <Button
            className="back-btn rounded-circle d-flex align-items-center justify-content-center"
            onClick={handleAddClick}
          >
            <FaArrowLeft />
          </Button>
        </>
      )}
      {showPostCategoryEditor && <PostCategoryEditor />}
    </>
  );
};

export default PostCategoryList;
