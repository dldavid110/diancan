<template>
	<div class="wrapper">
	<Header/>
		 <div class="main">
		<p><input type="text" placeholder="用户名" /></p>
		<p><input type="password" placeholder="密码" /></p>
		<p><input type="button" value="登录" /></p>
		</div>
<Footer/>
	</div>
		
</template>

<script>
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
 
	export default{
		name: 'Login',
		data(){
			return{
				
			}
		},
		components:{
			Header,
			Footer
		}
		}
</script>

<style scoped>
	.wrapper{
		width:100%;
		height:100%;
		border:solid 1px red;
	}
	.main{
		width: 100%;
		height:calc(100% - 70px);
		border:solid 1px green;
		background-color: red;
	}
</style>
