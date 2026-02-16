import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    isLoggedIn: true,
    properties: [
      {
        id: 1,
        title: 'Dom1',
        oldPrice: '150.34',
        price: '120.50',
        like: true
      },
      {
        id: 2,
        title: 'Dom2',
        oldPrice: '150.34',
        price: '120.50',
        like: false
      },
      {
        id: 3,
        title: 'Dom3',
        oldPrice: '150.34',
        price: '120.50',
        like: true
      },
      {
        id: 4,
        title: 'Dom4',
        oldPrice: '150.34',
        price: '120.50',
        like: true
      },
      {
        id: 5,
        title: 'Dom5',
        oldPrice: '150.34',
        price: '120.50',
        like: false
      },
      {
        id: 6,
        title: 'Dom6',
        oldPrice: '150.34',
        price: '120.50',
        like: true
      },
      {
        id: 7,
        title: 'Dom7',
        oldPrice: '150.34',
        price: '120.50',
        like: false
      },
    ]
  }),
})
