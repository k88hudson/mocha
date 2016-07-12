// dumb thing that helps with animation of avatars
function avatars (type) {
  return function avatarLoaded () {
    avatars[type] = typeof avatars[type] === 'number' ? avatars[type] + 1 : 1;
    if (avatars[type] === 30) {
      document.getElementById(type).classList.add('onload');
    }
  }
}

avatars.backerLoaded = avatars('_backers');
avatars.sponsorLoaded = avatars('_sponsors');
