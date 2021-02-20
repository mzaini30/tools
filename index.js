function acak(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function atas(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
function clean(x){
  return x.replace(/'/g, "\\'").replace(/"/g, '\\"')
}
function slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    if (str == '') {
        acak = Math.random() + ''
        str = acak.replace('0.', '')
    }
    return str;
}
function tanggal(){
  const dt = new Date();
  return `${dt.getFullYear().toString().padStart(4,'0')}-${(dt.getMonth()+1).toString().padStart(2,'0')}-${dt.getDate().toString().padStart(2,'0')} ${dt.getHours().toString().padStart(2,'0')}:${dt.getMinutes().toString().padStart(2,'0')}:${dt.getSeconds().toString().padStart(2,'0')}`
}
function sleep(n){
 return new Promise(resolve => setTimeout(resolve, n))
}
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result.replace(/data:image\/.*;base64,/, ''));
  reader.onerror = error => reject(error);
});

module.exports = {
  acak,
  atas,
  clean,
  slug,
  tanggal,
  sleep,
  toBase64
}