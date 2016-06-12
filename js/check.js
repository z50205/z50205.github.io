$(document).ready(function () {

    // 找 div 且 class 有 col-md-12 的兒子 class 有 btn
    // 關於 selector 可參考 http://www.w3schools.com/jquery/jquery_ref_selectors.asp
    //
    // 有時候 $() 會找到許多個同樣的 element ，若要對每一個都做一樣的事
    // 可以使用 $().each() 尋訪一個 element
    // 更多細節請參考 http://www.w3schools.com/jquery/misc_each.asp
    $('.btn').each(function (index) {

        // 這裡的 this 是目前被尋訪的 element
        // $(this).bind() 是將目前被尋訪的 element 的 click 的事件與匿名函式綁在一起。
        $(this).bind('click', function () {
            console.log('index:' + index + ' 按到了喔');

            // 抓出 img 中的第 index 個
            var video = $('video:eq(' + index + ' )');

            // 判斷img是否有 visible 屬性
            if (video.is(":visible")) {
                // 將 img 在網頁中隱藏
                video.hide();
            } else {
                // 將 img 在網頁中顯示
                video.show();
            }
        });
    });
});