<template>
    <div class="flex flex-col space-y-2 w-1/2">
      <div class="flex p-1 rounded-md bg-[#181818] items-center">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          @click="changeTabs(i)"
          :class="[
            'transition-colors duration-200 grow px-4 py-2 rounded-md',
            active === i ? 'bg-[#1565C0]' : 'bg-transparent',
            'flex justify-center'
          ]"
        >
          <span class="pointer-events-none">{{ tab.name }}</span>
        </button>
      </div>
      <div class="p-2 bg-[#181818] rounded-md">
        <component :is="tabs[active].element" />
      </div>
    </div>
  </template>
  
  <script>
  import ProfileComponent from './ProfileComponent.vue';
  import DescriptionComponent from './DescriptionComponent.vue';
  
  export default {
    name: 'Example',
  
    components: {
      ProfileComponent,
      DescriptionComponent
    },
  
    data() {
      return {
        active: 0,
        tabs: [
          { name: 'Profile', element: ProfileComponent },
          { name: 'Description', element: DescriptionComponent }
        ]
      };
    },
  
    methods: {
      changeTabs(index) {
        this.active = index;
      }
    }
  };
  </script>
  
  <!-- ProfileComponent.vue -->
  <template>
    <div class="flex flex-col">
      <div class="flex space-x-2 my-5">
        <img
          class="cursor-pointer object-cover h-16 w-16 rounded-full"
          src="https://cataas.com/cat?width=300&height=300"
          alt="profile"
        />
        <div class="flex flex-col">
          <span class="text-lg">Mr. Cat</span>
          <span>Software Engineer at MidUI</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileComponent'
  };
  </script>
  
  <!-- DescriptionComponent.vue -->
  <template>
    <div class="flex flex-col max-w-xl">
      <span class="text-xl">Mr. Cat</span>
      <br />
      <p>
        To leverage my expertise in napping, toy mouse retrieval, and purr therapy
        to bring joy and stress relief to a loving home or office environment.
        Seeking a position where my impeccable litter box manners and unparalleled
        ability to find the sunny spot will be appreciated and celebrated.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DescriptionComponent'
  };
  </script>