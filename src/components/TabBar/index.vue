<template>
  <div class="tab-bar">
    <!-- <div
      class="bar-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in tabbarData"
      :key="index"
      @click="tabbarItemClick(item, index)"
    >
      <img
        v-if="currentIndex !== index"
        :src="getAseetsUrl(item.imageUrl)"
        alt=""
      />
      <img v-else :src="getAseetsUrl(item.activeImgUrl)" alt="" />
      <span>{{ item.text }}</span>
    </div> -->
    <van-tabbar route active-color="orange" inactive-color="#ccc">
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        replace
        :to="item.path"
        :icon="getAseetsUrl(item.imageUrl)"
      >
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img
            :src="
              props.active
                ? getAseetsUrl(item.activeImgUrl)
                : getAseetsUrl(item.imageUrl)
            "
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { tabbarData } from "@/assets/data/tabbarData.js";
import { getAseetsUrl } from "@/utils/load_assets.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const currentIndex = ref(0);

const tabbarItemClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<style scoped lang="scss">
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;

  .bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.active {
      color: orange;
    }

    img {
      width: 36px;
    }
  }
}
</style>
