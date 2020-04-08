// https://docs.cypress.io/api/introduction/api.html

describe('My Test', () => {
  it('Testing fields', () => {
    cy.visit('/')
    cy.get('input[value="Sign In"]').click()
    cy.get('#sign-in-user').type('test')
    cy.get('#sign-in-pass').type('test')
    cy.get('label[for=check]').click()
    cy.get('label[for=check]').click()
    cy.get('input[value="Sign In"]').click()
    cy.get('label[for=tab-2]').click()
    cy.get('input[value="Sign Up"]').click()
    cy.get('#sign-up-user').type('test')
    cy.get('#sign-up-pass1').type('test')
    cy.get('#sign-up-pass2').type('tess')
    cy.get('#sign-up-pass2').clear().type('test')
    cy.get('#email').type('test')
    cy.get('#email').type('@test.com')
    cy.get('input[value="Sign Up"]').click()
  })
})
