import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { http } from '../axios'
import { data } from 'autoprefixer'



function Home({ setActiveLink }) {

    const [products, setProducts] = useState([])


    useEffect(() => {
        http.get("products?featured=true")
            .then(data => {
                if (data.status === 200) {
                    setProducts(data.data.data);
                }

            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    

    const navigate = useNavigate()
    function handleRedirect(id) {
        navigate(`/products/${id}`)
    }

    


    return (
        <div>
            <div className='flex '>
                <div>
                    <div className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-slate-700'>
                        We are changing the way people shop
                    </div>
                    <p className='mt-8 max-w-xl text-lg leading-8 text-slate-700'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
                    </p>
                    <button
                        className='p-3 bg-blue-600 rounded-xl text-white mt-5'
                        onClick={() => setActiveLink('/products')}
                    >
                        <Link to="/products">OUR PRODUCTS</Link>
                    </button>
                </div>
                <div>
                    <div key={Math.random()} className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="rounded-box" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[96px] '>
                <p className='text-3xl font-medium tracking-wider capitalize text-slate-700'>Featured Products</p>
                <hr className='mt-4'/>
            </div>

            <div className='flex gap-4 py-28'>
                {
                    products.length > 0 && products.map(function (product, index) {
                        return(
                            <div className='flex shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl' onClick={() => {handleRedirect(product.id)}} key={index}>
                                <div className='p-5 '>
                                    <img src={product.attributes.image} alt="img" className='h-[192px] w-[376px] rounded-2xl'/>
                                    <div className='p-5 flex flex-col gap-5 text-center text-slate-700'>
                                    <p className='font-bold text-xl'>{product.attributes.title}</p>
                                    <p>${product.attributes.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home
