/// <reference types="Cypress" />
describe('Automation', () => {
    it('API request', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Cypress request Method",
            "isbn": "abc7865",
            "aisle": "779658",
            "author": "Ravi Muragani"

        }).as('responseBody')

        cy.get('@responseBody').should((response) => {
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.eq(200)

        })

    })
})