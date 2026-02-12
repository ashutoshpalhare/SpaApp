export type StaticCategory = 'Core' | 'Operations' | 'Growth' | 'Archive';

export interface Static {
  id: string;
  title: string;
  category: StaticCategory;
  metricValue: number;
  createdAt: string;
}
