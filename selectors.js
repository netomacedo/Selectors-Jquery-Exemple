//função só será executada quando o DOM(html) for carregado totalmente.
$(function(){

    var selectAllUsers = $('#select-all-users');
    var selectUsersItem = $('.js-select-user');

    function style(){
        selectUsersItem.filter(':checked').parents('tr').addClass('selecionado');
        selectUsersItem.filter(':not(:checked)').parents('tr').removeClass('selecionado');
    }

    selectUsersItem.on('click', function(){
        var totalSelectUsers = selectUsersItem.filter(':checked').length;
        var checked = selectUsersItem.length === totalSelectUsers;
        selectAllUsers.prop('checked', checked);
    });

    selectAllUsers.on('click', function(){
        var selectAllUsersChecked = selectAllUsers.prop('checked');
        selectUsersItem.prop('checked', selectAllUsersChecked);
        style();
    });

    selectUsersItem.on('change', function(event){
        style();
    })

});