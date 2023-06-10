const mockedPosts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?'
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?'
  },
]

// const defaultUrl = 

const handleClick = (id) => {
  window.location.href = `../post/index.html?id=${id}`
}


const renderPosts = () => {
  mockedPosts.forEach(post => {
    const postElement = document.createElement('div')
    postElement.classList.add('post')

    const buttonElement = document.createElement('button')
    buttonElement.innerText = 'Ver mais'
    buttonElement.addEventListener('click', () => handleClick(post.id))
    buttonElement.classList.add('button')

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.slice(0,255)}...</p>
    `
    postElement.appendChild(buttonElement)
    document.querySelector('.container').appendChild(postElement)
  })
}

renderPosts()
