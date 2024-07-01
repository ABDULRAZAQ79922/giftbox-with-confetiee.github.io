$(document).ready(function() {
    $('#cuteOpenButton').click(function() {
        $('#cuteLid').css('transform', 'rotateX(180deg)');

        for (let cuteI = 0; cuteI < 100; cuteI++) {
            let cuteConfetti = $('<div class="cute-confetti"></div>');
            cuteConfetti.css({
                left: Math.random() * 100 + 'px',
                top: Math.random() * 100 + 'px',
                backgroundColor: getRandomColor()
            });
            $('#cuteGiftBox').append(cuteConfetti);

            (function(cuteConfetti) {
                setTimeout(function() {
                    cuteConfetti.remove();
                }, 1000);
            })(cuteConfetti);
        }
    });

    function getRandomColor() {
        let cuteLetters = '0123456789ABCDEF';
        let cuteColor = '#';
        for (let cuteJ = 0; cuteJ < 6; cuteJ++) {
            cuteColor += cuteLetters[Math.floor(Math.random() * 16)];
        }
        return cuteColor;
    }
});
