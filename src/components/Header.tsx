import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-5 border-b border-b-border mb-10 relative">
        <h2 className="text-lg font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          Mulinari Financeiro
        </h2>
        <ul className="flex gap-4">
          <li className="font-semibold hover:text-zinc-700 transition-all">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li className="font-semibold hover:text-zinc-700 transition-all">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to={"/cadastro/servico"}
            >
              Cadastro
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
