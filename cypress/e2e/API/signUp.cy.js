describe('API Test - User Sign Up', () => {
  it('Should succesfully create new user ', () => {
    const email = `apiteste${Date.now()}@mail.com`;
    const user = {
      nome: 'API Test User',
      email: email,
      password: '123456',
      administrador: 'true',
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: user,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');

      // Adiciona o ID retornado ao objeto do usuário
      user.id = response.body._id;

      // Salva o objeto em um arquivo de fixture
      cy.writeFile('cypress/fixtures/userfromapi.json', user);
    });
  });
});


  