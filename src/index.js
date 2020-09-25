module.exports = function toReadable (number) {
  let mus1=["zero","one","two","three", "four", "five", "six", "seven","eight","nine"];
  let mus2=["ten","eleven","twelve", 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let mus3=["twenty","thirty", 'forty','fifty','sixty','seventy','eighty','ninety'];
  let num=""+number;
  let str="";
  if (num.length==1){
    str+=mus1[number];
  } else if (num.length==2){
      if (num[0]=="1"){
          str=mus2[+num[1]];
      }else{
          str=mus3[num[0]-2];
          if (num[1]!=0) str+=" "+mus1[num[1]];
      }
  }else if (num.length==3){
      str=mus1[num[0]]+" hundred";
    if (num[1]=="1"){
        str+=" "+mus2[+num[2]];
    }else if (num[1]=="0"&&num[2]!=0){
        str+=" "+mus1[num[2]];
    }else if(num[1]!="0"){
        str+=" "+mus3[num[1]-2];
        if (num[2]!=0) str+=" "+mus1[num[2]];
    }
  }
  return str;
}
