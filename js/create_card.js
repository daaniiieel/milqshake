function CreateCard(title, content, user, imageSrc) {

	var cardstart = '<div class="mdl-card mdl-shadow--2dp" style="margin: 10px;">'
	+ '<div class="mdl-card__title mdl-card--expand">'
	+ '<h2 class="mdl-card__title-text">' + title + '</h2></div>';

	var cardmiddle = '<div class="mdl-card__supporting-text">' + content;

	var chip = '<br><br><span class="mdl-chip mdl-chip--contact">'
    + '<img class="mdl-chip__contact" src="' + imageSrc + '"></img>'
    + '<span class="mdl-chip__text">' + user + '</span>'
    + '</span>';

	var cardend = '<div class="mdl-card__actions mdl-card--border">'
	+ '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">View Updates</a>' +
      '</div></div>';

	$(".page-content").append(cardstart + cardmiddle + chip + '</div>' + cardend); 
}