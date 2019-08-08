var galleryFeed = new Instafeed({
    get: "user",
    userId: 8539336352,
    accessToken: "8539336352.f6eb4e7.d7c84f9d51b24a56a5637c2e111d7708",
    resolution: "standard_resolution",
    useHttp: "true",
    limit: 20,
    template: 
      // '<a href="{{image}}">'+
        '<div class="img-featured-container">'+
          '<div class="img-backdrop"></div>'+
          '<div class="description-container">'+
            // '<p class="caption">{{caption}}</p>'+
            '<span class="likes"><i class="icon ion-heart"></i> {{likes}}</span>'+
            '<span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span>'+
           '<a href="{{link}}" title="{{caption}}" target="_blank">'+
          '</div>'+
          '<img src="{{image}}" class="img-responsive">'+
        '</div>',
      // '</a>'+
    target: "instafeed-gallery-feed",
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        btnInstafeedLoad.setAttribute('disabled', 'disabled');
      }
      
      var owl = $(".owl-carousel"),
          owlSlideSpeed = 300;
  
      // init owl    
      $(document).ready(function(){
        owl.owlCarousel({
          // navContainer: '.owl-nav-custom',
          // dotsContainer: '.owl-dots-custom',
          margin:10,
          loop:true,
          margin:10,
          nav:true,
          responsive:{
            0:{
              items:1
            },
            200:{
              items:2
            },
            400:{
              items:3
            },
            768:{
              items:5
            }
          }
        });
      });
  
      // keyboard controls
      $(document.documentElement).keydown(function(event) {
        if (event.keyCode == 37) {
          owl.trigger('prev.owl.carousel', [owlSlideSpeed]);
        }
        else if (event.keyCode == 39) {
          owl.trigger('next.owl.carousel', [owlSlideSpeed]);
        }
      });
    }
  });
  
  galleryFeed.run();
  
  var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
  btnInstafeedLoad.addEventListener("click", function() {
    galleryFeed.next()
  });