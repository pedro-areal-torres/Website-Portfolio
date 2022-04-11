const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.skill__header').addEventListener('click', () => {
        skill.querySelector('.skill__items').classList.toggle('show-items');
    })
})

export default skillItems;