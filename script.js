var sign = "Козерог";
var number = 7;
var sign_src = "img/Capricorn-PNG-File.png";

function save_details() {

}

async function display_sign() {
    let responce = await fetch("signs.json")
    let content = await responce.text()
    content = JSON.parse(content)
    content = content.splice(0, 12)

    index = content.findIndex(obj => obj.name == sign);
    console.log(content);

    const sign_field = document.getElementsByClassName('sign')[0];
    sign_field.innerText = sign;
    const sign_image = document.getElementsByClassName('sign_img')[0];
    sign_image.src = sign_src;
}

async function display_number() {
    var number_src = '';
    if (number == 7) {
        number_src = "img/Elegant_Vintage_Number_Seven_PNG_Clip_Art_Image.png";
    }
    const number_field = document.getElementsByClassName('number')[0];
    number_field.src = number_src;
}
