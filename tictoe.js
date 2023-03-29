
var count = Math.floor(Math.random() * 2);
function handleClick(clickedElement) {
    
    if(count == 0){
        clickedElement.style.accentColor= "red";
        console.log(clickedElement.style.accentColor);
        count = 1;
    }else{
        
        clickedElement.style.accentColor = "black";
        console.log(clickedElement.style.accentColor);
        count = 0;

    }
  
}
var arr = [[1,2,3,0,0],[4,5,6,0,0],[7,8,9,0,0],[1,4,7,0,0],[2,5,8,0,0],[3,6,9,0,0],[3,5,7,0,0],[1,5,9,0,0]];

function run(){
    var redarr = [];
    var blackarr = [];
    for(let i = 1; i<10; i++){
        var color = document.getElementById(i).style.accentColor;
        var id = document.getElementById(i).id;
        if(color == "red"){
            redarr.push(id);
        }else if(color == "black"){
            blackarr.push(id);
        }
    }
    
    for(let j=0; j<8; j++){
        var redcount = 0;
        for(let x = 0; x < redarr.length; x++){
            if(arr[j][x] == redarr[x]){
                redcount++;
            }
            if(redcount==3){
                var para = document.createElement("h3");
                para.innerText = "kottav po red";
                document.body.append(para)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                
            }
        }
        var blackcount = 0;
        for(let x = 0; x < blackarr.length; x++){
            if(arr[j][x] == blackarr[x]){
                blackcount++;
            }
            if(blackcount == 3){
                var para = document.createElement("h3");
                para.innerText = "kottav po black";
                document.body.append(para)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        }
    }

    console.log(redarr,blackarr);
}
// .
