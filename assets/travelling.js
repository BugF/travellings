function travelling() {
  var url = new Array();
  var rip_url = "https://bugf.github.io/travellings/assets/rip.html";

  url[0] = "https://rruu.net";
  url[1] = "https://rruu.net";
  url[2] = "https://rruu.net";
  url[3] = "https://rruu.net";
  url[4] = "https://rruu.net";
  url[5] = rip_url;
  url[6] = "https://rruu.net";
  url[7] = "https://rruu.net";
  url[8] = "https://rruu.net";
  url[9] = "https://rruu.net";
  url[10] = "https://rruu.net";
  url[11] = "https://rruu.net";
  url[12] = "https://rruu.net";
  url[13] = "https://rruu.net";

  url[342] = "https://rruu.net";


  if (document.referrer) {
    var origin = new URL(document.referrer).origin;
    if (url.includes(origin)) {
      url.splice(url.indexOf(origin), 1);
    }
  }


  var ints = Math.floor(Math.random() * url.length);
  window.location = url[ints];
}
