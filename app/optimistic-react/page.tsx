'use client';

import { getUser } from '@/api/getUser';
import { CustomButton } from '@/shared/CustomButton';
import { CustomInput } from '@/shared/CustomInput';
import { useEffect, useOptimistic, useState } from 'react';

const NAME_INPUT = 'name';
const USER_ID = '2';
function OptimisticReact() {
  const [currentName, setCurrentName] = useState<string | null>(null);

  const [optimisticName, setOptimisticName] = useOptimistic(null);

  useEffect(() => {
    const fetchInitialName = async () => {
      try {
        const user = await getUser(USER_ID);
        setCurrentName(user.name);
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };
    fetchInitialName();
  }, []);

  const submitAction = async (formData: FormData) => {
    const newName = formData.get(NAME_INPUT) as string;

    setOptimisticName(newName);
    const updatedUser = await getUser(USER_ID);
    setCurrentName(updatedUser.name);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName || currentName || 'Loading...'}</p>
      <p>
        <label>Change Name:</label>
        <CustomInput
          type="text"
          name={NAME_INPUT}
          disabled={currentName === optimisticName}
        />
        <CustomButton>send</CustomButton>
      </p>
    </form>
  );
}

export default OptimisticReact;
