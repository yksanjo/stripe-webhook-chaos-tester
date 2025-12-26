import { delayedDelivery } from './scenarios/delayedDelivery';
import { duplicateEvents } from './scenarios/duplicateEvents';
import { outOfOrder } from './scenarios/outOfOrder';
import { partialFailure } from './scenarios/partialFailure';

export type Scenario = 'delayed' | 'duplicate' | 'out-of-order' | 'partial-failure';

export async function runScenario(scenario: Scenario, url: string, payload: any, options?: any): Promise<void> {
  switch (scenario) {
    case 'delayed':
      await delayedDelivery(url, payload, options?.delay || 5000);
      break;
    case 'duplicate':
      await duplicateEvents(url, payload, options?.count || 2);
      break;
    case 'out-of-order':
      await outOfOrder(url, options?.events || [payload]);
      break;
    case 'partial-failure':
      await partialFailure(url, payload);
      break;
  }
}

