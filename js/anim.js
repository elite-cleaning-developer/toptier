


const home = document.getElementById('hmLnk');


home.addEventListener('click', () =>{
    location.replace('http://127.0.0.1:5500/')
})

function cookies(){
    document.getElementById('policy').style.display = 'none';
    document.getElementById('cookies').style.display = 'block';
}
    function policy(){
    document.getElementById('policy').style.display = 'block';
    document.getElementById('cookies').style.display = 'none';
}