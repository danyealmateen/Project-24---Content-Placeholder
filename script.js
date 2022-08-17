const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="/nelson.jpeg" alt="Nelson">';
    title.innerHTML = 'Theres a new sheriff in town.'
    excerpt.innerHTML = 'His name was Nelson, he was a showpup. And dont you ever get it twisted.'
    profile_img.innerHTML = '<img src="/thuglife.jpeg" alt="">'
    name.innerHTML = 'Dany Mateen'
    date.innerHTML = 'July 22 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}