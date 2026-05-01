import { Button, Card } from "@heroui/react";
import Image from "next/image";


const CartDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch('https://a8-sun-cart.vercel.app/data.json');
    const cart = await res.json();
    // console.log(cart);

    const detailsCart = cart.find(p => p.id == id)
    console.log(detailsCart);


    return (
        <Card>
            <div className="grid md:grid-cols-2 gap-8">

            <div className="relative aspect-square">
                {/* Image */}
                <Image
                    src={detailsCart?.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={detailsCart?.name}
                    className='object-cover rounded-xl'
                />
            </div>

            {/* Info */}
            <div>
                <h2 className="text-3xl font-bold">{detailsCart?.name}</h2>
                <p className="text-gray-500">Brand: {detailsCart?.brand}</p>

                <p className="text-2xl text-orange-500 font-semibold">
                    ${detailsCart?.price}
                </p>

                <p>⭐ {detailsCart?.rating}</p>

                <p>
                    {detailsCart?.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
                </p>

                <p className="mt-4">{detailsCart?.description}</p>

                <Button > Buy Now</Button>

            </div>

        </div>
        </Card>
    );
};

export default CartDetailsPage;