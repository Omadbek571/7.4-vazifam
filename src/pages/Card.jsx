import React from 'react';

function Card({ products }) {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {products.length === 0 ? (
                <p className="text-lg text-gray-600">No products in the cart</p>
            ) : (
                <div className="bg-white shadow-md rounded-lg p-6">
                    {products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between mb-4 border-b last:border-b-0 pb-4">
                            <div>
                                <h3 className="text-xl font-semibold">{product.title}</h3>
                                <p className="text-gray-700">Color: <span className="font-medium">{product.color}</span></p>
                                <p className="text-gray-700">Quantity: <span className="font-medium">{product.quantity}</span></p>
                            </div>
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
