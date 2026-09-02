import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navItems } from "../../utils/nav-items";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-15 rounded-t-3xl bg-box-bg border-t border-box-border">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0 ">
            <img src={logo} className="w-7 h-7" alt="Kairui Portfolio" />
            <span className="text-lg font-semibold text-heading-1 ">
              Kairui Portfolio
            </span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-heading-2 dark:text-white">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
