$(document).ready(function(){

    const loadText = $(".loading-Text")[0];
    const bg = $(".bg")
    
    let load = 0

    let int = setInterval(blurring, 30)

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + (outMin)
    }

    function blurring(){
        load++
        if (load === 100) {
            clearInterval(int)
        }     
      $(loadText).text(`${load}%`) 
      $(loadText).css("opacity", `${scale(load, 0, 100, 1, 0)}`)
      $(bg).css("filter", `blur(${scale(load, 0, 100, 30, 0)}px)`)
    }















})