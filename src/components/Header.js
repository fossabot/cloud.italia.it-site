import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  HeaderContent,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  Icon,
  Nav,
  NavItem,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import logo from '../images/cloud-logo.svg';

const useStyle = createUseStyles({
  h6: {
    composes: 'h6',
    fontSize: ['inherit', '!important'],
  },
});

const SlimHeader = () => (
  <HeaderReactKit type="slim">
    <HeaderContent className="font-weight-semibold">
      <div>
        <a
          href="https://innovazione.gov.it/dipartimento/la-struttura/"
          rel="noreferrer"
          aria-label="Dipartimento per la Trasformazione Digitale"
          className="navbar-brand mr-0"
        >
          Dipartimento per la Trasformazione Digitale
        </a>
        <span className="text-white"> + </span>
        <a href="https://www.agid.gov.it/" rel="noreferrer" aria-label="AgID" className="navbar-brand">
          AgID
        </a>
      </div>
    </HeaderContent>
  </HeaderReactKit>
);

const CenterHeader = () => {
  const classes = useStyle();
  return (
    <HeaderReactKit type="center" theme="light">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <div className="it-brand-text">
              <div className="d-flex align-items-center">
                <img className="icon" src={logo} alt="Cloud PA logo" />
                <div>
                  <h1 className="h3">Cloud Italia</h1>
                  <h2 className={classes.h6}>Il Cloud della Pubblica Amministrazione italiana</h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <HeaderRightZone>
          <HeaderSocialsZone label="Leggi di più su">
            <ul>
              <li>
                <a
                  href="https://medium.com/team-per-la-trasformazione-digitale/infrastrutture-digitali-cloud/home"
                  className="d-block mr-3"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Medium"
                >
                  <Icon icon="it-medium" />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
        </HeaderRightZone>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  return (
    <HeaderReactKit type="navbar" theme="light">
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler onClick={() => setIsOpen(!isOpen)} aria-expanded="false" aria-label="Toggle navigation">
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse isOpen={isOpen} navbar header onOverlayClick={toogleMenu}>
          <div className="menu-wrapper">
            <Nav navbar>
              <NavItem>
                <Link to="/strategia/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Strategia nazionale</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/adozione/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Programma di adozione</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/servizi/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Qualificazione dei servizi</span>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/notizie/" className="nav-link" activeClassName="active" onClick={closeMenu}>
                  <span className="font-weight-semibold">Notizie e media</span>
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="navbar-secondary">
              <NavItem>
                <a href="https://www.agid.gov.it/" className="nav-link">
                  <span className="font-weight-semibold">Catalogo dei servizi AgID</span>
                  <Icon className="ml-2 pb-1" color="primary" icon="it-external-link" size="sm" />
                </a>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </HeaderReactKit>
  );
};

export const Header = () => (
  <Headers>
    <SlimHeader />
    <div className="it-nav-wrapper">
      <CenterHeader />
      <NavHeader />
    </div>
  </Headers>
);