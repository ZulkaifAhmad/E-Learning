import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { 
  CheckCircle, 
  Mail, 
  Package, 
  ArrowLeft, 
  User,
  ShoppingCart 
} from 'lucide-react';

export default function Checkout() {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      toast.error("Please login first");
      navigate('/login');
    }
  }, [navigate]);

  const handleConfirmOrder = () => {
    toast.success("Order placed successfully! We will reach out to you via email.");
    
    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  if (!userData) return null; 

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="bg-[#49bbbd] px-8 py-6 flex items-center justify-between">
            <div className="text-white">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Checkout
                </h1>
                <p className="text-teal-100 text-sm mt-1">Review your order details below</p>
            </div>
            <button 
                onClick={() => navigate(-1)} 
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
            >
                <ArrowLeft size={20} />
            </button>
        </div>

        <div className="p-8 space-y-8">
            
            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#49bbbd]" />
                    Customer Information
                </h2>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-white p-2 rounded-full shadow-sm text-gray-400">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Email Address</p>
                            <p className="text-gray-800 font-medium">{userData.email}</p>
                        </div>
                    </div>
                    {userData.username && (
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                             <div className="bg-white p-2 rounded-full shadow-sm text-gray-400">
                                <User size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Username</p>
                                <p className="text-gray-800 font-medium">{userData.username}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-[#49bbbd]" />
                    Order Summary
                </h2>
                
                {cart.length === 0 ? (
                     <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Your cart is empty.</p>
                     </div>
                ) : (
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <span>Product Slug</span>
                            <span>Quantity</span>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {cart.map((item, index) => (
                                <li key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <Package className="text-gray-400 w-5 h-5" />
                                        <span className="font-mono text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
                                            {item.slug}
                                        </span>
                                    </div>
                                    <span className="font-bold text-gray-800 bg-[#49bbbd]/10 text-[#49bbbd] px-3 py-1 rounded-full text-sm">
                                        x {item.count}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="pt-4">
                <button
                    onClick={handleConfirmOrder}
                    disabled={cart.length === 0}
                    className={`w-full py-2 rounded-xl text-white font-semibold text-base cursor-pointer transform transition flex items-center justify-center gap-2
                    ${cart.length === 0 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-[#49bbbd] hover:bg-[#3daeb0] hover:shadow-xl'
                    }`}
                >
                    Confirm Order
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                    By clicking confirm, you agree to our Terms & Conditions.
                </p>
            </div>

        </div>
      </div>
    </div>
  );
}