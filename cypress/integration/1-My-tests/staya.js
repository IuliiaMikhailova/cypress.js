
describe('Тестирование staya', function () {
    
    it('Залогинится и проверит что есть "Мои заказы"', function () {
        cy.visit('https://staya.dog/');
      cy.get('.header-bottom__right--link')
      .click();
      cy.get('.auth-form > form > [type="email"]').type('chernova-91@mail.ru');
      cy.get('.auth-form > form > [type="password"]').type('qwert123');
      cy.get('.auth-form__submit > .s-button__content')
      .click()
      cy.contains('Мои заказы')
        })
})
