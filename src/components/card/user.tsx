import React from 'react';
import { Wrapper } from '../primitives/wrapper';
import { ButtonPost } from '../primitives/button/post';
import { cardBackgroundColor, fontSize, textColor, userCardHeight, userCardWidth } from '../../theme/main';

type UserCardProps = {
  name: string;
  email: string;
  telephone: string;
};

export const UserCard = ({ name, email, telephone }: UserCardProps) => {
  const UserCardText = ({ children }: { children: string }) => (
    <Wrapper css={'font-size: ' + fontSize.NORMAL + 'px;color: ' + textColor}>{children}</Wrapper>
  );

  return (
    <Wrapper
      width={userCardWidth}
      height={userCardHeight}
      background={cardBackgroundColor}
      css="display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;"
    >
      <UserCardText>{name}</UserCardText>
      <UserCardText>{email}</UserCardText>
      <UserCardText>{telephone}</UserCardText>
      <ButtonPost onClick={() => alert('Not implemented')} css="margin-top:1em;">
        Posts
      </ButtonPost>
    </Wrapper>
  );
};
