import { useState, useEffect } from 'react';

export function useSingleAndDoubleClick(
  actionSimpleClick: () => void,
  actionDoubleClick: () => void,
  delay: number = 250,
): () => void {
  const [click, setClick] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (click === 1) actionSimpleClick();
      setClick(0);
    }, delay);

    if (click === 2) actionDoubleClick();

    return () => clearTimeout(timer);
  }, [click, actionSimpleClick, actionDoubleClick, delay]);

  return () => setClick(prev => prev + 1);
}
