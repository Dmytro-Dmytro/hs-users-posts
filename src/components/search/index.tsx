import React from 'react';
import styled from 'styled-components';
import {
  borderRadius as borderRadiusTheme,
  buttonHeight,
  buttonWidth,
  cardBackgroundColor,
  fontSize as fontSizeTheme,
  textColor,
} from '../../theme/main';

type SearchProps = {
  width?: number | undefined;
  height?: number | undefined;
  background?: string;
  borderRadius?: number | undefined;
  fontSize?: number;
  color?: string;
  css?: string;
  onChange: Function;
};

type SearchStyledProps = { param: SearchProps };

const SearchStyled = styled.input.attrs<SearchStyledProps>(props => ({
  onChange: props.param.onChange,
  name: 'filter',
}))<SearchStyledProps>`
  width: ${props => props.param.width}px;
  height: ${props => props.param.height}px;
  background: ${props => props.param.background};
  border-radius: ${props => props.param.borderRadius}px;
  font-size: ${props => props.param.fontSize}px;
  color: ${props => props.param.color};
  &::placeholder {
    color: ${props => props.param.color};
  }
  padding: 0 30px;
  border: none;
  outline: none;
  ${props => props.param.css}
`;

export const Search = ({
  width = buttonWidth.NORMAL,
  height = buttonHeight.NORMAL,
  background = cardBackgroundColor,
  borderRadius = borderRadiusTheme.NORMAL,
  fontSize = fontSizeTheme.NORMAL,
  color = textColor,
  css,
  onChange,
}: SearchProps) => (
  <SearchStyled
    placeholder="Search"
    param={{ width, height, borderRadius, background, fontSize, color, css, onChange }}
  />
);
