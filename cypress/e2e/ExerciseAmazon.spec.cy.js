describe('amazon spec', () => {

    it('amazon', () => {

      //Visit the amazon website 
      cy.visit('https://www.amazon.in/') 

      //go to search bar and search for smart watches
      cy.get('[placeholder="Search Amazon.in"]').clear().type("smart watches")

      //click on search
      cy.get('[value="Go"]').click()
  
      //verify the page title whether it contain smart watches
      cy.title().should('contain','smart watches')

      //click on dropdown of sortby
      cy.get('span[class="a-button a-button-dropdown a-button-small"]').click()

      //click on newest arrivals in dropdown
      cy.get('a[id="s-result-sort-select_4"]').click()

      //verify the page title whether it contain Amazon.in: Smart Watches after clicking dropdown
      cy.title().should('contain','Amazon.in: Smart Watches')
  
    })
  })