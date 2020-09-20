class Data {
    constructor() {
        this.textArea = document.querySelector('textarea');
    }

    setHeight = () => {
        if (this.textArea.scrollTop > 0 && parseInt(window.getComputedStyle(this.textArea).height) <= 100) {
            this.textArea.style.height = this.textArea.scrollHeight >= 100 ? '100px' : `${this.textArea.scrollHeight}px`;
        }
    }
    bindEvent =  (event) => {
        this.textArea.addEventListener(event, this.setHeight);
    }
}

const data = new Data()

data.bindEvent('keydown');
data.bindEvent('paste');