export type SpaService = {
  id: string;
  category: 'Massage' | 'Skin' | 'Body' | 'Rituals';
  name: string;
  time: string;
  price: number;
  note: string;
  image: string;
};

export const services: SpaService[] = [
  { id: 'calm', category: 'Massage', name: 'Signature Calm Massage', time: '60 min', price: 1800, note: 'A slow, grounding full-body ritual designed to help you exhale.', image: 'photo-1540555700478-4be289fbecef' },
  { id: 'deep', category: 'Massage', name: 'Deep Restore Therapy', time: '75 min', price: 2400, note: 'Focused pressure and considered techniques for tired muscles.', image: 'photo-1519823551278-64ac92734fb1' },
  { id: 'glow', category: 'Skin', name: 'Botanical Glow Facial', time: '50 min', price: 1600, note: 'A gentle, plant-inspired facial for a fresh, dewy finish.', image: 'photo-1570172619644-dfd03ed5d881' },
  { id: 'body', category: 'Body', name: 'Warm Stone Ritual', time: '80 min', price: 2800, note: 'Soothing warmth and mindful touch in one restorative escape.', image: 'photo-1544161515-4ab6ce6db874' },
  { id: 'feet', category: 'Body', name: 'Rest & Renew Foot Ritual', time: '40 min', price: 1100, note: 'A little care for the part of you that carries you everywhere.', image: 'photo-1518611012118-696072aa579a' },
  { id: 'duo', category: 'Rituals', name: 'Togetherness Retreat', time: '90 min', price: 5200, note: 'A shared moment of quiet, made for two.', image: 'photo-1515377905703-c4788e51af15' },
];

export const serviceCategories = ['All', 'Massage', 'Skin', 'Body', 'Rituals'] as const;
