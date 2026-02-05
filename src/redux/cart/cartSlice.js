import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slug: [{ cardSlug: "example-slug", count: 1 }],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const slug = action.payload;
      const exisiting = state.slug.find(
        (item) => item.cardSlug === slug.cardSlug,
      );
      if (!exisiting) {
        state.slug.push({ cardSlug: slug.cardSlug, count: 1 });
      } else {
        exisiting.count += 1;
      }
    },

    removeFromCart: (state, action) => {
      const slug = action.payload;
      state.slug = state.slug.filter((item) => item.cardSlug !== slug.cardSlug);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
