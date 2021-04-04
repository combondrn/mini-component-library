import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <FakeSelect>
        <HiddenSelect value={value} onChange={onChange}>
          {children}
        </HiddenSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + 'px' }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </FakeSelect>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </>
  );
};

const FakeSelect = styled.button`
display:block;
 position: relative;
 background-color: ${COLORS.transparentGray15};
 padding: 12px 52px 12px 16px; 
 border-radius: 8px;
 font-size: ${16 / 16}rem;
 color: ${COLORS.gray700};
 border:none;

 &:hover {
 color: ${COLORS.black};
 }
`;

const HiddenSelect = styled.select`
 position: absolute;
 top: 0;
 left:0;
 width: 100%;
 height: 100%;
 opacity:0.0;
`;

const IconWrapper = styled.div`
position:absolute;
right:10px;
top:0;
bottom:0;
width: var(--size);
height: var(--size);
margin:auto;
pointer-events:none;
`;

export default Select;
