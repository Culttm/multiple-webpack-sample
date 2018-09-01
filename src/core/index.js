import './scss/style.scss'

class App {
    constructor(app){
        this.app = app;

        this.init();
    }

    init(){
        this.app.innerHTML = 'App is started!!!'
    }
}


new App(document.getElementById('app'));