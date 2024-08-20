<script setup>

</script>

<template>
    <div class="w-25 mx-auto">
        <b-input-group size="sm">
            <b-form-input
                id="filter-input"
                v-model="filter"
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