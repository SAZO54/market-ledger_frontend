<script setup>
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Tag from 'primevue/tag';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

import { AlertService } from '@/service/AlertService';

const router = useRouter();
const alerts = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
    alerts.value = await AlertService.getAlerts();
    loading.value = false;
});

function prioritySeverity(priority) {
    switch (priority) {
        case 'HIGH':
            return 'danger';
        case 'MEDIUM':
            return 'warn';
        case 'LOW':
            return 'info';
        default:
            return null;
    }
}

function statusSeverity(status) {
    switch (status) {
        case 'OPEN':
            return 'danger';
        case 'ACK':
            return 'warn';
        case 'DONE':
            return 'success';
        default:
            return null;
    }
}

function formatDate(d) {
    if (!d) return '';
    const dt = d instanceof Date ? d : new Date(d);
    return dt.toLocaleString('ja-JP');
}

function go(to) {
    if (to) router.push(to);
}

function countGroupTotal(groupName) {
    return alerts.value.filter((a) => a.representative?.name === groupName).length;
}
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Alerts</div>

        <DataTable :value="alerts" :loading="loading" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="360px" tableStyle="min-width: 60rem">
            <template #groupheader="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="28" style="vertical-align: middle" />
                    <span class="font-medium">{{ slotProps.data.representative.name }}</span>
                </div>
            </template>

            <Column field="priority" header="Priority" style="width: 9rem">
                <template #body="{ data }">
                    <Tag :value="data.priority" :severity="prioritySeverity(data.priority)" />
                </template>
            </Column>

            <Column field="targetId" header="Target" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex flex-col">
                        <span class="font-medium">{{ data.targetId }}</span>
                        <small class="text-muted-color">{{ data.targetType }}</small>
                    </div>
                </template>
            </Column>

            <Column field="message" header="Description" style="min-width: 26rem" />

            <Column field="status" header="Status" style="width: 8rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="statusSeverity(data.status)" />
                </template>
            </Column>

            <Column field="createdAt" header="Created" style="width: 13rem">
                <template #body="{ data }">
                    {{ formatDate(data.createdAt) }}
                </template>
            </Column>

            <Column header="Action" style="width: 10rem">
                <template #body="{ data }">
                    <Button size="small" :label="data.actionLabel || 'Open'" @click="go(data.actionTo)" />
                </template>
            </Column>

            <template #groupfooter="slotProps">
                <div class="flex justify-end font-bold w-full">Total Alerts: {{ countGroupTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
    </div>
</template>
