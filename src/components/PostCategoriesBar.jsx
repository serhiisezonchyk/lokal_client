import { Container, Form, ListGroup } from "react-bootstrap";

import React, { useEffect } from "react";
import { fetchPostCategories } from "../http/postCategoriesApi";
import { useDispatch, useSelector } from "react-redux";

const PostCategoriesBar = () => {
  const dispatch = useDispatch();
  const { postCategories } = useSelector((state) => state.postCategories);

  const isPostCategoriesLoading = postCategories.status === "loading";
  useEffect(() => {
    dispatch(fetchPostCategories());
  }, []);

  return (
    <Container
      style={{
        paddingBottom: 10,
        marginTop: 5,
      }}
    >
      <ListGroup horizontal className="list-group-flush">
        <ListGroup.Item
          action
          variant="secondary"
          key={0}
          style={{ cursor: "pointer" }}
          
        >
          All
        </ListGroup.Item>
        {postCategories.items.map((brand) => (
          <ListGroup.Item
            action
            variant="secondary"
            key={brand.id}
            style={{ cursor: "pointer" }}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PostCategoriesBar;
