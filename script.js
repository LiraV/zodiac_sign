var sign = 'Не определенf';
var number = 7;

function save_details() {

}

function display_sign() {

    const sign_field = document.getElementsByClassName('sign')[0];
    sign_field.innerText = sign;
}

function display_number() {
    number_src = '';
    if (number == 7) {
        number_src = img/Elegant_Vintage_Number_Seven_PNG_Clip_Art_Image.png;
    }
    const number_field = document.getElementsByClassName('number')[0];
    number_field.src = number_src;
}