import React from "react";
import { Accordion, Col, ListGroup, Row, Tab } from "react-bootstrap";
import PostList from "../components/Admin/Post/PostList";
import ProductList from "../components/Admin/Product/ProductList";
import PartnerList from "../components/Admin/Partner/PartnerList";
import ProductCategoryList from "../components/Admin/ProductCategory/ProductCategoryList";
import PostCategoryList from "../components/Admin/PostCategory/PostCategoryList";
const AdminPage = () => {
  return (
    <Tab.Container defaultActiveKey="#linkUsers">
      <Row>
        <Col sm={3}>
          <Accordion flush defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Налаштування</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item action href="#linkUsers">
                    Користувачі
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkProducts">
                    Продукція
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkPartners">
                    Партнери
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkPlaces">
                    Заклади
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkPosts">
                    Пости
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkCatProd">
                    Категорії продукції
                  </ListGroup.Item>
                  <ListGroup.Item action href="#linkCatPost">
                    Категорії постів
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#linkUsers">
              <div>Користувачі</div>
            </Tab.Pane>
            <Tab.Pane eventKey="#linkProducts">
              <ProductList />
            </Tab.Pane>
            <Tab.Pane eventKey="#linkPartners">
              <PartnerList />
            </Tab.Pane>
            <Tab.Pane eventKey="#linkPlaces">
              <div>Заклади</div>
            </Tab.Pane>
            <Tab.Pane eventKey="#linkPosts">
              <PostList />
            </Tab.Pane>
            <Tab.Pane eventKey="#linkCatProd">
              <ProductCategoryList />
            </Tab.Pane>
            <Tab.Pane eventKey="#linkCatPost">
              <PostCategoryList />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default AdminPage;
