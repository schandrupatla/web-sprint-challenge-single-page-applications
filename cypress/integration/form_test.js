describe("User-Boarding app", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3005/");
    });

    const userInput = () => cy.get('input[name="username"]');
    const pizzaSize = () => cy.get('select[name="size"]');
    const chkPepperoni = () => cy.get('input[name="pepperoni"]');
    const chkCheese = () => cy.get('input[name="cheese"]');
    const chkChicken = () => cy.get('input[name="chicken"]');
    const chkVeggies = () => cy.get('input[name="veggies"]');
    const submitBtn = () => cy.get('button[id="order-button"]');

// here go our tests
    it("Proper elements are showing on the screen", ()=>{
        userInput().should("exist");
        pizzaSize().should("exist");
        chkPepperoni().should("exist");
        chkCheese().should("exist");
        chkChicken().should("exist");
        chkVeggies().should("exist");
        submitBtn().should("exist");
    })

    it("can type in the username", ()=>{
        userInput()
            .should("have.value", "")
            .type("Sridevi")
             .should("have.value", "Sridevi")
             
    })

   
    it("can select cheese check box", ()=>{
        chkCheese()
            // .click()
            // .should("have.value", "on")
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it("can select chicken check box", ()=>{
        chkChicken()
            // .click()
            // .should("have.value", "on")
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })
     //submit button
it("can submit the form data", ()=>{
     userInput().type("SRIDEVI");
     submitBtn().should("be.disabled");
     pizzaSize().select("small");
     submitBtn().should("not.be.disabled");
     submitBtn().click();
})

})

    

