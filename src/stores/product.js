import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore({ 
  id: 'item-store',
    state: () => ({
        item: 0
      }),
      actions: {
        increaseItem() {
          this.item++
        },
        decreaseItem() {
          this.item--
        }
      },
      // getters: {
      //   oddOrEven: (state) => {
      //     if (state.item % 2 === 0) return 'even'
      //     return 'odd'
      //   }
      // }
  
})
