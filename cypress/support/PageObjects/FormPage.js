class FormPage
{
    getNameEdit()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getNameAttr()
    {
        return cy.get("input[name='name']:nth-child(1)")
    }
    getEmailEdit()
    {
        return cy.get("input[name='email']")
    }
    getPasswordEdit()
    {
        return cy.get("input[type='password']")
    }

    getNotifyCheck()
    {
        return cy.get("#exampleCheck1")
    }
    getGenderDrpdwn()
    {
        return cy.get("select")
    }

    getEmployeeRadio()
    {
        return cy.get("#inlineRadio2")
    }

    getEnterprenerRadio()
    {
        return cy.get("#inlineRadio3")
    }
    getBdayEdit()
    {
        return cy.get("input[name='bday']")
    }
    getSubmitBtn()
    {
        return cy.get("input[type='submit']")
    }

    getAlertText()
    {
        return cy.get("div[class*='success']")
    }
    getShopLink()
    {
        return cy.get("a[href*='shop']")
    }

}

export default FormPage