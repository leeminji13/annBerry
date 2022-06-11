window.ready = function(){

    let send = document.getElementById("gogo");
    send.addEventListener("click",function(e){
        let empty = document.getElementsByClassName("form-control");
        if(empty.value.length == 0){
            alert('빈 칸을 채워주세요');
        }
    });
}