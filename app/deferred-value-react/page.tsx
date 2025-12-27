'use client';

// Не работает из за особенностей next

import { CustomInput } from '@/shared/CustomInput';
import { Suspense, useDeferredValue, useState } from 'react';

const DeferredValueReact = () => {
  const [query, setQuery] = useState<string>('');
  const value = useDeferredValue(query);

  return (
    <>
      <label>
        Search albums:
        <CustomInput value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}></Suspense>
    </>
  );
};

export default DeferredValueReact;
