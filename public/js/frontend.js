$(document).ready(function () {
    console.log("Loaded");

    $('#addItem').on('click', function (event) {
        $('#bookmarkModal').fadeToggle("fast", "linear");
    })

    $('#search').on('submit', function () {
        const item = $('#search input');
        const url = item.val();

        const bookmark = {
            bookmarkInput: url,
            bookmarkImg: `https://logo.clearbit.com/${url}`,
        };
        $.ajax({
            type: 'POST',
            url: '/',
            data: bookmark,
            success: function (data) {
                //do something cool except reloading xd
                location.reload();
            }
        });
        return false;
    });
    
    // Delete or keep handler 
    var idToDelete;
    $('#good').on('click', function (event) {
        $.ajax({
            type: 'DELETE',
            url: '/' + idToDelete,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });
    $('#bad').on('click', function (event) {
        $('#bookmarkModal2').fadeToggle("fast", "linear");
    })

    $('.gridItem').on('click', function (event) {
        if (altIsPressed) {
            $('#bookmarkModal2').fadeToggle("fast", "linear");
            idToDelete = event.target.getAttribute('identifier');
        }
    });
    $('.gridItem').on('error', function (event) {
        $(this).attr('src', 'img/noimg.png');
    })

    // Alt handler 
    $(document).keydown(function (event) {
        if (event.which == "18")
            altIsPressed = true;
    });

    $(document).keyup(function () {
        altIsPressed = false;
    });

    var altIsPressed = false;
    /*
    $( "p" ).click(function() {
      $( this ).slideUp();
    });
    </sc
    */
});
