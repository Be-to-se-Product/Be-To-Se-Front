import { useState } from "react";

const useProgress = (steps, storage) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(storage);

  const nextStep = () => {
    if (step + 1 >= steps) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step <= 0) return;
    setStep(step - 1);
  };

  const resetStep = () => {
    setStep(0);
  };

  const currentStep = () => step;

  const resetData = () => {
    const dataReset = { ...storage };
    Object.keys(dataReset).forEach((key) => {
      dataReset[key] = "";
    });
    setData(dataReset);
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
    setData,
    data,
    resetData,
  };
};

export default useProgress;
