import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                };
            });

        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if (productIndex >= 0) {
                    draft.splice(draft[productIndex], 1);
                };
            });

        case '@cart/UPDATE': {
            if (action.newProductAmount <= 0) {
                return state;
            }
        
                return produce(state, draft => {
                    const productIndex = draft.findIndex(p => p.id === action.product.id);
    
                    if (productIndex >= 0) {
                        draft[productIndex].amount = action.newProductAmount;
                    };
                });
        }
        
        default:
            return state;
    };
};