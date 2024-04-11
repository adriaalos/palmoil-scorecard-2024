import { defineStore } from 'pinia'

export const useCsStore = defineStore('csStore', () => {
    const casestudy = ref(null)
    const casestudies = ref([
        {
            id: 247,
            company: 'beiersdorf',
            approach: {
                intro: "<p>As a global skin care company, Beiersdorf does not purchase palm (kernel) oil directly but uses its derivatives for the production of cosmetic products. We strive to take a leading position on sustainability in the palm oil supply chain and focus our <a href='https://www.beiersdorf.com/sustainability/environment/sustainable-land-use/palm-oil' target='_blank'>Sustainable Palm Roadmap</a> on four main pillars:</p>",
                description: "<ul><li><strong>Sustainable Certification:</strong> 100% of our global palm-based raw materials are RSPO Mass Balance certified since end of 2020.</li><li><strong>Transparency:</strong> We gain transparency in our palm supply chain by tracing back our raw materials to the level of mills and plantations.</li><li><strong>Transformation:</strong> We support smallholder farmers and landscape projects with WWF in Indonesia and Malaysia.</li><li><strong>Collaboration:</strong> We collaborate with peer companies and suppliers in key multi-stakeholder initiatives to drive sustainable transformation in the palm supply chain.</li></ul>",
                closing: "<p>We disclose our progress in our annual <a href='https://www.beiersdorf.com/sustainability/reporting/sustainability-reporting' target='_blank'>sustainability report</a> and <a href='https://rspo.org/de/members/4-0125-10-000-00/' target='_blank'>RSPO ACOP report</a>. We received the “CDP Triple A” score on climate, water and forest, including for our sustainable palm program.</p>"
            },
            roadblocks: "<p>Through sustainable certification, transparency, and industry transformation, we aim to identify and minimize environmental and social risks along the palm supply chain. Our <a href='https://www.beiersdorf.com/sustainability/environment/sustainable-land-use/palm-oil' target='_blank'>“Sustainable Palm Roadmap”</a> and our <a href='https://www.beiersdorf.com/~/media/Beiersdorf/sustainability/environment/sustainable-land-use/palm-oil/downloads/Beiersdorf-sustainable-palm-policy-2021.pdf' target='_blank'>“Sustainable Palm Policy”</a> guide us in our worldwide activities for more sustainable raw material sourcing.</p><p>Main challenges are to:</p><ul><li>Achieve traceability to mills and plantation level in the palm (kernel) oil derivatives supply chain, which involves a wide range of different supply chain players</li><li>Obtain RSPO certification and access to the market for independent smallholder farmers in key sourcing countries</li><li>Monitor and manage risks of No Deforestation, No Peat, No Exploitation (NDPE) in the complex palm derivatives supply chain</li></ul>",
            plan: "<p>Moving forward, we will focus our efforts on three key areas:</p><ul><li><strong>Deforestation-Free Supply Chains:</strong> We aim to source our main renewable materials from sustainable and deforestation-free sources by 2025. We set up a task force to ensure compliance with the EU Deforestation Regulation by the end of 2024.</li><li><strong>Transparency & Risk Monitoring:</strong> We gain transparency in our palm supply chain by tracing back our raw materials to the level of mills and plantations. This helps us to identify priority areas, mills and suppliers for engagement and/or risk mitigation.</li><li><strong>Sustainable Transformation:</strong> We collaborate with non-profit and supply chain partners and support various smallholder projects and RSPO certification of farmers in key sourcing countries. Through active participation in industry associations (RSPO, FONAP, Action for Sustainable Derivatives) we aim to achieve sector transformation towards more sustainable palm production.</li></ul>"
        },
        {
            id: 266,
            company: 'danone',
            approach: {
                intro: "",
                description: "<p>In December 2022, Danone issued its <a href='https://www.danone.com/content/dam/corp/global/danonecom/about-us-impact/policies-and-commitments/en/2022/danone-renew-forest-policy-dec-2022.pdf' target='_blank'>Forest Policy</a>, committing to deliver verified deforestation and conversion free supply chains by 2025, while moving towards a forest positive future. It addresses all forms of deforestation and land conversion following the Accountability Framework initiative (AFi) definitions. Our teams made huge progress; by switching towards RSPO Segregated volumes (88% in 2023, 95% in 2023) but also maintaining a high level of traceability (99,3% of TTP, 99,8% in H1 2023). In 2023, Danone was recognized for the fifth year in a row as global environmental leader with triple 'A' score given by CDP - including A rating for Palm.</p>",
                closing: ""
            },
            roadblocks: "<p>Danone has committed to removing deforestation and conversion from its supply chain by 2025 on key commodities including palm. Achieving these targets will not be easy. Land use is driven by competing needs and interests, with many stakeholders involved, many of whom we do not deal with directly. Going beyond certification is key and collaboration sits at the heart of our approach by further investing within and beyond our supply chain and supporting systemic change by working with others via coalitions such as CGF-Forest positive Coalition and the Sustainable Agriculture Initiative Platform – to drive lasting impact.",
            plan: "<p>Our action plan is structured using the 3 core pillars of our Forest policy:</p><ul><li><strong>Clean Supply chains:</strong> our target is 100% verified and fully traceable palm by 2025. We aim to achieve this by reaching the highest percentage of RSPO segregated palm (alongside 100% of traceability to mill and to plantation).</li><li>We will ensure our roadmap also aligns with regulations such as the EU Deforestation regulation.</li><li><strong>Responsible Suppliers:</strong> we continue to engage with direct suppliers and monitor their progress against deforestation and conversion commitments.</li><li><strong>Regeneration:</strong> we will expand our support for landscape projects which transform the palm sector like we already do by collaborating with the Livelihoods Fund for Family Farming since 2021 with a 10-year project to help 2,500 smallholder palm oil farmers achieve a sustainable transition in Sumatra island. but also by supporting the Siak Pelalawan Landscape Program since 2018. We believe that systemic change can only come through wider shifts in policy and society, where our voice in collaboration with others can drive lasting impact - including within coalitions such as CGF-Forest positive Coalition and the SAI Platform.</li></ul>"
        },
        {
            id: 279,
            company: 'ferrero',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 288,
            company: 'bimbo',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 302,
            company: 'loreal',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 304,
            company: 'lg',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 305,
            company: 'lidl',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 307,
            company: 'lotte-wedel',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 318,
            company: 'nutreco',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 320,
            company: 'p&g',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 320,
            company: 'p&g',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 328,
            company: 'sainsburys',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 346,
            company: 'unilever',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 276,
            company: 'edeka',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 284,
            company: 'godrej',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        },
        {
            id: 314,
            company: 'neste',
            approach: {
                intro: "",
                description: "",
                closing: ""
            },
            roadblocks: "",
            plan: ""
        }
    ])

    return {
        casestudy,
        casestudies
    }
})