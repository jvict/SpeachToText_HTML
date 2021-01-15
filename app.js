class SpeechRecognitionApi {
    constructor(options){
        const SpeachToText = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.speachApi = new SpeachToText();
        this.output = options.output ? options.output : document.createElement("div");
        
        this.speachApi.continuous = true;
        this.speachApi.interimResult = false;
        this.speachApi.onresult = (event) =>{
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;
            this.output.textContent += transcript;
        }
    }

    init(){
        this.speachApi.start();
    }

    stop(){
        this.speachApi.stop();
    }

}
window.onload = function(){
    var speech = new SpeechRecognitionApi({
        output:document.querySelector(".output")

    });

    document.querySelector(".btn-start").addEventListener("click", ()=>{
        speech.init();
    });

    document.querySelector(".btn-end").addEventListener("click", ()=>{
        speech.stop();
    });
}