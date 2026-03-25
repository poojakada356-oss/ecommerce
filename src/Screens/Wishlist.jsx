import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Icon from "../Icons/Wishlist"; // Aapka wishlist icon

const Wishlist = () => {
  const wishlistData = useSelector((store) => store.product.wishlistData);
  const data = Object.values(wishlistData);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-28">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8 border-b pb-4">
          <Icon className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {data.length} Items
          </span>
        </div>

        {data.length > 0 ? (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((pObj) => (
              <div key={pObj.id} className="hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <ProductCard data={pObj} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Section */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-red-50 p-6 rounded-full mb-6">
              <Icon className="w-16 h-16 text-red-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Your wishlist is empty!
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Seems like you haven't added any favorites yet. Start exploring and find something you love!
            </p>
            <Link
              to="/"
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;