<template>
	<ul>
		<li>
			<p class="left">123</p><p class="center"></p><p class="right"></p>
		</li>
		<li>
			<p class="left">123</p><p class="center"></p><p class="right"></p>
		</li>
		<li>
			<p class="left">123</p><p class="center"></p><p class="right"></p>
		</li>
	</ul>
	
	
</template>

<script>
	export default{
		
		name:'FoodItems',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	ul{
		width:100%;
		height:100%;
	}
	ul li{
		width:100%;
		height:120px;
		border-bottom:solid 1px #eee;
		display:flex;
	}
	 
	ul li p.left{
		flex:5;
		background-color: red;
		
	}
	ul li p.center{
		background-color: green;
		
		flex:20;
	}
	ul li p.right{
		background-color: blue;
		flex:1;
		
	}
	
</style>
