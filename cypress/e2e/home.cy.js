const domains = require('../fixtures/domains.json');

describe('home', () => {

  domains.forEach((domain) => {

    context(domain, () => {

      it('Valida alteração do idioma', () => {
        cy.visit(domain);
        cy.get('#consent-toast');
        cy.get('#accept-consent').click();
        cy.get('[aria-label="Home"]').click();

        const translations = {
          pt: 'Custa? | Utilitários Para Cálculos',
          en: 'How Much? | Calculation Tools',
          es: '¿Cuánto Cuesta? | Herramientas De Cálculo',
          de: 'Was Kostet’s? | Rechentools',
          sv: 'Vad Kostar? | Kalkylverktyg',
          ja: 'いくら？｜計算ツール'
        };

        Object.entries(translations).forEach(([lang, text]) => {
          cy.get(`[onclick="applyTranslations('${lang}')"]`).click();
          cy.get('.topo-conteudo > h1').contains(text, { matchCase: false });
        });

      });

      it('Valida existência dos cards', () => {
        cy.visit(domain);
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#consent-toast')
        cy.get('#accept-consent').click()
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > h1').click();
        cy.get(':nth-child(3) > h1').click();
        cy.get(':nth-child(4) > h1').click();
        cy.get(':nth-child(5) > h1').click();
        cy.get(':nth-child(6) > h1').click();
        /* ==== End Cypress Studio ==== */
      })

    });

  });

})