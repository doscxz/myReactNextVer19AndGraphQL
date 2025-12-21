'use client';
import { getUser } from '@/api/getUser';
import { ComponentFromStatus } from '@/component/ComponentFromStatus';
import { CustomButton } from '@/shared/CustomButton';
import { CustomInput } from '@/shared/CustomInput';
import { useActionState } from 'react';

const INPUT_UPDATE = 'id';

const ActionStateReact = () => {
  const [user, submitAction, isPending] = useActionState<
    ReturnType<typeof getUser> | null,
    FormData
  >(async (previousState, formData) => {
    console.log(
      'formData.get(INPUT_UPDATE):>>',
      formData.get(INPUT_UPDATE),
      'previousState:>',
      previousState
    );

    const user = await getUser(formData.get(INPUT_UPDATE));

    console.log(user);

    if (user) {
      return user;
    }

    return null;
  }, null);

  return (
    <form action={submitAction}>
      <ComponentFromStatus />
      <CustomInput type="text" name={INPUT_UPDATE} />
      <CustomButton type="submit" disabled={isPending}>
        Update
      </CustomButton>
      {user && <h1>{user.name}</h1>}
    </form>
  );
};

export default ActionStateReact;
