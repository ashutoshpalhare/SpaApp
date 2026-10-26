import { describe, expect, it } from 'vitest';
import { formatCurrency } from '../utils/formatCurrency';
import { services, serviceCategories } from '../data/services';

describe('spa experience content', () => {
  it('formats service prices as Indian rupees without decimal noise', () => {
    expect(formatCurrency(1800)).toBe('₹1,800');
    expect(formatCurrency(5200)).toBe('₹5,200');
  });

  it('has unique service ids and valid categories', () => {
    expect(new Set(services.map((service) => service.id)).size).toBe(services.length);
    for (const service of services) {
      expect(serviceCategories).toContain(service.category);
      expect(service.price).toBeGreaterThan(0);
      expect(service.time).toMatch(/\d+ min/);
    }
  });
});
