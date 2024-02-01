import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CartCount = () => {
  return (
    <>
      {/* open CartCount container*/}

      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        {/* open CartCount item container */}
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer">
            <ChevronDoubleLeftIcon className="h-5 w-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </div>
          <div className="grid items-center">
            <h1 className="capitalize text-base font-medium text-slate-900">
              your cart <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">(Items)</span>
            </h1>
          </div>
        </div>
        {/* open CartCount item container */}

        {/* open CartCount action section */}
        <div className="flex items-center">
          <button type="button" className="bg-theme-cart rounded active:scale-90 p-0.5">
            <XMarkIcon className="h-5 w-5 text-white stroke-[2]"/>
          </button>
        </div>
        {/* close CartCount action section */}

      </div>
      {/* close CartCount container*/}
    </>
  )
}

export default CartCount