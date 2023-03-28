
var bool = true;
var count = 0;
function handleClick(clickedElement) {
    
    if(bool){
        console.log("red")
        clickedElement.style.accentColor= "red"
        bool = false;
    }else{
        
        clickedElement.style.accentColor = "black"
        console.log(clickedElement.style.accentColor)
        bool = true;

    }
    count++
  
}
var arr = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]

function run(){
    var redarr = []
    var blackarr = []
    for(let i = 1; i<10; i++){
        // arr1.push(document.getElementById("id"+i))
        var color = document.getElementById(i).style.accentColor
        var id = document.getElementById(i).id
        if(color == "red"){
            redarr.push(id)
        }else if(color == "black"){
            blackarr.push(id)
        }
    }
    redarr = redarr.sort()
    blackarr = blackarr.sort()
    var redcount = 0
    var blackcount = 0
    for(let j=0; j<8; j++){
        for(let x=0; x<redarr.length; x++){
            console.log(arr[j][x])
            if(arr[j][x] == redarr[x]){
                redcount++
            }
        }
    }
    for(let j=0; j<8; j++){
        for(let x=0; x<blackcount.length; x++){
            console.log(arr[j][x])
            if(arr[j][x] == blackarr[x]){
                blackcount++
            }
        }
    }
    if(redcount==3){
        alert("red winner")
    }
    if(blackcount == 3){
        alert("black wiiner")
    }
    var charan = [1,2,3]
    var naveen = [1,2,3]
    console.log(charan==naveen)
    console.log(redarr,blackarr)
}
