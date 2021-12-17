$(".page-nav-link").click((e) => {
    e.preventDefault();
    const target = $(e.currentTarget).attr("href").slice(1);
    const targetObject = $(`a[name=${target}]`);
    $("html").animate(
        {
            scrollTop: targetObject.offset().top,
        },
        "slow"
    );
});

$("#toggle-btn").click(() => {
    $(".popular-posts-section").slideToggle();
});

$(window).scroll(() => {
    if ($("html").scrollTop() >= $(window).height()) {
        $("#up-btn").css("display", "initial");
    } else {
        $("#up-btn").css("display", "none");
    }
});

$("#up-btn").click(() => {
    $("html").animate(
        {
            scrollTop: 0,
        },
        "slow"
    );
});
