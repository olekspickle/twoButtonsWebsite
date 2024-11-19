'use strict;'

function getAge(){
    var a = prompt('Сколько тебе лет?','a lot');
    if(a===null){alert('У тебя что, цифры платные?');}else{
    alert('Вам ' + a + " лет!" );}
};


function getAuth(){
  var userName = prompt('Who the hell are you?', "");
  if(userName.toLowerCase() == 'aleks'||userName.toLowerCase() =='julia'){

    var password = prompt('Password, please.','');

    if(password==='1006'){
      alert('Greetings ' + userName + '\n I bet you are feelin` awesome!' );
    }else{
      alert('Wrong password, kid. Try again.' + ' (you typed: ' + password + '. That is bullshit.)');
    }

  }else{
    alert('Get lost you, little arrogant creature!');
  }
};
