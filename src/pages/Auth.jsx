import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FloatingLabel,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Register from "../components/Register";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectIsAuth } from "../http/userApi";
import { Navigate } from "react-router-dom";
import { fetchLoginAdmin } from "../http/adminApi";

const Auth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [show, setShow] = useState(false);

  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      login: "",
      phone: "",
      password: "",
    },
    mode: "onChange",
  });


  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
    reset({
      login: "",
      phone: "",
      password: "",
    });
  };

  const onSubmit = async (values) => {
    let data = null;
    if (!isAdmin)
      data = await dispatch(
        fetchLogin({ phone: values.phone, password: values.password })
      );
    else
      data = await dispatch(
        fetchLoginAdmin({ login: values.login, password: values.password })
      );

    if (!data.payload) {
      return alert("Помилка авторизації.");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <Container>
        <Row>
          <Col sm={5}>
            <Container className="d-flex flex-column me-0">
              <p className="fs-1 fw-bold font-monospace">Lokal</p>
              <p>Description Description Description Description</p>
            </Container>
          </Col>
          <Col sm={6}>
            <Container className="d-flex justify-content-center align-items-center ">
              <Card style={{ width: "24rem" }} className="shadow-sm ">
                <Card.Body>
                  <Form
                    className="d-flex flex-column"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {!isAdmin ? (
                      <FloatingLabel
                        controlId="phone"
                        label="Номер телефону"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Номер телефону"
                          className={
                            Boolean(errors.phone?.message) ? "is-invalid" : ""
                          }
                          {...register("phone", {
                            required: "Введіть номер телефону",
                          })}
                        />
                        <span className="text-danger">
                          {errors.phone?.message}
                        </span>
                      </FloatingLabel>
                    ) : (
                      <FloatingLabel
                        controlId="login"
                        label="Логін"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Логін"
                          className={
                            Boolean(errors.login?.message) ? "is-invalid" : ""
                          }
                          {...register("login", {
                            required: "Введіть логін користувача.",
                          })}
                        />
                        <span className="text-danger">
                          {errors.login?.message}
                        </span>
                      </FloatingLabel>
                    )}

                    <FloatingLabel controlId="password" label="Пароль">
                      <Form.Control
                        type="password"
                        placeholder="Пароль"
                        className={
                          Boolean(errors.password?.message) ? "is-invalid" : ""
                        }
                        {...register("password", {
                          required: "Введіть пароль",
                        })}
                      />
                      <span className="text-danger">
                        {errors.password?.message}
                      </span>
                    </FloatingLabel>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-3 "
                      disabled={!isValid}
                    >
                      Увійти
                    </Button>
                    <hr className="mb-0" />
                  </Form>
                </Card.Body>
                <Card.Body className="pt-0 d-flex justify-content-between">
                  {!isAdmin ? (
                    <>
                      <Card.Link
                        style={{ cursor: "pointer" }}
                        onClick={() => setShow(true)}
                      >
                        Зареєструватися
                      </Card.Link>
                    </>
                  ) : (
                    <>ㅤ</>
                  )}

                  <Form.Check
                    type="switch"
                    checked={isAdmin}
                    onChange={handleCheckboxChange}
                    id="custom-switch"
                    label="Адмін?"
                  />
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
      <Register show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Auth;
