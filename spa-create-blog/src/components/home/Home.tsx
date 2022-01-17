
import "./Home.scss"


export const Home = ({className}: {className?: string}) => {
  return (
    <div className={className ? className + " Home" : "Home"}>
      <h1>Welcome to our blog site</h1>
    </div>
  );
};
