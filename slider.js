// let imgSlider = document.querySelector("#imgSlider")
// let prevBtn = document.querySelector("#prevBtn")
// let nextBtn = document.querySelector("#nextBtn")

const imgSlider = document.querySelector("#imgSlider")
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")


const images =[
    "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1708300800&semt=sph",
    "https://img.freepik.com/free-photo/manhattan-downtown-skyline-with-urban-skyscrapers-river-with-reflections_649448-255.jpg?w=740&t=st=1708343455~exp=1708344055~hmac=6473c8a6a69c6a243362959a86b664b93e5f96f5b9353707d4b4c94723be6069",

    "https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?w=740&t=st=1708343159~exp=1708343759~hmac=5ddaad489ad41bba48c6f25ee787c2b34211289fbd7ef77703c0cd34d2e4af8d",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg"
]

let indexImage =  0
function cureentImage(){
 imgSlider.src = images[indexImage]
}



//handle next button

nextBtn.addEventListener("click" , function(){
    indexImage++
    if(indexImage > images.length -1){
        indexImage = 0
    }

    cureentImage()
})


//handle previw btn

 

prevBtn.addEventListener("click" , function(){
   indexImage--
if(indexImage < 0){
    indexImage = 0
}
    cureentImage()
})

cureentImage()