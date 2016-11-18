<template>
  <home-shell :loading="loading" >
      <div slot="content" v-if="!loading">
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
              <ul>
                <li v-for="item in items.list">
                    <a v-if="item.thumb" href="">

                        <div class="descBox">
                            <div class="title">{{item.title | dsubstr(10)}}</div>
                            <div class="footnote">
                                <span class="source">{{item.copyfrom}}</span>
                                <span class="hits">{{item.hits}}</span>
                            </div>
                        </div>
                        <span class="img" >
                            <img :src="item.thumb" />
                        </span>
                    </a>
                    <a v-else >
                        <h2 class="title">{{item.title | dsubstr(16)}}</h2>
                        <span class="hits">{{item.hits}}</span>
                    </a>
                </li>
              </ul>
          </div>

      </div>
  </home-shell>
</template>
<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    import homeShell from './homeShell.vue';

    export default {
        data(){
            return {
                items:null,
                loading:true,
                'noPage':false,
                'carousel':[{"pic":"http://www.ey99.com/file/upload/201609/30/225028701.jpg","title":"习大大访问你家","url":""},{"pic":"http://www.ey99.com/file/upload/201609/30/225103531.jpg","title":"习大大访问我家","url":""},{"pic":"http://www.ey99.com/file/upload/201609/08/085935452830.jpg","title":"习大大访问她家","url":""}],
                'page':0,
                'totalPage':0,
            }
        },
        components:{
            'swipe':Swipe,
            'swipe-item':SwipeItem,
            'home-shell':homeShell,
        },
        mounted(){
            this.loadData();
        },
        filters:{
            dsubstr(title,length){
                return title.substr(0,length);
            }
        },
        methods:{
            loadData(finshCallback,refresh){

                if(refresh){
                    this.page = 0;
                }

                var _this = this;
                var url = "http://www.ey99.com/api/mobile/article.php";
                this.page += 1;

                var option = {params:{catid:331,page:this.page}};
                this.$http.jsonp(url,option).then(
                        (res)=>{

                        if(_this.page == 1){
                            _this.items = res.body;
                            _this.loading = false;
                            finshCallback()
                        }
                        if(_this.page > 1 && _this.page <= res.body.count){


                                for(var i=0;i<res.body.list.length;i++){
                                    _this.items.list.push(res.body.list[i]);
                                }

                            _this.loading = false;
                            finshCallback()
                        }



                },
                        (err)=>{

                }
                );
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
                .descBox{
                    width:69%;
                    min-height:.7rem;
                    .title{
                        font-size:.3rem;
                    }
                    .hits{
                        float:right;
                        font-size:.18rem;
                    }
                }
                .img{
                    width:25%;
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
                    line-height: .4rem;
                    float:right;
                    text-align: right;
                }
            }

        }
    }
</style>