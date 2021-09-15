<template>
	<div>
		<h1 style="text-align: center;" class="kbsmh1">謎2</h1>
		<h1 style="text-align: center; color: #000A47" class="kbsmh1">正解！</h1>
		<article class="story">
			<p></p>
			<p>行先の指定......か。一体これは誰が貼り付けたものなのだろうか。</p>
            <p>というか、最終的にどこにたどり着くのか、それすらもわからない。</p>
            <p>従うのは非常にリスクが高い行動であるが、そもそも外部との通信が切断されているこの状況で内部を調査している時点で、もはや従おうと従わなかろうと変わらない。</p>
            <p>だったら、従ってしまおう。貼ってくれた人の善意を信じて。</p>
            <p></p>
		</article>

		<div class="button" style="text-align: center;">
			<a href="questionindex">謎の選択に戻る</a>
		</div>	
		<div class="button" style="text-align: center;">
			<a v-bind:href="[tassei === '1' ? './good3' : './q3']">次の問題へ</a>
		</div>
		
	</div>
</template>

<script>
export default {
	layout:'kaibutuseimu',
	data(){
		return{
			tassei:String(this.$cookies.get('kaibutuseimu')).charAt(2)
		}
	},
	created(){
		if(String(this.$cookies.get('kaibutuseimu').charAt(1))==='0'){
			this.$router.push({ path: 'q2' });
		}
	}
}
</script>