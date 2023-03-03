import { NavLink } from "react-router-dom";

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
      <div className="flex items-center">Search Goes Here</div>
    </header>
  );
}

export default Header;
