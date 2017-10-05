var sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tainnate eate tea anne inant nean',
    'itant eate anot eat nato inate eatanot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];

$(function() {
    $("#keyboard-upper-container").hide();
    $(document).keydown(function(e) {
        if (e.which == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        };
    });

    $(document).keyup(function(e) {
        if (e.which == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();            
       };
    }); 
});

$(document).keypress(function(e) {
    $('#' + e.which).css("backgroundColor", "red");
});
$(document).keyup(function(e) {
    $('#' + e.which).css("backgroundColor", "#F5F5F5");
});

// Going to go ahead and push this as is