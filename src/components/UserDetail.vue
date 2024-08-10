<template>
    <div class="detail-box">
        <div class="profile-box">
            <Carousel autoplay="5000" items-to-show="1" :wrap-around="true">
                <Slide v-for="(imgUrl, priority) in userDetailData.profileUrl" :key="priority">
                    <div class="carousel__item">
                        <img :src="imgUrl" alt="프로필 사진"/>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>

        <div class="detail-info">

            <span> <b-badge variant="light">전화번호</b-badge> : {{ userDetailData.phoneNumber }}</span> <br>
            <span> <b-badge variant="light">닉네임</b-badge> : {{ userDetailData.username }}</span> <br>
            <span> <b-badge variant="light">생년 월일</b-badge> : {{ userDetailData.birthDay }}</span> <br>
            <span> <b-badge variant="light">이메일</b-badge> : {{ userDetailData.email }}</span> <br>
            <span> <b-badge variant="light">거주지</b-badge> : {{ userDetailData.userLocation }}</span> <br>
            <span> <b-badge variant="light">키</b-badge> : {{ userDetailData.tall }} cm</span> <br>
            <span> <b-badge variant="light">성별</b-badge> : {{ userDetailData.gender }}</span> <br>
            <span> <b-badge variant="light">선호 성별</b-badge> : {{ userDetailData.preferGender }}</span> <br>
            <span> <b-badge variant="light">음주 여부</b-badge> : {{ userDetailData.drinkStatus }}</span> <br>
            <span> <b-badge variant="light">흡연 여부</b-badge> : {{ userDetailData.smokingStatus }}</span> <br>
            <span> <b-badge variant="light">종교</b-badge> : {{ userDetailData.religion }}</span> <br>
        </div>
        <div class="detail-info">
            <span> <b-badge variant="light">서비스 이용약관 동의 목록</b-badge> <br>
                {{ userDetailData.serviceAgreeList }}
<!--                <span v-for="([agreeCategory, isAgree], index) in userDetailData.serviceAgreeList">-->
<!--                    {{ agreeCategory }} : {{ isAgree ? "동의" : "비동의"}}-->
<!--                </span>-->

            </span> <br>
            <span> <b-badge variant="light">SNS 가입 타입</b-badge> : {{ userDetailData.snsSignUpList }}</span> <br>
            <span> <b-badge variant="light">관심사</b-badge> : {{ userDetailData.interests }}</span> <br>
            <span> <b-badge variant="light">이상형</b-badge> : {{ userDetailData.idealTypes }}</span> <br>

        </div>
    </div>

</template>

<script setup>

import { onMounted, ref } from 'vue'
import { getUserDetail } from '@/api/user/UserDetail.js'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
    uuid: String
})

const userDetailData = ref({})
onMounted(() => getUserDetail(props.uuid).then((result) => {
    userDetailData.value = result

}))

</script>

<style scoped>
.detail-box {
    display: flex;
    align-items: center;
}

.profile-box {
    width: 250px;
    height: auto;
    margin-left: 20px;
    margin-right: 30px;
}

.carousel__item {
    width: 100%;
    height: 100%;
    background-color: var(--vc-clr-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 정사각형에 맞게 채워짐 */
    border-radius: 8px;
}

.detail-info {
    width: 30%;
    padding: 10px;
}


</style>

