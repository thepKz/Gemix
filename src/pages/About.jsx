import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t '>
          <Title text1={'VỀ'} text2={'CHÚNG TÔI'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Gemix là website chuyên cung cấp các sản phẩm đồ decor công nghệ gaming và phụ kiện như tai nghe, loa, màn hình cảm ứng di động, headphone, bàn phím chuột. Chúng tôi cam kết mang đến trải nghiệm mua sắm trực tuyến tuyệt vời, kết hợp sự tiện lợi, đa dạng và giá cả phải chăng.</p>
           <p>Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao, đảm bảo độ tin cậy cho mọi giao dịch. Nền tảng của chúng tôi được thiết kế để dễ dàng sử dụng, được hỗ trợ bởi dịch vụ khách hàng xuất sắc.</p>
           <b className='text-gray-800'>Sứ mệnh của chúng tôi</b>
           <p>
           Sứ mệnh của chúng tôi là mang đến trải nghiệm mua sắm trực tuyến tuyệt vời bằng cách cung cấp sản phẩm chất lượng cao, sự tiện lợi và dịch vụ khách hàng xuất sắc, đảm bảo mọi tương tác đều tích cực và đáng giá.</p>
          </div>
        </div>
        <div className='text-xl py-4 '>
           <Title text1={'TẠI SAO'} text2={'CHỌN CHÚNG TÔI'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Đảm bảo chất lượng</b>
            <p className='text-gray-700'>Tại Gemix, chất lượng là ưu tiên hàng đầu. Chúng tôi cam kết cung cấp hàng chính hãng, không sử dụng hàng từ Taobao. Mọi sản phẩm đều được kiểm tra kỹ lưỡng để đảm bảo độ bền, an toàn và hiệu suất cao.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Sự tiện lợi:</b>
            <p className='text-gray-700'>Chúng tôi tin vào sức mạnh của sự lựa chọn, và đó là lý do tại sao nền tảng của chúng tôi được thiết kế để cung cấp một loạt sản phẩm đa dạng từ nhiều danh mục khác nhau.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Dịch vụ khách hàng xuất sắc:</b>
            <p className='text-gray-700'>Gemix tự hào về dịch vụ khách hàng xuất sắc. Đội ngũ hỗ trợ tận tâm của chúng tôi luôn sẵn sàng hỗ trợ bạn với mọi thắc mắc, đảm bảo phản hồi nhanh chóng và hữu ích.</p>
          </div>
        </div>
    </div>
  )
}

export default About