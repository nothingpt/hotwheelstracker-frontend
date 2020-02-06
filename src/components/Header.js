import React from "react";
import Styled from "styled-components";

const HeaderElement = Styled.div`
  height: 20px;
  width: 100%;
  padding-top: 4px;
  font-family: HeavyHeap;
  color: #FA0218;

  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto auto;

  .logo {
    padding-left: 4px;
  }

  .login {
    padding-right: 4px;
    justify-self: end;
  }

  .search {
    margin-top: 4px;
    grid-column: 1/-1;
    justify-self: center;
    margin-top: 4px;
    grid-row-start: 2;
    
    .search-bar {
      border-radius: 4px;
      margin-top: 4px;
      width: 90vw;
      height: 50px;
      padding-left: 4px;
      padding-right: 4px;
      border: none;
      border-bottom: 1px solid #FA0218;
      box-shadow: 0 0 3px #ccc;
      :focus {
        outline: none;
      }
    }

    .btn-search {
      background-color: transparent;
      height: 40px;
      width: 40px;
      margin-left: -50px;
      border: 1px solid #FA0218;
      border-radius: 50%;
      :focus {
        outline: none;
      }
    }
  }
`;

const Header = () => (
  <HeaderElement>
    <div className="logo">HotWheels Tracker</div>
    <div className="search">
      <input
        type="text"
        className="search-bar"
        placeholder="search hotwheel model"
      />
      <button className="btn-search" type="submit">
        &gt;
      </button>
    </div>
    <div className="login">login</div>
  </HeaderElement>
);

export default Header;
