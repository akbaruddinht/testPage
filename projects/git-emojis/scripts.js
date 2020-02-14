function card_template(emoji) {
  return '<div class="card">' +
    '<div class="card-emo">' + emoji.emoji + '</div>' +
    '<div class="card-details">' +
      '<div class="card-para">' +
        '<span class="title">Name</span>' +
        '<span class="code">' + emoji.name + '</span>' +
      '</div>' +
      '<div class="card-para">' +
        '<span class="title">Code</span>' +
        '<span class="code">' + emoji.code + '</span>' +
      '</div>' +
      '<div class="card-para">' +
        '<span class="title">Entity</span>' +
        '<span class="code"><i>&</i>' + emoji.entity.substring(1, emoji.entity.length) + '</span>' +
      '</div>' +
      '<div class="card-para">' +
        '<span class="title">Description</span>' +
        '<span class="code">' + emoji.description + '</span>' +
      '</div>' +
    '</div>' +
  '</div>';
}

var cards = data.gitmojis.reduce(function(accu, emo) {
  return accu + card_template(emo);
}, '');

document.querySelector(".lists").innerHTML = cards;

var typed = new Typed('#git', {
  strings: ['git add -p file.txt', 'git commit -m ":emoji: message"', 'git push origin master'],
  typeSpeed: 100,
  loop: true
});