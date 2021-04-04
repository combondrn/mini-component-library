import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <InputLabel>
        <VisuallyHidden>Input for stuff here!</VisuallyHidden>
        <TextInput />
        <IconWrapper>
          <Icon id={icon} size={16} strokeWidth={1} />
        </IconWrapper>
      </InputLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const InputLabel = styled.label``;

const TextInput = styled.input`
  padding-left: 32px;
  /* border:none; */
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 16px;
  margin: auto;
`;

export default IconInput;
