type TabId = 'dummyTable' | 'dummyList' | 'dummyChart';
type TabOrders = 0 | 1 | 2;

export interface ITabsConfig {
	id: TabId;
	title: Capitalize<TabId>;
	order: TabOrders;
	path: `tabs/${TabId}.js`;
}

export interface HeaderParams extends Omit<ITabsConfig, 'path'> {}
