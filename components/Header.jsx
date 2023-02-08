import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor, fontSize }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: fontSize,
    // backgroundColor: '#272932',
    // color: '#35495E'
  };

  return (
    <header style={headerStyles}>
      <div className="container flex items-center justify-center">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

// Using defaultProps when no props (text) is sent
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.6)',
  textColor: '#41b883',
  fontSize: '2rem',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Header;
