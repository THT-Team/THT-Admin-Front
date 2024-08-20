<script setup>
import { convertGender } from '@/api/user/UserDataConverter.js'
import { onMounted, ref } from 'vue'
import { getBlockListPage } from '@/api/user/BlockUsers.js'

const blockFields = [
    { key: 'index', label: '#' },
    { key: 'username', label: '이름' },
    { key: 'gender', label: '성별' },
    { key: 'userStatus', label: '상태' },
    { key: 'blockedUserName', label: '차단한 유저' },
    { key: 'currentBlockDate', label: '차단된 날짜' }
]

const blockContents = ref([])
const blockPage = ref(0)
const blockCurrentPage = ref(1)
const blockRows = ref(0)
const blockPageSize = ref(10)
const blockTotalPage = ref(0)
const blockFilter = ref('')

async function getBlockList(page, filter) {
    let blockListPage = await getBlockListPage(page, filter)

    blockContents.value = blockListPage.content
    blockPage.value = blockListPage.pageable.pageNumber
    blockCurrentPage.value = blockListPage.pageable.pageNumber + 1
    blockRows.value = blockListPage.totalElements
    blockPageSize.value = blockListPage.pageable.pageSize
    blockTotalPage.value = blockListPage.totalPages
}

function blockPageChange(button, page) {
    getBlockList(page - 1, blockFilter.value)
}

function blockFilterData(data) {
    blockFilterData.value = data
    getBlockList(0, blockFilterData.value)
}

onMounted(async () => {
    await getBlockList(0, '')
})

function getTableIndex(index, pageSize, page) {
    return pageSize * page + index + 1
}
</script>

<template>
    <b-table hover :items="blockContents" :fields="blockFields">
        <template #cell(index)="content">
            {{ getTableIndex(content.index, blockPageSize, blockPage) }}
        </template>

        <template #cell(gender)="content">
            {{ convertGender(content.item.gender) }}
        </template>
    </b-table>

    <div class="w-25 mx-auto">
        <b-input-group size="sm">
            <b-form-input
                id="filter-block-input"
                v-model="blockFilter"
                type="search"
                placeholder="회원 이름 검색"
            ></b-form-input>

            <b-input-group-append>
                <b-button @click="blockFilterData(blockFilter)">검색</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>

    <div class="overflow-auto">
        <div class="mt-3">
            <b-pagination v-model="blockCurrentPage"
                          :total-rows="blockRows"
                          :per-page="blockPageSize"
                          first-number
                          last-number
                          align="center"
                          @page-click="blockPageChange"
            >
            </b-pagination>
        </div>
    </div>
</template>

<style scoped>

</style>