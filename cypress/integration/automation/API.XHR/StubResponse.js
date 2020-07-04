/// <reference types="Cypress" />
describe('Automation', () => {
    it('Mock API Response', () => {
        cy.visit("https://example.cypress.io/commands/network-requests")
        //Intiate server listening
        cy.server()
        //Get request and listing its response
        cy.route('GET', 'comments/*').as('getComment')
        cy.get(".network-btn").click()
        //validate response status
        cy.wait('@getComment').its('status').should('eq',200)
        //post request and validate its response

        cy.route('POST','/comments').as('postComment')
        cy.get(".network-post").click()
        cy.wait('@postComment').its('status').should('eq',201)
        //validate response body
        cy.get('@postComment').should((xhr)=>{
            expect(xhr.responseBody).to.have.property('id', 501)
        })
        //update/Put request mock its repsonse
        let message="Its mocking response"
        cy.route({

            method:'PUT',
            url : 'comments/*',
            status: 404,
            delay: 1000,
            response:{
                error: message
                
            }
        }).as('updateComment')
        cy.get('.network-put').click()
        cy.wait('@updateComment').its('status').should('eq',404)
        //get exact html tag from dev where message appears
        cy.get('.network-put-comment').should('contain', message)

    })
  })