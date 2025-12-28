<script setup>
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import Tag from 'primevue/tag';

const actions = [
    { title: '未処理Ordersを確認', detail: 'In progress: 24', severity: 'danger', to: '/orders?status=unprocessed' },
    { title: '未出品SKUを出品キューへ', detail: 'Unlisted: 12', severity: 'warn', to: '/listings-queue?status=unlisted' },
    { title: '在庫マイナスを修正', detail: 'SKU: 2', severity: 'danger', to: '/inventory-movements?filter=negative' }
];
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Next Actions</div>

        <div class="flex flex-col gap-3">
            <Panel v-for="a in actions" :key="a.title" toggleable>
                <template #header>
                    <div class="flex items-center justify-between w-full">
                        <span>{{ a.title }}</span>
                        <Tag :value="a.detail" :severity="a.severity" />
                    </div>
                </template>

                <div class="flex justify-end">
                    <Button label="Open" size="small" @click="$router.push(a.to)" />
                </div>
            </Panel>
        </div>
    </div>
</template>
