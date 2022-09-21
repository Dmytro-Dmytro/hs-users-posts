import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { borderRadius as borderRadiusTheme } from '../../../theme/main';

type WrapperProps = {
  width?: number | undefined;
  height?: number | undefined;
  borderRadius?: number | undefined;
  background?: string;
  css?: string;
  children?: ReactNode;
};

const WrapperStyled = styled.div<WrapperProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;
  background: ${props => props.background};
  ${props => props.css}
`;

export const Wrapper = ({
  width,
  height,
  borderRadius = borderRadiusTheme.NORMAL,
  background,
  css,
  children,
}: WrapperProps) => (
  <WrapperStyled width={width} height={height} borderRadius={borderRadius} background={background} css={css}>
    {children}
  </WrapperStyled>
);
