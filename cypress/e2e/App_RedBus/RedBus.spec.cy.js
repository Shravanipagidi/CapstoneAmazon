

/// <reference types="cypress" />

describe('RedBusApp', () => {

    it('RedBus', async() => {

      //redbus website
      cy.visit("https://www.redbus.in/")
      //cy.visit('https://www.redbus.in/') 

      //type Hyderabad in from input box
     // cy.get('input[id="src"]').clear().type("Hyderabad")

      //type Bangalore in To input box
     // cy.get('input[id="dest"]').clear().type("Bangalore")

      //click on seacrch button
      //cy.get('button[id="search_button"]').click()
  
      //verify the page title should contain Hyderabad to Bangalore Bus Tickets
      //cy.title().should('contain','Hyderabad to Bangalore Bus Tickets')



      //clicking dropdown
      //cy.get('span[class="a-button a-button-dropdown a-button-small"]').click()

      
    })
})