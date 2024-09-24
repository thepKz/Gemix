import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const {setShowSearch, getCartCount} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'>
                <img src={assets.logo3} className='w-36' alt='Gemix Logo'/>
            </Link>
            
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>TRANG CHỦ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>SẢN PHẨM</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>GIỚI THIỆU</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>LIÊN HỆ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='Tìm kiếm'/>
                <div className='group relative'>
                   <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Tài khoản'/></Link>
                   <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                       <p className='cursor-pointer hover:text-black'>Tài khoản</p>
                       <p className='cursor-pointer hover:text-black'>Đơn hàng</p>
                       <p className='cursor-pointer hover:text-black'>Đăng xuất</p>
                     </div>
                   </div>
                </div>
                <Link to='/cart' className='relative'>
                  <img src={assets.cart_icon} className='w-5 min-w-5' alt='Giỏ hàng'/>
                  <p className='absolute right-[-5px] bottom-[-5px] w-4 leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px] text-center'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='Menu'/>
            </div>

            {/* Sidebar menu cho màn hình nhỏ */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-200 ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Đóng'/>
                        <p>Đóng</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>TRANG CHỦ</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>SẢN PHẨM</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>GIỚI THIỆU</NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>LIÊN HỆ</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar