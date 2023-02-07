import React from 'react'
import './Cart.css'
import Total from '../../components/Total/Total'

function Cart() {
	return (
		<div className='cart'>
			<div className='cart__left'>
				<div>
					<h3>Shopping Cart</h3>
				</div>
			</div>
			<div className='cart__right'>
				<Total />
			</div>
		</div>
	)
}

export default Cart
