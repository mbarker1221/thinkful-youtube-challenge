$$(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var search = $('#search-field').val();

        getDataFromApi(search);
    });
});

function getDataFromApi(search) {
    var params = {
        key: 'AIzaSyDmETKmDZ9WBL5HC9zCVz8zmXreXkyE3nQ',
        part: 'snippet',
        q: search,
        type: 'video',

    };
    var url = 'https://www.googleapis.com/youtube/v3/search';
    
    $.getJSON(url, params, function(data) {
        showResults(data);
    });
}

function showResults(results) {
    var html = "";

    $.each(results.items, function(index, value) {
        html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="_blank">' + '<img src="' + value.snippet.thumbnails.high.url + '"/>' + '</a>';
    });

    $('#results').html(html);
};