<template>
	<div>
		<h1 style="text-align: center;">謎5</h1>
		<h1 style="text-align: center; color: #000A47">正解！</h1>
		<article class="story">
			  <p></p>
			<p>うっ......まただ。また、頭の中に映像が流れてくる。今度は......建物の中だろうか。いや、この場所、見覚えがある。ここはカイセイの内部だ。やっているのは、壁に問題を浮かび上がらせる作業。......そして、私が持っているこの剣を箱にしまう様子。</p>
            <p>映像はたったのこれだけなわけだが、この映像だけで、色んな情報があふれてしまっている。</p>
            <p>この視点がエングラードだったとしたら、まず、問題を出現させ、箱にものをしまえる程の知能を持っていることからが驚きだ。さらにだ。私が解いている問題たちはエングラードが用意したものであるということ。もしかしたら本当に、罠にかけられているのかもしれない。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a v-bind:href="[tassei === '1' ? './good6' : './q6']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(5)
		}
	},
}
</script>