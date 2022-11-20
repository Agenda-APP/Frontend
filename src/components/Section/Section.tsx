import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  toggle?: boolean;
  background?: string;
};

const SectionStyle = styled.section<Props>`
  background-color: var(--bg--section);
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08);
  border-radius: 10px;
  padding: 25px;
  box-sizing: content-box;
  margin-bottom: 35px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #29a19c;
  }
  .btn_more {
    display: flex;
    width: 30px;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn_more span {
    display: block;
    width: 6px;
    height: 6px;
    background: var(--btn--more);
    border-radius: 3px;
    opacity: 0.7;
  }
`;

const Section: FC<Props> = (props) => {
  return <SectionStyle {...props} />;
};

export default Section;
