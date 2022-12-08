const ul = document.querySelector('.header__sugestoes--list');


function renderSugestUsers(sugestUsers) {

    for (let i = 0; i < sugestUsers.length; i++) {
        let userSugest = sugestUsers[i]



        const user = createUsers(userSugest)


        ul.appendChild(user)


    }
}






function createUsers(user) {


    const li = document.createElement('li');
    li.classList.add('header__sugestoes--list-li');

    const divUser = document.createElement('div');
    divUser.classList.add('header__container--user-todos');


    const divUserSugest = document.createElement('div');
    divUserSugest.classList.add('header__container--sugestoes-user');


    const img = document.createElement('img');
    img.classList.add('header__image');
    img.src = user.img;
    img.alt = user.user;



    const divUserTittle = document.createElement('div');
    divUserTittle.classList.add('header__container--user-1');


    const h3 = document.createElement('h3');
    h3.classList.add('header__sugestoes--tittle-h3');
    h3.innerText = user.user;


    const small = document.createElement('small');
    small.classList.add('header__sugestoes--small');

    small.innerHTML = user.stack;


    const button = document.createElement('button');
    button.classList.add('header__sugestoes--button')
    button.innerText = user.btn;
    button.dataset.id = user.id;


    
    button.addEventListener('click', () => {
        button.classList.remove('header__sugestoes--button')
        button.classList.toggle('blue-button')
        if (button.classList.contains('blue-button')) {

            button.innerText = 'Seguindo'
        } else {
            button.innerText = user.btn;
        }


    })




    li.append(divUser, divUserSugest, img, divUserTittle, h3, small, button);
    divUser.append(divUserSugest, img, divUserTittle, h3, small, button);
    divUserSugest.append(img, divUserTittle, h3, small);
    divUserTittle.append(h3, small);

    return li
}

renderSugestUsers(sugestUsers)