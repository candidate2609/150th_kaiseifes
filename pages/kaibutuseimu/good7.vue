<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎7</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			  <p></p>
			<p>今回の映像は、少し様子がおかしかった。</p>
            <p>見たこともない場所で、巨大な蛾のような存在と話している視点。何を言っているのか全くわからないが、内容だけは理解できる......。</p>
            <p>「やはり人間は滅ぼすべきだ！」</p>
            <p>そう言うのは、目の前の黒い蛾。</p>
            <p>「いや、まだ人間を信じることはできる！」</p>
            <p>それに対するエングラードの言葉は、かなり意外なものだった。あのドラゴン、人間を庇ってる？</p>
            <p>「うるさい！もうお前の『信じる』という言葉には飽き飽きだ！俺は人間を滅ぼすぞ！」</p>
            <p>そこで、今回の映像は終わる。あの黒い蛾はなんだ？エングラードは敵なのか？味方なのか？</p>
            <p>解決しない疑問が積まれていく。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a :href="[tassei === '1' ? './good8' : './q8']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(7)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu')).charAt(6)==='0'){
			this.$router.push({ path: 'q7' });
		}
	}
}
</script>