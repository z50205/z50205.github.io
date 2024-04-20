function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom; //&& (elemBottom <= window.innerHeight);
    var avg = (elemTop + elemBottom) / 2;
    var isVisible = Math.abs(avg-innerHeight/2)
    // var elemTop = el.getBoundingClientRect().top;
    // var elemBottom = el.getBoundingClientRect().bottom; //&& (elemBottom <= window.innerHeight);
    // var isVisible = (elemTop >= 0)&&(elemBottom <= window.innerHeight);
    // console.log("name:" + el.id);
    // console.log("top:" + el.getBoundingClientRect().top);
    // console.log("bottom:" + el.getBoundingClientRect().bottom);
    // console.log("innerHeight:" + window.innerHeight);
    // console.log("avg:" + (elemTop+elemBottom)/2);
    // console.log("innerHeight:" + window.innerHeight/2);
    // console.log("isVisible:" + isVisible);
    return isVisible;
}


window.onscroll = function () { a() };
window.onload = function () { a() };

function a() {
    var check_inform = ["check_flask", "check_csharp", "check_unity"];
    var sidenavitem_inform = ["sidenavitem_flask", "sidenavitem_csharp", "sidenavitem_unity"];
    var distance_betwwwn_center = [99999, 99999, 99999];
    for (var i = 0; i < sidenavitem_inform.length; i++) {
        distance_betwwwn_center[i]=isScrolledIntoView(document.getElementById(check_inform[i]));
     }
     distance_min=distance_betwwwn_center.indexOf(Math.min.apply(Math,distance_betwwwn_center));
     for (var i = 0; i < sidenavitem_inform.length; i++) {
        if(i==distance_min)
        document.getElementById(sidenavitem_inform[i]).classList.add("sidenavitem_active");
    else
    document.getElementById(sidenavitem_inform[i]).classList.remove("sidenavitem_active");
     }
}