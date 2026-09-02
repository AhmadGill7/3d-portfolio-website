export const config = {
    developer: {
        name: "Muhammad",
        fullName: "Muhammad Ahmad",
        title: "Full-Stack Engineer",
        description: "Full-Stack Engineer (MERN/Next.js) with 3+ years shipping production web applications and DeFi protocols. Experienced in scalable REST/real-time systems, MongoDB, Redis, and end-to-end delivery from API to deployment. Bonus: mainnet-deployed smart contracts, AMM architecture, and cross-chain bridge engineering on EVM chains."
    },
    social: {
        github: "ahmadgill7",
        email: "ahmadgillwebdev@gmail.com",
        location: "Faisalabad, Pakistan"
    },
    about: {
        title: "About Me",
        description: "I am a Full-Stack Engineer specializing in MERN and Next.js development with a strong focus on Web3 and blockchain technologies. With 3+ years of experience, I've built production-grade web applications, DeFi protocols, and cross-chain solutions. My expertise spans scalable REST/real-time systems, smart contract development, and end-to-end delivery from API design to mainnet deployment. I'm passionate about building efficient, user-centric applications that push the boundaries of web and blockchain technology."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "NetixSol (Web3Geeks)",
            period: "Apr 2025 - Apr 2026",
            location: "Faisalabad, Pakistan",
            description: "Engineered real-time event-driven architecture and deployed production-grade DeFi protocols with advanced smart contract optimization.",
            responsibilities: [
                "Engineered real-time event-driven architecture using Socket.IO and Redis Pub/Sub, sustaining under 100ms message latency across 1,000+ concurrent client sessions",
                "Reduced gas costs by up to 80% across smart contract suite through storage slot packing and opcode-level refactoring in Solidity",
                "Designed and deployed Next.js/Node.js/MongoDB applications supporting 1000+ concurrent users with average API response time under 100ms",
                "Refactored legacy GraphQL indexing backend (Subsquid), enforcing strict separation of concerns and improving maintainability"
            ],
            technologies: ["Node.js", "Next.js", "Socket.IO", "Redis", "Solidity", "MongoDB", "GraphQL", "Subsquid"]
        },
        {
            position: "Associate Software Engineer",
            company: "CodixSol",
            period: "Jul 2024 - Apr 2025",
            location: "Faisalabad, Pakistan",
            description: "Improved frontend performance and optimized backend systems while mentoring junior developers.",
            responsibilities: [
                "Improved frontend load performance by 25% via code-splitting, lazy loading, and HTTP cache tuning",
                "Cut average API response time by 15% by optimizing MongoDB aggregation pipelines",
                "Reduced total codebase size by 30% through systematic modularization and shared component abstraction",
                "Mentored 2 junior developers on MERN best practices, reducing production defects by 40%"
            ],
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript"]
        },
        {
            position: "Software Engineer Intern",
            company: "Gamica Cloud",
            period: "Jan 2024 - Jul 2024",
            location: "Faisalabad, Pakistan",
            description: "Built and delivered 5+ full-stack MERN applications end-to-end with reusable component systems.",
            responsibilities: [
                "Built and delivered 5+ full-stack MERN applications end-to-end",
                "Contributed to 15% reduction in internal project delivery time through reusable component systems",
                "Developed workflow optimization strategies for team efficiency",
                "Completed structured full-stack curriculum and received direct internship offer"
            ],
            technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Kaspa Finance",
            category: "DeFi / Blockchain",
            technologies: "Solidity, Next.js, WAGMI, Viem, OpenZeppelin, Jest, Hardhat",
            image: "/images/kaspa-finance.png",
            description: "V3-Style Decentralized Exchange on Kasplex Blockchain (Layer 2). Architected a Uniswap V3-style AMM with tick-based concentrated liquidity — protocol reached $15000+ peak TVL and processed $14700+ in single-day swap volume on mainnet.",
            link: "https://app.kaspafinance.io"
        },
        {
            id: 2,
            title: "Kaspa Bridge",
            category: "Cross-Chain / Blockchain",
            technologies: "Solidity, Hyperlane, Next.js, ethers.js, WAGMI, BSC, ETH, Base",
            image: "/images/kaspa-bridge.png",
            description: "First-ever cross-chain bridge for Kasplex Layer 2 using Hyperlane's interoperability protocol. Enables USDT and USDC transfers across BSC, Ethereum, Base, and Kasplex L2. Accumulated $2,000+ in bridge volume within first week of mainnet launch.",
            link: "https://kaspabridge.com"
        },
        {
            id: 3,
            title: "Popit Game",
            category: "Gaming / Real-Time",
            technologies: "Socket.IO, Node.js, React, MongoDB, Web3.js, Smart Contracts",
            image: "/images/devpopit.png",
            description: "Real-time multiplayer betting game with server-authoritative game engine supporting 1,000+ concurrent users. Features escrow-based crypto betting system accepting ETH, BNB, and stablecoins with automated winner payout and on-chain settlement.",
            link: "https://devpopitv2.netlify.app/"
        },
        {
            id: 4,
            title: "DeFi Protocol Suite",
            category: "Smart Contracts",
            technologies: "Solidity, OpenZeppelin, Hardhat, Foundry, EVM",
            image: "/images/placeholder.webp",
            description: "Engineered full smart contract suite including factory, router, liquidity pools, and staking mechanisms. Applied advanced gas optimization strategies reducing per-transaction costs significantly through storage slot packing and calldata optimization.",
            link: "#"
        },
        {
            id: 5,
            title: "Real-Time Event System",
            category: "Backend Architecture",
            technologies: "Socket.IO, Redis Pub/Sub, Node.js, Express.js",
            image: "/images/placeholder.webp",
            description: "Engineered real-time event-driven architecture sustaining under 100ms message latency across 1,000+ concurrent client sessions. Built with Redis Pub/Sub for distributed messaging and horizontal scalability.",
            link: "#"
        },
        {
            id: 6,
            title: "GraphQL Indexing Backend",
            category: "Backend / Web3",
            technologies: "GraphQL, Subsquid, TypeScript, PostgreSQL",
            image: "/images/placeholder.webp",
            description: "Refactored legacy GraphQL indexing backend enforcing strict separation of concerns across resolver, service, and data-access layers. Improved maintainability and eliminated cross-layer coupling for long-term scalability.",
            link: "#"
        }
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
        develop: {
            title: "BLOCKCHAIN DEVELOPER",
            description: "DeFi protocols & smart contract engineering",
            details: "Building production-grade DeFi protocols, AMMs, and cross-chain bridges. Expert in Solidity smart contract development with gas optimization, security best practices, and mainnet deployment experience. Specialized in EVM chains, Layer 2 solutions, and protocol architecture.",
            tools: ["Solidity", "ethers.js", "WAGMI", "Viem", "Hardhat", "Foundry", "OpenZeppelin", "Uniswap V2/V3", "The Graph", "Subsquid"]
        },
        design: {
            title: "FULL-STACK ENGINEER",
            description: "Scalable web applications & real-time systems",
            details: "Building high-performance web applications with React, Next.js, and Node.js. Expert in real-time architectures using Socket.IO and Redis, RESTful and GraphQL APIs, and scalable database design. Experienced in deploying production systems handling 1000+ concurrent users.",
            tools: ["React", "Next.js", "Node.js", "TypeScript", "Express.js", "NestJS", "MongoDB", "PostgreSQL", "Redis", "Docker", "Socket.IO", "GraphQL"]
        }
    }
};


