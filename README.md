# Learning Playwright Fundamentals

A hands-on project for learning Playwright test automation fundamentals with TypeScript.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/01_Basics/Lab209.spec.ts
```

## Project Structure

```
├── tests/
│   └── 01_Basics/           # Basic Playwright test examples
│       ├── Lab209.spec.ts   # Title verification test
│       └── Lab210_Test_Annoations.spec.ts  # Test annotations demo
├── playwright.config.ts     # Playwright configuration
├── package.json
└── .github/
    └── workflows/
        └── playwright.yml   # CI/CD workflow
```

## Test Examples

### Basic Title Verification (Lab209)
Demonstrates basic page navigation and title assertion.

### Test Annotations (Lab210)
Demonstrates Playwright test annotations:
- `test.skip()` - Skip a test
- `test.only()` - Run only this test
- `test.fail()` - Mark test as expected to fail
- `test.slow()` - Extend timeout (3x)
- Conditional skip based on browser

## Viewing Reports

```bash
# Open HTML report after test run
npx playwright show-report
```

## CI/CD

This project includes a GitHub Actions workflow that:
- Runs on push/PR to main/master branches
- Installs dependencies and Playwright browsers
- Runs all tests
- Uploads test reports as artifacts

## Configuration

The `playwright.config.ts` file includes:
- Test directory: `./tests`
- Parallel execution enabled
- HTML reporter
- Chromium browser configured
- Trace collection on first retry

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
