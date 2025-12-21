import { RootUser } from '@/@types/userResponse';
import { delay } from '@/helpers/helpers';

export const getUser = async (delayMS: number = 2000): Promise<RootUser> => {
  // задержка
  await delay(delayMS);
  const users = await fetch('https://jsonplaceholder.typicode.com/users');

  const user = await users.json();

  return user[0];
};
