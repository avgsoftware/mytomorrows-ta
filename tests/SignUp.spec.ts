import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUp.po';

let signUpPage: SignUpPage;

test.describe('Signup Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      signUpPage = new SignUpPage(page);
    });

  test('Validate that signing up with a new account is successful', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.fillEmaillAddress('John@uk.com');
    await signUpPage.fillConfirmEmailAddress('John@uk.com');
    await signUpPage.fillFirstName('John');
    await signUpPage.fillLastName('Doe');
    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertNextVerificationButtonIsVisible();
    await signUpPage.clickNextVerification();
    await signUpPage.assertVerifyYourEmailAddressIsVisible();
  });
});
