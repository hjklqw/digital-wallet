import * as Routes from '../../../src/assets/route.constants';
import { expectRoute } from './util';
import { flow as loginFlow, LOGIN_COMPLETE_STEP_INDEX } from './login.spec';

const authedRoutes = [
  Routes.DASHBOARD,
  Routes.TRANSACTION_HISTORY,
  Routes.MAKE_TRANSACTION,
  Routes.ACCOUNT_SETTINGS
];

const nonAuthedOnlyRoutes = [
  Routes.LOGIN,
  Routes.REGISTER
];

const normalRoutes = [
  '/',
  Routes.FAKE_PAGE
];

context('Redirection Flow', () => {

  it('should redirect to login if I access any page restricted to authenticated users, while not logged in', () => {
    authedRoutes.forEach(r => {
      cy.visit(r);
      expectRoute(Routes.LOGIN);
    });
  });

  it('should redirect to dashboard if I access any page restricted to non-authenticated users, while logged in', () => {
    loginFlow.executeUntilStep(LOGIN_COMPLETE_STEP_INDEX);
    cy.wait(1000);
    nonAuthedOnlyRoutes.forEach(r => {
      cy.visit(r);
      cy.wait(1000);
      expectRoute(Routes.DASHBOARD);
    });
  });

  it('should not redirect if I access any other page', () => {
    const visitNormalRoutes = () => {
      normalRoutes.forEach(r => {
        cy.visit(r);
        expectRoute(r);
      });
    }
    // Not logged in
    visitNormalRoutes();
    // Logged in
    loginFlow.executeUntilStep(LOGIN_COMPLETE_STEP_INDEX);
    visitNormalRoutes();
  });

});