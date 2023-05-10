var classificaçao;
function classificar ()
{
navigator.mediaDevices.getUserMedia({
    audio: true 
})
classificaçao = ml5. soundClassifier('https://teachablemachine.withgoogle.com/models/kJ56AcgIl/model.json',modelo)
}
function modelo (){
    classificaçao.classify(pegarresultado) 
}
function pegarresultado (error, result ){
if (error){
    console.log(error)
}
else {
    console.log (result)
}

}