var audio = null;
var isAudioPlaying = false;

function fadeIn() {
    var text = $('.content').text().replace(/^\s+|\s+$/g, '');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for (i = 0, length = html.length; i < length; i++) {
        !function (i) {
            setTimeout(function () {
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            }, i * 400);
        }(i);
    }
    playAudio();
}

function playAudio() {
    if (audio && isAudioPlaying) {
        return; // Nếu audio đang phát thì không chạy lại
    }
    audio = new Audio("baihat.mp4");
    audio.onended = function () {
        isAudioPlaying = false; // Đặt lại cờ khi audio phát xong
    };
    audio.play();
    isAudioPlaying = true; // Đặt cờ là audio đang phát

}

document.querySelector(".content").onclick = () => {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
    document.querySelector("#heart").hidden = false;
    fadeIn();
};
