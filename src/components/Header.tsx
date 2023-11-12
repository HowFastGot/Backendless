import { Link, NavLink } from 'react-router-dom';
import { HeaderParams } from '@src/types';

function Header({ headerProps }: { headerProps: HeaderParams[] }) {
	return (
		<header className='header'>
			<nav>
				<Link to='/' children='D' />
			</nav>
			<ul className='_container'>
				{headerProps.map(({ title, order, id }) => {
					return (
						<li key={order}>
							<NavLink
								to={`/${id}`}
								className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
								{title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</header>
	);
}
export default Header;
