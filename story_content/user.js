function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JuAKA7S7wc":
        Script1();
        break;
      case "5s4Hhwi4h9q":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var timer = player.GetVar("timer");

var sec = (timer - (timer%1000))/1000;

player.SetVar("sec",sec);
}

function Script2()
{
  var player = GetPlayer();
var r_sec = player.GetVar("max_sec"); 

var sec = r_sec % 60;
var min = Math.floor(r_sec / 60);

var d_min = min < 10 ? "0" + min : min; 
var d_sec = sec < 10 ? "0" + sec : sec;

player.SetVar("d_min", d_min);
player.SetVar("d_sec", d_sec);
}

