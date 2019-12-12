/* global cy */
describe('App', () => {

  beforeEach(() => {
    cy.server();
    cy.route('GET', 'http://localhost:3003/calls', 'fixture:calls')
    .as('callsRequest');
    cy.route('GET', 'http://localhost:3003/merits', 'fixture:merits')
    .as('meritsRequest');
    cy.visit('/');
    cy.wait('@callsRequest');
    cy.wait('@meritsRequest');
  });

  it('Should get the list of calls correctly', () => {
    cy.get('[data-cy=calls]').children().should('have.length', 2);
    cy.get('[data-cy=call-1]').should('have.length', 1);
  });

  it('Should get the list of merits of a call correctly', () => {
    cy.get('[data-cy=merits-1] > div').its('length').should('eq', 4);
  });

  it('The total of the score should be calculated correctly when typing a value in the input', () => {
    cy.get('[data-cy=merit-1-0]').within(() => {
      cy.get('input').type('3');
    });
    cy.get('[data-cy=total-score-1-0]').should('be', 6);
  });
});