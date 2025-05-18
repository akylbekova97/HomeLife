import { Outlet } from 'react-router-dom'
import '../styles/global.scss'

export const Layout = () => {
	return (
		<>
			{/* тут header  */}
			<main className='container'>
				<Outlet />
			</main>
			{/* тут footer */}
		</>
	)
}
