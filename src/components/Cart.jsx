
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setCloseCart, setGetTotals } from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItemes = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY)
  console.log(cartItemes);
  useEffect( () => {
    dispatch(setGetTotals())
  },[cartItemes,dispatch]);
  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false,
    }))
  }
  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }
  return (
    <>
      {/* open container wrapper */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState
        ? "opacity-100 visible translate-x-0"
        : "opacity-0 invisible translate-x-8"}`}>
        {/* open card container  */}
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0  `}>
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems}/>
          {cartItemes?.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/> : <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hiden">
              {cartItemes?.map((item, i) => (
                <>
                  <CartItem key={i} item={item} />
                </>


              ))}
            </div>
            {/* open check out container */}
            {/*open check out subtotal */}
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="uppercase text-base font-semibold">subtotal</h1>
                <h1 className="text-sm text-slate-100 px-1 py-0.5 bg-theme-cart rounded ">
                  {totalAmount}
                </h1>
              </div>
              {/* close check out subtotal */}
              {/* open check  out product container */}
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center"></p>
                <button type="button" className="capitalize button-theme bg-theme-cart text-white">check out</button>
              </div>
            </div>
            {/*close check  out product container */}
            {/* close check out container */}
          </div>}

        </div>
        {/*close card container  */}
      </div>
      {/* close container wrapper */}
    </>
  )
}

export default Cart