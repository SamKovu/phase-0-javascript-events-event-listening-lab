
function addingEventListener() {
    const input = document.getElementById('button');

       let clickAlert=() => alert('I was clicked!');
   
       input.addEventListener('click', clickAlert);
}

addingEventListener();
