function CreateCard(title, content, user, imageSrc) {

	var cardstart = '<div class="mdl-cell"><div class="mdl-card mdl-shadow--2dp" style="width: 100%;">'
	+ '<div class="mdl-card__title">'
	+ '<h2 class="mdl-card__title-text">' + title + '</h2></div>';

	var cardmiddle = '<div class="mdl-card__supporting-text mdl-card--expand">' + content;

	var chip = '<span class="mdl-chip mdl-chip--contact" style="background-color: transparent; width: 100%;">'
    + '<img class="mdl-chip__contact" src="' + imageSrc + '"></img>'
    + '<span class="mdl-chip__text">' + user + '</span>'
    + '</span>';

	var cardend = '<div class="mdl-card__actions mdl-card--border">'
	+ chip +
      '</div></div></div>';

	$(".page-content").append(cardstart + cardmiddle + '</div>' + cardend); 
}