function getqoute(){
$.ajaxSetup({ cache: false});
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
     //currentQuote=a[0].content.replace(/(<([^>]+)>)/ig,"");
     //currentAuthor=a[0].title;
     //console.log(title); 
     $("#qoute-text").html(currentQuote)
     $("#qoute-title").html(currentAuthor)
     $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
});
}