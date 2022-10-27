export const inputFile = () => {
    let inputs = document.querySelectorAll('.form__file-btn');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.form__file-txt').innerText;

        input.addEventListener('change', function (e) {

            if (this.files.length)
                label.querySelector('.form__file-txt').innerText = this.files[0].name;
            else
                label.querySelector('.form__file-txt').innerText = labelVal;
        });
    });
};
