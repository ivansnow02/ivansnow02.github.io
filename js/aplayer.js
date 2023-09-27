const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    loop: 'all',
    order: 'random',
    theme: '#F7AA97',
    preload: 'auto',
    audio: [{
        name: '終ワリノ歌',
        artist: '末廣健一郎',
        url: '/assets/終ワリノ歌 - 末廣健一郎.flac',
        cover: '/img/owari.jfif'
    }]
});

const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function () {
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function () {
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});
// Aplayer默认关闭歌词
function removelrc() {
    // 检测是否存在歌词按钮
    const lrcIcon = document.querySelector(".aplayer-icon-lrc");
    if (!lrcIcon) {
        return;
    }

    // 触发以后立刻移除监听
    observer.disconnect();

    // 稍作延时保证触发函数时存在按钮
    setTimeout(() => {
        // 以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
        lrcIcon.click();
    }, 1);

    console.log("success");
}

const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
            removelrc();
        }
    }
});

const observerConfig = {
    childList: true, // 观察子节点的变化
    subtree: true, // 观察所有后代节点的变化
};

observer.observe(document, observerConfig); // 开始观察document节点的变化
