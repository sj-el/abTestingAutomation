
type pageType = {
	path: string
}

interface pageInterface {
	// getPath(): string;

	getTestURL(): string;

	getOverlapURL(testID: string): string;

	getURLWithOverlaps(): string;

	goToURL(url: string): Promise<void>;

	isPageOpen(timeout: number): Promise<boolean>;

	isPageLoaded(timeout: number): Promise<boolean>;
}

export { pageType, pageInterface }
