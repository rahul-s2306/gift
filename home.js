// var path = '',
//     imgs = ['carrot.gif','neil_1.jpg','steak.jpg'],
//     i = Math.floor(Math.random()*imgs.length);
// $('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);

function randomImgOfHer(){
    let a = 1;
    let b = 125;
    let randomImageNumber = a + (b-a)*Math.random();
    randomImageNumber = Math.floor(randomImageNumber);

    let source = "her/"+randomImageNumber+".jpg";
    document.getElementById("image-box").src=source;
    
    
}

function randomImgOfUs(){
    let a = 1;
    let b = 56;
    let randomImageNumber = a + (b-a)*Math.random();
    randomImageNumber = Math.floor(randomImageNumber);

    let source = "prohibited/"+randomImageNumber+".jpg";
    document.getElementById("image-box").src=source;
    
}