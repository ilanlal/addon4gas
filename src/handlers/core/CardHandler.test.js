require('../../../tests');

const { CardHandler } = require('./CardHandler');

describe('CardHandler', () => {
    it('should create an instance of CardHandler', () => {
        const handler = new CardHandler();
        expect(handler).toBeInstanceOf(CardHandler);
    });

    // onOpenCardClick
    it('should handle onOpenCardClick', () => {
        const event = {
            parameters: {
                card: 'EMD.Cards.Home'
            }
        }; // Mock event object
        const actionResponse = CardHandler.Controller.onOpenCardClick(event);
        expect(actionResponse).toBeDefined();
        const data = actionResponse.getData();
        expect(data).toBeDefined();
        // not notification
        expect(data.notification).toBeUndefined();
    });
});