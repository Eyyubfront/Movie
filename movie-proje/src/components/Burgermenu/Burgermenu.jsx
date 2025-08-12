import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  
  const toggleMenu = () => setOpen(prev => !prev);

  
  const handleMenuClick = () => setOpen(false);

  return (
  
     
        <div className="burger-container">
        {!open && (
          <IconButton className="menu-icon" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        )}
          {open && (
            <div className={`menu-drawer ${open ? 'open' : ''}`}>
              <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
                <Stack flexDirection="row" justifyContent="flex-end">
                  <IconButton
                    className="close-icon"
                    edge="end"
                    onClick={() => setOpen(false)}
                  >
                    <Close className="cloceicon" />
                  </IconButton>
                </Stack>
                <div className="navbar__container">
                  <div className="navbar__top">
                    <div className="navbar__hrefs">
                      <Link className="burgermenu_link" to="/" onClick={handleMenuClick} >
                      <h3 className="burgermenunames">Home</h3>
                      </Link>
                      <Link  className="burgermenu_link" to="/explore" onClick={handleMenuClick} >
                      <h3 className="burgermenunames">Explore</h3>
                      </Link>
                      <Link  className="burgermenu_link" to="/contact" onClick={handleMenuClick} >
                      <h3 className="burgermenunames">Contact</h3>
                      </Link>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
     
   
  );
};

export default BurgerMenu;
