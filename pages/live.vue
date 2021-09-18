<template>
  <div style="">
    <landing-title
      title_ja="ライブ配信会場"
      title_en="Live Streaming"
      background_color="#ffffff"
      style="margin-top: 5em; border-top: 1vw solid #2a7348"
    />
    <div style="position: relative">
      <img
        src="/live/live.png"
        alt=""
        style="min-width: 100%; min-height: 250px; max-width: 80%"
      />
      <div
        v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        class="hero-description"
        style="background-color: #ffffff"
      >
        <h3>開成祭の熱狂を画面越しにもお届け。</h3>
        <p>おうちで楽しむ方へ、臨場感あふれる映像とともに送る。</p>
      </div>
    </div>
    <div style="margin-top: 4rem">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="11" lg="8" class="container-m mx-auto align-items-center">
          <div
            style="
              display: inline-block;
              margin-left: 1rem;
              margin-right: 1rem;
              margin-bottom: 2rem;
              box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
              padding: 1rem;
              width: 95%;
            "
          >
            <p
              style="
                line-height: 1.5em;
                display: inline-block;
                text-align: left;
              "
            >
              <span
                style="
                  border-bottom: 2px solid #000000;
                  font-size: 2rem;
                  line-height: 1.5em;
                  margin-bottom: 1rem;
                "
                >配信に関するお知らせ</span
              ><br /><br />
            </p>

            <p v-html="item_status"></p>
          </div>
          <div style="display: flex; justify-content: center">
            <v-tabs
              v-model="tab0"
              class="tabbar"
              style="border-bottom: 1px solid #f0f0f3"
            >
              <v-tab v-model="tab0" v-for="item in tabs0" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </div>

          <v-tabs-items v-model="tab0">
            <v-tab-item>
              <v-row>
                <v-spacer />
                <v-col cols="11" md="10" lg="12" class="mx-auto">
                  <p
                    v-if="onair.length === 0 && soon.length === 0"
                    style="text-align: center"
                  >
                    該当する配信がありません
                  </p>
                  <div
                    v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
                    class="streaming"
                  >
                    <div
                      v-for="item in soon"
                      :key="item"
                      class="col-md-6 landflame order-md-2"
                    >
                      <h4>{{ item.name }}</h4>
                      <span>まもなく配信開始</span>
                      <p
                        id="timezone"
                        v-text="get_timezone(item.start, item.end)"
                      ></p>
                      <div class="video">
                        <iframe
                          width="560"
                          height="315"
                          :src="get_embed(item.url)"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <div
                      v-for="item in onair"
                      :key="item"
                      class="col-md-6 landflame order-md-2"
                    >
                      <h4>{{ item.name }}</h4>
                      <p
                        id="timezone"
                        v-text="get_timezone(item.start, item.end)"
                      ></p>
                      <div class="video">
                        <iframe
                          width="560"
                          height="315"
                          :src="get_embed(item.url)"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
                    <div
                      v-for="item in soon"
                      :key="item"
                      style="margin-top: 2rem"
                    >
                      <h4>{{ item.name }}</h4>
                      <span>まもなく配信開始</span>
                      <p
                        id="timezone"
                        v-text="get_timezone(item.start, item.end)"
                      ></p>
                      <div class="video">
                        <iframe
                          width="560"
                          min-height="315"
                          :src="get_embed(item.url)"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <div
                      v-for="item in onair"
                      :key="item"
                      style="margin-top: 2rem"
                    >
                      <h4>{{ item.name }}</h4>
                      <p
                        id="timezone"
                        v-text="get_timezone(item.start, item.end)"
                      ></p>
                      <div class="video">
                        <iframe
                          width="560"
                          min-height="315"
                          :src="get_embed(item.url)"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-spacer />
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-tabs
                v-model="tab1"
                class="tabbar"
                style="border-bottom: 1px solid #f0f0f3"
              >
                <v-tab v-model="tab1" v-for="item in tabs1" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab1">
                <v-tab-item v-for="items in scheduled" :key="items">
                  <v-row>
                    <v-spacer />
                    <v-col cols="11" md="10" lg="12" class="mx-auto">
                      <p v-if="items.length === 0" style="text-align: center">
                        該当する配信がありません
                      </p>
                      <div
                        v-if="
                          !($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)
                        "
                        class="streaming"
                      >
                        <div
                          v-for="item in items"
                          :key="item"
                          class="col-md-6 landflame order-md-2"
                        >
                          <h4>{{ item.name }}</h4>
                          <p
                            id="timezone"
                            v-text="get_timezone(item.start, item.end)"
                          ></p>
                          <div class="video">
                            <iframe
                              width="560"
                              height="315"
                              :src="get_embed(item.url)"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                      >
                        <div
                          v-for="item in items"
                          :key="item"
                          style="margin-top: 2rem"
                        >
                          <h4>{{ item.name }}</h4>
                          <p
                            id="timezone"
                            v-text="get_timezone(item.start, item.end)"
                          ></p>
                          <div class="video">
                            <iframe
                              width="560"
                              min-height="315"
                              :src="get_embed(item.url)"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-spacer />
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-tab-item>
            <v-tab-item>
              <v-tabs
                v-model="tab1"
                class="tabbar"
                style="border-bottom: 1px solid #f0f0f3"
              >
                <v-tab v-model="tab1" v-for="item in tabs1" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab1">
                <v-tab-item v-for="items in finished" :key="items">
                  <v-row>
                    <v-spacer />
                    <v-col cols="11" md="10" lg="12" class="mx-auto">
                      <p v-if="items.length === 0" style="text-align: center">
                        該当する配信がありません
                      </p>
                      <div
                        v-if="
                          !($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)
                        "
                        class="streaming"
                      >
                        <div
                          v-for="item in items"
                          :key="item"
                          class="col-md-6 landflame order-md-2"
                        >
                          <h4>{{ item.name }}</h4>
                          <p
                            id="timezone"
                            v-text="get_timezone(item.start, item.end)"
                          ></p>{{ item.start }}
                          <div class="video">
                            <iframe
                              width="560"
                              height="315"
                              :src="get_embed(item.url)"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                      >
                        <div
                          v-for="item in items"
                          :key="item"
                          style="margin-top: 2rem"
                        >
                          <h4>{{ item.name }}</h4>
                          <p
                            id="timezone"
                            v-text="get_timezone(item.start, item.end)"
                          ></p>
                          <div class="video">
                            <iframe
                              width="560"
                              min-height="315"
                              :src="get_embed(item.url)"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-spacer />
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-tab-item>
          </v-tabs-items>
          <div class="timetable" style="margin-top: 4rem">
            <h2 id="timetable">タイムテーブル</h2>
            <v-data-table
              :headers="header"
              :items="output"
              hide-default-footer
              :items-per-page="100"
              :sort-by="['start']"
              :sort-desc="[false]"
              class="elevation-1"
            >
              <template v-slot:[`item.name`]="{ item }">
                <a :href="get_embed(item.url)" id="table_href"> {{ item.name }}</a>
              </template>
            </v-data-table>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // APIからデータを取得
    const listUrl =
      'https://kaiseifes-150th-backend.herokuapp.com/api/live_sandans'
    const list = await $axios.$get(listUrl)
    const now = new Date()
    const scheduled1 = []
    const scheduled2 = []
    const onair = []
    // まもなく配信 実装 諦め
    const soon = []
    const finished1 = []
    const finished2 = []
    for (let i = 0; i < list.length; i++) {
      list[i].url = list[i].url.replace('youtu.be', 'www.youtube.com/embed')
      if (new Date(list[i].start) > now) {
        if (new Date(list[i].start) < new Date('2021-09-19T00:00:00+09:00')) {
          scheduled1.push(list[i])
        } else {
          scheduled2.push(list[i])
        }
      } else if (
        new Date(list[i].start) <= now &&
        new Date(list[i].end) > now
      ) {
        if (
          now.setMinutes(now.getMinutes() + 5) >= new Date(list[i].start) &&
          new Date(list[i].start) >= now
        ) {
          soon.push(list[i])
        } else {
          onair.push(list[i])
        }
      } else if (new Date(list[i].end) <= now) {
        if (new Date(list[i].start) < new Date('2021-09-19T00:00:00+09:00')) {
          finished1.push(list[i])
        } else {
          finished2.push(list[i])
        }
      }
    }
    // ソート
    scheduled1.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    scheduled2.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    onair.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    finished1.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    finished2.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    const output = list
    for (let i = 0; i < list.length; i++) {
      output[i].start =
        output[i].start.slice(5, 7) +
        '/' +
        output[i].start.slice(8, 10) +
        ' ' +
        output[i].start.slice(11, 16)
      output[i].end =
        output[i].end.slice(5, 7) +
        '/' +
        output[i].end.slice(8, 10) +
        ' ' +
        output[i].end.slice(11, 16)
      if (output[i].start.slice(3, 5) === '18') {
        output[i].day = "Day1"
      } else {
        output[i].day = "Day2"
      }
      output[i].url = output[i].url.replace('www.youtube.com/embed', 'youtu.be')
    }
    output.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1
      }
      if (a[1] < b[1]) {
        return -1
      }
      return 0
    })
    return {
      onair,
      soon,
      scheduled: [scheduled1, scheduled2],
      finished: [finished1, finished2],
      now,
      list,
      output,
    }
  },
  data() {
    return {
      item_status:
        '現在、配信はすべて正常です。配信タイムテーブルは<a href="#timetable">こちら</a>をご覧ください。',
      tabs0: ['配信中', '配信予定', '配信終了'],
      tabs1: ['1日目', '2日目'],
      tab0: null,
      tab1: null,
      header: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: '',
        },
        { text: 'タイトル', value: 'name' },
        { text: 'Day1/Day2', value: 'day' },
        { text: '開始時間', value: 'start' },
        { text: '終了時間', value: 'end' },
      ],
    }
  },
  methods: {
    get_timezone(start, end) {
      const date = start.slice(1, 5)
      const starttime = start.slice(6, 11)
      const endtime = end.slice(6, 11)
      let daynum = 0
      if (date === '9/18') {
        daynum = 1
      } else {
        daynum = 2
      }
      const text = date + ' (Day' + daynum + ') ' + starttime + ' ~ ' + endtime 
      return text
    },
    get_embed(url) {
      return url.replace('youtu.be','www.youtube.com/embed')
    }
},
}
</script>

<style>
.tabbar {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.streaming {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
}
.timetable table {
  margin: 0 auto;
  text-align: center;
}
.video {
  position: relative;
  width: 100%;
}
.video::before {
  content: '';
  display: block;
  padding-top: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h2 {
  padding-left: 1rem;
  border-left: 0.5rem solid #2a7348;
  margin-bottom: 20px;
}
h4 {
  padding-left: 1rem;
  border-left: 0.5rem solid #2a7348;
  margin-bottom: 20px;
}
#timezone {
  padding-left: 1rem;
  font-size: 14pt;
}
#table_href {
  color: #2a7348;
}
.hero-description {
  position: absolute;
  bottom: 1rem;
  right: 0;
  padding: 1rem;
  border-top: 0.5vw solid #2a7348;
}
.hero-description h3 {
  letter-spacing: 3px;
}
.hero-description p {
  letter-spacing: 1px;
}
</style>
