import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-1 m-1 justify-between shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-8 h-8 cursor-pointer"
          alt="hamBurgerMenu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="w-32 h-10 mx-1 "
            alt="youtubeLogo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg"
          />
        </a>
      </div>
      <div className="flex col-span-10 justify-center">
        <input className="w-1/2 rounded-l-full border border-gray-400" />
        <button className="rounded-r-full bg-gray-300 p-2">search</button>
      </div>
      <div className="flex col-span-1 mx-5 my-2">
        <img
          className="w-6 h-6 mx-5"
          alt="notificationBell"
          src="https://w1.pngwing.com/pngs/930/970/png-transparent-notification-icon-ios-7-iphone-icon-design-zooming-user-interface-button-apple-push-notification-service-computer-software.png"
        />
        <img
          className="w-6 h-6 "
          alt="profileIcon"
          src="https://banner2.cleanpng.com/20180404/sqe/avhxkafxo.webp"
        />
      </div>
    </div>
  );
};
export default Header;
