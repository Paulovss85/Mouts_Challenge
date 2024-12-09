describe('API Test - User Login', () => {
    it('Should perform login using credentials created in sigUp', () => {
      // Load the fixture created in sigUp
      cy.fixture('userfromapi').then((user) => {
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/login',
          body: {
            email: user.email,
            password: user.password,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('authorization');
          // Save toke to use
          Cypress.env('authToken', response.body.authorization);
        });
      });
    });
  });
  