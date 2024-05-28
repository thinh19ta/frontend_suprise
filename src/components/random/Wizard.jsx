import React, { useState } from 'react';
import './index.css'
import Step from './Step';
import ProgressBar from './ProgressBar';
import Header from '../header/Header';
import RandomProducts from '../shop/products/RandomProducts';

const Wizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    const totalSteps = 4; // Total number of steps

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleOptionSelect = (step, option) => {
        setSelectedOptions((prev) => ({ ...prev, [step]: option }));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowContent(true);
        }, 4000);
    };

    if (showContent) {
        return (
            <div>
                <Header />
                <RandomProducts title={'Suggested product'} length={4} />
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                <Step currentStep={currentStep} selectedOption={selectedOptions[currentStep]} onOptionSelect={handleOptionSelect} />
                <div className="d-flex justify-content-center mt-4">
                    {currentStep > 1 && (
                        <button className="btn btn-secondary me-5" onClick={prevStep}>
                            Back
                        </button>
                    )}
                    {currentStep < totalSteps ? (
                        <button className="btn btn-primary" onClick={nextStep}>
                            Next
                        </button>
                    ) : (
                        <button className="btn btn-success" onClick={handleSubmit} disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Wizard;
