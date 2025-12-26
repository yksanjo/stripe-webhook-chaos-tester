# Stripe Webhook Chaos Tester

Chaos testing tool for Stripe webhooks. Tests delayed delivery, duplicate events, out-of-order events, and partial payload failures.

## Why Stripe Would Care

- **Reduces outages blamed on Stripe** - Helps merchants build resilient webhook handlers
- **Improves platform resilience** - Better webhook handling across ecosystem
- **Easy MVP** - Simple but valuable tool

## Features

- ⏱️ **Delayed Delivery**: Test webhook handlers with delayed events
- 🔁 **Duplicate Events**: Send duplicate webhook events
- 🔀 **Out-of-Order**: Test event ordering handling
- 💥 **Partial Failures**: Test with incomplete payloads
- 🔧 **GitHub Actions**: CI/CD integration

## Usage

```bash
stripe-chaos test --url https://your-webhook.com/webhook --scenario delayed
```

## Scenarios

- `delayed` - Delayed webhook delivery
- `duplicate` - Duplicate events
- `out-of-order` - Events out of order
- `partial-failure` - Incomplete payloads

## License

MIT

