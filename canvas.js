const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d')

function draw(){
    if (wrong == 1){
        ctx.moveTo(350,500)
        ctx.lineTo(350,50)
        ctx.stroke()
    }
    
    if (wrong ==2){
        ctx.moveTo(350,50)
        ctx.lineTo(150,50)
        ctx.stroke()
    }
    
    if (wrong ==3){
        ctx.moveTo(150,50)
        ctx.lineTo(150,100)
        ctx.stroke()
    }
    if (wrong ==4){
        ctx.beginPath()
        ctx.arc(150, 130, 30, 0, Math.PI*2)
        ctx.stroke()
    }
    if (wrong ==5){
        ctx.moveTo(150,160)
        ctx.lineTo(150,250)
        ctx.stroke()
    }
    if (wrong ==6){
        ctx.moveTo(150,180)
        ctx.lineTo(100,220)
        ctx.stroke()
    }
    if (wrong ==7){
        ctx.moveTo(150,180)
        ctx.lineTo(200,220)
        ctx.stroke()
    }
    if (wrong ==8){
        ctx.moveTo(150,250)
        ctx.lineTo(120,300)
        ctx.stroke()
    }
    
    if (wrong == 9){
        ctx.moveTo(150,250)
        ctx.lineTo(180,300)
        ctx.stroke()
    }
}



// ctx.moveTo(350,50)
// ctx.lineTo(150,50)
// ctx.stroke()





