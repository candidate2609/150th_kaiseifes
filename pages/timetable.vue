<template>
  <div>
    <embed
      v-if="!$vuetify.breakpoint.lg"
      src="/time_table.pdf"
      alt=""
      style="width: 100vw; height: 100vh"
    />
    <embed
      v-if="$vuetify.breakpoint.lg"
      src="/time_table_lg.pdf"
      alt=""
      style="width: 100vw; height: 100vh"
    />
  </div>
</template>