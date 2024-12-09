Cypress.Commands.add('login', (email, password, userName) => {
  cy.visit('/login');
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.contains(`Bem Vindo ${userName}`).should('be.visible');
});

  
  Cypress.Commands.add('initializeUser', () => {
    const user = {
      nome: 'Test User',
      email: `usuario_${Date.now()}@email.com`,
      password: 'senha_segura',
      administrador: true
    };
  
    // Save data on fixture to use later
    cy.writeFile('cypress/fixtures/user.json', user);
  
    // Return user to be used in another test
    return cy.wrap(user);
  });
  

  import 'cypress-file-upload';
