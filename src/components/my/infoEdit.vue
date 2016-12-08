<template>
	<div class="info-box" v-if="userinfo">
		<my-nav class="info-head" theme="white" title="个人资料"></my-nav>
		
		<div class="particulars" >
			<avatar-upload></avatar-upload>
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
				<li><span>单位名称:</span><input v-model="userinfo.company" type="text" placeholder="124"/></li>
				
				<li><span>所在地区:</span><i @click="selectorigin" class="gray">{{myorigin}}</i>
					<div v-show="originIsClick" class="selectorigin">
						<mt-picker :show-toolbar="true" :slots="slots" @change="onValuesChange"></mt-picker>
						<mt-button @click="selectorigin" type="primary">确定</mt-button>
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
			<div class="save" @click="save">
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
	import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				sexradio:[1,2],
				show:false,
				origin:null,
				myorigin:null,
				userinfo:null,
				originIsClick:false,
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
				if(this.origin){
					return this.origin[0];
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
			this.loadOrigin();
			
		},
		updated(){
			this.$watch('userinfo', function (newValue, oldValue) {
			  		console.log('inner:', newValue) // 后输出 "inner" 2			  		
			})
			console.log(222);
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
			 	this.$watch('userinfo', function (newValue, oldValue) {
			  		console.log('inner:', newValue) // 后输出 "inner" 2			  		
				})
			},
			radioChange(value){
				this.show = false;
			},
			radioselect(){
				this.show = true;
			},
			save(){
				var url = serverapi.info;
				var body = {action:"infoedit",data:this.userinfo,token:localStorage.token};
				var option = {emulateJSON:true};
				this.$http.post(url,body,option).then((res)=>{
					console.log(res)
				})
			},
			loadUserInfo(){
				var url = serverapi.info;
				var body = {token:localStorage.token};
				var option = {emulateJSON:true};
				this.$http.post(url,body,option).then((res) => {	
					//console.log(res.body);			
					this.userinfo = res.body;
					Indicator.close();
					
				})
			},
			selectorigin(){
				this.originIsClick = !this.originIsClick;
			},
			loadOrigin(){
				var url = serverapi.origin;
				this.$http.get(url).then((res)=>{
					//console.log(res.body);
					this.origin = res.body;
					//console.log(this.slots);
					this.slots[0].values = res.body[0];
					//console.log(this.origin);
					this.slots[2].values = res.body['0_0'];
					this.slots[4].values = res.body['0_0_0'];
					//this.onValuesChange(Picker,values);
				})
			},
			onValuesChange(picker, values) {
				var index = [0,0];
				index[0] = this.origin[0].indexOf(values[0]);
				index[1] = this.origin['0_'+index[0]].indexOf( values[1] );	
				picker.setSlotValues(1,this.origin['0_' + index[0] ]);				
				picker.setSlotValues(2,this.origin['0_' + index[0] + '_' + index[1] ]);
				this.myorigin = values[0] + '-' + values[1] + '-' + values[2]; 
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
				li{
					font-size: .3rem;
					padding:.25rem 0;
					border-bottom: 1px solid #e6e6e6;
					.gray{
						color: #9b999b;
						font-size: .27rem;
					}
				}
		       	.selectorigin{
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
				background: #c8c8c8;
				font-size: .3rem;
				padding: .28rem 0;
				color: #fff;
			}
		}
	}	 
	
</style>
