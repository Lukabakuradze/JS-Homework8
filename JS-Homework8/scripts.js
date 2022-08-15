
let requist = new XMLHttpRequest();

function Render() {
    let TextData = this.responseText;
    let JsRendered = JSON.parse(TextData);

    let ul = document.createElement('ul');
    JsRendered.data.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item.first_name + ' ' + item.last_name + ' ' + item.id;
        ul.appendChild(li);
    })
    document.getElementById('UsersFromWeb').appendChild(ul);
}

requist.addEventListener('load', Render);
requist.open('GET', 'https://reqres.in/api/users?page=2 ');
requist.send();




fetch('https://reqres.in/api/users?page=2 ', {
    method: 'GET'
})
    .then(function (responseText) {
        if (responseText.status !== 200) {
            throw 'error';
        }
        return responseText.json();
    })
    .then(function (responseData) {
        console.log(responseData);
        let ul = document.createElement('ul');
        responseData.data.forEach(element => {
            let li = document.createElement('li')
            li.textContent = (element.email)
            li.classList.add('list-item')
            ul.appendChild(li);
            let img = document.createElement('img');
            img.classList.add('imagesource')
            img.src = element.avatar;
            li.appendChild(img);
            ul.classList.add('ul-list')
        });
        document.getElementById('UserFromWebsite').appendChild(ul);
    })

    .catch(function (error) {
        console.log(error)
    })

