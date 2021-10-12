import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { dayValidator, monthValidator, yearValidator } from './transfer.custom.validator';


// const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validationsSchema = {
    field: {
        account: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],

        iban: [{
            validator: Validators.required,
            message: 'Campo requerido',
        
        },
            {
                validator: iban.validator,
                message: 'Iban no válido',  
            },
        ],

        name: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],

        amount: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],

        concept: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],

        notes: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],

        day: [{
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
                validator: dayValidator,
            }
        ],

        month: [{
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
                validator: monthValidator,
            }
        ],

        year: [{
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: yearValidator,
            }
        ],

        email: [Validators.email],
    },
};

export const formValidation = createFormValidation(validationsSchema);