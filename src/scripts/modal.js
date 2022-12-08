function rederModal() {
    const modal = document.querySelector('.modal__container');
    const buttons = document.querySelectorAll('.posts__button');

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', () => {
            const modalContent = createModal(button.dataset.id)

           modal.innerHTML = ''

           modal.appendChild(modalContent)

            modal.showModal()

            closeModal ()

        })
    }

}


function createModal(id) {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container--user');

    const divModal0 = document.createElement('div')
    divModal0.classList.add('div__modal');

    const img = document.createElement('img');
    img.classList.add('modal__img');


    const divModal = document.createElement('div');
    divModal.classList.add('modal__img--fechar');


    const modalClose = document.createElement('span');
    modalClose.classList.add('modal__fechar');
    modalClose.innerText = 'X';


    const divModal2 = document.createElement('div');
    divModal2.classList.add('modal__container--detalhe');


    const h2 = document.createElement('h2');
    h2.classList.add('modal__user');



    const small = document.createElement('small');
    small.classList.add('modal__user--small');



    const p = document.createElement('p');
    p.classList.add('modal__paragraph');


    const pSmall = document.createElement('p');
    pSmall.classList.add('modal__paragraph--small');

    let element = {}

    for (let i = 0; i < users.length; i++) {

        for (let j = 0; j < posts.length; j++) {
            let post = posts[j]

            if (users[i].id === Number(id)) {
                element = users[i]

            }
            img.src = element.img;
            img.alt = element.user;
            h2.innerText = element.user;
            small.innerText = element.stack;
            p.innerText = post.title;
            pSmall.innerText = post.text;


            modalContainer.append(divModal0, img, divModal, modalClose, divModal2, h2, small, p, pSmall);
            divModal0.append(img, divModal, modalClose, divModal2, h2, small)
            divModal.append(modalClose, divModal2, h2, small,);
            divModal2.append(h2, small);
        }

    }

    return modalContainer

}



function closeModal (){
    const modal = document.querySelector('.modal__container');
    const closeModal = document.querySelector('.modal__fechar');

    closeModal.addEventListener('click', () => {
        modal.close()
      })
    
}



rederModal();





