class eCommerceConfirmPage
{
  
    getDeliveryBox()
    {
        return cy.get("#country")
    }
    getCntryDrpdwn()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getChkBox()
    {
        return cy.get("#checkbox2")
    }
    getSbmtBtn()
    {
        return cy.get("input[type='submit']")
    }
    getScsTxt()
    {
        return cy.get("div[class*='success']")
    }
}

export default eCommerceConfirmPage