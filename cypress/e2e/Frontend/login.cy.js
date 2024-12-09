describe('User Login', () => {
    let user;
  
    before(() => {
      // Load user data created in fixture
      cy.fixture('user.json').then((loadedUser) => {
        user = loadedUser;
      });
    });
  
    it('Login with created user credentials', () => {
      // Visit login page
      cy.visit('/login');
  
      // Fill the form with the info from fixture
      cy.get('[data-testid="email"]').type(user.email);
      cy.get('[data-testid="senha"]').type(user.password);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verifica se o login foi bem-sucedido
      cy.contains(`Bem Vindo ${user.nome}`).should('be.visible');
    });
  });
  