let button = document.querySelector('button');
button.addEventListener('click', () => {
    // console.log('clicked');
    try {
        let res = fetch('http://localhost:3000/test', {
            method: 'GET',
        });
        res.then((data) => {
            alert(data);
            console.log(data);
        });
    } catch {
        alert('err');
        console.log('get error');
    }
})

