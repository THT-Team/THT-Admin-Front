<template>

    <div style="padding: 0.5rem">
        <span> Total User : {{ rows }} <br> Total Page : {{ totalPage }} </span>
    </div>

    <div class="users-box">

        <b-table hover :items="content" :fields="fields">
            <template #cell(index)="content">
                {{ getTableIndex(content.index) }}
            </template>

        </b-table>
        <div class="w-25 mx-auto">
            <b-input-group size="sm">
                <b-form-input
                    id="filter-input"
                    v-model="filter"
                    type="search"
                    placeholder="회원 이름 검색"
                ></b-form-input>

                <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Search</b-button>
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
                >
                </b-pagination>
            </div>
        </div>

    </div>
</template>

<script setup>
import data from '@/assets/data.js'

const fields = [
    { key: 'index', label: '#' },
    { key: 'profileUrl', label: '프로필' },
    { key: 'username', label: '이름' },
    { key: 'createdAt', label: '가입 일자' },
    { key: 'userSate', label: '상태' }
]

let content = data.content
let page = data.pageable.pageNumber
let currentPage = data.pageable.pageNumber + 1
let rows = data.totalElements
let pageSize = data.pageable.pageSize
let totalPage = data.totalPages

function getTableIndex(index) {
    return pageSize * page + index + 1
}

</script>

<style scoped>


</style>