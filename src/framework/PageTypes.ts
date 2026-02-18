
type pageType = {
	path: string;
	title: string;
}

interface pageInterface {
	getPath(): string;

	getTitle(): string;

	getBaseURL(): string;

	getTestURL(): string;

	getOverlapURL(): string;

	getTestURLWithOverlaps(): Promise<string>;

	goToURL(url: string): Promise<void>;

	isPageOpen(timeout: number): Promise<boolean>;

	isPageLoaded(timeout: number): Promise<boolean>;
}

export { pageType, pageInterface }
