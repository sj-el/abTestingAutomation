import { browser, expect } from "@wdio/globals";
import { assert } from "chai";

describe('My Login application', () => {
    before(`Set the window size`, async () => {
        await browser.setWindowSize(1440, 900);
    });

    it(`Run NAL-222`, async () => {
        await browser.url(`https://www.nature-love.de/?ablyft_preview=64799288_48224814&ablyft_exclude_running=true`);
        assert.isTrue(await browser.getUrl() === `https://www.nature-love.de/?ablyft_preview=64799288_48224814&ablyft_exclude_running=true`);
    });
});
