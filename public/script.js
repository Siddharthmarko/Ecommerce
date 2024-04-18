let button = document.querySelector('button');
button.addEventListener('click', async () => {
    // console.log('clicked');
    try {
        let res = await fetch('http://localhost:3000/test', {
            method: 'GET',
        }).then((res) => res.json());

        console.log(res);

    } catch {
        alert('err');
        console.log('get error');
    }
})
