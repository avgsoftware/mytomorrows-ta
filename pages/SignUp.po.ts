import { Page } from 'playwright';
import { HomePage } from '../utils/HomePage';
import { expect } from 'playwright/test';

export class SignUpPage extends HomePage {
  constructor(page: Page) {
    super(page);
  }

  async clickOnCreateAccount() {
    await this.page.getByText('Create account').click();
  }

  async assertSignUpPageHeadingIsVisible(){
    expect(this.page.getByRole('heading', {name:'Create your account'})).toBeVisible;
  }

  async selectPatientOrCaregiver() {
    await this.page.getByText('personal_injury').click();
  }

  async selectHealthcareProfessional() {
    await this.page.getByText('local_hospital').click();
  }

  async clickOnEmailAddressInput(){
    await this.page.locator( '.mat-mdc-form-field-flex' ).nth(0).locator( 'input' ).click();
  }

  async fillEmaillAddress(emailAddress: string) {
    await this.page.locator( '.mat-mdc-form-field-flex' ).nth(0).locator( 'input' ).fill(emailAddress);
    await this.page.waitForTimeout(1000);
  }

  async clickOnConfirmEmailAddressInput() {
    await this.page.locator( '.mat-mdc-form-field-flex' ).nth(1).locator( 'input' ).click();
  }

  async fillConfirmEmailAddress(confirmEmailAddress: string) {
    await this.page.locator( '.mat-mdc-form-field-flex' ).nth(1).locator( 'input' ).fill(confirmEmailAddress);
    await this.page.waitForTimeout(1000);
  }

  async clickOnFirstNameInput() {
    await this.page.getByPlaceholder( 'First name' ).click();
  }

  async fillFirstName(firstName: string) {
    await this.page.getByPlaceholder( 'First name' ).fill(firstName);
    await this.page.waitForTimeout(1000);
  }

  async clickOnLastNameInput() {
    await this.page.getByPlaceholder( 'Last name' ).click();
  }

  async fillLastName(lastName: string) {
    await this.page.getByPlaceholder( 'Last name' ).fill(lastName);
    await this.page.waitForTimeout(3000);
  }

  async checkAgreeToTerms() {
    await this.page.getByLabel( 'By ticking this box, I' ).check();
    await this.page.waitForTimeout(1000);
  }

  async uncheckAgreeToTerms() {
    await this.page.getByLabel( 'By ticking this box, I' ).uncheck();
    await this.page.waitForTimeout(1000);
  }

  async checkAgreeToComms() {
    await this.page.getByLabel( 'I agree to receiving' ).check();
    await this.page.waitForTimeout(1000);
  }

  async uncheckAgreeToComms() {
    await this.page.getByLabel( 'I agree to receiving' ).uncheck();
    await this.page.waitForTimeout(1000);
  }

  async clickBack() {
    await this.page.getByRole( 'button', { name: 'Back' }).click();
    await this.page.waitForTimeout(1000);
  }

  async assertNextVerificationButtonIsVisible() {
    await this.page.locator('myt-button').filter({ hasText: 'Verify your email address' }).isVisible();
  }

  async assertNextVerificationButtonIsNotVisible() {
    await this.page.locator('myt-button').filter({ hasText: 'Verify your email address' }).isHidden();
  }

  async clickNextVerification() {
    await this.page.locator( 'myt-button' ).filter({ hasText: 'Next: verification' }).click();
    await this.page.waitForTimeout(1000);
  }

  async assertVerifyYourEmailAddressIsVisible() {
    await this.page.getByRole('heading', { name: 'Verify your email address' }).isVisible();
    await this.page.waitForTimeout(3000);
  }

  async assertVerifyYourEmailAddressIsNotVisible() {
    await this.page.getByRole('heading', { name: 'Verify your email address' }).isHidden();
  }

  async assertEmptyEmailAddressInputIsVisible() {
    await this.page.locator('#mat-mdc-error-0').getByText('Field is required').isVisible();
  }

  async assertEmptyConfirmEmailAddressInputIsVisible() {
    await this.page.locator('#mat-mdc-error-1').getByText('Field is required').isVisible();
  }

  async assertEmptyFirstNameInputIsVisible() {
    await this.page.locator('#mat-mdc-error-2').getByText('Field is required').isVisible();
  }

  async assertEmptyLastNameIsVisible() {
    await this.page.locator('#mat-mdc-error-3').getByText('Field is required').isVisible();
  }

  async assertConfirmEmailDoesNotMatchIsVisible() {
    await this.page.getByText('Fields do not match').isVisible();
  }

  async assertInvalidEmailAddressIsVisible() {
    await this.page.getByText('Fields do not match').isVisible();
  }

  async assertFirstNameInvalidIsVisible() {
    await this.page.getByText('Please enter your firstname').isVisible();
  }

  async assertLastNameInvalidIsVisible() {
    await this.page.getByText('Please enter your lastname').isVisible();
  }

}
