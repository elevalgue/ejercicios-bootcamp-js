import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        user: [Validators.required, Validators.email],
        password: [Validators.required],
    },
};

export const formValidation = createFormValidation(validationSchema);