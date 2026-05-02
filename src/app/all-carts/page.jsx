import Cart from '@/components/Cart';
import React from 'react';

const AllProductsCart = async () => {
    const res = await fetch('https://a8-sun-cart.vercel.app/data.json');
    const carts = await res.json();
    console.log(carts);
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Photos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {carts.map (cart=> <Cart key={cart.id} cart={cart}/>)}
            </div>

        </div>
    );
};

export default AllProductsCart;
