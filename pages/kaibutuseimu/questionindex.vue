<template>
	<div>
		<div class="button"><a href="./opening">オープニング</a></div>
		
		<div v-for="n in 10" :key="n" class="button">
			<a v-bind:href="[tasseis.charAt(n-1) === '1' ? 'good'+n : 'q'+n ]">{{'謎'+n}}</a>
		</div>
		
		<div class="button" style="margin-top: 1em; "><a href="./" style="color: #FFE8BB; background: #bf9547;">ホームへ戻る</a></div>
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tasseis:String(this.$cookies.get('kaibutuseimu'))
		}
	},
}
</script>