import BuyModal from "./BuyModal"

export const switchModal = (type) => {
    switch (type) {
        case 'buy-modal': 
            return <BuyModal />
        case '':
            return 'Empty modal'
        default:
            throw new Error('Not any modals didn`t find')
    }
}
