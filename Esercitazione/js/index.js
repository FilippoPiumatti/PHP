"use strict"
$(document).ready(function(){
    let i = 0;
    $("#updateMatch").hide();

    let request = sendRequestNoCallback("php/getPartite.php", "POST");
    request.fail(error);
    console.log(error)
    request.done(function(partite){
       
        console.log(partite);

        let _table = $("<table>");
        _table.prop("id","elencoPartite");
        _table.addClass("table");
        _table.appendTo("body");

        let _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Id");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Data");
        _th.appendTo(_table);

         _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Ora");
        _th.appendTo(_table);

         _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Squadra");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Home/Away");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Campo");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Home");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Visitor");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.attr("scope","col")
        _th.text("Note");
        _th.appendTo(_table);


        partite.forEach(function(partite){
                let _tr = $("<tr>");
                _tr.prop("scope","row");
                _tr.prop("id", i);

                let _td = $("<td>");
                _td.text(partite.id);
                _td.prop("id", "id" + i);
                _td.appendTo(_tr);
				
                _td = $("<td>");
                _td.text(partite.data);
                _td.prop("id","data" + i);
                _td.appendTo(_tr);

                 _td = $("<td>");
                _td.text(partite.ora);
                _td.prop("id","ora" + i);
                _td.appendTo(_tr);

                 _td = $("<td>");
                _td.text(partite.squadra);
                _td.prop("id","squadra" + i);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.casa_fuori);
                _td.prop("id","casa_fuori" + i);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.campo);
                _td.prop("id","campo" + i);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.home);
                _td.prop("id","home" + i);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.visitor);
                _td.prop("id","visitor" + i);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.note);
                _td.prop("id","note" + i);
                _td.appendTo(_tr);

                _tr.appendTo(_table);
                i++;

                _tr.on("click",function(){
                    let id = _tr.prop("id");
                    GetPartite(id);
                })

               
        })
    })
    function GetPartite(index){
        $("#elencoPartite").hide();
        $("#updateMatch").show();

        $("#idMatch").val($("#id"+index).html());
        $("#dataMatch").val($("#data"+index).html());
        $("#oraMatch").val($("#ora"+index).html());
        $("#squadra").val($("#squadra"+index).html());
        $("#casa_fuori").val($("#casa_fuori"+index).html());
        $("#campo").val($("#campo"+index).html());
        $("#home").val($("#home"+index).html());
        $("#visitor").val($("#visitor"+index).html());
        $("#note").val($("#note"+index).html());
        $("#btnUpdate").on("click",UpdateMatch);
    }

    function UpdateMatch(){
        let partita = {
            id:$("idMatch"),
            data:$("#dataMatch"),
            ora:$("#oraMatch"),
            squadra:$("#squadra"),
            casa_fuori:$("#casa_fuori"),
            campo:$("#campo"),
            home:$("#home"),
            visitor:$("#visitor"),
            note:$("#note")

        };
        let request = sendRequestNoCallback("php/updateMatch.php?id = " + partita.id);
        request.fail(error);
        request.done(function(data){
            console.log("eseguito" + data);
            $("#updateMatch").hide();
            $("#elencoPartite").show();
        })
        
    }
})


