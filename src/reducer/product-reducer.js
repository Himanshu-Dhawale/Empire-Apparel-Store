function reducer(state, action) {
  const {mensclothing, womensclothing} = state.category;

    switch (action.type) {
      case "LOW_TO_HIGH":
        return { ...state, sortBy: "LOW_TO_HIGH" };
      case "HIGH_TO_LOW":
        return { ...state, sortBy: "HIGH_TO_LOW" };
      case "MENS_CLOTHING":
        return {
          ...state,
          category: { ...state.category, mensclothing: !mensclothing }
        };
      case "WOMENS_CLOTHING":
        return {
          ...state,
          category: { ...state.category, womensclothing: !womensclothing }
        };
      case "FOUR_STAR":
        return { ...state, rating: "FOUR" };
      case "THREE_STAR":
        return { ...state, rating: "THREE" };
      case "TWO_STAR":
        return { ...state, rating: "TWO" };
      case "ONE_STAR":
        return { ...state, rating: "ONE" };
        case "RANGE":
        return { ...state, range: action.payload };
      case "CLEAR":
        return  {
          range:null,
          sortBy: null,
          price: null,
          category: {
            mensclothing: false,
            womensclothing: false,
          },
          rating: null,
        };
      default:
        return state;
    }
  }
  
  export { reducer };
  