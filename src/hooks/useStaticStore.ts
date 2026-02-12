import { useState } from 'react';
import { Static } from '../types/static';
import { INITIAL_STATICS } from '../data/seed';

export function useStaticStore() {
  const [items, setItems] = useState<Static[]>(INITIAL_STATICS);

  function addItem(entry: Omit<Static, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = new Date().toISOString();
    setItems((prev) => [
      { ...entry, id: crypto.randomUUID(), createdAt: now, updatedAt: now },
      ...prev,
    ]);
  }

  return { items, addItem };
}
