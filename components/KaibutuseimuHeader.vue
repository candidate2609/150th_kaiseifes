<template>
	<div class="kai_title">
		<div>
			<img src="icon8header.png" alt="ロゴ" />
		</div>
		<h1>解物成務</h1>
	</div>		
</template>

<style>
	body
	{
		margin: 0;
		background-color:#f6f6f6
	}
	.kai_title
	{
		height: 3em;
		background: #bf9547;
		display: flex;
		justify-content: center; 
		
	}
	.kai_title h1
	{
		margin-left: 1em;
		
		margin-top: auto;
		margin-bottom: auto;
		text-align: center;
		color: black;
	}
	.kai_title img
	{
		margin-top: auto; 
		margin-bottom: auto; 
		height: 100%; 
		width: auto; 	
	}
	.button
	{
		margin-top: 0.5em;
		text-align: center;
	}
			
	.button a
	{
        position: relative;
        display: inline-block;
        padding: 0.25em 2em;
        text-decoration: none;
                color: #FFF;
                background: #bf9547;/*背景色*/
                border-bottom: solid 0.2em #8f6e31;/*少し濃い目の色に*/
                border-radius: 0.4em;/*角の丸み*/
                box-shadow: inset 0 0.2em 0 rgba(255,255,255,0.2), 0 0.2em 0.2em rgba(0, 0, 0, 0.19);
                font-weight: bold;
			}

            .button a:active 
			{
                border-bottom: solid 0.2em #cfb177;
                box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.30);
			}
			.story
			{
				margin: auto;
				text-align: center;
				width: 80%;
                padding: 0.5em;
                border-radius: 1em;
                border: dashed #3c2e15;
                box-shadow: 0 0 0 1em #F6F6F6;
				position: relative;
			}
	.story::before 
	{
		background-color: #F6F6F6;
    content: "ストーリー";
    font-weight: bold;
    position: absolute;
                padding: 0 1em;
                left: 1em;
                top: -1em;
  }
</style>