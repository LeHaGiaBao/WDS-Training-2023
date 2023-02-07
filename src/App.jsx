import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
])

function App() {
	return (
		<div className='app'>
			<RouterProvider router={routes} />
		</div>
	)
}

export default App
