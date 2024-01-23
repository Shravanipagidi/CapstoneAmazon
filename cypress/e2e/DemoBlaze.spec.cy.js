describe('template spec', () => {

    it('passes', () => {

      //demoblaze website
      cy.visit('https://www.demoblaze.com/index.html') 

      //click on Phones
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()

      //click action
      //cy.get('a[onclick="addToCart(1)"]').click()
  
      //verify the page title should contain smart watches
      cy.get('.col-sm-12 > .btn').click()

      //clicking dropdown
      //cy.get('span[class="a-button a-button-dropdown a-button-small"]').click()


      //now clicking on new arrivals in dropdown
      //cy.get('a[id="s-result-sort-select_4"]').click()
      //cy.get('span[class="a-size-base a-color-base a-text-bold"]').click()
  
    })
  })