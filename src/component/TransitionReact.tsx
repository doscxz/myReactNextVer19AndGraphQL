'use client';
import { RootUser } from '@/@types/userResponse';
import { getUser } from '@/api/getUser';
import { useState, useTransition } from 'react';

export const TransitionReact = () => {
  const [user, setUser] = useState<RootUser>();
  const [error, setError] = useState<string>();
  const [isLoading, startTransition] = useTransition();

  const reqUser = () => {
    startTransition(async () => {
      const user = await getUser();

      if (user) {
        setUser(user);
        return;
      }
      setError('Не удалось найти');
    });
  };

  return (
    <div>
      {isLoading && <span>Загрузка...</span>}
      {error && <span>{error}</span>}
      {user && (
        <>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
        </>
      )}
      <button onClick={reqUser}>Запросить пользака</button>
    </div>
  );
};
