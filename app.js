const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const yazi = document.querySelector(".yazi")


let load = 0

let int = setInterval(bluring, 30)

function bluring() {
  load++

  if (load > 99) {
    clearInterval(int)
    yazi.innerText =" CMC YAZILIM & MEDYA'YA HOŞGELDİNİZ"
    yazi.style ="margin-left: 350px;"
   

  }
  //console.log(load)

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}