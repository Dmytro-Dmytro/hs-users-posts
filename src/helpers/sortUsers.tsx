import { data, generateUserCardList } from '../App';

export const sortUsers = (setUsers: Function) => {
  data.users.sort((a, b) => (a.name < b.name ? -1 : 1));
  data.startPosition = 0;
  const findStr = data.filter.toUpperCase();
  data.usersFiltered = data.users.filter(elem => elem.name.toUpperCase().includes(findStr));
  setUsers(generateUserCardList());
};
