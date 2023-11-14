canvas=new fabric.Canvas("myCanvas")
px=10
py=10
blockWidth=30
blockHeight=30
playerimage=""
blockimage=""

function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
playerimage=Img
playerimage.scaleToWidth(150)
playerimage.scaleToHeight(150)
playerimage.set({top:py,left:px});
canvas.add(playerimage)
})
}

function blockupdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    blockimage=Img
    blockimage.scaleToWidth(blockWidth)
    blockimage.scaleToHeight(blockHeight)
    blockimage.set({top:py,left:px});
    canvas.add(blockimage)
    })
    }

window.addEventListener("keydown",mykeydown)
function mykeydown(e){
kp=e.keyCode
if(kp=="38"){
console.log("I preesed UpKey")
Up()
}
if(kp=="40"){
    console.log("I preesed DownKey")
    down()
    }
    if(kp=="37"){
        console.log("I preesed leftKey")
        left()
        }
        if(kp=="39"){
            console.log("I preesed RightKey")
            Right()
            }
if(kp=="87"){
console.log("I pressed W key")
blockupdate("wall.jpg")
}

if(kp=="71"){
    console.log("I pressed G key")
    blockupdate("ground.png")
    }

    if(kp=="76"){
        console.log("I pressed l key")
        blockupdate("light_green.png")
        }

        if(kp=="84"){
            console.log("I pressed t key")
            blockupdate("trunk.jpg")
            }

            if(kp=="82"){
                console.log("I pressed r key")
                blockupdate("roof.jpg")
                }

                if(kp=="89"){
                    console.log("I pressed y key")
                    blockupdate(" yellow_wall.png")
                    }

                    if(kp=="68"){
                        console.log("I pressed d key")
                        blockupdate("dark_green.png")
                        }

                        if(kp=="85"){
                            console.log("I pressed u key")
                            blockupdate("unique.png")
                            }

                            if(kp=="67"){
                                console.log("I pressed c key")
                                blockupdate("cloud.jpg")
                                }
}

function Up(){
if(py>=0){
py=py-10
canvas.remove(playerimage)
playerupdate()
}
}

function down(){
    if(py<=500){
    py=py+10
    canvas.remove(playerimage)
    playerupdate()
    }
    }

    function left(){
        if(px>=0){
        px=px-10
        canvas.remove(playerimage)
        playerupdate()
        }
        }

        function Right(){
            if(px<=850){
            px=px+10
            canvas.remove(playerimage)
            playerupdate()
            }
            }
