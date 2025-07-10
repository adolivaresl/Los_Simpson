document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const inputs = [
    'userName',
    'userLastName',
    'userAge',
    'userContactNumber',
    'userGender',
    'userEmail',
    'favoriteCharacter',
    'favoriteChapter',
    'score',
    'extraInfo',
    'suggestions',
    ].map(id => document.getElementById(id));

    const showError = (input, message) => {
        if (!input || !input.parentElement) return;
        const feedback = input.parentElement.querySelector('.invalid-feedback');
        if (feedback) {
        feedback.textContent = message;
        input.classList.add('is-invalid');
        }
    }
    const clearError = (input) => {
         if (!input || !input.parentElement) return;
        const feedback = input.parentElement.querySelector('.invalid-feedback');
        if (feedback) {
                feedback.textContent = '';
                input.classList.remove('is-invalid');
            }
        }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;

        inputs.forEach(input => {
            clearError(input);

            //Validamos personalizadamente
            if(input.value.trim() === '' || input.value === 'Opciones') {
                showError(input, 'Este campo es obligatorio.');
                hasError = true;
            }
            else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)){
                showError(input, 'Por favor, ingresa un email válido.');
                hasError = true;
            }
            else if (input.type === 'number' && isNaN(input.value)) {
                showError(input, 'Por favor, ingresa un número');
                hasError = true;
            }
        });

        if (!hasError){
            alert('Formulario enviado correctamente.');
            form.reset();
        }
    });

});