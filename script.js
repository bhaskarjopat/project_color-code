function changeColor() {
    let hex_number = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hexCode = "";

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_number.length)
        hexCode += hex_number[random_index];
    }

    document.getElementById('hex-code').innerHTML=hexCode;
    document.querySelector('body').style.background="#" + hexCode;
}