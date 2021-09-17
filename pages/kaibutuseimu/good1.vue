<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎1</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			<p></p>
			<p>け、剣？しかもナイフのような短剣ではなく、立派な長剣である。一体以前の部隊は長剣を使って何をしていたのだろうか？</p>
            <p>「け、剣......ですか？」</p>
            <p>オペレーターも困惑している様子から、これは想定された状況ではないことが分かる。幸先が悪い。このまま進んでしまって良いのだろうか。私はオペレーターに確認する。</p>
            <p>「......。」</p>
            <p>応答がない。何度も声を掛けてみるが、それでもだ。</p>
            <p>戻った方が良い。そうも考えたが、私は違う見方をする。今までの作戦で、オペレーターとの無線が切れたということはなかったはず。この全く新しい状況であれば、成功したことのないエングラードの作戦を成功させられるかもしれない。</p>
            <p>私は近くの階段を下り、作戦を続行することにした。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a v-bind:href="[tassei === '1' ? './good2' : './q2']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(1)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu')).charAt(0)==='0'){
			this.$router.push({ path: 'q1' });
		}
	}
}
</script>