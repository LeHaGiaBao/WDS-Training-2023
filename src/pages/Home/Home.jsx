import React from 'react'
import './Home.css'
import {data} from '../../data/data'
import ProductItem from '../../components/ProductItem/ProductItem'
import {MdShoppingCart} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

function Home() {
	const nav = useNavigate()

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
				<p>0</p>
			</div>
		</div>
	)
}

export default Home
