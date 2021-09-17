<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎9</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			  <p></p>
			<p>「エングラードではないと思われる生体反応が確認されました。恐らくエングラードはその対象と戦闘していると思われます。」</p>
            <p>その時、紫色の霧が私を包む。この霧、毒性があるのだろうか。段々体調が悪くなってきたように感じる。おそらくその生体反応が、記憶にもあったあの黒い蛾だろう。この霧を出しているのが蛾なら、本気で人間を滅ぼすつもりなのだというのがわかる。</p>
            <p>カイセイの周辺はエングラードの「襲撃」のおかげで民間人が避難しているため誰もいないが、放っておけば、すぐに影響が出てしまう。そして、私自身の体のこともある。もう時間は残されていない。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a :href="[tassei === '1' ? './good10' : './q10']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(9)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu')).charAt(8)==='0'){
			this.$router.push({ path: 'q9' });
		}
	}
}
</script>