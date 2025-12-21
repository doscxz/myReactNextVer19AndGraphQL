'use client';
import { RootUser } from '@/@types/userResponse';
import { getUser } from '@/api/getUser';
import { CustomButton } from '@/shared/CustomButton';
import { useState, useTransition } from 'react';

const TransitionReact = () => {
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
    <div className="flex flex-col gap-2.5">
      {isLoading && <span>Загрузка...</span>}
      {error && <span>{error}</span>}
      {user && (
        <>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
        </>
      )}
      <CustomButton
        onClick={reqUser}
        className="px-2 py-3 rounded-full bg-amber-700 text-amber-100 w-[200px]"
      >
        Запросить пользака
      </CustomButton>
    </div>
  );
};

export default TransitionReact;
