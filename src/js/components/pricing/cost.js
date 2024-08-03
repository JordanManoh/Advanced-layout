export const useCost = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('.hero__switcher-checkbox');
        const priceElements = document.querySelectorAll(
            '.hero__plans-sum-price',
        );
        const periodElements = document.querySelectorAll(
            '.hero__plans-sum-period',
        );

        const updatePrice = () => {
            priceElements.forEach((priceElement, index) => {
                const monthlyPrice = parseFloat(
                    priceElement.getAttribute('data-monthly-price'),
                );
                const periodElement = periodElements[index];

                if (checkbox.checked) {
                    const yearlyPrice = monthlyPrice * 12 * 0.8;
                    priceElement.textContent = `$${yearlyPrice.toFixed(0)}`;
                    periodElement.textContent = '/yr';
                } else {
                    priceElement.textContent = `$${monthlyPrice.toFixed(0)}`;
                    periodElement.textContent = '/mo';
                }
            });
        };

        if (localStorage.getItem('checkboxState') === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }

        checkbox.addEventListener('change', () => {
            localStorage.setItem('checkboxState', checkbox.checked);
            updatePrice();
        });

        updatePrice();
    });
};
