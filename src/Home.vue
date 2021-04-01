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
                        author: 'Karlsdottir, Marta R. et al.',
                        title: '“Life cycle assessment of a geothermal combined heat and power plant based on high temperature utilization.” Geothermics 84 (2020): 101727. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 2,
                        link: 'https://www.sciencedirect.com/science/article/pii/S1364032120303051',
                        author: 'Zhang, Ruirui et al.',
                        title: '“Is geothermal heating environmentally superior than coal fired heating in China?” Renewable and Sustainable Energy Reviews 131 (2020): 110014. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 3,
                        link: 'https://news.stanford.edu/2019/05/23/lessons-south-korea-solving-geothermals-earthquake-problem/',
                        author: 'University, Stanford.',
                        title: '“Solving geothermal energy’s earthquake problem | Stanford News.” Stanford News. Stanford University, 23 May 2019. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 4,
                        link: 'https://www.sciencedirect.com/science/article/pii/S0959652621002286',
                        author: 'Irfan, Muhammad et al.',
                        title: '“An assessment of consumers’ willingness to utilize solar energy in China: End-users’ perspective.” Journal of Cleaner Production 292 (2021): 126008. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 5,
                        link: 'https://www.straitstimes.com/singapore/environment/solar-energy-to-meet-4-of-singapores-energy-demand-by-2030-up-from-less-than-1',
                        author: 'Tan, Audrey.',
                        title: '“Singapore to ramp up solar energy production to power 350,000 homes by 2030.” The Straits Times, 29 Oct. 2019. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 6,
                        link: 'https://www.eco-business.com/news/solar-could-meet-43-of-singapores-power-demand-during-mid-day-by-2050-study/',
                        author: 'Ha, Tim.',
                        title: '“Solar could meet 43% of Singapore’s power demand during mid-day by 2050: study.” Eco-Business. Eco-Business, 12 May 2020. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 7,
                        link: 'https://www.eco-business.com/news/could-solar-energy-sharing-between-australia-and-singapore-be-a-model-for-other-regions/',
                        author: 'Neo Chai Chin.',
                        title: '“Could solar energy sharing between Australia and Singapore be a model for other regions?” Eco-Business. Eco-Business, 24 Jul. 2019. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 8,
                        link: 'https://www.sciencedirect.com/science/article/pii/S0301421513003856',
                        author: 'Hall, Charles A.S., Jessica G. Lambert, and Stephen B. Balogh.',
                        title: '“EROI of different fuels and the implications for society.” Energy Policy 64 (2014): 141–152. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 9,
                        link: 'https://openei.org/wiki/File:Air_emissions_summary.png',
                        author: 'OpenEI.',
                        title: '“File:Air emissions summary.png | Open Energy Information.” Openei.org, 2015. Online. Internet. 1 Apr. 2021.'
                    },
                    {
                        id: 10,
                        link: 'https://www.geothermal-energy.org/pdf/IGAstandard/NZGW/2013/Southon_Final.pdf',
                        author: 'Southon, Michael, and Susan Krumdieck.',
                        title: '"Energy Return on Investment (EROI) For Distributed Power Generation from Low-Temperature Heat Sources Using the Organic Rankine Cycle.", n.d. Online. Internet. 1 Apr. 2021.'
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