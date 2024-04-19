import { retrospectivesTemplateClient } from '../@types/RetrospectiveTemplates';
import { mswInstance } from '../client';

const ROUTE = 'retrospectivesTemplate';

export const RetrospectiveTemplateService: retrospectivesTemplateClient = {
  get: async () => {
    return await mswInstance.get(`${ROUTE}/`);
  },
};
