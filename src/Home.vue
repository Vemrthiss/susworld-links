<template>
    <div class="main">
        <h1>Bibliography for SSW Poster</h1>
        <h2>By Cohort 06 Group 2</h2>
        <Link v-for="url of urls" :key="url.id" :id="url.id" :hyperlink="url.link" :author="url.author" :title="url.title"></Link>
    </div>
</template>

<script>
    import Link from './components/Link';

    export default {
        data() {
            return {
                urls: [
                    {
                        id: 1,
                        link: 'https://www.sciencedirect.com/science/article/pii/S0375650518300786',
                        author: 'Marta R.Karlsdottir',
                        title: 'Life cycle assessment of a geothermal combined heat and power plant based on high temperature utilization'
                    },
                    {
                        id: 2,
                        link: 'https://www.sciencedirect.com/science/article/pii/S1364032120303051',
                        author: 'Ruirui Zhang',
                        title: 'Is geothermal heating environmentally superior than coal fired heating in China?'
                    }
                ]
            }
        },
        components: {
            Link
        }
    }
</script>

<style lang="scss" scoped>

</style>