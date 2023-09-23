
import React from 'react'
import { CustomHeaderV1 } from '../../../../components/CustomNavbar'
import { CarouselTransition } from '../../../../components/CarouselTransition';

const Analytics = () => {
  return (
    <div className="h-screen">
      <CustomHeaderV1 />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 h-6">
        <div className="">
          {/* <CarouselTransition /> */}
        </div>
        <div className="border p-10 "></div>
        <div className="border p-10 "> </div>
        <div className="border p-10 "> </div>
        <div></div>
      </div>
    </div>
  );
}

export default Analytics

