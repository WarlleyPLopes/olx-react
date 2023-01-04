export default function Header() {
  return (
    <header className="bg-white h-20">
      <div className="container px-4 mx-auto h-full flex items-center justify-between">
        <img className="h-12 w-12" src="/logo.svg" alt="OLX logo" />
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavItem name="Plano profissional" />
            </li>
            <li>
              <NavItem name="Meus anuncios" />
            </li>
            <li>
              <NavItem name="Chat" />
            </li>
            <li>
              <NavItem name="Notificação" />
            </li>
            <li>
              <LoginButton />
            </li>
            <li>
              <CreateAdButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItem(props) {
  return (
    <a href="/" className="hover:text-purple-500">
      {props.name}
    </a>
  );
}

function LoginButton() {
  return (
    <button className="rounded-full py-2 px-10 border text-gray-500 hover:text-purple-500 hover:border-purple-500">
      Entrar
    </button>
  );
}

function CreateAdButton() {
  return (
    <button className="rounded-full py-2 px-10 border border-orange-500 bg-orange-500 hover:bg-orange-600 text-white transition">
      Desapega
    </button>
  );
}
