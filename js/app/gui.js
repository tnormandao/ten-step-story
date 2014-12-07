App._u.templatesGet = function(){
	$('.gui-template').each(function(i, obj){
		var el = $(obj);
		App.templates[el.data().name] = _.template(el.html());
	});
};
App._u.templatesGet();

App.story = {
    log:[],
    render: function(style, content, img){
        var el = {};
        
        if(!!img){ 
            el = $(App.templates.storyImg({ style: style, content: content, src: img }));
        } else { 
            el = $(App.templates.story({ style: style, content: content }));
        }; 
        
        this.draw(el, content, style);
    },
    draw: function(el, content, style){
            $('#story').append(el);
            el.css({opacity: 0});
            $('#story').animate({
                scrollTop: el[0].offsetTop},
            'slow', function(){
                    el.animate({
                        opacity: 1
                    }, 800, function() {
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
        this.render('system', content);   },
    turnheader: function(content){ 
        this.render('turnheader', content);   },
    tell: function(content, img){ 
        this.render('tell', content, img); },
    damage: function(content, img){ 
        this.render('damage', content, img); },
    get: function(content, img){ 
        this.render('get', content, img); },
    loose: function(content, img){ 
        this.render('loose', content, img); },
    npc: function(content, img){
        this.render('npc', content, img); }
};

$(function(){
});