describe('User Management', () => {
  let user;

  before(() => {
    // initialize the user information
    cy.initializeUser().then((initializedUser) => {
      user = initializedUser;
    });
  });

  it('Sign Up - Create a new user', () => {
    cy.visit('/cadastrarusuarios');
    
    // Fill the sign up form '[data-testid="nome"]'
    cy.get('[data-testid="nome"]').type(user.nome);
    cy.get('[data-testid="email"]').type(user.email);
    cy.get('[data-testid="password"]').type(user.password);
    cy.get('[data-testid="checkbox"]').check();

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify succesful sign up messsage
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
});
