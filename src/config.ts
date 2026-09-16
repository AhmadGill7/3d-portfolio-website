export const config = {
    developer: {
        name: "Muhammad",
        fullName: "Muhammad Ahmad",
        title: "Full-Stack Engineer",
        description: "Full-Stack Engineer with 3+ years of experience building production-grade web applications, backend systems, and Web3 infrastructure. Experienced with MERN, Next.js, real-time systems, databases, smart contracts, DeFi protocols, and cross-chain infrastructure. Currently expanding my focus into AI systems, distributed systems, and software architecture."
    },

    social: {
        github: "ahmadgill7",
        email: "ahmadgillwebdev@gmail.com",
        location: "Faisalabad, Pakistan"
    },

    about: {
        title: "About Me",
        description: "I'm a Software Engineer with 3+ years building production-grade full-stack, Web3, and blockchain systems.\nMy experience spans MERN/Next.js applications, backend architecture, real-time systems, DeFi protocols, and cross-chain infrastructure.\nCurrently expanding into AI systems and software architecture - exploring system design, distributed systems, LLM applications, and agentic AI."
    },

    experiences: [
        {
            position: "Software Engineer Intern",
            company: "Gamica Cloud",
            period: "Jan 2024 - Jul 2024",
            location: "Faisalabad, Pakistan",
            description: "Built and delivered full-stack MERN applications while developing practical experience across frontend, backend, APIs, and databases.",
            responsibilities: [
                "Built and delivered 5+ full-stack MERN applications end-to-end",
                "Contributed to a 15% reduction in internal project delivery time through reusable component systems",
                "Developed workflow optimization strategies for team efficiency",
                "Completed structured full-stack curriculum and received a direct internship offer"
            ],
            technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"]
        },
        {
            position: "Associate Software Engineer",
            company: "CodixSol",
            period: "Jul 2024 - Apr 2025",
            location: "Faisalabad, Pakistan",
            description: "Built and optimized full-stack applications while improving frontend performance, backend efficiency, and codebase maintainability.",
            responsibilities: [
                "Improved frontend load performance by 25% via code-splitting, lazy loading, and HTTP cache tuning",
                "Cut average API response time by 15% by optimizing MongoDB aggregation pipelines",
                "Reduced total codebase size by 30% through systematic modularization and shared component abstraction",
                "Mentored 2 junior developers on MERN best practices, reducing production defects by 40%"
            ],
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript"]
        },
        {
            position: "Software Engineer",
            company: "NetixSol (Web3Geeks)",
            period: "Apr 2025 - Apr 2026",
            location: "Faisalabad, Pakistan",
            description: "Engineered production-grade full-stack and Web3 systems, including real-time infrastructure, DeFi protocols, and smart contract integrations.",
            responsibilities: [
                "Engineered real-time event-driven architecture using Socket.IO and Redis Pub/Sub, sustaining under 100ms message latency across 1,000+ concurrent client sessions",
                "Reduced gas costs by up to 80% across smart contract suite through storage slot packing and opcode-level refactoring in Solidity",
                "Designed and deployed Next.js/Node.js/MongoDB applications supporting 1,000+ concurrent users with average API response times under 100ms",
                "Refactored legacy GraphQL indexing backend (Subsquid), enforcing strict separation of concerns and improving maintainability"
            ],
            technologies: ["Node.js", "Next.js", "Socket.IO", "Redis", "Solidity", "MongoDB", "GraphQL", "Subsquid"]
        },


    ],

    projects: [
        {
            id: 1,
            title: "Kaspa Finance",
            category: "DeFi / Blockchain",
            technologies: "Solidity, Next.js, WAGMI, Viem, OpenZeppelin, Jest, Hardhat",
            image: "/images/kaspa-finance.png",
            description: "V3-style decentralized exchange on Kasplex Layer 2. Worked across the protocol and application stack, including concentrated-liquidity AMM infrastructure, smart contracts, routers, and frontend integration. The protocol reached $15,000+ peak TVL and processed $14,700+ in single-day swap volume on mainnet.",
            link: "https://kaspafinance.io"
        },
        {
            id: 2,
            title: "Digital Signage Platform",
            category: "SaaS / Full-Stack",
            technologies: "React, Next.js, Node.js, TypeScript, MongoDB, Docker",
            image: "/images/digital-signage.png",
            description: "Client project currently in development. A web-based digital signage management platform for managing signage boards, content, playlists, scheduling, publishing, and device status. Focused on building the management dashboard and web-based signage/player infrastructure.",
            link: "https://orbit-screens-ui.vercel.app/"
        },
        {
            id: 3,
            title: "Kaspa Bridge",
            category: "Cross-Chain / Blockchain",
            technologies: "Solidity, Hyperlane, Next.js, ethers.js, WAGMI, BSC, Ethereum, Base",
            image: "/images/kaspa-bridge.png",
            description: "Cross-chain bridge infrastructure connecting Kasplex Layer 2 with EVM networks using Hyperlane. Supported USDT and USDC transfers across BSC, Ethereum, Base, and Kasplex L2, with smart contract and frontend integration.",
            link: "https://kaspabridge.com"
        },
        {
            id: 4,
            title: "Popit Game",
            category: "Gaming / Real-Time",
            technologies: "Socket.IO, Node.js, React, MongoDB, Web3.js, Smart Contracts",
            image: "/images/devpopit.png",
            description: "Real-time multiplayer crypto game with a server-authoritative game engine and escrow-based blockchain interactions. Supports concurrent users, automated winner payouts, and on-chain settlement.",
            link: "https://devpopitv2.netlify.app/"
        },
        // {
        //     id: 5,
        //     title: "DeFi Protocol Suite",
        //     category: "Smart Contracts",
        //     technologies: "Solidity, OpenZeppelin, Hardhat, Foundry, EVM",
        //     image: "/images/placeholder.webp",
        //     description: "Smart contract infrastructure including factories, routers, liquidity pools, and staking mechanisms. Applied gas optimization techniques including storage slot packing and calldata optimization.",
        //     link: "#"
        // },
        // {
        //     id: 6,
        //     title: "Real-Time Event System",
        //     category: "Backend Architecture",
        //     technologies: "Socket.IO, Redis Pub/Sub, Node.js, Express.js",
        //     image: "/images/placeholder.webp",
        //     description: "Distributed real-time event architecture using Socket.IO and Redis Pub/Sub, designed to support high-concurrency client sessions with low-latency messaging and horizontal scalability.",
        //     link: "#"
        // },
        // {
        //     id: 7,
        //     title: "GraphQL Indexing Backend",
        //     category: "Backend / Web3",
        //     technologies: "GraphQL, Subsquid, TypeScript, PostgreSQL",
        //     image: "/images/placeholder.webp",
        //     description: "Refactored a GraphQL indexing backend using clear resolver, service, and data-access boundaries, reducing cross-layer coupling and improving long-term maintainability.",
        //     link: "#"
        // }
    ],

    contact: {
        email: "ahmadgillwebdev@gmail.com",
        github: "https://github.com/ahmadgill7",
        linkedin: "https://linkedin.com/in/ahmadgill",
        twitter: "",
        facebook: "",
        instagram: "https://www.instagram.com/ahmadd.gill/"
    },

    skills: {
        fullstack: {
            title: "FULL-STACK & WEB3 ENGINEER",
            description: "Production web applications, DeFi protocols & blockchain infrastructure",
            details: "Building production-grade systems across full-stack web development and Web3. Experienced with React, Next.js, Node.js, TypeScript, real-time systems, databases, as well as Solidity smart contracts, DeFi protocols, AMMs, gas optimization, and cross-chain infrastructure.",
            tools: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Socket.IO",
                "Solidity",
                "ethers.js",
                "Wagmi",
                "DeFi Protocols",
                "Smart Contracts"
            ]
        },

        ai: {
            title: "AI SYSTEMS & ARCHITECTURE",
            description: "LLM applications, agentic systems & distributed architecture",
            details: "Exploring AI systems from an engineering and architecture perspective, with focus on LLM applications, agentic workflows, RAG, orchestration, distributed systems, event-driven architecture, and scalable AI infrastructure.",
            tools: [
                "LLM Applications",
                "Agentic AI",
                "RAG",
                "AI Orchestration",
                "System Design",
                "Distributed Systems",
                "Event-Driven Architecture",
                "Queues",
                "Caching",
                "Observability"
            ]
        }
    }
};