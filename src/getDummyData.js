import { entitiesInitialState } from './redux-store'
const fn = (type) => {
    switch (type.toLowerCase()) {
        case 'customer':
            return {
                "entityType": "Customer",
                "customerId": "Customer1",
                "customerName": "A",
                "customerEmail": "1@abc.com",
                "customerBankCode": "B2C"
            }
        case 'payment mode':
            return {
                "entityType": "Payment Mode",
                "paymentModeid": "Payment1",
                "paymentMode": "CreditCard",
                "issuer": "A2B",
                "last4DigitsAccNo": "2345",
                "payeeCode": "MAC"
            }
        case 'merchant': {
            return {
                "entityType": "Merchant",
                "merchantId": "Merchant1",
                "merchantName": "A",
                "merchantCode": "MAC",
                "merchantBankCode": "B2C"
            }
        }
        default:
            const obj = {};
            const entity = entitiesInitialState.find(ent => ent.component === type.toLowerCase());
            if(!entity) return obj;
            entity?.attributes.forEach(attribute => obj[attribute] = '')
            return {
                ...obj,
                entityType: type
            }
    }

}

export default fn;