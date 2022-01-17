
import "./Home.scss"


export const Home = ({className}: {className?: string}) => {
  return (
    <div className={className ? className + " Home" : "Home"}>
      Home
    </div>
  );
};
