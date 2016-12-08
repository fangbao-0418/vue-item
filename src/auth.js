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
  }
  
}
 