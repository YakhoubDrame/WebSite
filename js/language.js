function getLanguageResources(){        
        var resources = new Array();
        resources[true] = "EN";
        resources[false] = "FR";
        
        return resources;
}

function changeLanguage(lang){ 
    $("span[name='"+getLanguageResources()[lang]+"']").each(function(i, elt){
        $(elt).show();
    });  
    $("span[name='"+getLanguageResources()[!lang]+"']").each(function(i, elt){
        $(elt).hide();
    });  
    //var langResources = getLanguageResources()[lang];   
}

$(function() {
    /*$('#languagetoggle').bootstrapToggle({
      on: 'EN',
      off: 'FR'
    });*/
    changeLanguage($('#languagetoggle').prop('checked'));
  })

$(function() {
    $('#languagetoggle').change(function() {
        var value = $(this).prop('checked');
        console.log( "Dans resources ", value, "correspond à ", getLanguageResources()[value]);
        changeLanguage(value);
    })
  })