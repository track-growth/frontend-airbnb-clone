/**
 * @description 상단 header 컴포넌트입니다.
 * - 로고와 햄버거 버튼 오른쪽 메뉴 버튼을 포함합니다.
 */

import { Link } from 'react-router-dom'
import { AuthMenu } from './menu'
import { SiAirbnb } from 'react-icons/si'

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-b from-white from-40% to-gray-100">
      {/* NOTE: Airbnb 로고 */}
      <Link to="/" aria-label="Airbnb homepage">
        <SiAirbnb className="fill-[#FF385C] size-7" />
      </Link>

      {/* NOTE: 햄버거 버튼 오른쪽 메뉴 버튼 */}
      <AuthMenu />
    </header>
  )
}
