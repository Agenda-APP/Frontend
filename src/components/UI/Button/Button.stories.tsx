import React from "react";
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
