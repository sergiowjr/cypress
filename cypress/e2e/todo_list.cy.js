describe('todo list', () => {
  it('access', () => {
    cy.visit('http://localhost:4173/')
  })
  it('include and delete', () => {
    cy.visit('http://localhost:4173/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.heading-input').clear().type('teste 1');
    cy.get('.add-list-button').contains('Add Heading').click();
    cy.get('.heading-input').clear().type('teste 2');
    cy.get('.input-container > .add-list-button').click();
    cy.get(':nth-child(1) > .add_list > .list-input').clear().type('teste 11');
    cy.get(':nth-child(1) > .add_list > .add-list-button').click();
    cy.get(':nth-child(1) > .add_list > .list-input').clear().type('teste 12');
    cy.get(':nth-child(1) > .add_list > .add-list-button').click();
    cy.get(':nth-child(2) > .add_list > .list-input').clear().type('teste 21');
    cy.get(':nth-child(2) > .add_list > .add-list-button').click();
    cy.get(':nth-child(2) > .add_list > .list-input').clear().type('teste 22');
    cy.get(':nth-child(2) > .add_list > .add-list-button').click();
    cy.get('.heading-input').clear().type('teste 3');
    cy.get('.input-container > .add-list-button').click();
    cy.get(':nth-child(3) > .add_list > .list-input').clear().type('teste 31');
    cy.get(':nth-child(3) > .add_list > .add-list-button').click();
    cy.get(':nth-child(3) > .add_list > .list-input').clear().type('teste 32');
    cy.get(':nth-child(3) > .add_list > .add-list-button').click();
    /* ==== End Cypress Studio ==== */

    cy.get('.todo_main > :nth-child(1)')
    cy.get('.todo_main > :nth-child(2)')
    cy.get('.todo_main > :nth-child(3)')

    /* ==== Generated with Cypress Studio ==== 
    cy.get(':nth-child(2) > .heading_todo > .delete-button-heading').click();
    cy.get(':nth-child(1) > .heading_todo > .delete-button-heading').click();
    cy.get('.delete-button-heading').click();
    /* ==== End Cypress Studio ==== */

  })

})