<template>
	<div>
		<h1 style="text-align: center;">謎3</h1>
		<h1 style="text-align: center; color: #000A47">正解！</h1>
		<article class="story">
			<p></p>
			<p>また行先の指定だ。なんで色々な場所を経由させるのだろうか。こんなことをせずに直接目的地まで連れて行ってくれた方が良いのだが……。</p>
            <p>そう考えた時、突然頭痛が自分を襲う。痛みによって目をつむると、そこに誰かの視点？からの映像が流れていく。</p>
            <p>自分がいるのは空、だろうか。地上に衝撃波を出すことで、住民たちを混乱に貶めている、そんな情景。よく見ると、この視点、カイセイの近くだ。それがわかったところで、頭に流れてきた映像は終わる。</p>
            <p>今、一体何が起こったんだろう？少なくとも、現在の技術でできるようなことじゃない。</p>
            <p>現在カイセイの周辺はエングラードの影響で閉鎖されているため、少し前の映像であることはわかる。考えられるのは......エングラードの記憶ということだろうか。いや、エングラード以外に、カイセイ周辺を攻撃した存在はいないから、ほぼ確定だろう。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a :href="[tassei === '1' ? './good4' : './q4']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(3)
		}
	},
}
</script>