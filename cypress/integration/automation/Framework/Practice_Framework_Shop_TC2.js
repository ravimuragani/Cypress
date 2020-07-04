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

  it('Practice shop', function () {

    formpageObj.getShopLink().click()
    cy.url().should('include', 'shop')
    this.data.productName.forEach(function (element) {
      cy.addProduct(element)
    });
    //override global timedout configuration
    Cypress.config('defaultCommandTimeout', 10000)
    shopPageObj.getCheckoutLink().click()
    var sum = 0
    chktPageObj.getPriceText().each(function ($el, index, $list) {
      const res = Number($el.text().split(" ")[1].trim())
      sum = Number(sum) + res
    })

    chktPageObj.getTotalTxt().then(function (element) {
      const total = Number(element.text().split(" ")[1].trim())
      expect(sum).to.be.equal(total)
    })


    chktPageObj.getCheckoutBtn().click()
    cnfrmPageObj.getDeliveryBox().type(this.data.country)
    cy.wait(2000)
    cnfrmPageObj.getCntryDrpdwn().click()
    cnfrmPageObj.getChkBox().check({ force: true })
    cnfrmPageObj.getSbmtBtn().click()
    cnfrmPageObj.getScsTxt().then(function (element) {

      const text = element.text()
      expect(text.includes(this.data.msg)).to.be.true
    })



  })
})