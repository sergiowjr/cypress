const { jogos, idiomas, abas } = require('../../fixtures/letrivo.json');

describe('letrivo - home', () => {

  beforeEach(() => {
    cy.visitHome();
  });

  it('Valida carregamento da home', () => {
    cy.title().should('eq', 'Letrivo - jogos inteligentes');
    cy.get('h1').should('contain', 'Escolha um jogo');
  });

  context('Cards de jogos', () => {
    jogos.forEach(({ id, titulo }) => {
      it(`Valida card e navegação do ${id}`, () => {
        cy.get(`a.game.${id}`)
          .should('have.attr', 'href', `${id}/`)
          .find('h2').should('have.text', titulo);
        cy.get(`a.game.${id}`).click();
        cy.location('pathname').should('include', `/${id}/`);
      });
    });
  });

  it('Valida links do menu do topo', () => {
    ['jogos', 'grupos', 'contato'].forEach((secao) => {
      cy.get(`.topbar nav a[href="#${secao}"]`).click();
      cy.location('hash').should('eq', `#${secao}`);
      cy.get(`#${secao}`).should('be.visible');
    });
  });

  context('Troca de idioma', () => {
    idiomas.forEach(({ botao, path, lang }) => {
      it(`Valida idioma ${botao}`, () => {
        cy.visitHome(botao === 'PT' ? 'en/' : './');
        cy.contains('.lang-btn', botao).click();
        cy.get('html').should('have.attr', 'lang', lang);
      });
    });
  });

  it('Valida abas de detalhes', () => {
    abas.forEach((aba) => {
      cy.get(`#tab-${aba}`).click().should('have.attr', 'aria-selected', 'true');
      cy.get(`#painel-${aba}`).should('not.have.attr', 'hidden');
      abas.filter((a) => a !== aba).forEach((outra) => {
        cy.get(`#painel-${outra}`).should('have.attr', 'hidden');
      });
    });
  });

  it('Valida sugestão de jogo por idade', () => {
    cy.get('#surprise').click();
    cy.get('#surprise-dialog').should('have.attr', 'open');
    cy.get('#age-ask').should('be.visible');
    cy.get('#age-ask [data-age="8"]').click();
    cy.get('#age-result').should('be.visible');
    cy.get('#age-game').invoke('text').should('not.be.empty');
    cy.get('#age-play').should('have.attr', 'href').and('match', /^let\w+\/$/);
    cy.get('#age-back').click();
    cy.get('#age-ask').should('be.visible');
    cy.get('.age-close').click();
    cy.get('#surprise-dialog').should('not.have.attr', 'open');
  });

  it('Valida botão continuar jogando', () => {
    cy.get('#resume').should('not.be.visible');
    cy.visitHome('./', {
      onBeforeLoad(win) {
        win.localStorage.setItem('letrivo_last_game', 'letrix');
      },
    });
    cy.get('#resume').should('be.visible').and('have.attr', 'href', 'letrix/');
    cy.get('#resume-name').should('not.be.empty');
  });

  it('Valida campos obrigatórios do contato', () => {
    cy.get('#contact-form').then(($f) => expect($f[0].checkValidity()).to.be.false);
    cy.get('#contact-nome').type('Teste Cypress');
    cy.get('#contact-email-input').type('email-invalido');
    cy.get('#contact-email-input').then(($e) => expect($e[0].validity.typeMismatch).to.be.true);
    cy.get('#contact-email-input').clear().type('teste@exemplo.com');
    cy.get('#contact-email-input').then(($e) => expect($e[0].checkValidity()).to.be.true);
  });

});
