<script setup>
import { onMounted, ref } from 'vue'
import { getWithDrawUserListPage } from '@/api/user/WithDrawUsers.js'

const fields = [
    { key: 'index', label: '#' },
    { key: 'username', label: '이름' },
    { key: 'userStatus', label: '상태' },
    { key: 'reason', label: '탈퇴 이유' },
    { key: 'feedBack', label: '피드백' },
    { key: 'requestDate', label: '탈퇴 날짜' },
    { key: 'actions', label: '데이터 삭제' }
]

const contents = ref([])
const nowPage = ref(0)
const currentPage = ref(1)
const rows = ref(0)
const pageSize = ref(10)
const totalPage = ref(0)
const filter = ref('')

async function getWithDrawUserList(page, filter) {
    let result = await getWithDrawUserListPage(page, filter)

    contents.value = result.content
    nowPage.value = result.pageable.pageNumber
    currentPage.value = result.pageable.pageNumber + 1
    rows.value = result.totalElements
    pageSize.value = result.pageable.pageSize
    totalPage.value = result.totalPages
}

function pageChange(button, page) {
    getWithDrawUserList(page - 1, filter.value)
}

function filterData(data) {
    filterData.value = data
    getWithDrawUserList(0, filterData.value)
}

function getTableIndex(index, pageSize, page) {
    return pageSize * page + index + 1
}

onMounted(async () => {
    await getWithDrawUserList(0, '')
})

function deleteUserData() {
    alert('아직 개발중~')
}

</script>

<template>
    <b-table hover :items="contents" :fields="fields">
        <template #cell(index)="content">
            {{ getTableIndex(content.index, pageSize, nowPage) }}
        </template>
        <template #cell(actions)="content">
            <b-button variant="danger" @click="deleteUserData">삭제</b-button>
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