import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--paddingVert": 4 + "px",
    "--paddingLeft": 24 + "px",
    "--borderWidth": 1 + "px",
    "--fontSize": 14 + "px",
  },
  large: {
    "--paddingVert": 8 + "px",
    "--paddingLeft": 36 + "px",
    "--borderWidth": 2 + "px",
    "--fontSize": 18 + "px",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  var iconSize = size === "small" ? 16 : 24;

  var style = SIZES[size];
  if (!style) {
    throw new Error("Invalid size specified");
  }

  return (
    <InputLabel>
      <VisuallyHidden>Input for stuff here!</VisuallyHidden>
      <TextInput
        style={{ ...style, "--width": width + "px" }}
        placeholder={placeholder}
        {...delegated}
      />
      <IconWrapper style={{ "--iconSize": iconSize + "px" }}>
        <Icon id={icon} size={iconSize} strokeWidth={2} />
      </IconWrapper>
    </InputLabel>
  );
};

const InputLabel = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  border: none;
  outline-offset: 2px;
  color: inherit;
  font-weight: 700;

  padding-top: var(--paddingVert);
  padding-bottom: var(--paddingVert);
  padding-left: var(--paddingLeft);
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  font-size: var(--fontSize);
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  height: var(--iconSize);
  margin: auto;
  /* Not necessary, but helpful reminder that intentionally inheriting color */
  color: inherit;
`;

export default IconInput;
