import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
           <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Chất lượng"/>
           <p className='font-semibold'>Sản phẩm chính hãng</p>
           <p className='text-gray-400'>Không sử dụng hàng từ Taobao</p>
        </div>
        <div>
           <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Độc đáo"/>
           <p className='font-semibold'>Sản phẩm độc lạ</p>
           <p className='text-gray-400'>Xu hướng và chất lượng tốt</p>
        </div>
        <div>
           <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Giá cả"/>
           <p className='font-semibold'>Giá cả cạnh tranh</p>
           <p className='text-gray-400'>Chất lượng vượt trội, giá hợp lý</p>
        </div>
        <div>
           <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Giao hàng"/>
           <p className='font-semibold'>Giao hàng nhanh chóng</p>
           <p className='text-gray-400'>Dự kiến từ 10-15 ngày</p>
        </div>
    </div>
  )
}

export default OurPolicy