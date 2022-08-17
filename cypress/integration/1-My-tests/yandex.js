
describe('Тестирование главной yandex.ru', function () {

    it('Открытие сайта', function () {
        cy.visit('https://yandex.ru/');
       cy.get('#text').type('Котята').type('{enter}');
        cy.contains('Картинки по запросу котята');
    })
})
