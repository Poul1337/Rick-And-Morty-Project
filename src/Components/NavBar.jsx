import mainLogo from '../img/mainLogo.png';
import ThemeSwitch from './ThemeSwitch';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio10,
} from '../sounds';

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

  const soundsList = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    audio7,
    audio8,
    audio10,
  ];
  const randomPlay = () => {
    const playNow = soundsList[Math.floor(Math.random() * soundsList.length)];
    console.log(playNow);
    return playNow;
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div style={navBar}>
        <Link to="/" onClick={() => new Audio(audio9).play()}>
          <img style={imgStyle} src={mainLogo} alt="Rick and Morty" />
        </Link>

        <Stack direction="row" spacing={5} paddingRight={20}>
          {Object.keys(data || {}).map((item) => (
            <Link to={item} key={v4()} style={buttonsStyle}>
              <Button
                variant="text"
                style={{
                  color: '#52CAD2',
                  fontWeight: '600',
                  fontFamily: 'Delicious Handrawn, cursive',
                  fontSize: '20px',
                }}
                onClick={() => {
                  new Audio(randomPlay()).play();
                }}
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
