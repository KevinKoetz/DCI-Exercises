import "./Dogs.css";
import {useParams, NavLink } from "react-router-dom";
import DogAvatar from "../DogAvatar/DogAvatar";
import DogDetails from "../DogDetails/DogDetails";

interface DogInfo {
  name: string;
  imageUrl: string;
  age: number;
  traits: string[];
}

function Dogs({ dogInfos: dogInfos }: { dogInfos: DogInfo[] }) {
  const { name } = useParams();

  const currentInfo = dogInfos.find(
    (dogInfo) => dogInfo.name.toLowerCase() === name?.toLowerCase()
  );

  return (
    <div className="Dogs">
      <div className="avatars">
        {dogInfos.map((dogInfo, index) => (
          <NavLink className={({isActive})=> isActive ? "active" : !name ? "" :"greyedOut"} to={`${dogInfo.name.toLowerCase()}`} key={index}>
            <DogAvatar name={dogInfo.name} imageUrl={dogInfo.imageUrl} className="dogInfo"/>
          </NavLink>
        ))}
      </div>
      <div className="details">
        {name && (
          <DogDetails
            name={currentInfo?.name ?? ""}
            age={currentInfo?.age ?? 0}
            traits={currentInfo?.traits ?? []}
          />
        )}
      </div>
    </div>
  );
}

export default Dogs;
