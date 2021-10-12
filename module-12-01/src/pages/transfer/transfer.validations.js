import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator'
import { dayValidator, monthValidator, yearValidator } from './transfer.custom.validator';

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
                message: 'Campo requerido'
            },
            {
                validator: positiveNumber.validator,
                message: 'Cantidad introducida no válida',  
            }
        ],
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
        email:[{
                validator: Validators.email,
                message: 'Email no válido',
            },
        ]
    },
};

export const formValidation = createFormValidation(validationsSchema);