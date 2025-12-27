import { RootUser } from '@/@types/userResponse';
import { delay } from '@/helpers/helpers';

const cacheId = new Map();

export const getUser = async (
  id?: FormDataEntryValue | null,
  delayMS: number = 2000
): Promise<RootUser> => {
  if (cacheId.has(id)) {
    return;
  }
  cacheId.set(id, id);
  let url: string = `https://jsonplaceholder.typicode.com/users`;

  //COMMENT: задержка
  await delay(delayMS);

  if (!isNaN(+id)) {
    url = `https://jsonplaceholder.typicode.com/users/${id}`;
  }
  const users = await fetch(url);

  const user = await users.json().finally(() => cacheId.delete(id));

  return user;
};
