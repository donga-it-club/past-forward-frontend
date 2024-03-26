import { retrospectivesTemplateClient } from '../@types/RetrospectiveTemplates';
import { mswInstance } from '../client';

const ROUTE = 'retrospectivesTemplate';

export const RetrospectiveTemplateService: retrospectivesTemplateClient = {
  getRetrospectivesTemplate: async () => {
    return await mswInstance.get(`${ROUTE}/`);
  },
};
