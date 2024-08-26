const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
let width = canvas.width
let height = canvas.height

// determinar velocidad
let xSpeed 
let ySpeed

const BALL_SIZE = 5

const initBall = (player) =>{
    ballPosition = {
        x : player === 'left'? 20 : width - 20,
        y : 30
    }

    xSpeed = player === 'left' ? 4 : -4,
    ySpeed = 2
}

// valores de las paletas
const PADDLE_WIDTH = 5
const PADDLE_HEIGHT = 20
const PADDLE_OFFSET = 10 // Distancia de la paleta desde uno de los extremos
let leftPaddleTop = 10 // La posicion actual de la paleta con respecto al extremo superior del canvas
let rightPaddleTop = 30 //

//Score
let leftScore = 0
let rightScore = 0


const draw = () => {
    // Darle color al fondo de mi canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,width,height)
    // Crear la pelota
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(ballPosition.x, ballPosition.y, BALL_SIZE, BALL_SIZE)

    // Dibujar las paletas
    ctx.fillStyle = "#7A1CAC"
    ctx.fillRect(PADDLE_OFFSET, leftPaddleTop, PADDLE_WIDTH, PADDLE_HEIGHT)

    // Quiero ponerle color a la otra paleta y no me funciona el ctx.fillStyle
    ctx.fillStyle = "#FFF"
    ctx.fillRect( width - PADDLE_OFFSET, rightPaddleTop, PADDLE_WIDTH, PADDLE_HEIGHT)

    // Dibujar los scores
    ctx.fillStyle = '#FFFFFF'
    ctx.font = "30px monospace"
    ctx.textAlign = "left"
    ctx.fillText(leftScore.toString(),50,50)

    ctx.textAlign = 'right'
    ctx.fillText(rightScore.toString(), (width - 50), 50)
}

const update = () => {
    ballPosition.x += xSpeed
    ballPosition.y += ySpeed
}

const adjustAngle = (distanceFromTop, DistanceFromBottom) =>{
    if ( distanceFromTop < 0 ) { // Si la pelota golpea la parte superior de la paleta, se reduce su velocidad.
        ySpeed -= 0.5
    } else if ( DistanceFromBottom < 0 ) {
      ySpeed += 0.5  
    }
}

// Preguntar sobre esta funcion que no entiendo!!
const checkPaddleCollision = (ball, paddle) => {
    return(
        ball.left < paddle.right && 
        ball.right > paddle.left && 
        ball.top <  paddle.bottom && 
        ball.bottom > paddle.top
    ) 
}

const checkCollision = () => {

    // definir la pelota
    let ball = {
        left: ballPosition.x,
        right: ballPosition.x + BALL_SIZE,
        top: ballPosition.y,
        bottom: ballPosition.y + BALL_SIZE
    }

    let leftPaddle = {
        left : PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: leftPaddleTop,
        bottom: leftPaddleTop + PADDLE_HEIGHT
    }

    let rightPaddle = {
        left: width - PADDLE_WIDTH - PADDLE_OFFSET,
        right: width - PADDLE_OFFSET,
        top: rightPaddleTop,
        bottom: rightPaddleTop + PADDLE_HEIGHT
    }

    // Verificar colision con la paleta derecha
    if(checkPaddleCollision(ball, rightPaddle)){
        console.log('colision!')
        let distanceFromTop = ball.top - rightPaddle.top 
        let distanceFromBottom = rightPaddle.bottom - ball.bottom 
        adjustAngle(distanceFromTop, distanceFromBottom)
        xSpeed = -Math.abs(xSpeed) // al colocar Math.abs y luego ponerle un signo negativo me aseguro de que si o si el sentido devuelva negativo
    }

    if(checkPaddleCollision(ball, leftPaddle)){
        console.log('colision!')
        let distanceFromTop = ball.top - leftPaddle.top
        let distanceFromBottom = leftPaddle.bottom - ball.bottom
        adjustAngle(distanceFromTop, distanceFromBottom)
        xSpeed = Math.abs(xSpeed)
    }

    // verificar la colision en el eje x
    if( ball.left < 0 || ball.right > width){
        xSpeed = -xSpeed
        if(ball.left < 0 ){
            rightScore++
            initBall('right')
        }else{
            leftScore++
            initBall('left')
        }
    }


    // verificar la colision en el eje y
    if (ball.top < 0 || ball.top > height ){
        ySpeed = -ySpeed
    }
}

// Eventos
document.addEventListener('mousemove', (e) => {
    if (e.y - canvas.offsetTop + PADDLE_HEIGHT >= height || e.y <= canvas.offsetTop) return 
    rightPaddleTop = e.y - canvas.offsetTop
    if (e.y - canvas.offsetTop + PADDLE_HEIGHT >= height || e.y <= canvas.offsetTop) return 
    leftPaddleTop = e.y - canvas.offsetTop
})


const  gameLoop = () => {
    draw()
    update()
    checkCollision()
    setTimeout(gameLoop,30)
}

initBall() // seta los valores de la pelota cuando se incia el juego
gameLoop()
