import Link from "next/link";
import Icon from "./icon";
import { NavStyles } from "./nav-style";

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <Link href="/">
          <a>
            <Icon />
            BlogName
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{NavStyles}</style>
  </div>
);

export default Nav;
