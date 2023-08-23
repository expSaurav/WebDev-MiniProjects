const insert = document.querySelector('.first-line');

window.addEventListener('keyup', (event) => {
    console.log(event);

    let keyname = document.getElementById('keyname');

    insert.innerHTML = `
    <div class="key" id="keyname">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
</div>

<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${event.code}
    <small>event.code</small>
</div>
    `


})