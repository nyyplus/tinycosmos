<template>
  <main class="main">
    <div class="content">
      <div class="title">
        <h1>{{ grade }}英语单词训练</h1>
        <h2>孔灿宇专用</h2>
        <div class="play-control" @click="changePlayMode()">
          <span
            class="icon"
            :class="autoplay ? 'icon-play' : 'icon-pause'"
          ></span>
          <span class="tips-txt">{{ autoplay ? '跟读开启' : '跟读关闭' }}</span>
        </div>
      </div>
      <div class="unit" v-if="units">
        <span
          v-for="(unit, index) in units"
          :key="index"
          @click="changeUnit(unit)"
          class="btn btn-sucess"
          :class="{ 'btn-danger': currentUnit === unit }"
        >第{{ unit }}单元</span
        >
      </div>
      <div class="box">
        <div class="show" v-if="Object.keys(displayWord).length">
          <div class="pron">
            {{ displayWord.pron }}<br/>
            <span class="icon icon-voice" @click="playImmediately"></span>
          </div>
          <div class="english">{{ displayWord | mode(modeType) }}</div>
        </div>
        <div class="choice" v-if="modeType !== 'spell'">
          <span
            v-for="(answer, index) in answers"
            class="answer"
            :key="index"
            :class="answer.en === checked.en ? correct : null"
            @click="handleChoice(answer)"
          >
            {{ answer | modeReverse(modeType) }}
          </span>
        </div>
        <div class="spell" v-if="modeType === 'spell'">
          <input
            type="text"
            maxlength="1"
            v-model="spellValue[index - 1]"
            ref="spellInput"
            @keyup="handleSpell(index - 1, $event)"
            v-for="index in displayWord.en.length"
            :key="index"
          />
        </div>
      </div>
      <div class="mode">
        <span
          @click="changeMode('en-cn')"
          class="btn btn-sucess"
          :class="{ 'btn-danger': modeType === 'en-cn' }"
        >猜中文</span
        >
        <span
          @click="changeMode('cn-en')"
          class="btn btn-sucess"
          :class="{ 'btn-danger': modeType === 'cn-en' }"
        >猜英文</span
        >
        <span
          @click="changeMode('spell')"
          class="btn btn-sucess"
          :class="{ 'btn-danger': modeType === 'spell' }"
        >拼写模式</span
        >
      </div>
      <div class="audio">
        <audio ref="audioIncorrect" src="../assets/sound/incorrect1.wav"></audio>
        <audio ref="audioCorrect" src="../assets/sound/right.wav"></audio>
        <audio ref="audioPron" :src="voiceSrc"></audio>
      </div>
    </div>
  </main>
