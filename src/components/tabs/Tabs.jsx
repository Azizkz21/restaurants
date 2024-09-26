export const Tabs = ({ restaurants, activeChangeRestaurant }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <div >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: 15,
          alignItems: "center",
        }}
      >
        {restaurants.map((restaurant) => (
          <li>
            <button
              style={{ cursor: "pointer", textAlign: "center", padding: 10 }}
              onClick={() => activeChangeRestaurant(restaurant.id)}
            >
              {restaurant.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
