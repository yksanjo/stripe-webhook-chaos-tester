#!/usr/bin/env node

import { Command } from 'commander';
import { runScenario, Scenario } from './chaos/runner';
import { WebhookSender } from './sender/webhookSender';

const program = new Command();

program
  .name('stripe-chaos')
  .description('Chaos testing tool for Stripe webhooks')
  .version('1.0.0');

program
  .command('test')
  .description('Run a chaos test scenario')
  .requiredOption('-u, --url <url>', 'Webhook URL to test')
  .requiredOption('-s, --scenario <scenario>', 'Scenario: delayed, duplicate, out-of-order, partial-failure')
  .option('-t, --type <type>', 'Event type (e.g., payment_intent.succeeded)', 'payment_intent.succeeded')
  .option('-d, --delay <ms>', 'Delay in milliseconds', '5000')
  .option('-c, --count <count>', 'Number of duplicates', '2')
  .action(async (options) => {
    const event = WebhookSender.createTestEvent(options.type, {
      id: `pi_test_${Date.now()}`,
      object: 'payment_intent',
      amount: 1000,
      currency: 'usd',
      status: 'succeeded',
    });

    await runScenario(options.scenario as Scenario, options.url, event, {
      delay: parseInt(options.delay),
      count: parseInt(options.count),
    });

    console.log(`✅ Scenario "${options.scenario}" completed`);
  });

program.parse();

