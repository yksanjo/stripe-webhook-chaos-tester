import Stripe from 'stripe';

export class WebhookSender {
  static createTestEvent(type: string, data: any): Stripe.Event {
    return {
      id: `evt_test_${Date.now()}`,
      object: 'event',
      api_version: '2024-11-20.acacia',
      created: Math.floor(Date.now() / 1000),
      data: { object: data },
      livemode: false,
      pending_webhooks: 0,
      request: { id: null, idempotency_key: null },
      type: type as Stripe.Event.Type,
    };
  }

  static async send(url: string, event: Stripe.Event, signature?: string): Promise<void> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (signature) {
      headers['stripe-signature'] = signature;
    }

    await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(event),
    });
  }
}

