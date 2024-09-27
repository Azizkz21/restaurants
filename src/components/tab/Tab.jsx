export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      style={{ cursor: "pointer", textAlign: "center", padding: 10 }}
      disabled={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
