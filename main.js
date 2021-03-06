camera = document.getElementById("camera");
     
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  Webcam.attach( '#camera' );

  console.log('ml5 version:', ml5.version);

  function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0gI5GK0IJ/model.json',modelLoaded);