describe('Product Management - Create New Product', () => {
  let user;
  let product;

  before(() => {
    // Load the user credentials
    cy.fixture('user.json').then((loadedUser) => {
      user = loadedUser;
    });

    // Load the product details
    cy.fixture('product.json').then((loadedProduct) => {
      product = loadedProduct;
    });

    // Visit Product add page
    cy.visit('/admin/cadastrarprodutos');

    // Fill the form
    cy.get('[data-testid="nome"]').type(product.name);
    cy.get('[data-testid="descricao"]').type(product.description);
    cy.get('[data-testid="preco"]').type(product.price);
    cy.get('[data-testid="quantity"]').type(product.qty);

    // Image upload
    cy.get('input[type="file"]').selectFile(product.imagePath);

    // Submit information
    cy.get('button[type="submit"]').click();

    // Verify that product is displayed on the table
    cy.visit('/admin/listarprodutos');
    cy.contains(product.name).should('be.visible');
  });
});


  
  