import mainLogo from '../img/mainLogo.png';
import ThemeSwitch from './ThemeSwitch';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NavBar = ({ data }) => {
  const buttonsStyle = {
    textDecoration: 'none',
    display: 'flex',
  };
  const navBar = {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: '20px',
    boxSizing: 'border-box',
    border: '1px black solid',
    borderRadius: '20px',
  };
  const imgStyle = {
    width: '220px',
    marginLeft: '16px',
    display: 'flex',
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div style={navBar}>
        <Link to="/">
          <img style={imgStyle} src={mainLogo} alt="Rick and Morty" />
        </Link>

        <Stack direction="row" spacing={5} paddingRight={20}>
          {Object.keys(data || {}).map((item) => (
            <Link to={item} key={v4()} style={buttonsStyle}>
              <Button
                variant="text"
                style={{ color: '#52CAD2', fontWeight: '600' }}
              >
                {item}
              </Button>
            </Link>
          ))}
        </Stack>

        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
