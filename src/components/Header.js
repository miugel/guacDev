import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 1297.7px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 64px;
    }

    nav {
        display: flex;
        align-items: center;

        p {
            margin-left: 48px;
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                color: darkgray;
            }
        }

        i {
            margin-left: 48px;
            font-size: 1.25rem;
            color: #333;
            cursor: pointer;
            transition: 0.25s;

            :hover {
                color: darkgray;
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt='apiary keyboards logo'/>
            <nav>
                <p>FAQ</p>
                <p>Shop</p>
                <p>Cart</p>
                {/* <i className="fas fa-shopping-cart"></i> */}
            </nav>
        </HeaderContainer>
    );
};

export default Header;