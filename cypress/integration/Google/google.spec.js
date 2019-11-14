/// <reference types="Cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.wait() - wait for a specific route', () => {
    cy.contains('Google')
    cy.get('input[title="Pesquisar"]').type('Univali')
    cy.contains('Pesquisa Google').click()
    cy.contains('https://www.univali.br')
    cy.get('a[href="https://www.univali.br/"]').should('be.visible')
  })
})
