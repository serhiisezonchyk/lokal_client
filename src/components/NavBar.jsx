import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsAuth } from "../http/userApi";
import { logout } from "../store/slices/auth";
import { selectIsAdmin } from "../http/adminApi";
function NavBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);

  const onClickLogout = () => {
    if (window.confirm("Ви хочете вийти з облікового запису?"))
      dispatch(logout());
    window.localStorage.removeItem("token");
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Lokal
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/partners" className="nav-link">
            Партнери
          </NavLink>
          <NavLink to="/products" className="nav-link">
            Продукція
          </NavLink>
          <NavLink to="#" className="nav-link">
            Про нас
          </NavLink>
          {isAdmin? (
            <>
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
            </>
          ) : (
            <></>
          )}
        </Nav>
      </Container>
      {isAuth ? (
        <>
          <Button
            variant="outline-success"
            style={{ marginRight: 5, marginBottom: 5 }}
          >
            Баланс
          </Button>
          <Button
            variant="outline-success"
            style={{ marginRight: 5, marginBottom: 5 }}
            onClick={onClickLogout}
          >
            Вийти
          </Button>
        </>
      ) : (
        <>
          <Link to="/login">
            <Button
              variant="outline-success"
              style={{ marginRight: 5, marginBottom: 5 }}
            >
              Увійти
            </Button>
          </Link>
        </>
      )}
    </Navbar>
  );
}

export default NavBar;
