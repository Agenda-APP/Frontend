import React from "react";
// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconPlus } from "../Icon/IconImg";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args, IconProps) => (
  <Button {...args}>
    <IconPlus></IconPlus>
    Button
  </Button>
);
export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
