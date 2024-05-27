'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Changed from 'next/router'
import { SearchIcon } from 'lucide-react';
import { Button } from 'flowbite-react';
 

const SearchForm: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Redirect to the search page with the search keywords
      router.push(``);
    },
    [searchTerm, router]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch(e as any); // You can also create a separate function for this if needed
      }
    },
    [handleSearch]
  );

  return (
    <form style={{ backgroundColor: '#037b21' }}  onSubmit={handleSearch} className="flex w-full items-center space-x-2 py-6">

      <input style={{borderRadius:'10px'}}
        type="text"
        className="bg-white w-full"
        placeholder="Search Anything You Want...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
            <Button style={{borderRadius:'5px', border:'1px solid black'}} className='hover:bg-gray-500 text-black  hover:text-white bg-white text-md font-semibold' type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
