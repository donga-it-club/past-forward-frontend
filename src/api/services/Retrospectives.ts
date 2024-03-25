import { RetrospectivesClient } from '../@types/Retrospectives';
import { mswInstance } from '../client';

const ROUTE = 'retrospectivesTemplate';

export const Retrospective: RetrospectivesClient = {
  postRetrospectives: async request => {
    return await mswInstance.post(`${ROUTE}/`, {
      params: request,
    });
  },
};
