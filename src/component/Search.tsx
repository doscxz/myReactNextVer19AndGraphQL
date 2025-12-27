'use client';

import { CustomInput } from '@/shared/CustomInput';
import { useState } from 'react';

interface Props {
  sendValue: (query: string) => void;
}

const Search = ({ sendValue }: Props) => {
  const [query, setQuery] = useState<string>();

  sendValue(query);

  return (
    <label>
      Search albums:
      <CustomInput value={query} onChange={(e) => setQuery(e.target.value)} />
    </label>
  );
};

export default Search;
