import * as Routes from '../../../src/assets/route.constants';
import database from '../../../src/assets/database';
import { Flow, expectRoute } from './util';

const HEADER_LINKS_LOGIN_SECTION = 'section.header-links nav:last-child';
const LOGIN_BUTTON_SELECTOR = HEADER_LINKS_LOGIN_SECTION + ' a:first-child';

const flow = new Flow([
  () => cy.visit('/'),
  () => cy.get(LOGIN_BUTTON_SELECTOR).click(),
  () => {
    const formInputs = cy.get('form input[type="text"]');
    formInputs.get('[name="username"]').type(database.user[0].username);
    formInputs.get('[name="password"]').type(database.user[0].password).type('{enter}');
  },
  () => {},
  () => {
    cy.wait(2000);
    cy.get(HEADER_LINKS_LOGIN_SECTION + ' > div').click();
  }
]);

context('Login Flow', () => {
  
  beforeEach(() => {
    flow.executeSteps();
  });

  it('clicking the login link brings me to the login page', () => {
    expectRoute(Routes.LOGIN);
  });

  it('brings me to the dashboard when I enter my credentials', () => {
    expectRoute(Routes.DASHBOARD);
  });

  it('there is a link to account settings and a logout button', () => {
    cy.wait(2000);
    const buttons = cy.get(HEADER_LINKS_LOGIN_SECTION + ' > *');
    buttons.get(':first-child').contains('My Account');
    buttons.get(':last-child').contains('Logout');
  });

  it('brings me back to the login page when I click Logout', () => {
    expectRoute(Routes.LOGIN);
  });


});