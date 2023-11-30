import React from 'react';

const Breadcrumb = ({ steps, currentStep }) => {
    return (
        <div className='w-100 flex justify-around'>
            <div className="flex items-center space-x-20 my-4">
            {steps.map((step, index) => (
        <div
            key={step}
            className={`w-4 h-4 mx-1 rounded-full ${
            index < currentStep
                ? 'bg-blue-500' // Colorir as bolinhas anteriores
                : index === currentStep
                ? 'bg-green-500' // Colorir a bolinha atual
                : 'bg-gray-300' // Deixar as bolinhas futuras em uma cor diferente
            }`}
        ></div>
        ))}
            </div>
        </div>
    );
};

export default Breadcrumb;