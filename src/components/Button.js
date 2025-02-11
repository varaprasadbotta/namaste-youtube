const Button = (props) => {
  return (
    <div className="m-2 bg-gray-300 rounded-lg px-2">
      <button>{props.name}</button>
    </div>
  );
};
export default Button;
