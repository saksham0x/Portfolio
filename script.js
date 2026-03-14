function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
    
    // मेन्यू खुलने पर बैकग्राउंड स्क्रॉल रोकना (Optional)
    if (navLinks.classList.contains("show")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}
// let body = document.querySelector('body')
let darkbtn = document.querySelector('#dark')
let light = document.querySelector('#light')
let About = document.querySelector('.about')

darkbtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
    darkbtn.style.display = "None"
    light.style.display = "Block"
    About.style.backgroundColor = "#00000086"
    
})

light.addEventListener('click', () => {
    document.body.style.backgroundColor = "#DEDFDC";
    document.body.style.color = "black"
    light.style.display = "None"
    darkbtn.style.display = "Block"
    About.style.backgroundColor = "aliceblue"
})