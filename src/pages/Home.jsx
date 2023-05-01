import rotatePic from '../img/rotatePic.png';

const Home = () => {
  const homePageStyle = {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '50px',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={homePageStyle}>
      <img src={rotatePic} className="spinner"></img>
      <h1
        style={{ fontFamily: 'Delicious Handrawn, cursive', marginTop: '45px' }}
      >
        “Morty, I need your help on an adventure. Eh, “”need”” is a strong word.
        We need door stops, but a brick would work too.”
      </h1>
    </div>
  );
};

export default Home;
