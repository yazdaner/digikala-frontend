<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-4">
            <div class="ms-4">
                <CoreSkeletonImage class="default-image" />
                <div class="d-flex">
                    <CoreSkeletonImage v-for="i in 5" class="gallery-image" />
                </div>
            </div>
        </div>
        <div class="col-8 mt-5">
            <CoreSkeletonTextTwoLine />
            <div class="row">
                <div class="col-8 mt-4">
                    <CoreSkeletonTextTwoLine />
                    <CoreSkeletonTextTwoLine />
                </div>
                <div class="col-4">
                    <CoreSkeletonImage class="variation-box"/>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.default-image {
    height: 350px;
    width: 100%;
    border-radius: 5px;
    margin: 20px 0;
}

.gallery-image{
    height: 70px;
    width: 70px;
    margin-left:10px;
    border-radius: 5px;
}

.variation-box{
    height: 400px;
    border-radius: 5px;
}
</style>
