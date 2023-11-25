import React from 'react';

const Breadcrumb = ({ steps, currentStep }) => {
    return (
        <div className='w-100 flex justify-around'>
            <div className="flex items-center space-x-20 my-4">
            {steps.map((step, index) => (
                <div key={index} className={`w-6 h-6 rounded-full ${index === currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            ))}
            </div>
        </div>
    );
};

export default Breadcrumb;