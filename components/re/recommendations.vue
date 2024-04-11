<template>
    <section class="u-section">
        <header class="bg-cake py-20">
            <div class="u-container u-container--lg">
                <h2 class="font-wwf text-center u-fs68">RECOMMENDATIONS</h2>
            </div>
        </header>
        <div class="flex bg-cake">
            <aside class="min-h-full bg-cake max-w-[25%] border-t border-t-[#f1ebdd sticky top-0 self-start">
                <ul>
                    <li v-for="anchor in anchors" :key="anchor.id">
                        <a href="#" v-scroll-to="'policymakers'" class="flex items-center text-base space-x-6 justify-between font-bold px-9 py-7 border-b border-b-[#f1ebdd] hover:bg-[#f1ebdd]">
                            <span>{{ anchor.title }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </aside>
            <div class="flex-1 p-9 bg-white">
                <div id="companies" class="u-re-section">
                    <div class="u-re-header">
                        <img src="@/assets/img/re-companies-header.png" alt="WHAT SHOULD COMPANIES DO?" class="mix-blend-color-burn">
                        <h3>WHAT SHOULD COMPANIES DO?</h3>
                    </div>
                    <div class="u-re-text">
                        <p>
                            All companies that use palm products (including derivatives) are responsible for helping to reduce the negative environmental and social impacts of palm oil production. For detailed guidance on establishing and implementing ethical palm oil supply chains — as well as ensuring adherence to the recommendations outlined below — WWF encourages companies to refer to the Accountability Framework.
                        </p>
                        <p>
                            <strong>We call on all palm buyers to:</strong>
                        </p>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Make and implement robust commitments</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Adopt and implement group level corporate policies to only source palm oil that is verifiably free of deforestation and ecosystem conversion, and respects human rights.</li>
                                    <li>Make a public time-bound commitment to buy only RSPO CSPO or implement other means to ensure the palm oil purchased is sustainable.</li>
                                    <li>Ensure commitments and actions cover the entire corporate group, apply to all countries where the group operates, and cover all the types of palm oil used.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Purchase sustainable palm oil</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Increase uptake of RSPO CSPO and CSPKO, including transitioning to physical supply chains with Segregated or Identity Preserved oil and supporting independent smallholders through the purchase of Independent </li>
                                    <li>Smallholder Credits.Adopt differentiated targets for derivatives and PKEs that commensurate with the unique challenges to each of the palm oil types.</li>
                                    <li>Devise strategy to address sustainability risks in the section of supply chain that cannot yet achieve 100% certified status.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Ensure supplier accountability</strong></div>
                            <div class="box">
                                <ul>
                                    <li> Source only from suppliers that also commit and implement policies to only purchase palm oil that is verifiably free of deforestation and ecosystem conversion, and respects human rights.</li>
                                    <li>Understand their supply chain and require all suppliers to have traceability to the palm oil mill/plantation, to facilitate the monitoring and management of environmental and social risks.</li>
                                    <li>Monitor their suppliers to ensure compliance with their sustainable palm oil commitments and policies.</li>
                                    <li>Ensure transparency by reporting on palm oil sources and usage (including across regions and application sectors), as well as sustainability progress, non-compliances and actions at least annually.</li>
                                    <li>Fully utilise available resources to buyers, including but not limited to toolkits developed by AFI, POCG’s NDPE IRF Working Group and ASD to generate critical momentum on these supplier engagement platforms.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Take part in sustainability platforms</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Join the RSPO and actively contribute to their vision of making sustainable palm oil the norm.</li>
                                    <li>Participate in action-oriented initiatives and collective advocacy. Businesses committed to sustainable palm oil can come together to push for the transformation of the palm oil market. Some examples include: the RSPO working groups and committees, the Consumer Goods Forum (CGF) Forest Positive Coalition, Palm Oil Transparency Coalition (POTC), the High Carbon Stock Approach (HCSA), the High Conservation Value Resource Network (HCVRN) and national or regional sustainable palm oil alliances.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Take on the ground action</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Allocate resources and invest in palm oil producing landscapes including projects focused on:
                                        <br><br>
                                    1. The conservation and restoration of forests, other natural ecosystems and biodiversity at risk from, or impacted by, unsustainable palm oil production;<br>
                                    2. Smallholder productivity improvements through access to inputs, incentives, finance and capacity building;<br>
                                    3. Smallholder inclusion and sustainability through improved production practices such as regenerative agriculture;<br>
                                    4. Jurisdictional or landscape approaches in which the private sector collaborates with governments, local communities, and civil society toward shared conservation, supply chain sustainability, and green development goals.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Advocate for sustainable palm oil</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Support national and subnational public policies in both producer and consumer countries aimed at mitigating deforestation and conversion, and enabling sustainable palm oil production that is protective of forests, natural ecosystems and human rights.</li>
                                    <li>Undertake public communication and outreach on sustainable palm oil.</li>
                                    <li>Raise consumer awareness of the importance of sustainable palm oil.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="u-re-quote mt-32">
                        “Increase uptake of RSPO CSPO, including transitioning to physical supply chains with Segregated or Identity Preserved oil and supporting independent smallholders through the purchase of Independent Smallholder Credits.”
                    </div>
                </div>
                <div id="policymakers" class="u-re-section">
                    <div class="u-re-header">
                        <img src="@/assets/img/re-policymakers-header.png" alt="WHAT SHOULD POLICYMAKERS DO ?" class="mix-blend-darken">
                        <h3>WHAT SHOULD POLICYMAKERS DO ?</h3>
                    </div>
                    <div class="u-re-text">
                        <p>
                            Policymakers play a critical role in promoting deforestation- and conversion-free agricultural commodity supply chains globally, through enacting strong legislation in both consumer and producer countries that level the playing field and hold all stakeholders to the same standards.
                        </p>
                        <p>
                            <strong>We call on policymakers in producer countries to:</strong>
                        </p>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Adopt and enforce binding legislation,</strong> policies and incentives that will enable and require agricultural commodities to be produced more sustainably, including requirements to halt deforestation, ecosystem conversion and human rights risks, and to increase traceability and transparency of supply chains.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Develop and provide access to financial and technical incentives for producers to adopt sustainable production practices,</strong> avoid conversion of natural ecosystems, and expand production through the sustainable intensification and rehabilitation of degraded land.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Support and promote public-private partnerships</strong> aimed at ending deforestation and ecosystem conversion and related infringement on human rights in commodity supply chains.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Advocate for and accelerate delivery of commodities free of deforestation,</strong> conversion, and human rights abuse, as one element to implement the Paris Agreement on climate change, the Sustainable Development Goals, and the Convention on Biological Diversity.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Work together with the industry to forge national alliances,</strong> country-level initiatives and landscape/jurisdictional approaches towards sustainable commodities that prevent deforestation, ecosystem conversion and human rights abuse, and support integrated land-use planning.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Promote and implement policies for conversion-free, nature-based development pathways in high-risk regions.</strong> This can include promoting long-term conservation and restoration through sustainable, fair and participative economic use of forests and other natural ecosystems and strengthening traditional land uses and land rights.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title">Promote and implement policies to reduce GHG emissions <strong>in the production of agricultural</strong> commodities in an effort to limit global warming to below 1.5°c in line with the IPCC recommendations.</div>
                        </div>
                    </div>
                    <div class="u-re-text mt-20">
                        <p>
                            <strong>We call on policymakers in consumer countries to:</strong>
                        </p>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Adopt and enforce binding legislation,</strong> policies and incentives to ensure that agricultural commodities and derived products that are associated with deforestation, conversion or human rights risks do not enter their markets. These policies should apply to both companies and financial institutions.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Develop and implement clear traceability and transparency requirements along</strong> the supply chain and a robust mandatory due diligence obligation applying to companies that trade, use and finance agricultural commodities (including first importers) to assess and minimise the risk of their products and commodities being linked to the conversion or degradation of forests and other ecosystems and/or to human rights abuse.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Engage in dialogue and cooperate</strong> with producer countries to support the development and implementation of financial and technical solutions including all stakeholders to support conversion-free nature-based development pathways. This may include land-use planning, support for smallholders, support for land tenure reform, and actions within the country to facilitate the transition towards more sustainable food and farming systems that provide alternative or complementary development pathways.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Establish public procurement policies</strong> that require deforestation- and conversion-free commodities.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Advocate for and accelerate delivery of commodities that are free of deforestation,</strong> conversion, and human rights abuse, following and building upon the European Union’s work on deforestation-free supply chains, the Amsterdam Declarations, the New York Declaration on Forests and national commitments for sustainable supply chains.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Engage in consumer-consumer country cooperatio</strong> to support producer regions in transitioning to sustainable production and avoid leakage of unsustainable products.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Adopt policies and incentives</strong> to reduce harmful consumption and waste.</div>
                        </div>
                    </div>
                    <div class="u-re-pic mt-20">
                        <img v-motion-slide-visible-once-bottom src="@/assets/img/re-policymakers-pic.png" alt="">
                    </div>
                    <div class="u-re-quote mt-20">
                        “Establish public procurement policies that require deforestation- and conversion-free commodities.”
                    </div>
                </div>
                <div id="finance" class="u-re-section">
                    <div class="u-re-header">
                        <img src="@/assets/img/re-finance-header.png" alt="WHAT SHOULD THE FINANCE SECTOR DO?" class="mix-blend-luminosity">
                        <h3>WHAT SHOULD THE FINANCE SECTOR DO?</h3>
                    </div>
                    <div class="u-re-text">
                        <p>
                            Financial institutions have a key role to play in ensuring that the palm oil supply chains linked to their investments, clients and portfolios are ethical. Financial institutions should use the Palm Oil Buyers Scorecard to identify and review any risk of deforestation, conversion and human rights abuse represented by the buyers assessed in their portfolio, and use the methodology to engage buyers not covered in this scorecard.
                        </p>
                        <p>
                            <strong>We further call on financial institutions to:</strong>
                        </p>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Participate in action-oriented initiatives and advocacy</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Join the RSPO and actively contribute to their vision of making sustainable palm oil the norm.</li>
                                    <li>Implement the recommendations of the Taskforce on Climate-related Financial Disclosures (TCFD) and commit to setting Science-Based Targets for decarbonization across their portfolios. Endorse and support the development of the Taskforce on Nature-related Financial Disclosures (TNFD).</li>
                                    <li>Investors become a PRI signatory and participate actively in the PRI Investor Working Group on Sustainable Commodities (which covers palm oil) and in the PRI Sustainable Commodities Practitioners' Group.</li>
                                    <li>Banks become a supporter of the Principles for Responsible Banking (PRB) and follow its guidance on Biodiversity Target-setting.</li>
                                    <li>Invest in on the ground projects and/or financial products that incentivise and support a sustainable palm oil industry.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Develop sector policies and raise expectations towards clients and investee companies (including banks)</strong></div>
                            <div class="box">
                                <ul>
                                    <li>Adopt and disclose clear and time-bound deforestation-free, conversion-free, and human rights commitments that require all clients and investee companies (including banks) operating across palm oil supply chains to comply with WWF’s minimum expectations listed under the ‘What should companies do?’ section of this report. These policies and commitments should be aligned with the RSPO and the Accountability Framework.</li>
                                    <li>Assess deforestation, conversion and human rights risks in their portfolio and engage all investee companies to mainstream palm oil supply chains that are free of deforestation and conversion, and respect human rights.</li>
                                    <li>Engage with clients and investee companies that do not fulfill these expectations and support them to develop and implement ambitious time-bound actions plans for meeting these expectations. Engagement is supported by clear and public escalation and non-compliance strategies when time-bound actions are not met.</li>
                                    <li>Develop individual or pre-competitive investment/portfolio disclosure frameworks that encourage deforestation- and conversion-free palm oil supply chains that respect human rights (e.g. Reporting using the OECD, Accountability Framework and other guidelines).</li>
                                    <li>Design and offer financial products to incentivise and enable palm oil production, sourcing and trade that is deforestation- and conversion-free and protects human rights.</li>
                                    <li>Design and offer financial products which incentivise and enable palm oil production, sourcing and trade practices that protect forests, natural ecosystems and human rights, and support smallholder inclusion and sustainability.</li>
                                </ul>
                            </div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Increase transparency </strong></div>
                            <div class="box">
                                <ul>
                                    <li>Disclose processes for monitoring and verifying clients' and investee companies' progress and compliance with time-bound action plans.</li>
                                    <li>Disclose progress made on engaging with clients and investee companies, the percentage of companies with operations covered by 100% RSPO CSPO commitments and traceability action plans, as well as their progress towards achieving these.</li>
                                    <li>Disclose steps taken in cases of non-compliance, including the number and name of palm oil companies excluded from lending and investment portfolios due to a lack of progress on time-bound action plans.</li>
                                    <li>Investors disclose proxy voting policies for key environmental and social risks related to the palm oil sector, as well as voting outcomes and rationale on resolutions pertaining to these risks.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="u-re-pic mt-20">
                        <img v-motion-slide-visible-once-bottom src="@/assets/img/re-finance-pic.png" alt="">
                    </div>
                    <div class="u-re-quote mt-20">
                        “Assess deforestation, conversion and human rights risks in their portfolio and engage all invested companies to mainstream palm oil supply chains that are free of deforestation and conversion, and respect human rights.”
                    </div>
                </div>
                <div id="consumers" class="u-re-section">
                    <div class="u-re-header">
                        <img src="@/assets/img/re-consumers-header.png" alt="WHAT SHOULD CONSUMERS DO?" class="mix-blend-luminosity">
                        <h3>WHAT SHOULD CONSUMERS DO?</h3>
                    </div>
                    <div class="u-re-text">
                        <p>
                            Consumers have a key role to play in pushing the palm oil industry towards sustainability, as brands really care about what their customers think. While consumer awareness of the negative impacts associated with irresponsible palm oil production is growing in both consumer and producer countries, several challenges continue to inhibit widespread demand for sustainable palm oil. Among them is the fact that palm oil continues to be a ‘hidden ingredient’ in many products, along with the rise of anti-palm oil sentiments in certain markets. This underlines the urgent need for brands to educate consumers on sustainable palm oil and its importance to create real positive change for nature and people.
                        </p>
                        <p>
                            <strong>We call on consumers to:</strong>
                        </p>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Explore the contextual information provided in the scorecard</strong>, WWF’s educational videos and the interactive website to familiarise themselves with the key issues and challenges characterising palm oil production, as well the path forward.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Use the scorecard</strong> to see how well their favourite supermarkets, manufacturers and hospitality companies are doing on sustainable palm oil and make responsible consumption and purchasing decisions based on the information provided.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Become sustainability ambassadors by sharing the scorecard results</strong> on social media and with their networks. They can also use social media to raise public awareness of the importance of sustainable palm oil and ask brands about their sourcing practices.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Become advocates by demonstrating support for initiatives</strong> aimed at influencing public policy and market supply for sustainable palm oil.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Understand the potentially worse outcomes of supporting the boycott movement.</strong> Palm-oil free does not equate to a product being deforestation free- depending on whether any of the ingredients have a forest footprint.</div>
                            <div class="u-re-sep"></div>
                        </div>
                    </div>
                    <div class="u-re-tick">
                        <img src="@/assets/img/re-tick.svg"/>
                        <div class="content">
                            <div class="title"><strong>Choose certified sustainable palm oil,</strong> that way companies can actually go beyond doing no harm- they can actively, purposefully contribute to the solution, breaking the link between palm oil and deforestation, driving the industry in the right direction.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const anchors = ref([
    { id: 'companies', title: 'What should companies do?'},
    { id: 'policymakers', title: 'What should policymakers do?'},
    { id: 'finance', title: 'What should the finance sector do?'},
    { id: 'consumers', title: 'What should consumers do?'}
])
</script>