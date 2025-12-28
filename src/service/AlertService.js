// representativeは、在庫マイナス/注文あり在庫未減算/出品エラー/未出品SKUが多い/eBay未返信メッセージなどのアラートの種類を示す
export const AlertService = {
    async getAlerts() {
        return [
            {
                id: 'AL-0001',
                representative: { name: '在庫マイナス', image: 'amyelsner.png' },
                priority: 'HIGH',
                targetType: 'SKU',
                targetId: 'SKU-ABC123',
                message: '在庫が -2 になっています',
                createdAt: new Date(),
                actionLabel: '在庫修正',
                actionTo: '/inventory-movements?sku=SKU-ABC123',
                status: 'OPEN'
            },
            {
                id: 'AL-0002',
                representative: { name: '注文あり・在庫未減算', image: 'annafali.png' },
                priority: 'HIGH',
                targetType: 'ORDER',
                targetId: 'EBAY-98765',
                message: '注文は入っているが在庫減算が未反映です',
                createdAt: new Date(),
                actionLabel: '注文処理',
                actionTo: '/orders?status=unprocessed',
                status: 'OPEN'
            },
            {
                id: 'AL-0003',
                representative: { name: '出品エラー', image: 'asiyajavayant.png' },
                priority: 'HIGH',
                targetType: 'LISTING',
                targetId: 'SKU-XYZ789',
                message: 'eBay出品が失敗しています（Category invalid）',
                createdAt: new Date(),
                actionLabel: '出品編集',
                actionTo: '/listings-queue?status=error',
                status: 'OPEN'
            }
        ];
    }
};
