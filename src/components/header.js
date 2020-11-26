import React from "react";

const Header = ({title = "NO TITLE", callback=()=>null}) => {

  return (
    <header>
      <div className='logo' onClick={()=>callback()}>
        <span>whyme.</span>
      </div>
      <div className='episode'>
        <span>{title}</span>
      </div>
    </header>
  );
};

export default Header;
