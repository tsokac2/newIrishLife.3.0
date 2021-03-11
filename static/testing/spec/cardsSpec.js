describe("Testing DOM Elements - Triggering .on('click') Event in trip.html, work.html and life.html", function(){

    it("Should invoke the jQuery click event when elements #showLinks1 and #hideLinks1 are clicked", function(){
        setFixtures('<button id="showLinks1" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks1').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card1").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks1" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks1").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card1").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks1', 'click');
        var spyEventHide = spyOnEvent('#hideLinks1', 'click');
        $('#showLinks1').trigger('click');
        $('#hideLinks1').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    

});