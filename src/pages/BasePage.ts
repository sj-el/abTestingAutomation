import { browser } from "@wdio/globals";
import {pageType, pageInterface} from "../framework/PageTypes";
import {URLs} from "../resources/URLs.json" assert { type: "json" };

class BasePage implements pageInterface {

	// private path: string;

	// constructor({path}: pageType) {
	// 	this.path = path;
	// }

	// getPath(): string {
	// 	return this.path;
	// }

	getTestURL(): string {
		return URLs.BaseURL + URLs.Test;
	}

	getOverlapURL(testID: string): string {
		throw new Error("Method not implemented.");
	}

	getURLWithOverlaps(): string {
		throw new Error("Method not implemented.");
	}

	async goToURL(url: string): Promise<void> {
		await browser.url(url);
	}

	isPageOpen(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

	isPageLoaded(timeout: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

}

export {BasePage}
