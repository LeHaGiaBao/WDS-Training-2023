import React from 'react'
import './Cart.css'
import Total from '../../components/Total/Total'
import {useNavigate} from 'react-router-dom'

function Cart() {
	const nav = useNavigate()

	return (
		<div className='cart'>
			<div className='cart__left'>
				<div>
					<h3>Shopping Cart</h3>
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
