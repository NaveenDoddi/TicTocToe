
var count = Math.floor(Math.random() * 2);
function handleClick(clickedElement) {
    
    if(count == 0){
        clickedElement.style.accentColor= "red";
        // console.log(clickedElement.style.accentColor);
        count = 1;

    }else{
        clickedElement.style.accentColor = "black";
        // console.log(clickedElement.style.accentColor);
        count = 0;

    }
  
}
var arr = [[1,2,3,0,0],[4,5,6,0,0],[7,8,9,0,0],[1,4,7,0,0],[2,5,8,0,0],[3,6,9,0,0],[1,5,9,0,0],[3,5,7,0,0]];

function run(){
    var redarr = [];
    var blackarr = [];
    for(let i = 1; i < 10; i++){
        var color = document.getElementById(i).style.accentColor;
        var id = document.getElementById(i).id;
        if(color == "red"){
            redarr.push(id);
        }else if(color == "black"){
            blackarr.push(id);
        }
    }
    
    for(let i = 0; i < 8; i++){
        var redcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x<redarr.length; x++){
                if(arr[i][j] == redarr[x]){
                    redcount++;
                }
                if(redcount == 3){
                    
                    for(let y = 0 ; y<3; y++){
                        document.getElementById(arr[i][y]).className = "yes"
                    }
                    
                    document.getElementById("result").innerText = "Red-Winner";
                    document.getElementById("result").style.color = "red"
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            
            }
        
            
        }

        var blackcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x =0; x < blackarr.length; x++){
                if(arr[i][j] == blackarr[x]){
                    blackcount++;
                }
                if(blackcount == 3){
                    for(let y = 0 ; y<3; y++){
                        document.getElementById(arr[i][y]).id = "yes"
                    }

                    document.getElementById("result").innerText = "Black-Winner";
                    document.getElementById("result").style.color = "balck"

                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
                
            }
        }


    }

}

