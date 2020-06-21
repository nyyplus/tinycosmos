<template>
  <main class="main">
    <div class="content">
      <div class="section">
        <div class="section-title">
          小学英语
        </div>
        <div class="section-body">
          <a class="box">
            <div class="box-header">
              <span>单元单词</span>
            </div>
            <div class="box-body">
              <div class="course-name">三年级英语单词速记</div>
              <div class="course-info">
                <span class="summary">71个单词</span>
                <router-link :to="{ name: 'English', params: { gradeId: 3 }}" class="link">进入学习
                </router-link>
              </div>
            </div>
          </a>
          <a class="box">
            <div class="box-header">
              <span>单元单词</span>
            </div>
            <div class="box-body">
              <div class="course-name">四年级英语单词速记</div>
              <div class="course-info">
                <span class="summary">71个单词</span>
                <router-link :to="{ name: 'English', params: { gradeId: 4 }}" class="link">进入学习
                </router-link>
              </div>
            </div>
          </a>
          <a class="box">
            <div class="box-header">
              <span>疑问词</span>
            </div>
            <div class="box-body">
              <div class="course-name">疑问词速记训练</div>
              <div class="course-info">
                <span class="summary">71个单词</span>
                <router-link :to="{ name: 'English', params: { gradeId: 'interrogative' }}" class="link">进入学习
                </router-link>
              </div>
            </div>
          </a>
          <a class="box">
            <div class="box-header">
              <span>代词</span>
            </div>
            <div class="box-body">
              <div class="course-name">代词速记训练</div>
              <div class="course-info">
                <span class="summary">71个单词</span>
                <router-link :to="{ name: 'English', params: { gradeId: 'interrogative' }}" class="link">进入学习
                </router-link>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div style="width:300px;height: 300px;margin: 0 auto;">
      <v-select :items="sizeList"></v-select>
    </div>
  </main>
</template>
<script>
import VSelect from '@/components/v-select'

