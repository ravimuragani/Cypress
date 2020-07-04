/// <reference types="Cypress" />
import FormPage from '../../../support/PageObjects/FormPage'
import eCommerceShopPage from '../../../support/PageObjects/eCommerceShopPage'
import eCommerceCheckoutPage from '../../../support/PageObjects/eCommerceCheckoutPage'
import eCommerceConfirmPage from '../../../support/PageObjects/eCommerceConfirmPage'

const formpageObj = new FormPage()
const shopPageObj = new eCommerceShopPage()
const chktPageObj = new eCommerceCheckoutPage()
const cnfrmPageObj = new eCommerceConfirmPage()

describe('Framwork', function () {

  before(function () {

    //key value pair defined in Cypress.json file

    cy.visit(Cypress.env("URL"))


  })
  beforeEach(function () {
    //Drive Test with data from .json file
    cy.fixture('testdata').then(function (dd) {
      this.data = dd
    })
  })
  it('Practice Form', function () {


    formpageObj.getNameEdit().type(this.data.name)
    formpageObj.getNameEdit().should('have.attr', 'minlength', '2')
    formpageObj.getNameAttr().should('have.value', this.data.name)
    formpageObj.getEmailEdit().type(this.data.email)
    formpageObj.getPasswordEdit().type(this.data.password)
    formpageObj.getNotifyCheck().check()
    formpageObj.getGenderDrpdwn().select(this.data.gender)
    formpageObj.getEmployeeRadio().click()
    formpageObj.getEnterprenerRadio().should('be.disabled')
    formpageObj.getBdayEdit().type(this.data.bday)
    formpageObj.getSubmitBtn().click()
    cy.wait(2000)
    formpageObj.getAlertText().should('be.visible')

  })

})