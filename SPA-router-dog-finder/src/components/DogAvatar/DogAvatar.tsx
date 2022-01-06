import "./DogAvatar.css";

function DogAvatar({ name, imageUrl, className }: { name: string; imageUrl: string; className?:string | undefined }) {
  return (
    <div className={className ? className + " DogAvatar" : "DogAvatar"}>
      <img src={imageUrl} alt={`${name} is a Dog and looks into the camera.`}/>
      {name}
    </div>
  );
}

export default DogAvatar;
