'use server';

import { RootUser } from '@/@types/userResponse';
import { delay } from '@/helpers/helpers';
import { log } from 'node:console';

export const getUser = async (
  id?: FormDataEntryValue | null,
  delayMS: number = 2000
): Promise<RootUser> => {
  let url: string = `https://jsonplaceholder.typicode.com/users`;
  //COMMENT: задержка
  await delay(delayMS);

  if (typeof +id === 'number') {
    url = `https://jsonplaceholder.typicode.com/users/${id}`;
  }
  const users = await fetch(url);

  const user = await users.json();

  if (Array.isArray(user)) {
    return user[0];
  }
  return user;
};
