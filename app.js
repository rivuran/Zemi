var div_result = document.getElementById('div_result');
//var div_status = document.getElementById('div_status');


//画像を配列に格納する
var img = new Array();
img[0] = new Image();
img[0].src = "http://pikasaku.sakura.ne.jp/zemi/test4/img0.png";
img[1] = new Image();
img[1].src = "http://pikasaku.sakura.ne.jp/zemi/test4/img1.png";
img[2] = new Image();
img[2].src= "http://pikasaku.sakura.ne.jp/zemi/test4/img2.png";
img[3] = new Image();
img[3].src= "http://pikasaku.sakura.ne.jp/zemi/test4/img3.png";



//画像番号用のグローバル変数
var cnt=0;

//画像切り替え関数
function changeIMG(){
  
  //画像番号を進める
  if (cnt == 3)
  { cnt=0; }
  else
  { cnt++; }
  
  //画像を切り替える
 document.getElementById("gazo").src=img[cnt].src;
}




var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.onresult = function(event) {
  console.log("onresult");
  
  var result = event.results[event.results.length - 1];
  if(result.isFinal){
    var last_spoken = result[0].transcript.trim();
    console.log("last_spoken=" + last_spoken);
    show_result(last_spoken); 
 
     }
     
     div_result.innerText = last_spoken;
   };
   

function show_result(last_spoken){

 var spoken = last_spoken;
   
    
    if(spoken == '上' &&  cnt==0 ){
         console.log('OK');
         alert('視力は2.0です。');
         changeIMG();
       }
       
     else if (spoken == '左' && cnt==1){
     
         console.log('OK');
          alert('視力は2.0です。');
         changeIMG();
       }
       
     else if (spoken == '右' && cnt==2){
     
         console.log('OK');
          alert('視力は2.0です。');
         changeIMG();
        }
        
     else if (spoken == '下' && cnt==3){
     
         console.log('OK');
          alert('視力は2.0です。');
         changeIMG();
        }
        
      else{ //それ以外
      
        console.log('NG');
        alert('不正解です。');
} 

      
    };
  




//画像切り替え関数
//function changeIMG(){
  
  //画像番号を進める
//  if (cnt == 3)
// { cnt=0; }
//  else
//  { cnt++; }
  
  //画像を切り替える
// document.getElementById("gazo").src=img[cnt].src;
//}

//recognition.lang = 'ja';
//recognition.start();