export default {
  name: 'Home',
  components: {
    VSelect
  },
  data () {
    return {
      sizeList: [
        { value: '12号', desc: '内径24mm' },
        { value: '13号', desc: '内径24mm' },
        { value: '14号', desc: '内径24mm' },
        { value: '15号', desc: '内径24mm' },
        { value: '16号', desc: '内径24mm' },
        { value: '17号', desc: '内径24mm' },
        { value: '18号', desc: '内径24mm' },
        { value: '19号', desc: '内径24mm' }
      ]
    }
  },
  methods: {
    handleChecked (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~styles/color";

  .main {
    background: #f5f5f5;
  }

  .content {
    overflow: hidden;
  }

  .section {
    width: 1200px;
    margin: 48px auto;

    .section-title {
      display: inline-block;
      font-size: 28px;
      color: #2d2d2e;
      line-height: 40px;
      font-weight: 600;
      border-bottom: 1px #f5f5f5 solid;
    }

    .section-body {
      margin-left: -11px;
      margin-right: -11px;

      .box {
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;
        width: 386px;
        height: 370px;
        margin: 10.5px;
        border-radius: 2px;
        position: relative;
        transition: all .2s linear;
        padding: 30px;
        z-index: 0;

        &:hover {
          transform: translate3d(0, -4px, 0);

          &:before {
            top: -4px;
            width: 414px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAAGLCAYAAACFqJaRAAAWy0lEQVR4nO3dy48sV57Q8RMnIuv62u62ezMz3X/BTC+Q2CIQO8TAlgUbdsj/Bv/HIFZsWLDlLRBII7ZILMD+A+jpGc3g9rR961ZGxDnoRGbUzcpHVdb149e4Ph/JupWZUc9FfH0eEdl99tln6XvQfR9fFIBw9bv+AYaTZ55HcABelkvn/fcO1PuE6NIPAcDLddiGZ0XpOSG6/ya//Bt/86oY/farL0UL4EfgJ5/87Kq4/K//+T/qQS+u+pxrQnQxQD/95NPl8V9/9Zvu9evXJ9F5/fr1yRcD4Mfh9va2/vSTT+u+A/WwE88J0lMhOhuhFqB/8o//0R8Pw/AnKaWfn3wWAC/Jn03T9Nm//Ff/+t8dBmkfo7UlF2OUT545E6FDLULj9i6LEAB7P29NaG1YZ8rOuPT8xRA9+ISD0VBu3+j1Rx9lEQLgwM9bG1oj1rac2U9wNkbnQnT2wLbxoK0DtW/0wQev+5MDAHjRWhtaI1orHtmsdvL8uRCdaF/wJ5/8rNvcvOr6fuhKKd/2+iMAfmRaG1ojWitaMx6J0QPHITr3SQ+eK2Xuh2EwIgLggdaG1oijp5/sylMjogcHz9OYc+6NiAA40drQGtFacfTauRjdy9ceuB47z1NuTl4F4EVrbWiNOGzGI+6b89iB9wfdvX27fFxKybnLbUT02OcB8AIdN2Jtx3FTjl0TlOWTx7vdF5ymqZvn+eIXBOBlam1ojThsxmMBWuULBz54PI5jt/47z5MIAXBWa8RhM46OOfv46jm87TQtpZunqStGRAAcaW2Y963YTtNV03LpQojOFuvQXIQIgIcutOHJppwL0cnBpcxdmXbTcm0OsMzl5AsB8LK1NrRGtFa0ZpSHYbrYjcdCdNaF4gHAezUiP1apk7sq7Of8SjEiAuChtQ1lOtnU9lgzuqu2b8/74VbaD71qFSIAHmptWJdudlN0y8dXb99ePbrveyqlXahk1xwAJ1obWiOmy7NmZxtz9RrR4QaFUuulbwLAC3XYhudsanvWZgVrQwA85bmteCxE91/oeE2oChIAR47bcNSOi914LERnP7nYvg3ABWca8ezNCsceXNRa151z1ogAOLK2oS6bFq67mDW9zwWtAPBdenaISjEaAuC892nEe42IbFYA4Nj7tsHUHAChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkRAKGECIBQQgRAKCECIJQQARBKiAAIJUQAhBIiAEIJEQChhAiAUEIEQCghAiCUEAEQSogACCVEAIQSIgBCCREAoYQIgFBCBEAoIQIglBABEEqIAAglRACEEiIAQgkR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);
            height: 389px;
          }
        }

        &:before {
          content: "";
          width: 396px;
          height: 376px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAF+CAYAAACs8Uw+AAALK0lEQVR4nO3cz25rRwHH8RnbSRG9oLLsAyCEYMGGVXfdAA/BkhdAgh0r9og9Sx6CikpdVKpUqZsuqBAC1kitoOi2N7S9iQ9yck7uZDzOn5+SIHE/H8myfeI6tlvNN3Nm3Pr2u++XTu0PAEApZWo/hE1zuw9HPXAbgP9/bSyW27W9v+kOnt9+840f/mS1Wv2ulPK6/0gAXmr/2G63P3vnvQ/+0IVkWnWfyu5gFQ8AZq/PTaj9mapVc2D54Uo8AGi83vTishntDGSJx9qnBkBn3U06yhKQ2lwEBIDeumtF6ddAzEAAGFn3zehPYZmBADCy7hfS21NYpVkHAYBWv+lqOAPxpUEAenuNMNsAICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQKQNyLRcpmn62McJQLmIwidtI5YPZQnI1Fxvn37+7JfTNP3TJwfwcttNKJ5+/uwXuzZ0rSj17Xffr7vrOSabUspxKeXVUso3SimvlVK+ubs/TeWVUqbzx03TtJ6mafP97377V/0n258T2148d1mtVq+97P8iAB7Ddrv9d7kYj6f2120Hv/tPf/7rr2utp7XWs3nInmotX5ZSnpVSnpZSds/12Xz/q1LK6RKTTfdcu4Nn84NO5rA8n//Bo7kPu8u6lHr0tePj53uvZg5G84Tn9zerOnrtANyz0+10OgpI2b+/G7I/nsf5OSDnl939L+YOnMxNOOsbtGmedLksAVmC8sU8K1m3Aam1HL9yfHS691r2X+3FDKQKCMBj2EzT+R/3dRiMq2otn3SBaCcSu+f5svn5lXWQdgYydXXZzlOVdRePWmvdTFM5Pj4aBuTKDERAAB7Xdpp2g/0oIIOg1E9rvTw1NXUROZuPnzWBuXyOzXynNge3zfV2WR+pdbf2cWUG8ny1Xo+iUEf3B28EgAdQX4zjNwak1vMliiUS21ovx/5tc1Zqau5fLqT3ayBtRGoTlzrPPFbzIvocnulfq9XqW9e9/eUJ+6oA8GCmMv7D/eqi+jR9Op+m2i2in3bhOHS51K6B1OZ2G46ybK7afUGkrc/JyX9+8+TVr/+81nptRA68EQAe0HV/uO++qnHy7OS3ywL6dHHaa1tfLDe0s5hhiHbbeAdj/d792txudmKd78x6Zb7eLbQf79ZGSpmO5jjVadpdT/UH3/vOT/feAQD37sOP/vL7eTvusq5xWkp9Pq91fNUtkPc7sNrvegzDsehPYe09YGBqTnGdNqe6zhfdp1qe1+k8LpuL017nayfro836q/2nAuABfFbrlUXv3dh8VufTVfPlefOdjv601aGAXDEKyEi70N6vkyyFO1+tX5XyfCp1XcrUzlRWm6ONgAA8jmfNTqrd1/G2qxc7qc66XVWH4nGj2wak1f6Cs/n28kLnaEzLtt+LHVi1bjabzehLhwDcs1rryfzH/TxWT7uItMHod1jdONsY2bz3zluDw6W88eaPR+Hot/u2ayPNqa1lEeZyFnK2rquz/gkBeBBfvhiTLxfF21hsu+sbZx+jVtxmBjINFtan7vbyguZZx7T8fHW58L5aPa21PNl7dgDu07P2/1d1MfvYqW00+vF7FI3RsSvuegprtN13UZcXVmttZym7742cnZycvPXkyas/qkVEAB7CNE2fff7s5I+7BfLdDqZuV9VoW27/ZfA7nca66yJ6+wv6++2sY1kPmebvjqw++PCjv5VS/r7szmq2Ay8L7bXbMgzA/ljc/n8L+zWNZVPTbujddn/Ml0Ew2ue97v7QXWYg/amsQ7+gfYF1fgPLtGk9bx2rXTTW3XOLCMBV/dLBWReT0e3SjL9lMG6PxvHRsaHkFFa5YYBfHnPW7sSanTazjn7GYvYBcLN2FtKGYTs4TdWveVzn7ruw9o7kv+jQ4D9aJ2kW3PdmNgDcbhweReK6hfF+XL7uMTdKA9K/kDp4IbXZ6ttGYplpnHXHipAA3Kgf/EffHD903Rodu5P7CMht3mztrkfHWkICcNVowB/NJEbHHsTBgIy+NNIafNFw9Mb6nVojo3WV6x4P8LK7bjH8up8ddNOYP3IwIHd0aB3j0Jbf0azj0HMAsD+uHhpvD92/7c9u7TFOYZVBHEYvfhQVAPbdNFY+ylh6nwG5aQbR78a67ucA3H0Mvs/H3ei+ZyC3PQ0lFgCP717H3oc4hTVaFAfgf+dB/mh/yDWQm05ZAfBwHvZMTynlv9b9XuZau7JLAAAAAElFTkSuQmCC) top no-repeat;
          background-size: 100%;
          z-index: -1;
          position: absolute;
          top: 0;
          left: 50%;
          -webkit-transform: translate(-50%);
          -ms-transform: translate(-50%);
          transform: translate(-50%);
        }

        .box-header {
          height: 24px;

          span {
            font-size: 14px;
            background: #f13232;
            color: #fff;
            font-weight: 400;
            line-height: 24px;
            height: 24px;
            padding: 0 10px;
            min-width: 70px;
            display: inline-block;
            text-align: center;
            border-radius: 0 70px 70px 0;
            position: relative;
          }
        }

        .box-body {
          padding: 12px 0;

          .course-name {
            font-weight: 600;
            font-size: 18px;
            color: $dark;
            line-height: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 4px;
          }

          .course-info {
            display: flex;
            justify-content: space-between;
            height: 40px;
            margin-top: 40px;

            .link {
              color: #f13232
            }

            .summary {
              color: #999
            }
          }
        }
      }
    }
  }
</style>
