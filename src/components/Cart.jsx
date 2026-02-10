import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add, remove } from '../redux/cartSlice.js'
import { marketingArticles } from './Articles'
import toast, { Toaster } from 'react-hot-toast'
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowLeft,
    CreditCard
} from 'lucide-react'

export default function Cart() {
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartDetails = cart.map(item => {
        const article = marketingArticles.find(a => a.slug === item.slug)
        return article ? { ...article, count: item.count } : null
    }).filter(Boolean)

    const total = cartDetails.reduce((acc, item) => acc + (Number(item.price) * item.count), 0)

    const handleCheckout = () => {
        const storedData = localStorage.getItem("authData");
        const user = storedData ? JSON.parse(storedData) : null;

        if (user && user.isLogin) {
            toast.success("Proceeding to checkout...");
            setTimeout(() => {
                navigate('/checkout');
            }, 1000);
        } else {
            toast.error("Please login to complete your purchase");
            navigate('/login');
        }
    };

    if (cartDetails.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full border border-gray-100">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-gray-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 text-sm mb-6">Looks like you haven't enrolled in any courses yet.</p>
                    <button
                        onClick={() => navigate('/courses')}
                        className="w-full py-2.5 px-4 bg-[#49bbbd] text-white font-medium rounded-lg shadow-sm hover:opacity-90 transition flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Browse Courses
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-[#49bbbd]" />
                    Shopping Cart
                    <span className="text-gray-400 text-lg font-normal">({cartDetails.length} items)</span>
                </h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    <div className="lg:col-span-8 space-y-4">
                        {cartDetails.map((item) => (
                            <div key={item.slug} className="flex flex-col sm:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md">

                                <div className="h-32 w-full sm:w-40 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="mt-4 sm:mt-0 sm:ml-5 flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="inline-block px-2 py-0.5 text-xs font-semibold text-[#49bbbd] bg-[#49bbbd]/10 rounded-full mb-2">
                                                {item.category}
                                            </span>
                                            <h3 className="text-base font-bold text-gray-800 leading-snug">{item.title}</h3>
                                            <p className="text-xs text-gray-500 mt-1">By {item.author} • {item.duration}</p>
                                        </div>
                                        <p className="text-lg font-bold text-[#49bbbd]">
                                            ${(Number(item.price) * item.count).toLocaleString()}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                                            <button
                                                onClick={() => dispatch(remove({ slug: item.slug }))}
                                                className="p-1.5 hidden text-gray-500 hover:text-[#49bbbd] transition"
                                                disabled={true}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-semibold text-gray-700">{item.count}</span>
                                            <button
                                                onClick={() => dispatch(add({ slug: item.slug }))}
                                                className="p-1.5 text-gray-500 hover:text-[#49bbbd] transition"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => dispatch(remove({ slug: item.slug }))}
                                            className="flex items-center text-xs font-medium text-gray-400 hover:text-red-500 transition gap-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-5">Order Summary</h2>

                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">${total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span className="text-green-600 font-medium">-$0.00</span>
                                </div>
                                <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center">
                                    <span className="text-base font-bold text-gray-800">Total</span>
                                    <span className="text-xl font-bold text-[#49bbbd]">${total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full mt-6 py-3 bg-[#49bbbd] text-white font-semibold rounded-lg shadow-md hover:bg-[#3daeb0] transition flex items-center justify-center gap-2"
                            >
                                <CreditCard className="w-4 h-4" />
                                Checkout Now
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Secure checkout powered by Stripe
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}