import React, { useState } from "react";

const DistanceFilter = ({ onChange }) => {
    const [distancia, setDistancia] = useState(50);

    return (
        <div className="flex pt-2 pr-2 pb-2 pl-2 items-center w-60 h-16 border-2 gap-4">
            <span className="w-full mb-1">Distancia</span>
            <input
                type="range"
                name=""
                id=""
                max={100}
                value={distancia}
                className="accent-white-principal w-full"
                onChange={(e) => {
                    setDistancia(e.target.value);
                    onChange(e.target.value); // Corrigido aqui
                }}
            />
            <span className="flex justify-self-end mt-2">{distancia} km</span>
        </div>
    );
};

export default DistanceFilter;

