import { data, generateUserCardList } from '../App';

export const drawUsers = (delta: number, setUsers: Function) => {
  data.startPosition += delta;
  data.startPosition = Math.max(0, data.startPosition);

  if (data.startPosition >= data.usersFiltered.length) data.startPosition -= delta;
  setUsers(generateUserCardList());
};
