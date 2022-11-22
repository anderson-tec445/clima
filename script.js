document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
         showWarning('Carregando...');

         let url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
    }


});


function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}