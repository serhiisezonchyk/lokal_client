import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import PostItem from "../components/User/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../http/postApi";
import LoadingSpinner from "../components/LoadingSpinner";
import PostCategoriesBar from "../components/PostCategoriesBar";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col sm={9}>
            <PostCategoriesBar />
            {isPostLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="posts-container">
                <Form className="d-flex flex-column">
                  {posts.items.map((post) => (
                    <PostItem key={post.id} post={post} />
                  ))}
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
