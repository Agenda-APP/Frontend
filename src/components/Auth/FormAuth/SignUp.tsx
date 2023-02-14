import React, { FC } from "react";

import { AlignTitle, Title } from "../../UI/Title";
import { Button } from "../../UI/Button/Button";

import { Form, Input, LinkAuth } from "./style";
import { AlignText, Colors, PaddingValue, Text } from "../../../styles";

import { useForm } from "react-hook-form";

import { ISignUp, ISign } from "../auth.interface";
import { register } from "../../../store/user/userActions";
import { useAppDispatch } from "../../../hooks/redux";
import { validEmail } from "../../../shared/regex";

export const SignUp: FC<ISign> = ({ setType }) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register: registerInput,
    reset,
    formState: { errors },
  } = useForm<ISignUp>({ mode: "onChange" });

  const submit = (data: ISignUp) => {
    dispatch(register(data));
    reset();
  };

  return (
    <>
      <Title align={AlignTitle.center}>Регистрация</Title>

      <Form onSubmit={handleSubmit(submit)}>
        {errors.name && (
          <Text color={Colors.warning}>{errors.name.message}</Text>
        )}
        <Input
          type="text"
          placeholder="Имя"
          {...registerInput("name", {
            required: "Введите имя",
            minLength: {
              value: 3,
              message: "Минимальная длина 3 символа",
            },
          })}
        />
        {errors.email && (
          <Text color={Colors.warning}>{errors.email.message}</Text>
        )}
        <Input
          type="text"
          placeholder="E-mail"
          {...registerInput("email", {
            required: "Введите email",
            pattern: {
              value: validEmail,
              message: "Некорректный email",
            },
          })}
        />
        {errors.password && (
          <Text color={Colors.warning}>{errors.password.message}</Text>
        )}
        <Input
          type="text"
          placeholder="Пароль"
          {...registerInput("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Минимальная длина 6 символов",
            },
          })}
        />
        <Button type="submit">Зарегистрироваться</Button>
      </Form>

      <Text align={AlignText.center} paddingTop={PaddingValue.m}>
        Уже есть аккаунт?
        <LinkAuth onClick={() => setType("login")}>Войти</LinkAuth>
      </Text>
    </>
  );
};
