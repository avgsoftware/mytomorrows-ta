import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUp.po';

let signUpPage: SignUpPage;

test.describe('Signup Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      signUpPage = new SignUpPage(page);
    });

  test('Validate the "Next: verification" button should be disabled by default when opening the create account form', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.assertNextVerificationButtonIsNotVisible();
  });

  test('Validate warning messages when create account form fields are empty', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.assertNextVerificationButtonIsNotVisible();

    await signUpPage.clickOnEmailAddressInput();
    await signUpPage.clickOnConfirmEmailAddressInput();
    await signUpPage.clickOnFirstNameInput();
    await signUpPage.clickOnLastNameInput();

    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertEmptyEmailAddressInputIsVisible();
    await signUpPage.assertEmptyConfirmEmailAddressInputIsVisible();
    await signUpPage.assertEmptyFirstNameInputIsVisible();
    await signUpPage.assertEmptyLastNameIsVisible();
  });

  test('Validate the confirmation email should be identical to the original, otherwise a warning message is shown', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.fillEmaillAddress('John@uk.com');
    await signUpPage.fillConfirmEmailAddress('NotJohn@uk.com')

    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertConfirmEmailDoesNotMatchIsVisible();
  });

  test('Validate the email cannot contain empty spaces', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.fillEmaillAddress('John Cena@uk.com');
    await signUpPage.fillConfirmEmailAddress('John Cena@uk.com')

    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertInvalidEmailAddressIsVisible();
  });

  test('Validate the email address must contain @ (proper domain name format)', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.fillEmaillAddress('JohnCenauk.com');
    await signUpPage.fillConfirmEmailAddress('JohnCenauk.com')

    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertInvalidEmailAddressIsVisible();
  });

  test('Validate the "Next: verification" button is not enabled anymore if T&C box is unchecked', async () => {

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

    await signUpPage.uncheckAgreeToTerms();
    await signUpPage.assertNextVerificationButtonIsNotVisible();
  });

  test('Validate the firstName & lastName should not contain numbers', async () => {

    await signUpPage.navigateToHomePage();
    await signUpPage.clickOnCreateAccount();
    await signUpPage.assertSignUpPageHeadingIsVisible();

    await signUpPage.selectHealthcareProfessional();
    await signUpPage.clickOnCreateAccount();

    await signUpPage.fillEmaillAddress('John@uk.com');
    await signUpPage.fillConfirmEmailAddress('John@uk.com');
    await signUpPage.fillFirstName('11111 22222');
    await signUpPage.fillLastName('33333 44444');

    await signUpPage.checkAgreeToTerms();

    await signUpPage.assertFirstNameInvalidIsVisible();
    await signUpPage.assertLastNameInvalidIsVisible();
  });
});
