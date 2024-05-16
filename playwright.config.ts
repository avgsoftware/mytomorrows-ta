import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Tests folder location
    testDir: './tests',

    // // File patterns to find test files
    // testMatch: '**/*.spec.ts',

    // Test browser/s
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        }
    ],

    // Define global settings
    expect: { timeout: 1000 * 1000 },
    timeout: 1000000,
    use: {
        baseURL: 'https://platform-qa.mytomorrows.com',
        headless: true,  // Run browser in headless mode
        viewport: { width: 1400, height: 900 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure', // Record video only for failed tests
    },

    // Configure output for test results
    reporter: 'html',
};

export default config;
