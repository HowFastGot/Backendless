import { createHashRouter } from 'react-router-dom';

import { loader as rootRouteLoader } from '@src/components/app/App';

import { App, MainPage } from '@src/components';
import { Suspense, lazy } from 'react';

const DummyList = lazy(() => import('@src/components/tabs/dummyList'));
const DummyChart = lazy(() => import('@src/components/tabs/dummyChart'));
const DummyTable = lazy(() => import('@src/components/tabs/dummyTable'));

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		loader: rootRouteLoader,
		children: [
			{
				path: '/dummyList',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<DummyList />
					</Suspense>
				),
			},
			{
				path: '/dummyChart',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<DummyChart />
					</Suspense>
				),
			},
			{
				path: '/dummyTable',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<DummyTable />
					</Suspense>
				),
			},
		],
	},
]);
