import styled from "styled-components";
import { Variant } from "./index";

interface IAvatarStyle {
  size: Variant;
}

export const AvatarStyle = styled.img<IAvatarStyle>(({ size }) => ({
  width: size,
  height: size,
  borderRadius: "50%",
}));
