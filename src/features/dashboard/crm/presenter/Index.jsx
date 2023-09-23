import React from 'react'
import { CustomHeaderV1 } from '../../../../components/CustomNavbar'
import { CarouselTransition } from '../../../../components/CarouselTransition';

const Crm = () => {
  return (
    <div className="h-screen">
      <CustomHeaderV1 />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="col-start-1 col-span-3 p-4 bg-red-200 ">
          <CarouselTransition />

          <div className="border p-10 "></div>
          <div className="border p-10 "> </div>
        </div>
        <div class="col-start-1 col-end-3 bg-black">02</div>
      </div>
    </div>
  );
}

export default Crm
