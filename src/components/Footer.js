import React from 'react';
import Styled from 'styled-components';

const FooterElement = Styled.div`
  align-self: end;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr;

  .hotwheels-word {
    color: #FA0218;
  }

  .tracker-word {
    color: #FDE430;
  }
  
  .github {
    justify-self: end;
    padding-right: 4px;
    a, a:visited, a:hover, a:active {
      color: #7DBBE6;
      text-decoration: none;
    }
  }
`;

const Footer = () => (
  <FooterElement>
    <div className="copyright">
      <span className="hotwheels-word">HotWheels</span> <span className="tracker-word">Tracker</span> nsantos [dot] pessoal [at] gmail [dot] com {new Date().getFullYear()}
    </div>
    <div className="github">
      <a href="https://github.com/nothingpt" target="_blank" rel="noopener noreferrer">github</a>
    </div>
  </FooterElement>
);

export default Footer;
