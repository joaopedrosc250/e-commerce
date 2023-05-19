'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type ShoppinhCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  unit: number
}

type ShoppingCartContextFunctions = {
  getItemQuantity: (id: string) => number
  increaseCartContent: (id: string) => void
  decreaseCartContent: (id: string) => void
  removeFromCart: (id: string) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextFunctions)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppinhCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.unit || 0
  }

  function increaseCartContent(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, unit: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, unit: item.unit + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartContent(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.unit === 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, unit: item.unit - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartContent,
        decreaseCartContent,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
