import { SectionClient } from '../@types/Section';
import { mswInstance } from '../client';

const ROUTE = 'sections';

export const SectionServices: SectionClient = {
  get: async () => {
    return await mswInstance.get(`${ROUTE}/`);
  },
  create: async request => {
    return await mswInstance.post(`${ROUTE}/`, request);
  },
};
