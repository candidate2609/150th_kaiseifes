<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎8</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			  <p></p>
			<p>さあ、映像だ。一体エングラードの何を映す？</p>
            <p>今回は......非常に暗い場所、祠の中だろうか？に剣が突き刺さっている。私が持っているものだろう。相変わらず読めない文字だが、この記憶越しであれば楽々読むことができる。祠の壁にかいてあるのは、この剣に関する条文のようなもの。</p>
            <p>「観測者が地上に干渉する場合、合議によって決定する義務を持つ。一方の観測者がもう一方の観測者を不当に攻撃し、強引に地上への干渉を決定した場合、知恵の剣を持ち出し、地上の生物の協力をもって覚醒させ、不当な行動を取った観測者に対して制裁を加えることができる。」</p>
            <p>そして、この剣を引き抜いて、地上に向かっていく。</p>
            <p>そこで、映像は終わった。</p>
            <p>簡単に言うなら、暴走した「観測者」を止めるためのものがこの剣らしい。だが、おそらくまだ覚醒はしていない。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a v-bind:href="[tassei === '1' ? './good9' : './q9']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(8)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu')).charAt(7)==='0'){
			this.$router.push({ path: 'q8' });
		}
	}
}
</script>