import { Link } from "react-router";

const NavItems = () => {
  return (
    <div className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>
    </div>
  );
};

export default NavItems;
