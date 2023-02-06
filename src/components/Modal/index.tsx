import React, { FC } from "react";

import { ModalStyle } from "./style";

import { Form } from "./Form";

export const Modal: FC = () => (
  <ModalStyle>
    <Form />
  </ModalStyle>
);
