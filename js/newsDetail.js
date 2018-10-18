var hash=window.location.hash.split('#')[1]
var newsLis = $("#news-lis").children();
var count = newsLis.length;
var ONE_PAGE_COUNT = 1;
var totalPage = parseInt(count / ONE_PAGE_COUNT) + ((count % ONE_PAGE_COUNT) == 0 ? 0 : 1);
var currPage = parseInt(hash);


$('.news-list li a').click(function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    hash = $(this).attr('href').split('#')[1]
    init()
})



function setUICurrPage(currPage) {
    currPage = Math.max(1, currPage);
}

function scanAllForShow(page) {
    page = parseInt(Math.max(1, Math.min(totalPage, page)));
    for (var i = 0; i < count; i++) {
        if (parseInt(i / ONE_PAGE_COUNT) + 1 == page)
            $(newsLis[i]).attr("style", "");
        else
            $(newsLis[i]).attr("style", "display: none");
    }
}

function nextPage() {
    var last = currPage;
    if (last > totalPage - 1)
        return;

    scanAllForShow(++currPage);
    setUICurrPage(currPage);
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}

function prevPage() {
    var next = currPage;
    if (next <= 1)
        return;
    scanAllForShow(--currPage);
    setUICurrPage(currPage);
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}

function init() {
    newsLis = $("#news-lis").children();
    count = newsLis.length;
    totalPage = count / ONE_PAGE_COUNT + ((count % ONE_PAGE_COUNT) == 0 ? 0 : 1);
    currPage = parseInt(hash);

    setUICurrPage(currPage);
    scanAllForShow(currPage);
    // 注册点击函数

    $(".prev").click(prevPage);
    $(".next").click(nextPage);


}

window.onload = function () {
    init();

}
