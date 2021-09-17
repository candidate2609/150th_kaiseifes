<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <div>
        <p class="card-title">{{ item.name }}</p>
        <!-- <p class="card-group">{{ item.group }}</p> -->
      </div>
      <div class="card-info">
        <p>
          <span class="material-icons-outlined">schedule</span>
          {{ item.date_str }}
        </p>
        <p>
          <a :href="item.url">
            <span class="material-icons-outlined">play_circle</span>
            Youtube で観る
          </a>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

li {
  width: 250px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #999999;
  font-weight: 800;
}

p {
  margin: 0px;
}

p span {
  height: 0.6em;
}

a {
  color: inherit;
}

.card-title {
  margin-bottom: 1em;
}

.card-info {
  font-size: 0.8em;
}

.material-icons-outlined {
  font-size: 1.2em;
  vertical-align: -4px;
}
</style>