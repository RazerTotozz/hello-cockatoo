import React from 'react';
import Styled from 'styled-components';

const NavbarTitle = Styled.a `
    color: rgb(251, 159, 164);
    text-align: center;
    font-weight: 400;
    font-size: 13px;
`;

const NavbarStyle = Styled.nav `
    background: rgba(34, 34, 34, 0.0);
`;

const NavbarIcon = Styled.i `
    color: rgb(251, 159, 164);
`;

class Navbar extends React.Component {
    render() {
        return (
            <NavbarStyle className='navbar'>
                <NavbarIcon className='material-icons md-48 mx-1'>
                    list
                </NavbarIcon>
                <NavbarTitle className='mx-auto' href='/`'>
                    Online boutique
                </NavbarTitle>
            </NavbarStyle>
        );
    }
}

export default Navbar;
