App._u.templatesGet = function(){
	$('.gui-template').each(function(i, obj){
		var el = $(obj);
		App.templates[el.data().name] = _.template(el.html());
	});
}
App._u.templatesGet();

App.story = {
    log:[],
    draw: function( style, content){
            var el = $(App.templates.story({ style: style, content: content }));
            $('#story').append(el);
            el.css({opacity: 0});
            $('#story').animate({
                scrollTop: el[0].offsetTop},
            'slow', function(){
                    el.animate({
                        opacity: 1
                    }, 1550, function() {
                        App.story.log.push({
                                id: App.story.log.length,
                                el: el,
                                chanell: style,
                                content: content
                        });    
                    });
            });
    },
    system: function(content){ 
        this.draw('system', content);   },
    turnheader: function(content){ 
        this.draw('turnheader', content);   },
    tell: function(content){ 
        this.draw('tell', content); },
    damage: function(content){ 
        this.draw('damage', content); },
    get: function(content){ 
        this.draw('get', content); },
    loose: function(content){ 
        this.draw('loose', content); },
    npc: function(content){
        this.draw('npc', content); }
};