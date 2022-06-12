const column1 = document.querySelector('.column-1')
const column2 = document.querySelector('.column-2')
const column3 = document.querySelector('.column-3')
const column4 = document.querySelector('.column-4')
const column5 = document.querySelector('.column-5')
const column6 = document.querySelector('.column-6')
const column7 = document.querySelector('.column-7')

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')



function removeClass() {
    box1.classList.remove('hidden');
}

function addClass() {
    box1.classList.add('hidden');
}

column1.addEventListener('mouseenter', removeClass)
column1.addEventListener('mouseleave', addClass)



function removeClass2() {
    box2.classList.remove('hidden');
}

function addClass2() {
    box2.classList.add('hidden');
}

column2.addEventListener('mouseenter', removeClass2)
column2.addEventListener('mouseleave', addClass2)

function removeClass3() {
    box3.classList.remove('hidden');
}

function addClass3() {
    box3.classList.add('hidden');
}

column3.addEventListener('mouseenter', removeClass3)
column3.addEventListener('mouseleave', addClass3)

function removeClass4() {
    box4.classList.remove('hidden');
}

function addClass4() {
    box4.classList.add('hidden');
}

column4.addEventListener('mouseenter', removeClass4)
column4.addEventListener('mouseleave', addClass4)

function removeClass5() {
    box5.classList.remove('hidden');
}

function addClass5() {
    box5.classList.add('hidden');
}

column5.addEventListener('mouseenter', removeClass5)
column5.addEventListener('mouseleave', addClass5)

function removeClass6() {
    box6.classList.remove('hidden');
}

function addClass6() {
    box6.classList.add('hidden');
}

column6.addEventListener('mouseenter', removeClass6)
column6.addEventListener('mouseleave', addClass6)

function removeClass7() {
    box7.classList.remove('hidden');
}

function addClass7() {
    box7.classList.add('hidden');
}

column7.addEventListener('mouseenter', removeClass7)
column7.addEventListener('mouseleave', addClass7)

