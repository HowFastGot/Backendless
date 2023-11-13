import { Outlet } from 'react-router';

function MainPage({ currentPath }: { currentPath: string }) {
	return (
		<>
			<main className='wrapper'>
				<section>
					{currentPath === '/' && <span>Main Page</span>}
					<Outlet />
				</section>
			</main>
		</>
	);
}
export default MainPage;
