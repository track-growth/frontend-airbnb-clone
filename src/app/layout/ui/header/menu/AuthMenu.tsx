import { useState } from 'react';
import { overlay } from 'overlay-kit';
import { IoIosMenu } from 'react-icons/io';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// page layers
import { AuthModal } from '@/pages';

export const AuthMenu = () => {
  const [dropdownMenuAnchorEl, setDropdownMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isDropdownMenuOpen = Boolean(dropdownMenuAnchorEl);

  return (
    <>
      <IconButton
        aria-label="menu"
        aria-haspopup="true"
        onClick={event => setDropdownMenuAnchorEl(event.currentTarget)}
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
            setDropdownMenuAnchorEl(null);
            overlay.open(({ isOpen, close }) => <AuthModal isOpen={isOpen} close={close} />);
          }}
        >
          로그인 또는 회원 가입
        </MenuItem>
      </Menu>
    </>
  );
};
