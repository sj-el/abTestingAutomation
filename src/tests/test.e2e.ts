import { browser, expect } from '@wdio/globals';
import { HomePage } from '../pages/HomePage';

describe('My Login application', () => {

    before(`Set viewport`, async() => {
        await browser.setWindowSize(1440, 900);
    });

    it(`Test NAL-222`, async() => {
        const homepage = new HomePage();
        await homepage.goToURL(homepage.getTestURL());
    });

});

