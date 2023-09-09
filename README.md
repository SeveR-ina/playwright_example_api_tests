# Playwright API Tests

This repository contains API tests using Playwright + TypeScript. We send requests to a JSONPlaceholder API with randomized data.

## Folder Structure

- **tests**: Contains test scripts.

- **utils**: Utility scripts, including a logger.

## Configuration Files

- **.env**: Set the API base URL.

- **playwright.config.ts**: Playwright Test configuration.

## Utility Module

- **utils/logger.ts**: Logger module for test logs.

## Example Tests

- **tests/users.test.ts**: API tests for JSONPlaceholder, including GET and POST requests.

## Getting Started

1. Clone the repo.

2. Install dependencies with `npm install`

3. Ensure Playwright dependencies are installed. Installation command: `npm init playwright@latest`

4. Ensure Prettier dependencies are installed. Installation command: `npm install --save-dev eslint-config-prettier` and then `npm install --save-dev --save-exact prettier`

5. Ensure ESLint dependencies are installed. Installation command: `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript`

6. Ensure Faker dependencies are installed. Installation command: `npm install --save-dev @faker-js/faker`

7. Ensure Dotenv dependencies are installed. Installation command: `npm install dotenv --save`

8. Run tests with `npx playwright test` or manually by clicking on green run buttons near test methods

## Test Reports

Test reports are available in the `playwright-report` directory.