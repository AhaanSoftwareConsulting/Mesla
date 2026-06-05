import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCart } from "../../Context/CartContext";
import {
  HeartStraightIcon,
  HandbagIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";

const Header = ({
  onSearch = () => {},
}) => {
  const [cartOpen, setCartOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  // Cart Context
  const {
  cart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = useCart();
  
const totalCartItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
// Total Quantity
 const cartTotal = cart.reduce(
  (total, item) =>
    total +
    (Number(item.prices?.price || 0) / 100) *
      item.quantity,
  0
);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <header className="bg-[#232F3F]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px] py-4 lg:py-6">

        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="cursor-pointer shrink-0">
            <img
              src={logo}
              alt="Mesla"
              className="w-[130px] lg:w-[220px]"
            />
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-[700px]"
          >
            <div className="flex h-[50px] w-full overflow-hidden rounded-full bg-white">

              <div className="flex items-center gap-2 border-r border-[#E5E5E5] px-4 lg:px-6">
                <span className="text-sm text-[#A6A6A6] whitespace-nowrap">
                  All Categories
                </span>
                <CaretDownIcon size={14} />
              </div>

              <input
                type="text"
                value={searchTerm}
   onChange={(e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }}
                placeholder="Search products..."
                className="flex-1 px-4 text-sm outline-none"
              />

              <button
                type="submit"
                className="bg-[#115492] px-6 text-white flex items-center justify-center"
              >
                <MagnifyingGlassIcon size={22} />
              </button>
            </div>
          </form>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Account */}
            <button className="hidden lg:flex items-center gap-2 text-white cursor-pointer">
              <span className="text-sm font-medium">
                My Account
              </span>
              <CaretDownIcon size={14} />
            </button>

            {/* Wishlist */}
            <button className="cursor-pointer relative text-white">
              <HeartStraightIcon size={24} />
            </button>

            {/* Cart */}
            <button onClick={() => setCartOpen(true)} className="cursor-pointer relative text-white">
              <HandbagIcon size={24} />

              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden text-white"
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
            >
              {mobileMenu ? (
                <XIcon size={28} />
              ) : (
                <ListIcon size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="mt-4 md:hidden"
        >
          <div className="flex h-[46px] overflow-hidden rounded-full bg-white">

            <input
              type="text"
              value={searchTerm}
             onChange={(e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }}
              placeholder="Search by products name of SKU..."
              className="flex-1 px-4 text-sm outline-none"
            />

            <button
              type="submit"
              className="bg-[#115492] px-5 text-white"
            >
              <MagnifyingGlassIcon size={20} />
            </button>
          </div>
        </form>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 rounded-lg bg-white p-4">

            <button className="flex items-center justify-between w-full py-3 border-b">
              <span>My Account</span>
              <CaretDownIcon size={16} />
            </button>

            <button className="flex items-center gap-3 py-3">
              <HeartStraightIcon size={20} />
              Wishlist
            </button>

            <button className="flex items-center gap-3 py-3">
              <HandbagIcon size={20} />
              Cart ({totalCartItems})
            </button>
          </div>
        )}
      </div>
      {/* Cart Drawer */}
{cartOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setCartOpen(false)}
    />

    {/* Drawer */}
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-xl overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-5">
        <h3 className="text-xl font-bold text-[#232F3F]">
          Shopping Cart
        </h3>

        <button
          onClick={() => setCartOpen(false)}
          className="cursor-pointer"
        >
          <XIcon size={24} />
        </button>
      </div>

      {/* Products */}
      <div className="p-5">

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b py-4"
              >
                <img
                  src={item.images?.[0]?.src}
                  alt={item.name}
                  className="h-20 w-20 object-contain"
                />

                <div className="flex-1">
                  <h4 className="font-medium line-clamp-2">
                    {item.name}
                  </h4>

                  <div className="mt-2 flex items-center gap-2">

  <button
  onClick={() => decreaseQty(item.id)}
  className="cursor-pointer h-8 w-8 rounded border"
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={() => increaseQty(item.id)}
  className="cursor-pointer h-8 w-8 rounded border"
>
  +
</button>

</div>

                  <p className="mt-1 font-semibold text-[#115492]">
                    $
                    {item.prices?.price
                      ? Number(item.prices.price) / 100
                      : 0}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

      </div>
      <div className="border-t pt-5 mt-5">

  <div className="flex justify-between text-lg font-bold">
    <span>Total</span>

    <span>
      ${cartTotal.toFixed(2)}
    </span>
  </div>

  <button className="mt-4 w-full rounded bg-[#115492] py-3 text-white">
    Checkout
  </button>

</div>
    </div>
  </>
)}
    </header>
  );
};

export default Header;