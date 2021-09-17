<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎4</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			  <p></p>
			<p>......。</p>
            <p>今度は何も起こらないようだ。</p>
            <p>さっきとはうってかわって、随分と薄暗い場所だ。恐らく高校校舎を離れ、別の校舎にやってきたのだろう。高校校舎では予想外のことが起きすぎて疲れてしまっていたので、少し落ち着きたい。</p>
            <p>今までに起きたことをまとめると、今持っているこの剣、オペレーターとの通信途絶、そして、謎の映像。この全てが、私たちではない誰かによって仕組まれているものなのではないかと思えてくる。なら、その「誰か」の目的はなんなのだろうか。それを探っていくためにも、私はこの探検を辞めることはできないだろう。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a :href="[tassei === '1' ? './good5' : './q5']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(4)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu').charAt(3))==='0'){
			this.$router.push({ path: 'q4' });
		}
	}
}
</script>