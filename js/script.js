$(document).ready(function(){
    $('ul.filter-area__links').on('click', 'li:not(.filter-area__link_active)', function() {
        $(this)
          .addClass('filter-area__link_active').siblings().removeClass('filter-area__link_active')
          .closest('div.container').find('div.plan__scheme').removeClass('plan__scheme_active').eq($(this).index()).addClass('plan__scheme_active');
    });

     $('#twolevels').click(function() {
        $('.filter-area__link').hide('', function(){
            $('.twolevels').show();    
        });
    });
    $('#restarea').click(function() {
        $('.filter-area__link').hide('', function(){
            $('.restarea').show();    
        });
    });
    $('#terassa').click(function() {
        $('.filter-area__link').hide('', function(){
            $('.terassa').show();    
        });
    });
});