</template>
<script>
  const GRADE = {
    3: '三年级',
    4: '四年级',
    5: '五年级',
    6: '六年级',
    7: '七年级',
    8: '八年级',
    9: '九年级'
  }
  export default {
    name: 'Home',
    data () {
      return {
        modeType: 'en-cn',
        words: [],
        displayWord: {},
        currentUnit: 1,
        answers: [],
        checked: {},
        correct: {},
        spellValue: [],
        autoplay: false
      }
    },
    computed: {
      units () {
        const wordsHasUnit = this.words.filter(
          // eslint-disable-next-line no-prototype-builtins
          word => word.hasOwnProperty('unit') === true
        )
        if (wordsHasUnit.length) {
          return [...new Set(wordsHasUnit.map(word => word.unit))]
        }
        return []
      },
      grade () {
        return GRADE[parseInt(this.$route.params.gradeId)]
      },
      unitWords () {
        if (!this.units.length) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.words.sort(() => Math.random() - 0.5)
        } else {
          return this.words
            .filter(word => word.unit === this.currentUnit)
            .sort(() => Math.random() - 0.5)
        }
      },
      voiceSrc () {
        if (Object.keys(this.displayWord).length) {
          const search = this.displayWord.en
            .split(' ')
            .join('+')
            .toLowerCase()
          return `http://dict.youdao.com/dictvoice?audio=${search}&type=1`
        }
        return ''
      }
    },
    filters: {
      mode: function (value, type) {
        if (type === 'en-cn') {
          return value.en
        }
        if (type === 'cn-en') {
          return value.cn
        }
        if (type === 'spell') {
          return value.cn
        }
      },
      modeReverse: function (value, type) {
        if (type === 'en-cn') {
          return value.cn
        }
        if (type === 'cn-en') {
          return value.en
        }
      }
    },
    methods: {
      clear () {
        this.spellValue = []
        this.checked = {}
      },
      changeMode (mode) {
        this.modeType = mode
        this.clear()
        if (this.modeType === 'spell') {
          this.$nextTick(() => {
            this.$refs.spellInput[0].focus()
          })
        } else {
          this.answers = this.getRandomElements(this.words, 3)
        }
        this.triggerPlay()
      },
      changeUnit (unit) {
        this.clear()
        this.currentUnit = unit
        this.displayWord = this.unitWords[0]
        this.answers = this.getRandomElements(this.unitWords, 3)
        if (this.modeType === 'spell') {
          this.$nextTick(() => {
            this.$refs.spellInput[0].focus()
          })
        }
        this.triggerPlay()
      },
      changePlayMode () {
        this.autoplay = !this.autoplay
        this.triggerPlay()
      },
      next () {
        const index = this.unitWords.indexOf(this.displayWord)
        this.displayWord =
          index === this.unitWords.length - 1
            ? this.unitWords[0]
            : this.unitWords[index + 1]
        if (this.modeType !== 'spell') {
          this.answers = this.getRandomElements(this.words, 3)
          this.checked = {}
        } else {
          this.spellValue = []
          this.$nextTick(() => {
            this.$refs.spellInput[0].focus()
          })
        }
        this.triggerPlay()
      },
      getRandomElements (arr, count) {
        const index = arr.findIndex(word => word === this.displayWord)
        const words = [...arr]
        words.splice(index, 1)
        const result = []
        for (let i = 0; i < count; i++) {
          const index = Math.floor(Math.random() * (words.length - i))
          result.push(words[index])
          words[index] = words[words.length - i - 1]
        }
        result.push(this.displayWord)
        return result.sort(() => Math.random() - 0.5)
      },
      handleChoice (answer) {
        this.checked = answer
        this.correct =
          answer.en === this.displayWord.en ? { right: true } : { wrong: true }
        // eslint-disable-next-line no-prototype-builtins
        if (this.correct.hasOwnProperty('wrong')) {
          this.$refs.audioIncorrect.currentTime = 0
          this.$refs.audioIncorrect.play()
        } else {
          // this.$refs.audioCorrect.currentTime = 0
          this.$refs.audioCorrect.play()
        }
        // eslint-disable-next-line no-prototype-builtins
        if (this.correct.hasOwnProperty('right')) {
          setTimeout(() => this.next(), 1000)
        }
      },
      handleSpell (index, event) {
        console.log(event)
        if (event.code === 'Backspace' && index !== 0) {
          this.$refs.spellInput[index - 1].focus()
        }
        if (
          index < this.displayWord.en.length - 1 &&
          /Key[A-Z]/.test(event.code)
        ) {
          this.$refs.spellInput[index + 1].focus()
        }
        if (
          this.spellValue.join('').toLowerCase() ===
          this.displayWord.en.toLowerCase()
        ) {
          this.$refs.audioCorrect.play()
          setTimeout(() => {
            this.spellValue = []
            this.next()
          }, 1000)
        }
      },
      playImmediately () {
        this.$refs.audioPron.currentTime = 0
        this.$refs.audioPron.play()
      },
      triggerPlay () {
        if (this.autoplay) {
          setTimeout(() => {
            this.$refs.audioPron.currentTime = 0
            this.$refs.audioPron.play()
          }, 0)
        }
      }
    },
    async created () {
      const param = this.$route.params.gradeId
      let url
      if (!isNaN(param)) {
        url = `/api/words/g${parseInt(param)}`
      } else {
        url = `/api/words/${param}`
      }
      const words = await this.$axios.get(url)
      this.words = words.data.data
      this.displayWord = this.words[0]
      this.answers = this.getRandomElements(this.unitWords, 3)
    }
  }
</script>
<style lang="scss" scoped>
  @import "~styles/color";

  .main {
    background: $gray;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }

  .content {
    background: #fff;
    padding: 60px 100px;
    border-radius: 50px;

    .title {
      color: $dark;
      text-align: center;
      padding-bottom: 60px;
      position: relative;

      h1 {
        font-size: 48px;
      }

      h2 {
        font-size: 24px;
      }

      .play-control {
        position: absolute;
        right: 20px;
        top: 24px;
        color: $dark-sss;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: $dark-s;
          transition: 0.2s;
        }

        .icon-font {
          font-size: 24px;
        }

        .tips-txt {
          font-size: 14px;
        }
      }
    }

    .unit {
      height: 28px;
      text-align: center;
      margin-bottom: 80px;

      .btn {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }

    .box {
      min-width: 900px;

      .show {
        text-align: center;
        margin-bottom: 30px;

        .english {
          height: 140px;
          font-size: 72px;
          margin-bottom: 30px;
          color: #596690;
        }

        .pron {
          font-size: 24px;
          color: #a0a0a0;
          margin-bottom: 30px;
          font-family: "Lucida Sans Unicode", Arial, serif;

          .icon-voice {
            cursor: pointer;
            font-size: 24px;
            color: #aadaa8;
            transition: 0.2s;

            &:hover {
              color: #4a8b47;
            }
          }
        }
      }

      .choice {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .answer {
          display: inline-block;
          width: 200px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          letter-spacing: 1px;
          background-color: #8caace;
          color: #fff;
          cursor: pointer;
          border-radius: 30px;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0px 9px 0px rgb(89, 103, 142);
        }

        .wrong {
          background-color: #f1585b;
          color: #fefcef;
          position: relative;
        }

        .right {
          background-color: #3ecc45;
          color: #fefcef;
          position: relative;
        }
      }

      .spell {
        position: relative;
        margin: 0 auto;
        text-align: center;

        input {
          background: #596690;
          box-shadow: inset 5px 5px 10px 2px #454e6b;
          width: 60px;
          height: 60px;
          font-size: 24px;
          padding: 3px;
          color: #fff;
          text-align: center;
          text-transform: Capitalize;

          &:not(:last-child) {
            margin-right: 12px;
          }
        }

        .btn:not(:last-child) {
          margin-right: 12px;
        }
      }
    }

    .mode {
      font-size: 14px;
      height: 28px;
      text-align: center;
      margin-top: 120px;

      .btn:nth-child(2) {
        margin: 0 12px;
      }
    }
  }
</style>
