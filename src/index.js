import './scss/index.scss'

// import './scss/triangle.css'


    let delay = 0.3;
    let revealText = document.querySelector('.reveal')
    let letters = revealText.textContent.split('')
    revealText.textContent = ''
    let middle = letters.filter(e => e !== ' ').length / 2
    console.log(middle);
    letters.forEach((letter,i) => {
      let span = document.createElement('span')
      span.textContent = letter
      span.style.animationDelay = `${delay + Math.abs(i - middle) * .1}s`
      revealText.append(span)
    })
