<template>
  <div class="mainPane" ref="mainPane">
    <div class="mainPaneContent">
      <div class="productCustomizer">
        <div class="areaSwitcher">
          <div class="productTemplateSwitcher"></div>
        </div>

        <div class="designArea">
          <div
            class="designBase"
            :style="{'background-color': color, width: `${baseWidth}px`, height: `${baseWidth}px`}"
          >
            <!-- {{selectBoxHeight}}
            <br />
            {{selectBoxWidth}} -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3508 4961"
              class="designSvg"
              :width="`${printableWidth}`"
              :height="`${printableHeight}px`"
              :style="{top: `${baseWidth/3.5}px`, left: `${(baseWidth - printableWidth) / 1.93}px`}"
            >
              <g
                @click="editing = true"
                v-if="showImage"
                :style="{cursor: 'pointer'}"
                :transform="`matrix(${(3508/imageWidth) * editInfo.scaleX} 0 0 ${(3508/imageWidth) * editInfo.scaleX} ${3508 * editInfo.transX} ${3508 * editInfo.transY})`"
              >
                <image :href="image" ref="art" :width="imageWidth" :height="imageHeight" />
              </g>
            </svg>
            <img :src="require(`@/assets/${front ? 'front' : 'back'}.png`)" alt class="mask" />
            <div
              class="printableArea outlined"
              :style="{top: `${baseWidth/3.5}px`, left: `${(baseWidth - printableWidth)/1.93}px`, width: `${printableWidth}px`, height: `${printableHeight}px`}"
            >
              <vue-draggable-resizable
                v-if="editing"
                :w="selectBoxWidth"
                :h="selectBoxHeight"
                :x="selectBox.x"
                :y="selectBox.y"
                :z="999"
                lockAspectRatio
                parent
                active
                @dragging="onDrag"
                @resizing="onResize"
                @deactivated="editing = false"
                :handles="['tl', 'tr', 'br', 'bl']"
              ></vue-draggable-resizable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "image", "imageWidth", "imageHeight", "showImage"],
  data() {
    return {
      editing: false,
      front: true,
      baseWidth: 0,
      printableWidth: 0,
      printableHeight: 0,
      editInfo: {
        transX: 0,
        transY: 0,
        scaleX: 1,
        scaleY: 1
      },
      selectBox: {
        x: 0,
        y: 0,
        w: 1,
        h: 1
      }
    };
  },
  methods: {
    onResize(x, y, w, h) {
      this.editInfo.transX = x / this.printableWidth;
      this.selectBox.x = x;

      this.editInfo.transY = y / this.printableWidth;
      this.selectBox.y = y;

      this.editInfo.scaleX = w / this.printableWidth;
      this.selectBox.w = w / this.printableWidth;
      
      this.editInfo.scaleY = h / this.printableWidth;
      this.selectBox.h = h / this.printableWidth;
    },
    onDrag(x, y) {
      this.editInfo.transX = x / this.printableWidth;
      this.selectBox.x = x;

      this.editInfo.transY = y / this.printableWidth;
      this.selectBox.y = y;
    }
  },
  computed: {
    ratio() {
      return 3508 / this.imageWidth;
    },
    selectBoxWidth() {
      return (
        this.imageWidth *
        ((this.printableWidth * this.ratio) / 3508) *
        this.selectBox.w
      );
    },
    selectBoxHeight() {
      return (
        this.imageHeight *
        ((this.printableWidth * this.ratio) / 3508) *
        this.selectBox.w
      );
    }
  },
  mounted() {
    this.baseWidth = Math.floor(window.innerWidth / 2.5);
    this.printableWidth = Math.floor(window.innerWidth / 6.8);
    this.printableHeight = this.printableWidth * 1.4142;
    window.onresize = e => {
      this.editing = false;
      this.baseWidth = Math.floor(e.target.innerWidth / 2.5);
      this.printableWidth = Math.floor(window.innerWidth / 6.8);
      this.printableHeight = this.printableWidth * 1.4142;
    };
  }
};
</script>

<style>
.mainPane {
  max-height: 100vh;
  background: #f6f6f9;
  overflow-y: scroll;
  position: relative;
}

.mainPaneContent {
  height: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 30px 40px 20px 40px;
}

.productCustomizer {
  display: flex;
  min-height: 100%;
  text-align: center;
  margin-top: 50px;
}

.productCustomizer .areaSwitcher {
  flex: 0 0 80px;
}

.areaSwitcher .switchButton {
  border: #d8dae0 2px solid;
  display: block;
  height: 75px;
  margin-bottom: 20px;
  width: 75px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.areaSwitcher .switchButton.active {
  border-color: #282562;
}

.productCustomizer .designArea {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  height: calc(100% - 80px);
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.designBase {
  display: inline-block;
  position: relative;
  user-select: none;
  z-index: 1;
  opacity: 1;
}

.vdr {
  pointer-events: auto;
  border: 1px solid #000 !important;
}

.designBase .designSvg {
  position: absolute;
  z-index: 2;
}

.designBase .printableArea.outlined {
  border: 1px dashed #ee2761;
  border-image-source: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKAQMAAABYPjbAAAAABlBMVEUAAADuJ2Hma6fOAAAAAXRSTlMAQObYZgAAABVJREFUCNdjePAAhA4kMCABIBciDgCLPglB1HjPmgAAAABJRU5ErkJggg==);
  border-image-slice: 1;
  border-image-repeat: round;
}

.designBase .printableArea {
  pointer-events: none;
  position: absolute;
  z-index: 4;
}

.designBase .mask {
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 3;
}
.designBase .selectBox {
  pointer-events: none;
  position: absolute;
}
.selectDisplay {
  border: 1px solid #b8bcc5;
  height: 100%;
  pointer-events: none;
  position: relative;
  width: 100%;
}

img {
  border: 0;
}
</style>