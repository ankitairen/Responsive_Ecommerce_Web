import React from "react";
import PropTypes from "prop-types";
import FTLogo from "../../assets/img/ft_shop.png";

const Logo = ({ click }) => {
  return (
    <div onClick={click}>
      <img src={FTLogo} alt="Freight Tiger Shopping" width="170px" />
    </div>
  );
};

Logo.propTypes = {
  click: PropTypes.func
};

export default Logo;
