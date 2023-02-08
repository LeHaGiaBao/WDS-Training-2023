import React from 'react'
import './Home.css'
import {data} from '../../data/data'
import ProductItem from '../../components/ProductItem/ProductItem'
import {MdShoppingCart} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Home() {
	const nav = useNavigate()

	const cart = useSelector((state) => state.cart)
	const getTotalQuantity = () => {
		let total = 0
		cart.forEach((item) => {
			total += item.quantity
		})
		return total
	}

	return (
		<div className='home'>
			<div className='home__container'>
				<div className='home__row'>
					{data.map(({id, title, price, image}) => (
						<ProductItem
							id={id}
							title={title}
							price={price}
							image={image}
						/>
					))}
				</div>
			</div>
			<div className='shopping-cart' onClick={() => nav('/cart')}>
				<MdShoppingCart id='cartIcon' />
				<p>{getTotalQuantity() || 0}</p>
			</div>
		</div>
	)
}

export default Home
