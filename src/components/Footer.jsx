import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo3} className='mb-5 w-32' alt='Gemix Logo'/>
                <p className='w-full md:w-2/3 text-gray-600'>Gemix - Đồ Decor và Phụ kiện Gaming Độc Lạ. Chúng tôi cung cấp các sản phẩm đồ decor công nghệ gaming và phụ kiện chất lượng cao, độc đáo từ nội địa Trung Quốc.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>THÔNG TIN</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Trang chủ</li>
                    <li>Giới thiệu</li>
                    <li>Sản phẩm</li>
                    <li>Chính sách bảo mật</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>LIÊN HỆ</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Hotline: 0123 456 789</li>
                    <li>Email: contact@gemix.com</li>
                    <li>Địa chỉ: 123 Đường ABC, TP.HCM</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='text-center text-gray-600 my-4'>
                © 2023 Gemix. Tất cả các quyền được bảo lưu.
            </p>
        </div>
    </div>
  )
}

export default Footer