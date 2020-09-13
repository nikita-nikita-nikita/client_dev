const avatars = [
    "https://pic.rutube.ru/video/f1/6a/f16abc14d8206874b770e004d9dcc6da.jpg?size=m",
    "https://bipbap.ru/wp-content/uploads/2016/11/80835132IMGI1506m.jpg",
    "https://www.meme-arsenal.com/memes/547f571a0ae09614a2e9d93260e15f70.jpg",
    "https://bipbap.ru/wp-content/uploads/2016/11/1455682516_001.jpg"
];


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