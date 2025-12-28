<script setup>
import AlertTable from '@/components/dashboard/AlertTable.vue';
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NextActionsWidget from '@/components/dashboard/NextActionsWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import ProfitTrendChartWidget from '@/components/dashboard/ProfitTrendChartWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <StatsWidget class="col-span-12" />
        <AlertTable class="col-span-12" />
        <div class="col-span-12 xl:col-span-6">
            <RecentSalesWidget />
        </div>
        <div class="col-span-12 xl:col-span-6">
            <NotificationsWidget />
        </div>
        <ProfitTrendChartWidget class="col-span-12" />
        <div class="col-span-12 xl:col-span-6">
            <BestSellingWidget />
        </div>
        <div class="col-span-12 xl:col-span-6">
            <NextActionsWidget />
        </div>
    </div>
</template>
