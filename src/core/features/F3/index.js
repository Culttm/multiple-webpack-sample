class App {
    constructor(app){
        this.app = app;

        this.init();
    }

    init(){
        this.app.innerHTML = 'Feature 3 is started!'
    }
}


new App(document.getElementById('f3'));