context('test_btn', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('.type() - type into a DOM element', () => {
        describe('testing that all buttons clicks', () => {
            cy.get('#logo').click()
            cy.get('#playonline').click()
            cy.get('#playonsite').click()
            cy.get('#logo').click()
            cy.get('.hero-cta').click()
            cy.get('#logo').click()
            cy.get('.hero-cta-onsite').click()
            cy.get('#logo').click()
            cy.get('.challenges-cta-online').click()
            cy.get('#logo').click()
            cy.get('.challenges-cta-onsite').click()
            cy.get('#logo').click()
            cy.get('#book-onsite').click()
            cy.get('#logo').click()
            cy.get('#book-onsite2').click()
            cy.get('#logo').click()
        })
    })
})

