class App {
    constructor(app){
        this.app = app;

        this.init();
    }

    init(){
        this.app.innerHTML = 'Feature 2 is started!!!'
    }
}


new App(document.getElementById('f2'));