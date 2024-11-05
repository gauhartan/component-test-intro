import React from 'react'
import App from './App'

describe('<App />', () => {

  beforeEach(() => {
    cy.mount(<App />)
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)

 //   cy.get('button').click();

 //   cy.get('button').should('contain', '1');
  })

  describe('det ska finnas en knapp som visar 0', () => {
    it('finns en knapp', () => {
       cy.get('button').should('exist');
    })

    it('visa 0', () => {
       cy.get('button').should('contain', '0');
    })
  })

  describe('öka med ett om knappen klickas', () => {
      it('innehåler 1', () => {
         cy.get('button').click();
         cy.get('button').should('contain', '1');
      })
  })

})