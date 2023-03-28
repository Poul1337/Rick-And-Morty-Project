import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import mainLogo from '../img/mainLogo.png';
import ThemeSwitch from './ThemeSwitch';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

const NavBar = ({ data }) => {
  const buttonsStyle = {
    textDecoration: 'none',
  };

  return (
    <div className="navBar">
      <Link to="/">
        <img src={mainLogo} alt="Rick and Morty" />
      </Link>
      <Stack direction="row" spacing={5} paddingRight={20}>
        {Object.keys(data || {}).map((item) => (
          <Link to={item} key={v4()} style={buttonsStyle}>
            <Button variant="text">{item}</Button>
          </Link>
        ))}
      </Stack>
      <ThemeSwitch />
    </div>
  );
};

export default NavBar;
