export const useMap = () => {
    let waterLayer;

    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
            ymaps3;
        const { YMapDefaultMarker } = await ymaps3.import(
            '@yandex/ymaps3-markers@0.0.1',
        );

        let currentTheme = localStorage.getItem('theme') || 'light';

        // Define breakpoints and corresponding map centers
        const breakpoints = [
            { query: '(max-width: 568px)', center: [150, 0] },
            { query: '(max-width: 568px)', center: [140, 0] },
            { query: '(max-width: 768px)', center: [125, 0] },
            { query: '(max-width: 768px)', center: [105, 20] },
            { query: '(max-width: 992px)', center: [80, 15] },
            { query: '(max-width: 1200px)', center: [75, 20] },
            { query: '(min-width: 1201px)', center: [40, 30] },
        ];

        // Function to get the center based on the current screen width
        const getCurrentCenter = () => {
            for (const breakpoint of breakpoints) {
                if (window.matchMedia(breakpoint.query).matches) {
                    return breakpoint.center;
                }
            }
            return [35, 20]; // Default center
        };

        const map = new YMap(document.getElementById('map'), {
            location: {
                center: getCurrentCenter(),
                zoom: 1.5,
            },
        });

        const featuresLayer = new YMapDefaultFeaturesLayer();
        map.addChild(featuresLayer);

        const createWaterLayer = (theme) => {
            return new YMapDefaultSchemeLayer({
                theme: 'light',
                zIndex: 0,
                background: {
                    stylers: [
                        {
                            opacity: 0,
                        },
                    ],
                },
                customization: [
                    {
                        tags: {
                            all: ['water'],
                        },
                        stylers: [
                            {
                                color: theme === 'dark' ? '#1e1d25' : '#fff',
                            },
                        ],
                    },
                    {
                        tags: {
                            all: ['landscape'],
                        },
                        stylers: [
                            {
                                color: '#acacb9',
                            },
                        ],
                    },
                ],
            });
        };

        waterLayer = createWaterLayer(currentTheme);
        map.addChild(waterLayer);

        map.addChild(
            new YMapDefaultMarker({
                coordinates: [135, -25],
                title: 'Yogja, INA',
                subtitle: '100 Smith Street<br>Collingwood VIC 3066 AU',
                color: 'blue',
            }),
        );

        window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
        window.waterLayer = waterLayer;
        window.map = map;

        // Add event listeners for breakpoints
        for (const breakpoint of breakpoints) {
            const mql = window.matchMedia(breakpoint.query);
            mql.addEventListener('change', (event) => {
                if (event.matches) {
                    map.setCenter(breakpoint.center);
                }
            });
        }

        // Function to update map theme
        const updateMapTheme = () => {
            const newTheme = localStorage.getItem('theme');
            if (newTheme !== currentTheme) {
                currentTheme = newTheme;
                map.removeChild(waterLayer);
                waterLayer = createWaterLayer(currentTheme);
                map.addChild(waterLayer);
            }
        };

        // Observe changes in localStorage for theme updates
        const observer = new MutationObserver(updateMapTheme);
        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
        });

        // Optionally, add an event listener to listen to localStorage changes directly
        window.addEventListener('storage', (event) => {
            if (event.key === 'theme') {
                updateMapTheme();
            }
        });
    }

    initMap();
};
