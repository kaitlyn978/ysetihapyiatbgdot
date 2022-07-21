
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true });
    console.log('ml5 version:',ml5.version);
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lx3ctFCq_/',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('got Results!!');
    if (error){
 console.error(error);
    }
    else{
        console.log("Got Result");
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1
    
        document.getElementById("result_label").innerHTML="I can hear-"+
        results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
    
        img1=document.getElementById("cat");
        img2=document.getElementById("dog");
        img3=document.getElementById("bird");
        img4=document.getElementById("snake");
        
        if(results[0].label=="Meowing"){
            img1.src="peachcat-cute.gif";
            img2.src="d.jpg";
            img3.src="bird.jpg";
            img4.src="s.jpg";
    
        }
        else if(results[0].label=="Barking"){
            img1.src="cAT.jpg";
            img2.src="BlackandwhitePoshAnemone-max-1mb.gif";
            img3.src="bird.jpg";
            img4.src="s.jpg";
        }
        else if(results[0].label=="Table Clapping"){
            img1.src="cAT.jpg";
            img2.src="d.jpg";
            img3.src="toucan_dribble.gif";
            img4.src="s.jpg";
        }
        else{
            img1.src="cAT.jpg";
            img2.src="d.jpg";
            img3.src="bird.jpg";
            img4.src="snake-yas.gif";  
        }
    }
    
    
}