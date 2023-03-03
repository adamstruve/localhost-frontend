import { NavLink } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b border-stone-900 mb-5">
      <div className="flex items-center">
        <NavLink
          to={{
            pathname: `/`,
          }}
          style={{ cursor: "pointer" }}
        >
          localtube
        </NavLink>
      </div>
      <div className="flex items-center">
        <Search />
      </div>
    </header>
  );
}

export default Header;
