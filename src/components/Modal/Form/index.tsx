import React, { FC } from "react";

import { InputForm, Title, Button, Select } from "../../../components";
import { VariantSize, WidthInput, Variant } from "../../types";

import { FormStyle } from "./style";
import { Colors, Flex, FlexValue, Text, WeightText } from "../../../styles";

import { optionsCategory, optionsPriority } from "./data";

import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/redux";
import { toggleModal } from "../../../store/modalSlice";

export interface IFormInputs {
  nameTask: string;
  category: string;
  date: string;
  priority: string;
}

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    dispatch(toggleModal(false));
    reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Title variant={VariantSize.xl}>Добавить задачу новую задачу</Title>
      <div>
        <InputForm
          title="Что нужно сделать?"
          type="text"
          placeholder="Напишите задачу..."
          register={register}
          label="nameTask"
        />
        {errors.nameTask && (
          <Text color={Colors.warning} weight={WeightText.m}>
            Заполните поле
          </Text>
        )}
      </div>
      <Flex justify={FlexValue.between}>
        <Select
          options={optionsCategory}
          title="Категория"
          name="category"
          control={control}
        />
        <div>
          <InputForm
            title="Когда?"
            type="date"
            width={WidthInput.small}
            register={register}
            label="date"
          />
          {errors.date && (
            <Text color={Colors.warning} weight={WeightText.m}>
              Заполните поле
            </Text>
          )}
        </div>
        <Select
          options={optionsPriority}
          title="Приоритет задачи"
          name="priority"
          control={control}
        />
      </Flex>
      <Flex justify={FlexValue.between}>
        <Button
          variant={Variant.warning}
          borders={Variant.warning}
          textColor={Variant.white}
          onClick={() => dispatch(toggleModal(false))}
        >
          Отменить
        </Button>
        <Button type="submit">Добавить</Button>
      </Flex>
    </FormStyle>
  );
};
