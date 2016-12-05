/* globals localStorage */

import Vue from 'vue';
var vue = new Vue();

import serverapi from './serverapi';


export default {

  getUserInfo () {
    var url = serverapi.info;
    var option = {params:{token:localStorage.token}};
   
    var p = new Promise(function(resolve, reject){
        vue.$http.get(url,option).then((res)=>{ 
            if(res.body != null ){ 
              resolve(res.body);  
            }  else{
              reject();    
            }
        });
    });
    return p; 
  },
  checkun(username){
    var url = serverapi.auth;
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
 