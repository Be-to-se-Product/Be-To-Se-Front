import React from "react";

const ContainerCard = ({
  image,
  username,
  bio,
  followers,
  following,
  link,
  isVisible,
}) => {
  return (
    <div  
      className={`absolute left-8 top-1/4 flex flex-col text-white-principal bg-black-900 rounded-lg w-[400px]  p-10 gap-y-10  ${
        isVisible ? "visible" : "hidden"
      } transition-all `}
    >
      <div className="flex items-center  flex-col">
        <div className="w-40 flex ">
          <img src={image} alt="" className="rounded-full mb-4" />
        </div>
        <a href={link}>
          <h3 className="font-semibold flex items-center gap-x-2 mb-4">
            <img src="src/assets/github-logo.svg" alt="" className="w-10" />

            {username}
          </h3>
        </a>
        <p className="text-base text-center w-41">{bio}</p>
      </div>
      <div className="flex">
        <div className="w-1/2 text-center">
          <h2>Seguidores</h2>
          <p>{followers}</p>
        </div>
        <div className="w-1/2 text-center">
          <h2>Seguindo</h2>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
