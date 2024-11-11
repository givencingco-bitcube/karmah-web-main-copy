'use client';

import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

export function AppSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  const handleIconClick = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (searchValue === '') {
      setIsExpanded(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <Search
        className={cn(
          'h-6 w-6 text-muted-foreground transition-all duration-300 ease-in-out stroke-primary-saturn-orange',
          isExpanded
            ? 'absolute left-3 top-1/2 -translate-y-1/2'
            : 'cursor-pointer',
        )}
        onClick={handleIconClick}
      />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className={cn(
          'pl-10 transition-all duration-300 ease-in-out',
          isExpanded ? 'w-64 opacity-100' : 'w-0 opacity-0',
        )}
      />
    </div>
  );
}

export function AppSearchInput() {
  return (
    <div className="relative flex items-center">
      <Search className="h-6 w-6 text-muted-foreground stroke-primary-saturn-orange" />
      <Input type="text" placeholder="Search..." className="pl-10" />
    </div>
  );
}
