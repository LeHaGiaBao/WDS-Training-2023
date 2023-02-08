import React from 'react'
import './Cart.css'
import Total from '../../components/Total/Total'
import {useSelector} from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import {useNavigate} from 'react-router-dom'

function Cart() {
	const nav = useNavigate()

	const cart = useSelector((state) => state.cart)

	return (
		<div className='cart'>
			<div className='cart__left'>
				<div>
					<h3>Shopping Cart</h3>
					{cart?.map((item) => (
						<CartItem
							key={item.id}
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							quantity={item.quantity}
						/>
					))}
				</div>
			</div>
			<div className='cart__right'>
				<Total />
				<button onClick={() => nav('/')} className='btn-back'>
					Back to Home
				</button>
			</div>
		</div>
	)
}

export default Cart
