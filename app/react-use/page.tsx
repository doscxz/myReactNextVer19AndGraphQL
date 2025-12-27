import { RootUser } from '@/@types/userResponse';
import { getUser } from '@/api/getUser';
import { Suspense, use } from 'react';

function UserContent({ userPromise }: { userPromise: Promise<RootUser> }) {
  const user = use(userPromise);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.phone}</h3>
    </div>
  );
}

const ReactUse = () => {
  const userPromise = getUser();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserContent userPromise={userPromise} />
    </Suspense>
  );
};

export default ReactUse;
