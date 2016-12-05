<template>
  <div >
      <div slot="content" >
          <swipe class="my-swipe" :speed="1000" :show-indicators="false" >

              <swipe-item v-for="item in carousel" >
                  <a :src="item.url">
                      <img :src="item.pic"/>
                      <span>{{item.title}}</span>
                  </a>
              </swipe-item>

          </swipe>

            <div class="card">
                <h2 class="cardTitle">今日推荐</h2>
                <home-shell class="page-list" type="21" :getparams="getparams" ></home-shell>
            </div>

      </div>
  </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    import homeShell from './homeShell.vue';
    import searchArticleItem from './searchArticleItem';
    export default {
        data(){
            return {               
                'carousel':[{"pic":"http://www.ey99.com/file/upload/201609/30/225028701.jpg","title":"中国生命电子学会年会","url":""},{"pic":"http://www.ey99.com/file/upload/201609/30/225103531.jpg","title":"第十三届中医药博览会","url":""},{"pic":"http://www.ey99.com/file/upload/201609/08/085935452830.jpg","title":"博性康药膜","url":""}],
                'getparams':{url:"22222"},
                'currentview':searchArticleItem
            }
        },
        components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem,
            'home-shell':homeShell,
            
        },
        created(){
            this.setGetParams();
        },
        filters:{
            dsubstr(title,length){
                return title.substr(0,length);
            }
        },
        methods:{
            setGetParams(){              
                var url = "http://www.ey99.com/api/mobile/article.php";
                var option = {params:{catid:331}};
                this.getparams = {url:url,option:option};
                console.log(this.getparams);
            }
        },

    }
</script>
<style lang="sass" scoped>
    .my-swipe{
        width:6.4rem;
        height:2.8rem;
        position:relative;
        img{
            width:6.4rem;
            height:2.8rem;
        }
        span{
            font-size: .28rem;
            line-height: .52rem;
            padding-left:.2rem;
            color: #FFF;
            width:6.2rem;
            height:.5rem;
            background: rgba(0,0,0,0.5);
            position: absolute;
            bottom:0;
        }
    }
    .card{
        .cardTitle{
            background: #fff;
            color: #333;
            padding-left: .2rem;
            height: .85rem;
            line-height: .85rem;
            font-weight: 700;
            font-size: .36rem;
        }
        .page-list{
            padding-bottom:.94rem;
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