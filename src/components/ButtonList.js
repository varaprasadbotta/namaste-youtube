import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "mixes",
    "Java Script",
    "React",
    "Next js",
    "Manjo DB",
    "Vue js",
    "Node js",
    "Million js",
    "Html",
    "css",
    "frontend",
    "songs"
  ];
  return (
    <div className="m-2 px-4 flex">
      {list.map((l,index) => {
        return <Button  key={index} name={l}></Button>;
      })}
     
    </div>
  );
};
export default ButtonList;
