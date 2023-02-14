import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { AlignTitle, Title } from "../../UI/Title";
import { Button } from "../../UI/Button/Button";

import { Form, Input, LinkAuth } from "./style";
import { PaddingValue, Text, AlignText, Colors } from "../../../styles";

import { ISignIn, ISign } from "../auth.interface";
import { login } from "../../../store/user/userActions";
import { useAppDispatch } from "../../../hooks/redux";
import { validEmail } from "../../../shared/regex";

export const SignIn: FC<ISign> = ({ setType }) => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ISignIn>({ mode: "onChange" });

  const submit = (data: ISignIn) => {
    dispatch(login(data));
    reset();
  };

  return (
    <>
      <Title align={AlignTitle.center}>Вход в аккаунт</Title>

      <Form onSubmit={handleSubmit(submit)}>
        {errors.email && (
          <Text color={Colors.warning}>{errors.email.message}</Text>
        )}
        <Input
          type="text"
          placeholder="E-mail"
          {...register("email", {
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
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Минимальная длина 6 символов",
            },
          })}
        />
        <Button type="submit">Войти</Button>
      </Form>

      <Text align={AlignText.center} paddingTop={PaddingValue.m}>
        Еще нет аккаунта?
        <LinkAuth onClick={() => setType("register")}>Регистрация</LinkAuth>
      </Text>
    </>
  );
};
