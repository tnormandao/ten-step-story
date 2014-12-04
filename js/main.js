// Game start
$(function(){

	App.story(
		'История десяти шагов' );

	App.story(
		'Удивительная история о том, чего никогда не происходило, но вполне могло произойти.' );

	App.apply(
		'variants',
		'<div  class="choise" onclick="Game.turn()"> Начать игру </div> ');

});
