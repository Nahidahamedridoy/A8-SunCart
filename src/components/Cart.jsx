import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <Card className='border rounded-xl'>
            {/* image */}
            <div className='relative w-full aspect-square'>
                <Image
                    src={cart.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={cart.name}
                    className='object-cover rounded-xl'
                />
                <Chip size='sm' className='absolute right-2 top-2'>{cart.category}</Chip>
            </div>
            {/* description */}
            <div>
                <h2 className='font-medium'>{cart.name}</h2>
            </div>

            <div className="flex justify-between gap-5">
                <div className='flex items-center gap-2'>
                    <p className='text-yellow-500'><GoStarFill /></p>
                    <p>{cart.rating}</p>
                </div>

                <div className='flex font-semibold text-xl items-center gap-1'>
                    <p><FaDollarSign /></p>
                    <p>{cart.price}</p>
                </div>
            </div>

            <Link href={`all-carts/${cart.id}`}>
                <Button variant='outline' className="w-full mt-4 my-4">View Details</Button>
            </Link>

        </Card>
    );
};

export default Cart;