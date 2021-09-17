<template>
	<div>
		<div class="button"><a href="./opening">オープニング</a></div>

		<div v-for="n in 10" :key="n" class="button">
			<a v-bind:href="[tasseis[n] === '1' ? 'good'+n : 'q'+n]">{{'謎'+n}}</a>
		</div>

		<div class="button" style="margin-top: 1em; "><a href="./" style="color: #FFE8BB; background: #A7C9FF;">ホームへ戻る</a></div>
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tasseis:[]
		}
	},
  created() {
    const tasseis=[]
    const kaibutuseimu = this.$cookies.get('kaibutuseimu')
    if(String(kaibutuseimu).length === 12){
      for(let i=0;i<12;i++)
      {
        tasseis[i]=String(kaibutuseimu).charAt(i)
      }
    }
  },
}
</script> 