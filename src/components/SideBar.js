import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-40 h-max p-1 font-medium shadow-2xl">
      <ul className="m-1">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcriptions</li>
      </ul>
      <h3>YOU {">"}</h3>
      <ul className="m-1">
        <li>History</li>
        <li>PlayLists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <ul className="m-1">
        <li>History</li>
        <li>PlayLists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};
export default SideBar;
