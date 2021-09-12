<!--<?php
if(!isset($_COOKIE['PHPSESSID']))
{
	$csvfile = fopen('./log.csv' , 'a');
    $date = array(date("Y/m/d/H:i:s"));
    fputcsv($csvfile , $date);
    fclose($csvfile);
}

session_start();
$tassei = array(FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);
if(!isset($_SESSION['seikai']))
{
	$_SESSION['seikai'] = $tassei;
}
?>-->
<template>
  <div>
    <div style="text-align: center" class="button">
      <a href="./questionindex" style="padding: 2em 2em">問題へ</a>
    </div>

    <div style="text-align: center" class="button">
      <a href="rule" style="padding: 2em 2em">ルール説明</a>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$cookies.get('kaibutuseimu'))
      this.$cookies.set('kaibutuseimu', '000000000000', {
        maxAge: 60 * 60 * 24 * 7,
      })
  },
  layout: 'kaibutuseimu',
}
</script>