import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationsSchema = {
    field: {
        account: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        iban: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
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
        }],
        month: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        year: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
        email: [{
            validator: Validators.required,
            message: 'Campo requerido',
        }],
    },
};

export const formValidation = createFormValidation(validationsSchema);
