export function navigateProjectInitializing(locationStr: string) {
	if (locationStr && locationStr.includes('dummy')) return locationStr;

	return '/dummyList';
}
