import React from 'react';

const Pizza = () => {
    const URL = 'https://www.pizzaolomouc.cz/poskladej-si-pizzu';
    return (
        <div>
            <div>Pizza</div>
            <div>
                zde si bude moct zákazník poskládat pizzu viz:{' '}
                <a href={URL} target="_blank" rel="noreferrer">
                    ZDE
                </a>
            </div>
        </div>
    );
};

export default Pizza;
