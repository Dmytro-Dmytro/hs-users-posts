import React, { useState, useEffect } from 'react';
import { UserCard } from './components/card/user';
import { SVGPrevious } from './components/primitives/arrow/left';
import { SVGNext } from './components/primitives/arrow/right';
import { ButtonCommand } from './components/primitives/button/command';
import { Wrapper } from './components/primitives/wrapper';
import { Search } from './components/search';
import { endpoints } from './enums/endpoints';
import { drawUsers } from './helpers/drawUsers';
import { sortUsers } from './helpers/sortUsers';
import { bodyBackgroundColor, marginForButtonsX, marginForButtonsY } from './theme/main';
// import { callAPI } from './helpers/API';

type UserType = {
  username: string;
  name: string;
  email: string;
  phone: string;
};

type DataType = {
  users: UserType[];
  startPosition: number;
  filter: string;
  usersFiltered: UserType[];
};

export const data: DataType = {
  users: [],
  startPosition: 0,
  filter: '',
  usersFiltered: [],
};

function changeFilter(setUsers: Function) {
  return (event: any) => {
    data.filter = event.target.value;
    data.startPosition = 0;
	const findStr = data.filter.toUpperCase();
    data.usersFiltered = data.users.filter(elem => elem.name.toUpperCase().includes(findStr));
    setUsers(generateUserCardList());
  };
}

export const generateUserCardList = () => {
  return data.usersFiltered
    .slice(data.startPosition, data.startPosition + 4)
    .map((item, index) => <UserCard name={item.name} email={item.email} telephone={item.phone} key={index} />);
};

function App() {
  const [userCardList, setUsers] = useState(generateUserCardList());

  useEffect(() => {
    // const resultFromAPI = callAPI();
    // setUsers(resultFromAPI);

    fetch(endpoints.USERS)
      .then(res => res.json())
      .then(result => {
        data.users = result;
        data.usersFiltered = result;
        setUsers(generateUserCardList());
      })
      .catch(error => {
        throw error;
      });
  }, []);

  return (
    <div style={{ height: '100vh', background: bodyBackgroundColor, overflow: 'hidden' }}>
      <ButtonCommand
        onClick={() => sortUsers(setUsers)}
        css={'position:absolute;top:' + marginForButtonsY + 'px;left:' + marginForButtonsX + 'px;'}
      >
        Sort
      </ButtonCommand>
      <Search
        onChange={changeFilter(setUsers)}
        css={'position:absolute;top:' + marginForButtonsY + 'px;right:' + marginForButtonsX + 'px;'}
      />

      <Wrapper
        css="height: 100%;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;
        justify-content: center;
        align-content: center;"
      >
        {userCardList}
      </Wrapper>

      <ButtonCommand
        onClick={() => drawUsers(-4, setUsers)}
        css={'position:absolute;bottom:' + marginForButtonsY + 'px;left:' + marginForButtonsX + 'px;}'}
      >
        {SVGPrevious()}
        <span style={{ marginLeft: 30 }}>Previous</span>
      </ButtonCommand>
      <ButtonCommand
        onClick={() => drawUsers(4, setUsers)}
        css={'position:absolute;bottom:' + marginForButtonsY + 'px;right:' + marginForButtonsX + 'px;'}
      >
        <span style={{ marginRight: 30 }}>Next</span>
        {SVGNext()}
      </ButtonCommand>
    </div>
  );
}

export default App;
