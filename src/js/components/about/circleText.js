export const useCircleText = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const linkText = document.querySelector('.hero__about-link-text');
        const radius = linkText.offsetWidth / 2;
        const characters = linkText.querySelectorAll('span');

        // Задайте ваши значения здесь
        const translateValue = 60; // например, сдвиг на 10px
        const rotateValue = 87 * (Math.PI / 180); // 15 градусов в радианах

        function updatePositions() {
            const angleStep = (2 * Math.PI) / characters.length;

            characters.forEach((char, index) => {
                const angle = angleStep * index;
                const x =
                    radius +
                    (radius + translateValue) * Math.cos(angle) -
                    char.offsetWidth / 2;
                const y =
                    radius +
                    (radius + translateValue) * Math.sin(angle) -
                    char.offsetHeight / 2;

                char.style.setProperty('--x', `${x}px`);
                char.style.setProperty('--y', `${y}px`);
                char.style.setProperty('--angle', `${angle + rotateValue}rad`);

                // Optionally, to avoid initial jump, set the starting position
                char.style.transform = `translate(${x}px, ${y}px) rotate(${angle + rotateValue}rad)`;
            });
        }

        // Initial update
        updatePositions();
    });
};
