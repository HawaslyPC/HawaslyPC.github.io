document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelector('.calculator__keys');
    const totalInput = document.getElementById('total');
    const completosInput = document.getElementById('completos');
    const mediosInput = document.getElementById('medios');

    keys.addEventListener('click', e => {
        if (!e.target.matches('button')) return;
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            display.textContent = displayedNum === '0' ? keyContent : displayedNum + keyContent;
        } else if (action === 'decimal') {
            display.textContent = displayedNum.includes('.') ? displayedNum : displayedNum + '.';
        } else if (action === 'clear') {
            display.textContent = '0';
        } else if (action === 'calculate') {
            const total = parseFloat(totalInput.value);
            const completos = parseInt(completosInput.value);
            const medios = parseInt(mediosInput.value);
            const totalPersonas = completos + (medios * 0.5);
            const propinaPorPersona = total / totalPersonas;
            const totalMedios = propinaPorPersona / 2;
            display.textContent = `M: ${medios}, C: ${completos}, Medios: ${totalMedios.toFixed(2)},  Completos: ${propinaPorPersona.toFixed(2)}`;
        }
    });
});
