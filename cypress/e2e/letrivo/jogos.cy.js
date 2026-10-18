const { jogos } = require('../../fixtures/letrivo.json');

describe('letrivo - jogos', () => {

  jogos.forEach(({ id }) => {
    it(`Valida carregamento do ${id}`, () => {
      cy.request(`${id}/`).its('status').should('eq', 200);
      cy.visit(`${id}/`);
      cy.get('body').should('be.visible');
      cy.title().should('match', new RegExp(id, 'i'));
    });
  });

});
