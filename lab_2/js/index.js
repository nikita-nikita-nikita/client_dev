const avatars = [
    "https://pic.rutube.ru/video/f1/6a/f16abc14d8206874b770e004d9dcc6da.jpg?size=m",
    "https://bipbap.ru/wp-content/uploads/2016/11/80835132IMGI1506m.jpg",
    "https://www.meme-arsenal.com/memes/547f571a0ae09614a2e9d93260e15f70.jpg",
    "https://bipbap.ru/wp-content/uploads/2016/11/1455682516_001.jpg"
];

$('textarea').keydown(e => {
    const textarea = e.target;
    if (textarea.scrollTop > 0 && parseInt(window.getComputedStyle(textarea).height) <= 100) {
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
});
