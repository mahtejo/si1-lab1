$(document).ready(function(){
    $("#add").click(function (){
        if($("#input").val() == "") {
            alert("Você deve inserir pelo menos um caractere para adicionar a lista.");
        }
        else {
            $("#aprender").append("<li class=\"list-group-item ng-binding ng-scope\">"+  $("#input").val() +
                "<span class=\"pull-right\">" +
                "<button type=\"button\" class=\"btn btn-xs btn-success\" id=\"mover-aprendidos\"><span class=\"glyphicon glyphicon-arrow-right\"></span></button>"
                + "<button class=\"btn btn-xs\" id=\"remover\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
                "</span></li>");
            document.getElementById("input").value ="";
        }
    });
    $("#aprender").on("click", "#mover-aprendidos", function() {
        var parent = $(this).parent().parent();
        var text = parent.text();
        parent.hide('fast', function(){ $target.remove(); });
        $("#aprendidos").append("<li class=\"list-group-item ng-binding ng-scope\">"+ text +
            "<span class=\"pull-right\">" + "<button type=\"button\" class=\"btn btn-xs btn-success\" id=\"mover-aprender\"> <span class=\"glyphicon glyphicon-arrow-left\"></span></button>" +
            "<button class=\"btn btn-xs\" id=\"remover\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
            "</span></li>").hide().show('fast');

    });

    $("#aprendidos").on("click", "#mover-aprender", function() {
        var parent = $(this).parent().parent();
        var text = parent.text();
        parent.hide('fast', function(){ $target.remove(); });
        $("#aprender").append("<li class=\"list-group-item ng-binding ng-scope\">"+ text +
            "<span class=\"pull-right\">" + "<button type=\"button\" class=\"btn btn-xs btn-success\" id=\"mover-aprendidos\"> <span class=\"glyphicon glyphicon-arrow-right\"></span></button>" +
            "<button class=\"btn btn-xs\" id=\"remover\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
            "</span></li>").hide().show('fast');

    });

    $(".list-group").on("click", "#remover", function() {
        var parent = $(this).parent().parent();
        parent.hide('slow', function(){ remove();
        });
    });
});