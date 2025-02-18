function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden')
}

function showElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden')
}

function addBackgroundById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-green-500')
    element.classList.add('text-white')
}

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

