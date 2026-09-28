import { saveApplication } from './storage.js';

function getFieldError(field) {
    if (field.validity.valueMissing) {
        return 'Este campo é obrigatório.';
    }

    if (field.validity.typeMismatch) {
        return 'Informe um endereço de e-mail válido.';
    }

    if (field.validity.tooShort) {
        return 'Informe pelo menos 3 caracteres.';
    }

    if (field.validity.patternMismatch) {
        return 'Informe um telefone válido com DDD.';
    }

    return '';
}

function validateField(field) {
    const message = getFieldError(field);
    const feedback = document.getElementById(`${field.id}-feedback`);

    field.classList.toggle('is-invalid', Boolean(message));
    field.classList.toggle('is-valid', !message && field.required);
    field.setAttribute('aria-invalid', String(Boolean(message)));

    if (feedback) {
        feedback.textContent = message;
    }

    return !message;
}

export function setupVolunteerForm(root) {
    const form = root.querySelector('.formulario-voluntario');

    if (!form) {
        return;
    }

    const fields = [...form.querySelectorAll('input, select, textarea')];

    fields.forEach((field) => {
        field.addEventListener('blur', () => {
            field.dataset.touched = 'true';
            validateField(field);
        });

        field.addEventListener('input', () => {
            if (field.dataset.touched === 'true') {
                validateField(field);
            }
        });

        field.addEventListener('change', () => {
            if (field.dataset.touched === 'true') {
                validateField(field);
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formFeedback = form.querySelector('.form-feedback');
        const invalidFields = fields.filter((field) => {
            field.dataset.touched = 'true';
            return !validateField(field);
        });

        if (invalidFields.length > 0) {
            formFeedback.classList.add('is-error');
            formFeedback.classList.remove('is-success');
            formFeedback.textContent = 'Revise os campos destacados antes de enviar.';
            invalidFields[0].focus();
            return;
        }

        const application = Object.fromEntries(new FormData(form).entries());
        application.submittedAt = new Date().toISOString();

        try {
            saveApplication(application);
            form.reset();
            fields.forEach((field) => {
                delete field.dataset.touched;
                field.classList.remove('is-valid', 'is-invalid');
                field.removeAttribute('aria-invalid');
                const feedback = document.getElementById(`${field.id}-feedback`);
                if (feedback) {
                    feedback.textContent = '';
                }
            });
            formFeedback.classList.add('is-success');
            formFeedback.classList.remove('is-error');
            formFeedback.textContent = 'Inscrição enviada e salva neste dispositivo. Obrigado por fazer parte!';
        } catch {
            formFeedback.classList.add('is-error');
            formFeedback.classList.remove('is-success');
            formFeedback.textContent = 'Não foi possível salvar a inscrição neste navegador. Tente novamente.';
        }
    });
}