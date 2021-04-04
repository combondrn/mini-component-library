/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size = "medium" }) => {
  const VAL_MIN = 0,
    VAL_MAX = 100;
  if (value < VAL_MIN || VAL_MAX < value) {
    return "INVALID VALUE"
  }
  var valRange = VAL_MAX - VAL_MIN,
    percentComplete = Math.round(((value - VAL_MIN) / valRange) * 100);

  var Component;
  if (size === "small") {
    Component = WrapperSmall;
  } else if (size === "medium") {
    Component = WrapperMedium;
  } else {
    Component = ({ children }) => <WrapperLarge><WrapperPadding>{children}</WrapperPadding></WrapperLarge>;;
  }
  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={VAL_MIN}
      aria-valuemax={VAL_MAX}
    >
      <Bar percentComplete={percentComplete}>
        <VisuallyHidden>{percentComplete}%</VisuallyHidden>
      </Bar>
    </Component>
  );
};

const WrapperBase = styled.div`
position:relative;
background-color: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
/* trim corners when progress bar is near full */
overflow:hidden;
`;

const WrapperSmall = styled(WrapperBase)`
height: 8px;
border-radius: 4px;
`;
const WrapperMedium = styled(WrapperBase)`
height: 12px;
border-radius: 4px;
`;
const WrapperLarge = styled(WrapperBase)`
height: 24px;
border-radius: 8px;
`;

const WrapperPadding = styled.div`
position:absolute;
top:4px;
bottom:4px;
left:4px;
right:4px;
border-radius: 4px;
overflow: hidden;
`;

const Bar = styled.div`
position: absolute;
top:0;
bottom: 0;
left:0;
width: ${p => p.percentComplete}%;
background-color: ${COLORS.primary};
`;

export default ProgressBar;
