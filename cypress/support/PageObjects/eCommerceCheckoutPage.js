class eCommerceCheckoutPage
{
    getPriceText()
    {
        return cy.get("tr td:nth-child(4) strong")
    }
    getTotalTxt()
    {
        return cy.get("td h3 strong")
    }
    getCheckoutBtn()
    {
        return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }
}

export default eCommerceCheckoutPage