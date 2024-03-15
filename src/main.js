import './style.css';
import printMe from './index.js';

function component() {
    const element = document.createElement('p');

    element.innerText = "Hy! I am a para!"
    
    

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());