import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
    const input = document.querySelector('#phone');
    intlTelInput(input, {
        initialCountry: 'auto',
        geoIpLookup: function (success, failure) {
            fetch('https://ipapi.co/json')
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    success(data.country_code);
                })
                .catch(function () {
                    failure();
                });
        },
        utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js',
    });
};
