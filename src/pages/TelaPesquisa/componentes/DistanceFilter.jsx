import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

const DistanceFilter = ({ register, onChange, ...props }) => {
  const [distancia, setDistancia] = useState(50);
  const debounce = useDebounce((distancia) => {
    onChange(distancia);
  }, 1000);
  return (
    <div className="flex  flex-col items-end w-10/12 gap-x-4 h-16  ">
      <input
        {...props}
        {...register}
        type="range"
        max={100}
        defaultValue={50}
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
