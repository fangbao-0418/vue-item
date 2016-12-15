/* globals localStorage */

import Vue from 'vue';
var vue = new Vue();

import serverapi from './serverapi';


export default {

  checkLogin () {
    var url = serverapi.info;
    


    var option = {params:{token:localStorage.token}};   
    
    var p = new Promise(function(resolve, reject){
       
       
    });
    
    return p; 
  },

  getUserInfo () {
    var url = serverapi.info;
    var option = {params:{token:localStorage.token}};   
    var p = new Promise(function(resolve, reject){
        if(localStorage.token){
          vue.$http.get(url,option).then((res)=>{ 
            console.log(res);
            if(res.body != null ){ 
              resolve(res.body);  
            }  else{
              reject();    
            }
          });
        }else{
          reject();
        }
    });
    return p; 
  }
  
}
 