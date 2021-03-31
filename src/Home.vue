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
                    },
                    {
                        id: 3,
                        link: 'https://news.stanford.edu/2019/05/23/lessons-south-korea-solving-geothermals-earthquake-problem/',
                        author: 'Josie Garthwaite',
                        title: 'Lessons from Pohang: A Stanford geophysicist discusses geothermal energy’s earthquake problem – and possible solutions'
                    },
                    {
                        id: 4,
                        link: 'https://www.sciencedirect.com/science/article/pii/S0959652621002286',
                        author: 'Muhammad Irfan',
                        title: 'An assessment of consumers’ willingness to utilize solar energy in China: End-users’ perspective'
                    },
                    {
                        id: 5,
                        link: 'https://www.straitstimes.com/singapore/environment/solar-energy-to-meet-4-of-singapores-energy-demand-by-2030-up-from-less-than-1',
                        author: 'Audrey Tan',
                        title: 'Singapore to ramp up solar energy production to power 350,000 homes by 2030'
                    },
                    {
                        id: 6,
                        link: 'https://www.eco-business.com/news/solar-could-meet-43-of-singapores-power-demand-during-mid-day-by-2050-study/',
                        author: 'Eco-Business',
                        title: 'Solar could meet 43% of Singapore\'s power demand during mid-day by 2050: study'
                    },
                    {
                        id: 7,
                        link: 'https://www.eco-business.com/news/could-solar-energy-sharing-between-australia-and-singapore-be-a-model-for-other-regions/',
                        author: 'Eco-Business',
                        title: 'Could solar energy sharing between Australia and Singapore be a model for other regions?'
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