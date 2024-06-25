<template>
    <div class="bg-gray-800 rounded-full flex items-start w-full md:w-1/2 h-5 overflow-hidden relative">
      <div
        class="h-full w-full bg-[#4BB543] rounded-full transition-all"
        :style="{ transform: `translateX(-${100 - progress}%)` }"
      ></div>
      <span class="absolute text-white font-bold text-sm left-1/2">{{ progress }}%</span>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        progress: 2,
        timer: null
      };
    },
    mounted() {
      this.startProgress();
    },
    methods: {
      startProgress() {
        this.timer = setInterval(() => {
          this.progress = Math.min(100, this.progress + 10);
        }, 800);
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  };
</script>