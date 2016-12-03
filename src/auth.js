/* globals localStorage */

import Vue from 'vue';
var vue = new Vue();



export default {

  getUserInfo () {

    var url = "http://www.ey99.com/api/mobile/info.php";
    var option = {params:{token:localStorage.token}};
   
    var p = new Promise(function(resolve, reject){
        vue.$http.get(url,option).then((res)=>{ 
            
            if(res.body.userid != null){ 
              resolve(res.body);  
            }  else{
              reject();    
            }
        });
    });
    return p; 
  },
  checkun(username){
    var url = "http://www.ey99.com/api/mobile/auth.php";
    var body = {username:username};
    var option = {emulateJSON:true,params:{job:"checkun"}};    
    var p = new Promise(function(resolve, reject){
        vue.$http.post(url,body,option).then((res)=>{ 
            if(res.body == 1){ 
              resolve();  
            }  else{
              reject();    
            }
        });
    });
    return p; 
  },
  onChange () {}
}
 