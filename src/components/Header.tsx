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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="inline w-5 h-5 mr-2 align-middle"
          >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
          <span className="font-bold text-xl align-middle">LocalTube</span>
        </NavLink>
      </div>
      <div className="flex items-center">
        <Search />
      </div>
      <div className="flex items-center">
        <NavLink
          to={{
            pathname: `/add`,
          }}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="inline w-12 h-12 mr-2 align-middle"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
