/* Robbert Van der Grift
   Student#200326832
   date: sept 24, 2016
======================================================================================*/
// create global image element
const img = document.createElement('img')

// create functions need for the store
// Open pop up window
function openPopup(){
   let body = document.querySelector('body')
    let container = document.createElement('div')
    container.setAttribute('class','container')
    body.appendChild(container)

    let popup = document.createElement('div')
    popup.setAttribute('class','popup')
    container.appendChild(popup)

    let closeWindow = document.createElement('button')
    closeWindow.setAttribute('id','close')
    container.appendChild(closeWindow)

    let buttonText = document.createTextNode('CLOSE')
    closeWindow.appendChild(buttonText)
    document.getElementById("close").addEventListener("click", function(event){

       body.removeChild(container)
       container.removeChild(popup)
       container.removeChild(closeWindow)
       closeWindow.removeChild(buttonText)
    })
}

// create and output content function
function createImageElement(scr,alt,desc) {
  // pull popup from th DOM
  let popup = document.querySelector('.popup')
  // create h3 and p elements
  let heading = document.createElement('h3')
  let paragraph = document.createElement('p')
  // create text node and pass it the alt value
  let hText = document.createTextNode(alt)
  // create text node and pass it the desc value
  let description = document.createTextNode(desc)
  // set the attributes
  img.setAttribute('src',scr)
  img.setAttribute('alt',alt)
  // output to DOM into popup elements
  popup.appendChild(heading)
  heading.appendChild(hText)
  popup.appendChild(img)
  popup.appendChild(paragraph)
  paragraph.appendChild(description)
}

//add EventListers for each diffrent Button
document.getElementById('ca1').addEventListener("click", function(event){
  event.preventDefault()
   openPopup()
   // create variable and store the prduct description
   var proDesc = "Bold Exterior Design with LED fans: You'll never mistake it for anything else - the asymmetrical, hard-edged design of the SPEC-ALPHA and its numerous color combinations give it a bold, unique look. Direct airflow path to keep your CPU and GPU running cooler: The SPEC-ALPHA has a direct path from the front intake to the GPU and CPU for better cooling."
   createImageElement('img/CA1.jpeg','Corsair 900D',proDesc)
})
document.getElementById('fd1').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "The Fractal Design Define S lends the appearance, sound dampening technology, and support for a wide variety of components from the widely popular Define Series, while introducing a new, innovative internal layout. The Define S case is packed with intelligently designed enthusiast-oriented features delivering a silent case with powerful and expansive air and liquid cooling support, presented in a stunning Scandinavian inspired construction. The modernized internal layout of the Define S omits the optical drive bays, instead focusing on a clear straight airflow path and uncompromising water cooling support."
  createImageElement('img/FD1.jpg','Fractal Design DefineS', proDesc)
})
document.getElementById('fd3').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "The Core 500 is the perfect PC case for those looking for a small, compact chassis that lets you build your computer without compromising on component selection. The case comes with one Silent Series R3 140mm fan which offers great cooling from the get go. For those who wish to expand their cooling ability there is room for an additional two 140 mm fans, water cooling radiators up to 280mm or air coolers up to 170 mm in height. Additionally, with minimal compromise, the Core 500 can fit one ODD bay, three 3.5 drives and three 2.5 drives, allowing you to use every last square millimeter of this compact, 19.5 liter case."
  createImageElement('img/FD3.jpg','Fractal Design Core500', proDesc)
})
document.getElementById('nzxt1').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "The S340 mid tower case combines an uncompromising approach to chassis design and pure, functional style to bring you the new standard in case design. A compact form factor and a unique, build-friendly layout allows this durable mid-tower to be extremely easy to use regardless of experience level. 360 degrees of steel casing and heavy duty side panels makes this one of the most durable cases NZXT has ever made."
  createImageElement('img/NZXT1.jpg','NZXT S340', proDesc)
})
document.getElementById('nzxt2').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "The H440 takes the modern design of the H series and breaks away from tradition to bring you the cleanest PC ever. With its groundbreaking interior, the H440 guarantees a streamlined PC-building experience and provides comprehensive high-performance features in a sleek, minimalist package."
  createImageElement('img/NZXT2.jpg','NZXT H440', proDesc)
})
document.getElementById('nzxt3').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "Razer and NZXT have joined forces to merge Razer’s signature design and unmistakable style with NZXT’s innovative S340 Mid-Tower case. The new custom case features a backlit Triple-Headed Snake logo, tinted window, illuminated LED power button, green underglow, and green USB ports. Are you ready to build your masterpiece?"
  createImageElement('img/NZXT3.jpg','NZXT S340 Razor', proDesc)
})
document.getElementById('phanteks').addEventListener("click", function(event){
  event.preventDefault()
  openPopup()
  // create variable and store the prduct description
  var proDesc = "Big on features and small in size, the Enthoo EVOLV ITX is a budget oriented chassis that uses a metal exterior. The case introduces a new unique bracket solution for mounting a radiator on top and a multifunctional bracket for reservoir, pump, and SSD/HDD."
  createImageElement('img/Phanteks1.jpeg','Phantkes Enthoo EVOLE ITX', proDesc)
})
// ******** END TO SCRIPT FILE **********
