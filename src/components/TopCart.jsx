import React from 'react';
import Cart from './Cart';

const TopCart = async () => {

    const res = await fetch('https://a8-sun-cart.vercel.app/data.json');
    const cart = await res.json();
    console.log(cart);

    const topCart = cart.slice(0, 3)

    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Cart</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                topCart.map(cart => <Cart key={cart.id} cart={cart} />)
            }
            </div>

        </div>

    );
};

export default TopCart;