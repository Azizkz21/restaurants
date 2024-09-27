export const Menu = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((menu) => (
          <li key={menu.id}>
            <h3>{menu.name}</h3>
            <p>{menu.ingredients}</p>
            <span>{menu.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
