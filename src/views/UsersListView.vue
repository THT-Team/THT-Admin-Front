<template>

    <h5>[ 회원 목록 ]</h5>
    <div style="padding: 0.5rem">
        <span> Total User : {{ rows }} <br> Total Page : {{ totalPage }} </span>
    </div>

    <div class="users-box">

        <b-table hover :items="content" :fields="fields">
            <template #cell(index)="content">
                {{ getTableIndex(content.index) }}
            </template>

            <template v-slot:cell(profilePhotoUrl)="content">
                <img class="img-fluid img-thumbnail profile-img" :src="content.item.profilePhotoUrl" alt=" ..." />
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
                    <b-button  @click="filterData(filter)">검색</b-button>
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
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { authInstance } from '@/api/index.js'

const fields = [
    { key: 'index', label: '#' },
    { key: 'profilePhotoUrl', label: '프로필' },
    { key: 'username', label: '이름' },
    { key: 'createdAt', label: '가입 일자' },
    { key: 'userSate', label: '상태' }
]

const store = useStore()

let content = ref([])
let page = ref(0)
let currentPage = ref(1)
let rows = ref(0)
let pageSize = ref(10)
let totalPage = ref(0)
let filter = ref('')

let count = ref(0)

onMounted(async () => {
    getUsers(0, '')
})

function getTableIndex(index) {
    return pageSize.value * page.value + index + 1
}

function pageChange(button, page) {
    getUsers(page - 1, filter.value)
}

function filterData(data) {
    console.log(data)
    filter.value = data
    getUsers(0, filter.value)
}

async function getUsers(nowPage, search) {
    const url = `/users?size=10&page=${nowPage}&search=${encodeURIComponent(search)}`

    await authInstance
        .get(url)
        .then((response) => {
                content.value = response.data.content
                page.value = response.data.pageable.pageNumber
                currentPage.value = response.data.pageable.pageNumber + 1
                rows.value = response.data.totalElements
                pageSize.value = response.data.pageable.pageSize
                totalPage.value = response.data.totalPages
            }
        )
        .catch((error) => {
            alert(error)
        })
}


</script>

<style scoped>
.profile-img {
    width: 70px;
    height: 70px;
    border-radius: 30%;
    object-fit: cover;
}
</style>