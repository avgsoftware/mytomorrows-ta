# myTomorrows user account creation tests

This project contains automated tests designed to verify the functionality user accounts creation on https://platform-qa.mytomorrows.com/
The tests cover both positive and negative scenarios to ensure the reliability and correctness of the Web FE.

Created with TypeScript, and Playwright.

## Covered test scenarios

- **Create accounts happy flows**: Tests validating the creation of users with valid data.
- **Create accounts unhappy flows**: Tests validating the creation of users with invalid data fails.

## Prerequisites

- Node.js (version used: v20.12.2)
- TypeScript (version used: v5.4.5)
- Playwright (version used: v1.44.0)

## Getting Started

To get started with this project, follow these steps:

### Installation and running tests

1. Clone the repository:
   ```bash
   git clone 
   cd path-to-your-project
2. Install npm 
   ```bash
   npm install
3. Run tests
   ```bash
   npx playwright test