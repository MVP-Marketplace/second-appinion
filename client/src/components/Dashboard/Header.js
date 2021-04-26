import React from "react";
import "boxicons";

function Header() {
  return (
    <div>
      <div>
        <form>
          <box-icon name="search-alt-2"></box-icon>
          <input />
        </form>
      </div>
      <div>
        <box-icon color="grey" name="bell"></box-icon>
      </div>
      <box-icon name="user"></box-icon>
    </div>
  );
}

export default Header;
