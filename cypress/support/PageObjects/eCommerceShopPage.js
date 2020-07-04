class eCommerceShopPage
{

    getCheckoutLink()
    {
        return cy.get("a[class*='btn-primary']")
    }

   

}

export default eCommerceShopPage