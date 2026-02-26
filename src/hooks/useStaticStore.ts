import { useEffect, useMemo, useState } from 'react';
  const [isOpen, setIsOpen] = useState(false);
import { Static, StaticFilter } from '../types/static';
import { INITIAL_STATICS } from '../data/seed';
import { loadPersisted, savePersisted } from '../utils/storage';

export function useStaticStore() {
  const [items, setItems] = useState<Static[]>(() =>
    loadPersisted(INITIAL_STATICS)
  );
  const [filter, setFilter] = useState<StaticFilter>({
    query: '',
    category: 'All',
    status: 'all',
  });

  useEffect(() => {
    savePersisted(items);
  }, [items]);

  const filteredItems = useMemo(() => {
    const q = filter.query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesQuery = !q || item.title.toLowerCase().includes(q);
      const matchesCat = filter.category === 'All' || item.category === filter.category;
      const matchesStatus = filter.status === 'all' || item.status === filter.status;
      return matchesQuery && matchesCat && matchesStatus;
    });
  }, [items, filter]);

  const summary = useMemo(() => {
    const active = items.filter((i) => i.status === 'active');
    const totalMetric = active.reduce((sum, i) => sum + i.metricValue, 0);
    return {
      totalCount: items.length,
      activeCount: active.length,
      totalMetric,
    };
  }, [items]);

  function addItem(entry: Omit<Static, 'id' | 'createdAt' | 'updatedAt'>) {
    const now = new Date().toISOString();
    setItems((prev) => [
      { ...entry, id: crypto.randomUUID(), createdAt: now, updatedAt: now },
      ...prev,
    ]);
  }

  function toggleStatus(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'active' ? 'paused' : 'active',
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return {
    items,
    filteredItems,
    filter,
    setFilter,
    summary,
    addItem,
    toggleStatus,
    removeItem,
  };
}
// TODO: refine useStaticStore.ts layout spacing

      <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>
// TODO: refine useStaticStore.ts layout spacing
// TODO: refine useStaticStore.ts layout spacing
