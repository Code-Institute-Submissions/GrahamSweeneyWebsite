// Original credit: http://azmind.com/bootstrap-tutorial-modal-video/

$('.launch-modal').on('click', function (e) {
    e.preventDefault();
    $('#' + $(this).data('modal-id')).modal();
});