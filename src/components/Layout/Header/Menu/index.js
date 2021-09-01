import MenuItem from "./MenuItem";

export default function Menu() {
  const menuItems = [
    { id: 0, title: "Главная", path: process.env.REACT_APP_LINK_HOME },
    { id: 1, title: "Каталог", path: process.env.REACT_APP_LINK_CATALOG },
    { id: 2, title: "О магазине", path: process.env.REACT_APP_LINK_ABOUT },
    { id: 3, title: "Контакты", path: process.env.REACT_APP_LINK_CONTACTS },
  ];

  return (
    <ul className="navbar-nav mr-auto">
      {menuItems.map((item) => (
        <MenuItem data={item} key={item.id} />
      ))}
    </ul>
  );
}
