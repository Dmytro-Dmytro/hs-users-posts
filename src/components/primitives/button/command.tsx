import React from 'react';
import styled from 'styled-components';
import {
  borderRadius,
  buttonBackgroundColor,
  buttonHeight,
  buttonWidth,
  fontSize,
  textColor,
} from '../../../theme/main';

type ButtonSizeType = 'SMALL' | 'NORMAL' | 'BIG';

type ButtonProps = {
  children: any;
  css?: string;
  onClick: Function;
};

type ButtonStyledProps = {
  size: ButtonSizeType;
  css?: string;
  onClick: any;
};

const ButtonStyled = styled.button.attrs<ButtonStyledProps>(props => ({
  onClick: props.onClick,
}))<ButtonStyledProps>`
  font-size: ${props => fontSize[props.size]}px;
  width: ${props => buttonWidth[props.size]}px;
  height: ${props => buttonHeight[props.size]}px;
  border-radius: ${props => borderRadius[props.size]}px;

  font-weight: 600;
  border: none;

  background: ${'transparent'};
  color: ${textColor};
  cursor: pointer;
  &:hover {
    background: ${buttonBackgroundColor};
  }
  ${props => props.css}
`;

export const ButtonCommand = ({ children, css, onClick }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} size={'NORMAL'} css={css}>
      {children}
    </ButtonStyled>
  );
};
