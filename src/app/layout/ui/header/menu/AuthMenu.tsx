/**
 * @description 상단 header 내 햄버거 버튼 오른쪽 메뉴 버튼입니다.
 * - 햄버거 버튼을 클릭하면 인증 메뉴가 열립니다.
 * - 로그인 또는 회원 가입 버튼을 클릭하면 모달이 열립니다.
 */

import { useState } from 'react'
import { overlay } from 'overlay-kit'
import { IoIosMenu } from 'react-icons/io'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
// page layers
import { AuthModal } from '@/pages'

export const AuthMenu = () => {
  // NOTE: 드롭다운 메뉴 상태(open/close) 관리
  const [
    dropdownMenuAnchorEl,
    setDropdownMenuAnchorEl,
  ] = useState<null | HTMLElement>(null)
  const isDropdownMenuOpen = Boolean(dropdownMenuAnchorEl)

  return (
    <>
      <IconButton
        aria-label="menu"
        aria-haspopup="true"
        // NOTE: 드롭다운 메뉴 열기
        onClick={(event) => setDropdownMenuAnchorEl(event.currentTarget)}
      >
        <IoIosMenu />
      </IconButton>

      <Menu
        id="auth-menu"
        open={isDropdownMenuOpen}
        onClose={() => setDropdownMenuAnchorEl(null)}
        anchorEl={dropdownMenuAnchorEl}
      >
        <MenuItem
          onClick={() => {
            // NOTE: 드롭다운 메뉴 닫기
            setDropdownMenuAnchorEl(null)
            // NOTE: 로그인/회원가입 모달 열기
            overlay.open(({ isOpen, close }) => (
              <AuthModal isOpen={isOpen} close={close} />
            ))
          }}
        >
          로그인 또는 회원 가입
        </MenuItem>
      </Menu>
    </>
  )
}
