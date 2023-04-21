import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../http/userApi";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

function Register({ show, onHide }) {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      phone: "0934900866",
      password: "123",
      password2: "123",
      email: "gg@gmail.com",
      first_name: "sss",
      last_name: "fff",
      birthday: "2023-04-03",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data);
    if (data.payload?.errors) {
      data.payload.errors.forEach((error) => {
        console.log(error);
        setError(error.param, {
          type: "server",
          message: error.msg,
        });
      });
      return;
    } else if (data.payload?.message) {
      alert(data.payload.message);
      return;
    } else if (data.payload?.token) {
      window.localStorage.setItem("token", data.payload.token);
      return <Navigate to="/" />;
    }

    if (isAuth) {
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Створити обліковий запис</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Ім'я та прізвище</Form.Label>
            <div className="d-flex">
              <div className="me-2">
                <Form.Control
                  placeholder="Ім'я"
                  className={`${
                    Boolean(errors.first_name?.message) ? "is-invalid" : ""
                  }`}
                  {...register("first_name", { required: "Введіть ім'я" })}
                />
                <span className="text-danger">
                  {errors.first_name?.message}
                </span>
              </div>
              <div>
                <Form.Control
                  placeholder="Прізвище"
                  className={`${
                    Boolean(errors.last_name?.message) ? "is-invalid" : ""
                  }`}
                  {...register("last_name", { required: "Введіть прізвище" })}
                />
                <span className="text-danger">{errors.last_name?.message}</span>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              placeholder="+380XXXXXXXXX"
              className={Boolean(errors.phone?.message) ? "is-invalid" : ""}
              {...register("phone", { required: "Введіть номер телефону" })}
            />
            <span className="text-danger">{errors.phone?.message}</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="user@gmail.com"
              className={Boolean(errors.email?.message) ? "is-invalid" : ""}
              {...register("email", { required: "Введіть пошту" })}
            />
            <span className="text-danger">{errors.email?.message}</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className={Boolean(errors.password?.message) ? "is-invalid" : ""}
              {...register("password", { required: "Введіть пароль" })}
            />
            <span className="text-danger">{errors.password?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Повторіть пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              className={Boolean(errors.password2?.message) ? "is-invalid" : ""}
              {...register("password2", { required: "Повторіть пароль" })}
            />
            <span className="text-danger">{errors.password2?.message}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Дата народження</Form.Label>
            <Form.Control
              type="date"
              {...register("birthday", {
                required: "Введіть дату народження..",
              })}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" variant="primary">
            Зареєструватися
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Register;
