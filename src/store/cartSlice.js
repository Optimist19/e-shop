import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
  numberOfItems: 0
  // price: 1
  // isAble: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectItem(state, action) {
      // state.quantity = state.quantity + 1
      const a = { ...action.payload, quantity: 1 };
      state.cartArray.push(a);
    },

    increase(state, action) {
      const id = action.payload;
      const updatedCartArray = state.cartArray.map((item) => {
        if (item.id === id) {
          // Create a new object for the updated item
          // return { ...item, quantity: item.quantity + 1, price: item.quantity * item.price };
          // On the first click, when quantity is 1, the price is calculated as item.quantity * item.price, so it uses the old quantity value. To fix this, you need to first increment the quantity and then use the updated value for the calculation.
          const updatedQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: updatedQuantity,
            price: updatedQuantity * item?.price
          };
        }
        return item;
      });

      state.cartArray = updatedCartArray;
    },

    //   substractItem(state, action) {
    //     const id = action.payload;
    //     const updatedCartArray = state.cartArray.map((item) => {
    //       if (item.id === id) {
    //         // Create a new object for the updated item
    //         const updatedQuantity = item.quantity - 1;

    //         // if(item && item.quantity < 1){
    //         //  return state.cartArray = state.cartArray.filter(item => item.id !== id); // I was expecting this to delete the particular item from the array when the quantity of the same item is 0

    //         // }

    //         return {
    //           ...item,
    //           quantity: updatedQuantity,
    //           price: updatedQuantity * item?.price
    //         };
    //       }
    //       return item;
    //     });

    //     state.cartArray = updatedCartArray;
    //   }
    // }

    substractItem(state, action) {
      const id = action.payload;
      const updatedCartArray = state.cartArray.map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;

          if (updatedQuantity < 1) {
            // Remove the item from the array when quantity is 0
            return null; // or return undefined
          }

          return {
            ...item,
            quantity: updatedQuantity,
            price: updatedQuantity * item?.price
          };
        }
        return item;
      });

      // Remove the items with quantity 0 from the array
      state.cartArray = updatedCartArray.filter(Boolean);
    },

    deleteItemById(state, action) {
      const id = action.payload;
      const updatedCartArray = state.cartArray.filter((item) => {
        if(item){
          return item.id !== id;
        }

        return item
      });
    
      state.cartArray = updatedCartArray;
    }
    
  }
});

export const { selectItem, substractItem, increase, deleteItemById } = cartSlice.actions;
// console.log(initialState.cartArray)
export default cartSlice.reducer;

// incrementQuantity: (state, action) => {
//   const { id } = action.payload;
//   const item = state.cartArray.find((item) => item.id === id);

//   if (item) {
//     item.quantity += 1;
//   }
// },

// incrementQuantity: (state, action) => {
//   const { id } = action.payload;
//   const updatedCartArray = state.cartArray.map((item) => {
//     if (item.id === id) {
//       // Create a new object for the updated item
//       return { ...item, quantity: item.quantity + 1 };
//     }
//     return item;
//   });

//   // Update the state with the new cartArray
//   state.cartArray = updatedCartArray;
// },
