<template>
    <div class="bg-gray-900 rounded-full flex items-start w-1/2 h-5 overflow-hidden">
      <div
        class="h-full w-full bg-[#1565C0] rounded-full transition-all"
        :style="{ transform: `translateX(-${100 - progress}%)` }"
      ></div>
    </div>
</template>
  
<script>
  export default {
    name: 'Progress',
    data() {
      return {
        progress: 15,
      };
    },
    mounted() {
      this.startProgress();
    },
    methods: {
      startProgress() {
        this.timer = setInterval(() => {
          this.progress = Math.min(100, this.progress + 10);
        }, 1500);
      },
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  };
</script>