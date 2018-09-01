import './scss/style.scss'

class App {
    constructor(app){
        this.app = app;

        this.init();
    }

    init(){
        this.app.innerHTML = 'Feature 1 is started!'
    }
}


new App(document.getElementById('f1'));