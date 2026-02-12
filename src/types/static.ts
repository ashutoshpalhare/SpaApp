export type StaticCategory = 'Core' | 'Operations' | 'Growth' | 'Archive';

export type StaticStatus = 'active' | 'paused' | 'archived';

export interface Static {
  id: string;
  title: string;
  category: StaticCategory;
  status: StaticStatus;
  metricValue: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StaticFilter {
  query: string;
  category: StaticCategory | 'All';
  status: StaticStatus | 'all';
}
