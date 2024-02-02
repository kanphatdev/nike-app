
import { useDispatch,useSelector } from "react-redux";
import { selectCartItems, selectCartState, setCloseCart } from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItemes = useSelector(selectCartItems);
  console.log(cartItemes);
  const onCartToggle = () => {
dispatch(setCloseCart({
  cartState:false,
}))
  }
  return (
    <>
      {/* open container wrapper */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8" }`}>
        {/* open card container  */}
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0  `}>
          <CartCount onCartToggle={onCartToggle}/>
          {cartItemes?.length === 0 ? <CartEmpty /> : <div>
            <div>
              {cartItemes?.map((item,i) => (
                <>
                <CartItem key={i} item={item}/>
                </>


              ))}
            </div>
            </div>}
      
        </div>
        {/*close card container  */}
      </div>
      {/* close container wrapper */}
    </>
  )
}

export default Cart