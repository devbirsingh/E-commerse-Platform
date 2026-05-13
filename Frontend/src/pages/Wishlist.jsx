import React from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../features/wishlist/wishlistThunk';

const Wishlist = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleWishlist = (id) => {
    try {
      dispatch(removeFromWishlist(id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-800">My Favourites</h2>
          <span className="text-gray-500 font-medium">{items.length} Items</span>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <Link to={`/products/${product._id}`}>
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </Link>
                  {/* Remove Button - Floating */}
                  <button
                    onClick={() => handleWishlist(product._id)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                    title="Remove from wishlist"
                  >
                    <FaHeart size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h5 className="text-lg font-bold text-gray-900 truncate uppercase tracking-tight">
                      {product.name}
                    </h5>
                    <p className="text-2xl font-black text-indigo-600 mt-1">
                      ${product.price}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-200 active:scale-95"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
            <div className="text-gray-300 mb-4 flex justify-center">
              <FaHeart size={80} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Your wishlist is empty</h3>
            <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added any favorites yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;