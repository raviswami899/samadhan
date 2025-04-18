$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    let direction = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;

    let movingOutIndex = -1;
    let movingInIndex = -1;

    $sections.each(function (i) {
        let $this = $(this);
        let offsetTop = $this.offset().top;
        let height = $this.outerHeight();
        if (scrollTop >= offsetTop && scrollTop < offsetTop + height + 3) {
            movingOutIndex = i;
            movingInIndex = (direction === 'down') ? ((i + 1 < $sections.length) ? i + 1 : i)
                : ((i - 1 >= 0) ? i - 1 : i);
            return false;
        }
    });
    console.log("movingOutIndex");
    console.log(movingOutIndex);
    console.log("movingInIndex");
    console.log(movingInIndex);
    // Remove previous movement classes and animations
    $sections.removeClass('moving-scroll-down moving-scroll-up')
        .find('*:not(div)').removeClass('animated').css('animation', 'none');

    if (movingOutIndex !== -1) {
        const $outSection = $sections.eq(movingOutIndex);
        const $inSection = movingInIndex !== -1 ? $sections.eq(movingInIndex) : null;

        if (direction === 'down') {
            $outSection.addClass('moving-scroll-down');
            if ($inSection) {
                $inSection.addClass('moving-scroll-down');
                animateChildrenExceptDiv($inSection, 'scrollInDown');
            }
        } else {
            $outSection.addClass('moving-scroll-up');
            if ($inSection) {
                $inSection.addClass('moving-scroll-up');
                animateChildrenExceptDiv($inSection, 'scrollInUp');
            }
        }

        // console.log('Moving OUT from:', $outSection.attr('id'));
        // if ($inSection) console.log('Moving INTO:', $inSection.attr('id'));
    }
});

// Animate all direct children except divs
function animateChildrenExceptDiv($section, animationName) {
    const $children = $section.children().not('div');
    $children.each(function (index) {
        const delay = 0.4 + index * 0.1;
        $($children.eq(index)).addClass('animated').css({
            animation: `${animationName} 0.6s ease-out ${delay}s forwards`
        });
    });
}