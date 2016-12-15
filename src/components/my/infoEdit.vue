<template>
	<div class="info-box" v-if="userinfo">
		<my-nav :path="path" class="info-head" theme="white" title="个人资料"></my-nav>
		
		<div class="particulars" >
			<avatar-upload :src="userinfo.avatar"></avatar-upload>
			<ul>
				<li>
				<span>昵称:</span>
					<i><input type="text" v-model="userinfo.nickname" ></i>
				</li>
				<li @click="radioselect">
					<span>性别:</span>
					<i v-if="userinfo.gender == 1" class="gray">男士</i>
					<i v-if="userinfo.gender == 2" class="gray">女士</i>
				</li>
				<li><span>单位名称:</span><input v-model="userinfo.company" type="text" /></li>
				
				<li><span>所在地区:</span><i @click="selectregion" class="gray">{{userinfo.region}}</i>
					<div v-if="regionIsClick" class="selectregion">
						<mt-picker :show-toolbar="true" :slots="slots" @change="onValuesChange"></mt-picker>
						<mt-button @click="selectregion" type="primary">确定</mt-button>
					</div>
				</li>
				<li>
					<span>联系地址:</span>
					<input type="text" v-model="userinfo.address" placeholder="请输入真实地址，以便联系业务">
				</li>
				<li>
					<span>邮编:</span>
					<i><input type="text" v-model="userinfo.postcode"></i>
				</li>
				<li>
					<span>电话:</span>
					<i><input type="text" v-model="userinfo.telephone" ></i>
				</li>
				<li>
					<span>联系人:</span>
					<i><input type="text"  v-model="userinfo.truename" ></i>
				</li>
				<li>
					<span>手机:</span>
					<i><input type="text" v-model="userinfo.mobile" ></i>
				</li>
				<li>
					<span>传真:</span>
					<i><input type="text" v-model="userinfo.fax" ></i>
				</li>
				<li>
					<span>QQ:</span>
					<i><input type="text" v-model="userinfo.qq"></i>
				</li>
				<li>
					<span>E-mail:</span>
					<i><input type="text" v-model="userinfo.email"></i>
				</li>
			</ul>
			<div :class="['save',{'disabled':!saved}]" @click="save">
				<span>保存</span>
			</div>
		</div>
		<radio-select :show="show" :value="userinfo.gender" :option="sexradio"></radio-select>
	</div>
