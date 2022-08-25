var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content

function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    Content = event.results[0][0].transcript;
    console.log(Content);
    // Im not gonna add this part.. but i will show da code!
    //if(Contect =="take my selfie(not)")
    //{ 
    //console.log("taking selfie --- ");
    //speak();
    //}
    

    

    document.getElementById("textbox").innerHTML = Content;
    speak();
}

 function speak()
 {
     var synth = window.speechSynthesis;
     speak_data = Content + "... Hmmmmmm. Intresting command thing. I guess Ill just do.....Oh yes. Taking  OMG your epic selfie in, like, 5 seconds exclamation mark exclamation mark one one exclamation mark one";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);

     Webcam.attach(camera);
     setTimeout(function()
     {
         take_snapshot();
        save();;
     } ,10000);
 }

 Webcam.set({

    width:360,
    height:250,
    image_format : 'png',
    png_quality:90

 });

 function take_snapshot()
 {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "' + data_uri +'">';
 });

 camera = document.getElementById("camera");

 function save()
 {
     link = document.getElementById("link");
     image = document.getElementById("selfie_image").src ;
     link.href = image;
     link.click();
 }
}