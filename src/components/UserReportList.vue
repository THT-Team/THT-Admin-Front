<script setup>
import { onMounted, ref } from 'vue'
import { getReportListPage } from '@/api/user/ReportUser.js'
import { convertGender } from '@/api/user/UserDataConverter.js'

const fields = [
    { key: 'index', label: '#' },
    { key: 'username', label: '이름' },
    { key: 'gender', label: '성별' },
    { key: 'preferGender', label: '선호 성별' },
    { key: 'userStatus', label: '상태' },
    { key: 'reportedUserName', label: '신고한 유저' },
    { key: 'reason', label: '신고 이유' },
    { key: 'reportDate', label: '신고된 날짜' },
]

const contents = ref([])
const nowPage = ref(0)
const currentPage = ref(1)
const rows = ref(0)
const pageSize = ref(10)
const totalPage = ref(0)
const filter = ref('')

async function getReportList(page, filter) {
    let reportListPage = await getReportListPage(page, filter)

    contents.value = reportListPage.content
    nowPage.value = reportListPage.pageable.pageNumber
    currentPage.value = reportListPage.pageable.pageNumber + 1
    rows.value = reportListPage.totalElements
    pageSize.value = reportListPage.pageable.pageSize
    totalPage.value = reportListPage.totalPages
}

function pageChange(button, page) {
    getReportList(page - 1, filter.value)
}

function filterData(data) {
    filterData.value = data
    getReportList(0, filterData.value)
}

function getTableIndex(index, pageSize, page) {
    return pageSize * page + index + 1
}

onMounted(async () => {
    await getReportList(0, '')
})

</script>

<template>
    <b-table hover :items="contents" :fields="fields">
        <template #cell(index)="content">
            {{ getTableIndex(content.index, pageSize, nowPage) }}
        </template>

        <template #cell(gender)="content">
            {{ convertGender(content.item.gender) }}
        </template>

        <template #cell(preferGender)="content">
            {{ convertGender(content.item.preferGender) }}
        </template>

    </b-table>

    <div class="w-25 mx-auto">
        <b-input-group size="sm">
            <b-form-input
                id="filter-report-input"
                v-model="filter"
                type="search"
                placeholder="회원 이름 검색"
            ></b-form-input>

            <b-input-group-append>
                <b-button @click="filterData(filter)">검색</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>

    <div class="overflow-auto">
        <div class="mt-3">
            <b-pagination v-model="currentPage"
                          :total-rows="rows"
                          :per-page="pageSize"
                          first-number
                          last-number
                          align="center"
                          @page-click="pageChange"
            >
            </b-pagination>
        </div>
    </div>
</template>

<style scoped>

</style>