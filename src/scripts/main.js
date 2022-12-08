const ulMain = document.querySelector('.posts__lista');


function renderAll(users, posts) {
    for (let i = 0; i < users.length; i++) {
        let userMain = users[i];

        for (let j = 0; j < posts.length; j++) {
            let postMain = posts[j];

            if (userMain.id === postMain.id_post) {

            
                ulMain.appendChild(createMain(userMain, postMain))
            }
        }
    }
}






function createMain(userMain, postMain) {

    const li = document.createElement('li');
    li.classList.add('posts__lista--li');



    const div1 = document.createElement('div');
    div1.classList.add('container__user');


    const img = document.createElement('img');
    img.classList.add('main__image');
    img.src = userMain.img;
    img.alt = userMain.user;


    const div2 = document.createElement('div');
    div2.classList.add('container__user--ajustar');

    const h3 = document.createElement('h3');
    h3.classList.add('posts__name');
    h3.innerText = userMain.user;

    const small = document.createElement('small');
    small.classList.add('posts__small');
    small.innerText = userMain.stack;


    const p = document.createElement('p');
    p.classList.add('posts__paragraph');
    p.innerText = postMain.title;


    const pSmall = document.createElement('p');
    pSmall.classList.add('posts__paragraph--small');
    pSmall.innerText = postMain.text;

    const button = document.createElement('button');
    button.classList.add('posts__button');
    button.type = 'submit';
    button.innerText = 'Abrir Post'
    button.dataset.id = userMain.id;
    button.dataset.idPost = postMain.user;



    const small2 = document.createElement('small');
    small2.classList.add('posts__icon');

    const i = document.createElement('i');
    i.classList = 'fa-sharp fa-solid fa-heart posts__icon--coracao';



    const span = document.createElement('span');
    span.classList.add('posts__icon--numero');
    span.innerText = '25'


    li.append(div1, img, div2, h3, small, p, pSmall, button, small2, i, span);
    div1.append(img, div2, h3, small);
    div2.append(h3, small);
    small2.append(i, span);


    return li
}

renderAll(users, posts)


