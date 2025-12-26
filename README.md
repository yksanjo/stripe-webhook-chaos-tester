# Stripe Webhook Chaos Tester 🧪

[![GitHub stars](https://img.shields.io/github/stars/yksanjo/stripe-webhook-chaos-tester?style=social)](https://github.com/yksanjo/stripe-webhook-chaos-tester)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)

Chaos testing tool for Stripe webhooks. Tests delayed delivery, duplicate events, out-of-order events, and partial payload failures.

## 📸 Screenshots

### CLI Usage
![CLI Usage](https://via.placeholder.com/800x400/1F2937/FFFFFF?text=Chaos+Test+CLI+Output)

*Command line output showing chaos test scenarios*

### Test Scenarios
![Test Scenarios](https://via.placeholder.com/800x600/EF4444/FFFFFF?text=Webhook+Chaos+Test+Scenarios)

*Different chaos test scenarios (delayed, duplicate, out-of-order, partial failure)*

### GitHub Actions Integration
![GitHub Actions](https://via.placeholder.com/800x400/2088FF/FFFFFF?text=GitHub+Actions+Workflow)

*GitHub Actions workflow running chaos tests*

*Note: Add actual screenshots after running the tool*

## 🎯 Why Stripe Would Care

- **Reduces outages blamed on Stripe** - Helps merchants build resilient webhook handlers
- **Improves platform resilience** - Better webhook handling across ecosystem
- **Easy MVP** - Simple but valuable tool
- **Strategic value** - Reduces support burden from webhook issues

## ✨ Features

- ⏱️ **Delayed Delivery**: Test webhook handlers with delayed events
- 🔁 **Duplicate Events**: Send duplicate webhook events
- 🔀 **Out-of-Order**: Test event ordering handling
- 💥 **Partial Failures**: Test with incomplete payloads
- 🔧 **GitHub Actions**: CI/CD integration
- 📊 **Test Reports**: Generate test reports

## 📦 Installation

```bash
git clone https://github.com/yksanjo/stripe-webhook-chaos-tester.git
cd stripe-webhook-chaos-tester
npm install
npm run build
```

## 🚀 Quick Start

### Basic Usage

```bash
stripe-chaos test \
  --url https://your-webhook.com/webhook \
  --scenario delayed \
  --delay 5000
```

### Available Scenarios

- `delayed` - Delayed webhook delivery
- `duplicate` - Duplicate events
- `out-of-order` - Events out of order
- `partial-failure` - Incomplete payloads

### Example Commands

```bash
# Test delayed delivery
stripe-chaos test --url https://api.example.com/webhook --scenario delayed --delay 5000

# Test duplicate events
stripe-chaos test --url https://api.example.com/webhook --scenario duplicate --count 3

# Test out-of-order events
stripe-chaos test --url https://api.example.com/webhook --scenario out-of-order

# Test partial failure
stripe-chaos test --url https://api.example.com/webhook --scenario partial-failure
```

## 🔧 GitHub Actions Integration

Add to `.github/workflows/chaos-test.yml`:

```yaml
name: Webhook Chaos Tests

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Run chaos tests
        run: |
          npm run start test -- --url ${{ secrets.WEBHOOK_URL }} --scenario delayed
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run in development
npm run dev

# Test locally
npm run start test -- --url http://localhost:3000/webhook --scenario delayed
```

## 📁 Project Structure

```
stripe-webhook-chaos-tester/
├── src/
│   ├── chaos/
│   │   ├── scenarios/
│   │   │   ├── delayedDelivery.ts
│   │   │   ├── duplicateEvents.ts
│   │   │   ├── outOfOrder.ts
│   │   │   └── partialFailure.ts
│   │   └── runner.ts
│   ├── sender/
│   │   └── webhookSender.ts
│   └── cli.ts
├── .github/
│   └── workflows/
│       └── chaos-test.yml
└── package.json
```

## 🤝 Contributing

Contributions welcome! This tool helps merchants build resilient webhook handlers.

1. Fork the repository
2. Create your feature branch
3. Add new chaos scenarios
4. Commit your changes
5. Push to the branch
6. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🔗 Related Projects

- [Stripe Integration Risk Scanner](https://github.com/yksanjo/stripe-integration-risk-scanner)
- [Stripe Compliance-as-Code](https://github.com/yksanjo/stripe-compliance-as-code)
- [Stripe Kill Switch](https://github.com/yksanjo/stripe-kill-switch)

## 📧 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Made with ❤️ for the Stripe ecosystem**
