<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <span class="card-icon material-icons-outlined">play_circle</span>
      <div class="card-info">
        <p class="card-info-title">
          <a :href="item.url" target="_blank">
            {{ item.name }}
          </a>
        </p>
        <p class="card-info-date">{{ item.date_str }}</p>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 16px;
  column-gap: 16px;
}

li {
  font-weight: 800;
  min-height: 120px;
  padding: 15px;
  border: 1px solid #999999;
  display: flex;
  flex-direction: row;
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

.card-icon {
  margin-top: 0.05em;
  margin-right: 0.5em;
  font-size: 1.5em;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-info-title {
  margin-bottom: 1em;
}

.card-info-date {
  color: #707070;
}

.material-icons-outlined {
  vertical-align: -0.21em;
}
</style>