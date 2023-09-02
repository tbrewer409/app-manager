$(document).ready(function() {
        $('#stopA111').click(function() {
            $.get('/stop_a1111', function(data) {
                alert(data);
            });
        });

        $('#startA111').click(function() {
            $.get('/start_a1111', function(data) {
                alert(data);
            });
        });

        $('#stopKohya').click(function() {
            $.get('/stop_kohya', function(data) {
                alert(data);
            });
        });

        $('#startKohya').click(function() {
            $.get('/start_kohya', function(data) {
                alert(data);
            });
        });

        $('#stopComfyUI').click(function() {
            $.get('/stop_comfyui', function(data) {
                alert(data);
            });
        });

        $('#startComfyUI').click(function() {
            $.get('/start_comfyui', function(data) {
                alert(data);
            });
        });
    });
