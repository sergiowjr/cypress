const domains = require('../fixtures/car.json');

describe('Teste da tela de Consumo Médio e Custo por Km', () => {

  let data;

  domains.forEach((domain) => {

    describe(domain, () => {

      beforeEach(() => {
        cy.visit(domain);
        cy.fixture('mileage').then((json) => {
          data = json;
        });
      });

      context('Formulário de Consumo Médio', () => {

        it('Deve preencher e calcular consumo médio corretamente', () => {
          cy.get('#km_inicial')
            .click()
            .type(data.mileage.km_inicial);
          cy.get('#km_final')
            .click()
            .type(data.mileage.km_final);
          cy.get('#qtd')
            .click()
            .type(data.mileage.qtd);

          cy.get('#btn-media').click();

          cy.get('#resultado-media')
            .should('be.visible')
            .and('contain.text', data.cost.consumo_medio); // km/l = (1200-1000)/20 = 10

          cy.get('#historico-media')
            .should('be.visible')
            .and('contain.text', data.cost.consumo_medio); // km/l = (1200-1000)/20 = 10

        });

        it('Deve limpar o formulário ao clicar em reset', () => {
          cy.get('#km_inicial')
            .click()
            .type(data.mileage.km_inicial);
          cy.get('#km_final')
            .click()
            .type(data.mileage.km_final);
          cy.get('#qtd')
            .click()
            .type(data.mileage.qtd);

          cy.get('form#calc_mileage button[type="reset"]').click();

          cy.get('#km_inicial').should('have.value', '');
          cy.get('#km_final').should('have.value', '');
          cy.get('#qtd').should('have.value', '');
          cy.get('#resultado-media').should('not.be.visible');
        });

      });

      context('Formulário de Custo por Km', () => {

        it('Deve preencher e calcular custo por km corretamente', () => {
          cy.get('#consumo_medio')
            .clear().
            type(data.cost.consumo_medio*1000);
          cy.get('#preco_combustivel')
            .clear()
            .type(data.cost.preco_combustivel);
          cy.get('#combustivel')
            .select(data.cost.combustivel);

          cy.get('#btn-custo')
            .click();

          cy.get('#resultado-custo')
            .should('be.visible')
            .and('contain.text', '0,75'); // Custo por km = 7,500 / 10

          cy.get('#historico-media')
            .should('be.visible')
            .and('contain.text', '10'); // km/l = (1200-1000)/20 = 10

        });

        it('Deve limpar o formulário ao clicar em reset', () => {
          cy.get('#consumo_medio')
            .clear().
            type(data.cost.consumo_medio * 1000);
          cy.get('#preco_combustivel')
            .clear()
            .type(data.cost.preco_combustivel);
          cy.get('#combustivel')
            .select(data.cost.combustivel);

          cy.get('form#calc_cost button[type="reset"]')
            .click();

          cy.get('#consumo_medio')
            .should('have.value', '');
          cy.get('#preco_combustivel')
            .should('have.value', '');
          cy.get('#combustivel')
            .should('have.value', null);
          cy.get('#resultado-custo')
            .should('not.be.visible');
        });

      });

      context('Verificações gerais', () => {

        it('Deve exibir vídeo do YouTube se não for Android', () => {
          cy.get('body').then(($body) => {
            if (!$body.find('#historico-media').length) {
              cy.get('iframe').should('have.attr', 'src').and('include', 'youtube.com');
            }
          });
        });

      });
    });

  });

});