</template>
<script>
	import blackNav from '../blackNav';
	import avatarUpload from './avatarUpload';
	import { Picker } from 'mint-ui';
	import serverapi from '../../serverapi';
	import { Button } from 'mint-ui';
	import radioSelect from '../common/radioselect';
	import bus from '../../bus.js';
	import { Indicator, Toast } from 'mint-ui';

	export default {
		data(){
			return {
				saved:false,
				sexradio:[1,2],
				show:false,
				region:null,
				path:{path:"/my/mySetting"},
				userinfo:null,
				regionIsClick:false,
				slots: [{
				          flex: 1,
				          values: [],
				          className: 'slot1',
				          textAlign: 'center'
				        }, {
				          divider: true,
				          content: '-',
				          className: 'slot2',
				           textAlign: 'center'
				        }, {
				          flex: 1,
				          values: [],
				          className: 'slot3',
				          textAlign: 'center',
				         
				        },
				        {
				          divider: true,
				          content: '-',
				          className: 'slot4',
				           textAlign: 'center'
				        }, {
				          flex: 1,
				          className: 'slot5',
				          textAlign: 'center'
				        }
				]	
			}	
		},
		computed:{
			slot1(){
				if(this.region){
					return this.region[0];
				}else{
					return null;
				}				
			}
		},
		components:{
			'my-nav':blackNav,
			avatarUpload,
			radioSelect
		},	
		created(){
			this.loadUserInfo();
			this.loadregion();
			
		},
		updated(){
			
		},
		 
		mounted(){
			Indicator.open({			
			  spinnerType: 'fading-circle'
			});
			var that = this;
			bus.$on('close',function(value){
				that.userinfo.gender = value;			
				that.radioChange()
			});

		},
		methods:{
			watchUserInfo(){
			 	var _this = this;
			 	this.$watch('userinfo', function (newValue, oldValue) {
			  		_this.saved = true;		  		
				},{deep: true})
			},
			radioChange(value){
				this.show = false;
			},
			radioselect(){
				this.show = true;
			},
			toast(msg){
				Toast({
				  message: msg,
				  position: 'bottom',
				  duration: 2000
				});
			},
			save(){
				if(this.saved){
					var postcodeReg =  /^[1-9]\d{5}$/;
					var qqReg = /^[1-9][0-9]{4,}$/;
					var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
					if(this.getByteLen(this.userinfo.nickname) < 4 || this.getByteLen(this.userinfo.nickname) >30){
						this.toast("昵称不合法，昵称必须是4~30位字符");
					}else if(this.getByteLen(this.userinfo.company) < 4 || this.getByteLen(this.userinfo.company) > 60){
						this.toast("单位名称不合法，名称必须是4~60位字符");
					}else if(this.userinfo.region == "--"){
						this.toast("所在地区不能为空");
					}else if(this.getByteLen(this.userinfo.address) < 4 || this.getByteLen(this.userinfo.company) > 120){
						this.toast("联系地址不合法，地址必须是4~120位字符");
					}else if( !postcodeReg.exec(this.userinfo.postcode)  ){
						this.toast("邮编格式不正确");
					}else if(!this.userinfo.telephone){
						this.toast("电话不能为空");
					}else if(!this.userinfo.truename){
						this.toast("联系人不能为空");
					}else if(!this.userinfo.mobile){
						this.toast("手机号码不能为空");
					}else if(!this.userinfo.fax){
						this.toast("传真不能为空");
					}else if( !qqReg.exec(this.userinfo.qq)  ){
						this.toast("QQ格式不正确");
					}else if( !emailReg.exec(this.userinfo.email)  ){
						this.toast("邮箱格式不正确");
					}else{
						Indicator.open({
							text: '正在保存',			
						  	spinnerType: 'fading-circle'
						});

						var url = serverapi.info;
						var body = {action:"infoedit",data:this.userinfo,token:localStorage.token};
						var option = {emulateJSON:true};
						this.$http.post(url,body,option).then((res)=>{
							console.log(res);
							Indicator.close();
							this.$router.push({path:'/my/mySetting'});
						})

					}


					
				}
				
			},
			loadUserInfo(){
				var url = serverapi.info;
				var body = {token:localStorage.token};
				var option = {emulateJSON:true};
				this.$http.post(url,body,option).then((res) => {	
					//console.log(res.body);			
					this.userinfo = res.body;
					Indicator.close();

					//获取用户信息后监听改变
					this.watchUserInfo();
				})
			},
			selectregion(){
				this.regionIsClick = !this.regionIsClick;
			},
			loadregion(){
				var url = serverapi.region;
				this.$http.get(url).then((res)=>{
					//console.log(res.body);
					this.region = res.body;
					//console.log(this.slots);
					this.slots[0].values = res.body[0];
					//console.log(this.region);
					this.slots[2].values = res.body['0_0'];
					this.slots[4].values = res.body['0_0_0'];
					//this.onValuesChange(Picker,values);
				})
			},
			onValuesChange(picker, values) {
				var index = [0,0];
				index[0] = this.region[0].indexOf(values[0]);
				index[1] = this.region['0_'+index[0]].indexOf( values[1] );	
				picker.setSlotValues(1,this.region['0_' + index[0] ]);				
				picker.setSlotValues(2,this.region['0_' + index[0] + '_' + index[1] ]);
				this.userinfo.region = values[0] + '-' + values[1] + '-' + values[2]; 
			},
			getByteLen(val) {
	            var len = 0;
	            for (var i = 0; i < val.length; i++) {
	               var length = val.charCodeAt(i);
	               if(length>=0&&length<=128)
	                {
	                    len += 1;
	                }
	                else
	                {
	                    len += 2;
	                }
	            }
	            return len;
        	}


		}
	}

</script>
<style lang="sass">
.picker{
	.picker-items{
		.picker-item{
				font-size: .24rem;
		}
	}
}
.mint-button{
	 padding: 0 .12rem;
	.mint-button-text{
			font-size: .24rem;
	}

}
</style>
<style lang="sass" scoped>
	.info-box{
		.info-head{
			position: fixed;
			top: 0;
			z-index: 999;
		}
		.particulars{
			padding-bottom: .15rem;
			margin-top: .81rem;
			ul{
				margin-top:.2rem;
				background:#fff;
				padding: 0 .2rem;
				margin-bottom: .4rem;
				li{
					font-size: .3rem;
					padding:.25rem 0;
					border-bottom: 1px solid #e6e6e6;
					.gray{
						color: #9b999b;
						font-size: .27rem;
					}
				}
		       	.selectregion{
		       		.picker{
		       				font-size:.3rem;
		       		}
		       		text-align: center;
		       		.mint-button{
		       			margin-top:.2rem;
		       			font-size:.2rem;
		       		}
		       	}
				span{
					padding-right:.15rem;
					font-size: .27rem;
				}
				input{
					border:none;
					padding: .1rem;
					color: #9b999b;
					font-size: .27rem;
					width: 4rem;
				}
				em{
					color:#e25553;
				}
				select{
					color: #9b999b;
					font-size: .2rem;
					width: 1rem;
					margin-right: .2rem;
					border: .01rem solid #cdcdcd;
				}
			}
		    .save{
				width:97%;
				margin:0 auto;
				text-align: center;
				background: rgb(11,190,6);
				font-size: .3rem;
				padding: .28rem 0;
				color: #fff;
			}
			.disabled{
				background: #c8c8c8;
			}
		}
	}	 
	
</style>
