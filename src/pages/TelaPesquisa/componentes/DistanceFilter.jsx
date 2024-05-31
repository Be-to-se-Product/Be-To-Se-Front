import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

const DistanceFilter = ({ register, onChange, clear, ...props }) => {
  const [distancia, setDistancia] = useState(50);
  const debounce = useDebounce((distancia) => {
    onChange(distancia);
  }, 1000);

  useEffect(() => {
    if (clear) {
      setDistancia(50);
    }
  }, [clear]);

  return (
    <div className="flex  flex-col items-end w-10/12 gap-x-4 h-16  ">
      <input
        {...props}
        {...register}
        type="range"
        value={distancia}
        max={100}
        className=" w-full  rounded-full h-2 bg-gray-300 outline-none appearance-none accent-orange-principal"
        onChange={(e) => {
          setDistancia(e.target.value);
          debounce(e.target.value);
        }}
      />

      <span className="flex justify-self-end mt-2">{distancia} km</span>
    </div>
  );
};

DistanceFilter.displayName = "DistanceFilter";

export default DistanceFilter;
