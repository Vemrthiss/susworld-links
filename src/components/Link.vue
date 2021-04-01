<template>
    <div class="link" :id="id">
        <div class="link__info">
            <p class="link__num">{{id}}.</p>
            <p class="link__author">{{author}}</p>
            <p class="link__title">{{title}}</p>
        </div>
        <p>Available: <a :href="hyperlink" class="link__hyperlink">{{hyperlink}}</a></p>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            hyperlink: String,
            author: String,
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    .link {
        margin-bottom: 2rem;

        &__info {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__author {
            margin: 1rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__num {
            font-weight: 700;
        }

        &:target {
            background-color: yellow;
        }
    }
</style>