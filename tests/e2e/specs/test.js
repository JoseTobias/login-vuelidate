// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('#sign-in-user').type('test')
    cy.get('#sign-in-pass').type('test')
    cy.get('label[for=check]').click()
    cy.get('label[for=check]').click()
    cy.get('input[value="Sign In"]').click()
    cy.get('label[for=tab-2]').click()
  })
})
