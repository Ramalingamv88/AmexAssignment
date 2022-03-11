import { configureStore, createSlice } from '@reduxjs/toolkit';

const updateLocalStorage = (key, stringData,) => {
    localStorage.setItem(key, stringData)
}
const getLocalStorageItem = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : key === 'workflows' ? workflowInitialState : entitiesInitialState;
}
const clearLocalStorage = () => {
    localStorage.clear();
    console.log('cleared')
}
export const entitiesInitialState =  [
    {
        component: 'customer',
        attributes: [
            'entityType',
            'customerId',
            'customerName',
            'customerEmail',
            'customerBankCode',
        ],
    },
    {
        component: 'payment mode',
        attributes: [
            'entityType',
            'paymentModeid',
            'paymentMode',
            'issuer',
            'last4DigitsAccNo',
            'payeeCode'
        ]
    },
    {
        component: 'merchant',
        attributes: [
            'entityType',
            'merchantId',
            'merchantName',
            'merchantCode',
            'merchantBankCode',
        ]
    },
    {
        component: 'payment service providers',
        attributes: [
            'entityType',
            'serviceProvider',
            'serviceProviderName',
            'paymentMode',
            'serviceProviderCode',
            'serviceProviderBankCode',
        ]
    },
    {
        component: 'issuer',
        attributes: [
            'entityType',
            'issuerId',
            'issuerName',
            'issuerCode',
            'issuerBankCode',
        ]
    },
    {
        component: 'acquirer',
        attributes: [
            'entityType',
            'acquirerId',
            'acquirerName',
            'acquirerCode',
            'acquirerBankCode',
        ]
    },

]

const workflowInitialState = []

const workflowSlice = createSlice({
    name: 'workflow',
    initialState: getLocalStorageItem('workflows'),
    reducers: {
        add: (state, { payload }) => {
            console.log('workflow payload', payload)
            state.push(payload)
            updateLocalStorage('workflows', JSON.stringify(state))
        },
        remove: (state, { payload }) => {
            const index = state.findIndex(w => w.component === payload.component);
            state.splice(index, 1)
            updateLocalStorage('workflows', JSON.stringify(state))

        },
        update: (state, { payload }) => {
            const index = state.findIndex(w => w.component === payload.component);
            state[index] = { ...state[index], workflow: payload.workflow }
            updateLocalStorage('workflows', JSON.stringify(state))
        },
        clear: (state) => {
            clearLocalStorage();
            return []
        }
    }
})

const entitiesSlice = createSlice({
    name: 'entities',
    initialState: getLocalStorageItem('entities'),
    // reducers: {},
    extraReducers: {
        [workflowSlice.actions.add]: (state, { payload }) => {
            const index = state.findIndex(ent => ent.component === payload.component)
            console.log(JSON.stringify(index, null, 2))
            state.splice(index, 1)
            updateLocalStorage('entities', JSON.stringify(state))

        },
        [workflowSlice.actions.remove]: (state, { payload }) => {
            const index = entitiesInitialState.findIndex(ent => ent.component === payload.component)
            state.splice(index, 0, entitiesInitialState[index])
            updateLocalStorage('entities', JSON.stringify(state))

        },
        [workflowSlice.actions.clear]: () => entitiesInitialState
    }
})
const reducer = {
    workflows: workflowSlice.reducer,
    entities: entitiesSlice.reducer
}

export const { add: addWorkflow, remove: removeWorkflow, update: updateWorkflow, clear: clearWorkflow } = workflowSlice.actions
export default configureStore({
    reducer
})