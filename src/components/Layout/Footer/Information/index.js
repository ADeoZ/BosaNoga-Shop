import InformationItem from "./InformationItem";

export default function Information() {
  const informationItems = [
    { id: 0, title: "О магазине", path: process.env.REACT_APP_LINK_ABOUT },
    { id: 1, title: "Каталог", path: process.env.REACT_APP_LINK_CATALOG },
    { id: 2, title: "Контакты", path: process.env.REACT_APP_LINK_CONTACTS },
  ];
  return (
    <ul className="nav flex-column">
      {informationItems.map((item) => (
        <InformationItem data={item} key={item.id} />
      ))}
    </ul>
  );
}
