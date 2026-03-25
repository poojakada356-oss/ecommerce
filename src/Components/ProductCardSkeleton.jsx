import React from "react";

function ProductCardSkeleton() {

    return (
        <div className="w-full flex flex-wrap gap-18 p-16 z-0 bg-white">
        {
            Array.from({length : 15} , () => {
                return (
                    <div className="w-[26rem] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 animate-pulse">
  {  }
  <div className="relative w-full h-64 bg-gray-200">
    { }
    <div className="absolute top-3 left-3 w-20 h-6 bg-gray-300 rounded-full"></div>

    { }
    <div className="absolute top-3 right-3 w-24 h-6 bg-gray-300 rounded-full"></div>
  </div>

  {}
  <div className="p-5 space-y-3">
    {}
    <div className="w-24 h-3 bg-gray-200 rounded"></div>

    {}
    <div className="w-full h-4 bg-gray-200 rounded"></div>
    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>

    {}
    <div className="flex items-center gap-2">
      <div className="w-10 h-3 bg-gray-200 rounded"></div>
      <div className="w-4 h-4 bg-gray-200 rounded"></div>
    </div>

    {}
    <div className="flex items-center justify-between pt-2">
      <div className="w-20 h-6 bg-gray-300 rounded"></div>
      <div className="w-28 h-10 bg-gray-300 rounded-lg"></div>
    </div>
  </div>
</div>
                )
            })
        }
        </div>
    )
}


export default ProductCardSkeleton;