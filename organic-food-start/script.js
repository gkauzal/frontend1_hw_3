// function for make page responsive

function RespFunction(x) 
{
  
  if(x.matches) { 
    document.querySelector('#menu-btn').style.display='block';
    var items = document.getElementsByClassName('nav-list-items');
    for (var i = 0; i < items.length; i++) {
      items[i].style.display='block';
      items[i].style.visibility='hidden';
    }
    document.querySelector('.main-cards').style.gridTemplateColumns= 'auto';
    document.querySelector('.main-cards').style.gridRowGap= '2vw';
  }
  else {
    document.querySelector('#menu-btn').style.display='none';
    document.querySelector('.main-cards').style='';
    var items = document.getElementsByClassName('nav-list-items');
    for (var i = 0; i < items.length; i++) {
      items[i].style='';
    }
  }
}

// function for opening hided responsive menu

function OpenMenu()
{
  var items = document.getElementsByClassName('nav-list-items');
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.visibility=='hidden')
    {
      items[i].style.visibility='visible';
    }
    else
    {
      items[i].style.visibility='hidden';
    }
  }
}