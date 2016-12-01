<template>
   <div class="searItems">
        <ul>                
          <li v-for="item in items">
              <template v-if="item.thumb" >
              <router-link  :to="{name:'healthDetail',query:{id:item.itemid}}" >
                  <template v-if="item.level == 8">                            
                      <div class="midbox">
                          <div class=title>{{item.title}}<div>
                          <span><img :src="item.thumb"/></span>
                          <span><img class="imgmid" :src="item.thumb1"/></span>
                          <span><img :src="item.thumb2"/></span>
                          <i class="source">{{item.copyfrom}}</i>
                          <i class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</i>
                       </div>                           
                  </template>  
                  <template v-if="item.level == 9">                            
                       <div class="bigbox">
                          <div class="title">
                            {{item.title}}
                          </div>
                         <img :src="item.thumb"/>
                         <span>{{item.copyfrom}}</span>
                         <span class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</span>
                      </div>                  
                  </template> 
                 <template  v-if="item.level != 8 && item.level != 9">  
                      <div class="descBox">
                          <div class="title">{{item.title | dsubstr(20)}}</div>
                          <div class="footnote">
                              <span class="source">{{item.copyfrom ? item.copyfrom : "当代医药市场网"}}</span>
                              <span class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</span>
                          </div>
                      </div>
                      <span class="img" >
                          <img :src="item.thumb" class="img-small"/>
                      </span>
                  </template>  
              </router-link >
              </template>
              <template  v-else >
                  <router-link :to="{name:'healthDetail',query:{id:item.itemid}}" >
                      <h2 class="title">{{item.title | dsubstr(16)}}</h2>
                      <span class="hits">
                          <i class="iconfont">&#xf0048;</i>{{item.hits}}
                      </span>
                  </router-link >
              </template>
          </li>
        </ul>
    </div>

</template>
<script>
  export default {
      props:['items'],
      mounted(){
        console.log(this.items);
      },
      filters:{
          dsubstr(title,length){
              return title.substr(0,length);
          }
      },
  }
</script>
<style lang="sass" scoped>
  .searItems{
        .cardTitle{
            color: #333;
            padding-left: .2rem;
            height: .85rem;
            line-height: .85rem;
            font-weight: 700;
            font-size: .36rem;
        }
        ul{
            width:6rem;
            padding:0px .2rem;
            li{
                width: 100%;
                margin-bottom:.2rem;
                border-bottom:dashed #ccc 1px;
                .bigbox{
                    width: 6rem;
                     span{
                       color: #8f8f8f;
                       display: inline-block;
                       padding: .1rem .05rem .1rem 0;
                       font-size: .24rem; 
                    }
                    img{
                        width: 6rem;
                        height: 3rem;
                    }
                    .hits{
                         font-size: .18rem;
                        i{
                            font-size: .24rem;
                        }
                    }
                }
                .midbox{
                    width: 6rem;
                    img{
                        width: 1.94rem;
                        height: 1.23rem;
                        padding-top: .2rem; 
                    }
                    span{
                         display:inline-block;
                         float: left;
                    }
                    .imgmid{
                         padding: 0.2rem .088rem 0 .088rem;
                    }
                    .source{
                       color: #8f8f8f;
                       display: inline-block;
                       padding: .1rem .05rem .1rem 0;
                       font-size: .24rem; 
                    }
                    .hits{
                       color: #8f8f8f;
                       display: inline-block;
                       padding: .1rem .05rem .1rem 0;
                       font-size: .18rem; 
                    }
                }
                .title{
                    
                    font-size: .3rem;
                }
                .descBox{
                    width:69%;
                    min-height:1rem;
                    float:left;
                    .title{
                        min-height:1rem;
                        font-size:.3rem;
                    }
                    .source{
                        font-size:.24rem;
                        color:#8f8f8f;
                        line-height: .4rem;                       
                    }
                    .hits{
                        float:right;
                        font-size:.18rem;
                    }
                }
                .img-small{
                    float:right;
                    width:25%;
                    height:1.2rem;
                }
                a{
                    display: inline-block;
                    width: 100%;
                }
                h2{
                    padding-bottom:.2rem;
                    display: inline-block;
                    font-size:.3rem;
                    width:90%;
                    float:left;

                }
                .hits{
                    font-size:.2rem;
                    width:10%;
                   
                    float:right;
                    text-align: right;
                    color:#8f8f8f;
                    i{
                        font-size:.24rem;
                    }
                }
            }

        }
    }
</style>

</style>