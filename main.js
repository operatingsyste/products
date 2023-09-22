console.log('Hello World!');
var web = "web";
var apk = 'apk';
function launch(arg){
  if (arg === "web"){
    window.open("https://gwsdevelopers.wordpress.com/");
  }
  else if (arg === "apk") {
    window.open("android.apk");
  }
}