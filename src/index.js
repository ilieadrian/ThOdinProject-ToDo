import './style.css';

function component() {
    const element = document.createElement('p');

    element.innerText = "Hy! I am a para!"
    
    return element;
}

document.body.appendChild(component());