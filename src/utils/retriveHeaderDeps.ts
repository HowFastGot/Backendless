import { ITabsConfig } from '@src/types';

export function retriveHeaderDeps(tabsArr: ITabsConfig[]) {
	const sortArr = (a: ITabsConfig, b: ITabsConfig) => a.order - b.order;

	return tabsArr.map(({ order, title, id }) => ({ order, title, id })).sort(sortArr);
}
