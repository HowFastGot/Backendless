import { useEffect, useMemo, useCallback, useState } from 'react';

import { Header, Footer, MainPage } from '@components';

import { ITabsConfig } from '@src/types';
import { TABS_DB_PATH, getTabs, navigateProjectInitializing, retriveHeaderDeps } from '@src/utils';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import { redirect } from 'react-router-dom';

export const loader = async () => {
	const tabs = await getTabs<ITabsConfig[]>(TABS_DB_PATH);
	return { tabs };
};

function App() {
	const [isInitialEnter, setInitialEnter] = useState(true);
	const [locationPath, setLocationPath] = useState('');

	const { tabs } = useLoaderData() as { tabs: ITabsConfig[] };
	const { pathname } = useLocation() as { pathname: string };

	const memoMavigateProjectInitializing = useCallback(navigateProjectInitializing, []);

	const headerProps = retriveHeaderDeps(tabs);
	const memoHeaderProps = useMemo(() => headerProps, [headerProps]);

	useEffect(() => {
		const locationNeeded = memoMavigateProjectInitializing(pathname);

		if (locationNeeded === pathname) {
			setInitialEnter(false);
		}
		setLocationPath(locationNeeded);
	}, [pathname]);

	return (
		<>
			{pathname === '/' && isInitialEnter && <Navigate to={locationPath} />}
			<Header headerProps={memoHeaderProps} />
			<MainPage currentPath={pathname} />
			<Footer />
		</>
	);
}
export default App;
