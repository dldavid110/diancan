<template>
	<div class="wrapper">
	<Header/>
		 <div class="main">
			<FoodItems/>
		</div>

	</div>
		
</template>

<script>
	import Header from '@/components/Header'
	import FoodItems from '@/components/FoodItems'
 
	export default{
		name: 'Login',
		data(){
			return{
				
			}
		},
		components:{
			Header,
			FoodItems
		}
		}
</script>

<style scoped>
	.wrapper{
		width:100%;
		height:100%;
		
	}
	.main{
		width: 100%;
		height:calc(100% - 60px);
		border:solid 1px green;
		 
		position:fixed;
		top:30px;
		left:0px;
		overflow-y: scroll;
	}
	.login{
		width:calc(100% - 100px);

		height: 200px;
		position: absolute;
		left:50px;
		top:calc(50% - 100px);
		
	}
	.main input{
		width:100%;
		width:100%;
		height:32px;
		margin-top:5px;
		border: solid 1px #eee;
		border-radius: 3px;
		
	}
	.main input.txt{
		width:calc(100% - 5px);
		height:30px;
		margin-top:5px;
		padding-left: 3px;
	}
	.btnlogin{
		background-color:#3CB371;
		color:#fff;
		cursor:pointer;
	}
</style>
