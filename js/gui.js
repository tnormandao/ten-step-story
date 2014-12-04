App._u.templatesGet = function(){
	$('.gui-template').each(function(i, obj){
		var el = $(obj);
		App.templates[el.data().name] = _.template(el.html());
	});
}
App._u.templatesGet();

// test