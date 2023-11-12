import { Outlet } from 'react-router';

function MainPage() {
	return (
		<>
			<main className='wrapper'>
				<section>
					<Outlet />
				</section>
			</main>
		</>
	);
}
export default MainPage;
