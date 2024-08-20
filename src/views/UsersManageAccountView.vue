<template>
    <h6>[ 신고/ 차단 / 탈퇴 ]</h6>

    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title=" 신고 " active>
                    <UserReportList />
                </b-tab>
                <b-tab title=" 차단 ">
                    <UserBlockList />
                </b-tab>

                <b-tab title=" 탈퇴 ">
                    <UserWithDrawList />
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script setup>
import UserReportList from '@/components/UserReportList.vue'
import UserBlockList from '@/components/UserBlockList.vue'
import UserWithDrawList from '@/components/UserWithDrawList.vue'

</script>

<style scoped>

</style>