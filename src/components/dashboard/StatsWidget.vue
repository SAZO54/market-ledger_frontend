<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const kpis = ref([
    {
        label: 'Products',
        value: '28,441',
        subStrong: 'SKU: 520',
        subText: 'total',
        icon: 'pi-box',
        color: 'text-cyan-500',
        bg: 'bg-cyan-100 dark:bg-cyan-400/10',
        to: '/products'
    },
    {
        label: 'Listings',
        value: '38',
        subStrong: 'Unlisted: 12',
        subText: 'need listing',
        icon: 'pi-list',
        color: 'text-teal-500',
        bg: 'bg-teal-100 dark:bg-teal-400/10',
        to: '/listings-queue'
    },
    {
        label: 'Orders',
        value: '152',
        subStrong: 'In progress: 24',
        subText: 'this period',
        icon: 'pi-shopping-cart',
        color: 'text-blue-500',
        bg: 'bg-blue-100 dark:bg-blue-400/10',
        to: '/orders'
    },
    {
        label: 'Messages',
        value: '12',
        subStrong: 'Unread',
        subText: 'need reply',
        icon: 'pi-comment',
        color: 'text-purple-500',
        bg: 'bg-purple-100 dark:bg-purple-400/10',
        to: '/messages'
    },
    {
        label: 'Alert',
        value: '3',
        subStrong: 'Action',
        subText: 'required',
        icon: 'pi-exclamation-triangle',
        color: 'text-orange-500',
        bg: 'bg-orange-100 dark:bg-orange-400/10',
        to: '/inventory-movements'
    },
    {
        label: 'Revenue',
        value: '¥210,000',
        subStrong: 'Expense ¥48,000',
        subText: 'this period',
        icon: 'pi-dollar',
        bg: 'bg-green-100 dark:bg-green-400/10',
        color: 'text-green-500',
        to: '/finance'
    }
]);

const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1200px', numVisible: 3, numScroll: 1 },
    { breakpoint: '992px', numVisible: 2, numScroll: 1 },
    { breakpoint: '576px', numVisible: 1, numScroll: 1 }
]);

const go = (to) => {
    if (to) router.push(to);
};
</script>

<template>
    <Carousel :value="kpis" :numVisible="3" :numScroll="1" :circular="false" :showIndicators="false" :responsiveOptions="responsiveOptions" class="kpi-carousel">
        <template #item="slotProps">
            <div class="p-2">
                <div class="card mb-0 cursor-pointer" @click="go(slotProps.data.to)">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-muted-color font-medium mb-2">
                                {{ slotProps.data.label }}
                            </span>
                            <div class="text-xl font-medium">
                                {{ slotProps.data.value }}
                            </div>
                        </div>

                        <div class="flex items-center justify-center rounded-border" :class="slotProps.data.bg" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi text-xl!" :class="[slotProps.data.icon, slotProps.data.color]"></i>
                        </div>
                    </div>

                    <span class="text-primary font-medium">
                        {{ slotProps.data.subStrong }}
                    </span>
                    <span class="text-muted-color">
                        {{ slotProps.data.subText }}
                    </span>
                </div>
            </div>
        </template>
    </Carousel>
</template>

<style lang="scss" scoped>
// TODO: 現状はスクロールバーに頼っているけど綺麗に<>アイコンを表示させたい
// .kpi-carousel ::v-deep(.p-carousel-content-container) {
//     overflow: hidden;
// }
.kpi-carousel ::v-deep(.p-carousel-next),
.kpi-carousel ::v-deep(.p-carousel-prev) {
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    background: var(--surface-section);
    border: 1px solid var(--surface-border);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index: 10;
}

// .kpi-carousel ::v-deep(.p-carousel-content-container) {
//     width: calc(100% - 5rem);
//     margin: 0 auto;
// }
</style>
