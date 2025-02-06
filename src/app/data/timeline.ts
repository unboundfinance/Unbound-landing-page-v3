type RoadmapEvent = { 
  date: string; 
  description: string; 
  link?: string; // ✅ Added optional link field
};

export const roadmapEvents: { [year: string]: RoadmapEvent[] } = {
  "2020": [
    {
      date: "March 2020",
      description: "Research and ideation for Unbound begins.",
      
    },
    {
      date: "April 2020",
      description: "First draft of the whitepaper is released.",
      
    },
    {
      date: "May 2020",
      description: "Development of proof of concept kicks off."
    },
    {
      date: "June 2020",
      description: "Protocol is pitched to OGS for feedback."
    },
    {
      date: "August 2020",
      description: "Official registration of the Unbound Finance domain name.",
      link: "https://unbound.finance"
    },
    {
      date: "December 2020",
      description: "Release of the inaugural official whitepaper.",
      
    },
  ],
  "2021": [
    {
      date: "February 2021",
      description: "Unbound releases its application and landing page.",
      link: "https://x.com/unboundfinance/status/1776211603488162195"
    },
    {
      date: "April 14th, 2021",
      description: "Unbound launches Zeta Testnet.",
     
    },
    {
      date: "June 10th, 2021",
      description: "Unbound Finance closes its first round of investment."
    },
    {
      date: "August 15th, 2021",
      description: "Unbound debuts the first-ever Cross-Chain stablecoin UND on Polygon.",
      link: "https://x.com/unboundfinance/status/1498174888955486208"
    },
    {
      date: "August 19th, 2021",
      description: "Unbound unveils its initial official Roadmap."
    },
    {
      date: "September 2nd, 2021",
      description: "Unbound partners with Harmony",
      link: "https://harmony.one/unbound"
    },
    {
      date: "September 28th, 2021",
      description: "Unbound Sandbox Mainnet Is Now Live On Ethereum",
      link: "https://x.com/unboundfinance/status/1442738278688456705"
    },
    {
      date: "November 4th, 2021",
      description: "Unbound goes live on Ethereum mainnet",
      link: "https://x.com/unboundfinance/status/1442738278688456705"
    },
    {
      date: "November 5th, 2021",
      description: "Unbound Partnership with Kyber Network",
      link: "https://x.com/unboundfinance/status/1456615841252790273"
    },
    {
      date: "December 13th, 2021",
      description: "Unbound IDO on Polkastarter commences",
      link: "https://polkastarter.com/projects/unbound"
    },
    {
      date: "December 17th, 2021",
      description: "Unbound UNB deposits and withdrawals now available on MEXC",
      link: "https://x.com/unboundfinance/status/1471802223441027072"
    }
  ],
  "2022": [
    {
      date: "January 24th, 2022",
      description: "Unbound on-chain staking live on Ethereum and BSC",
    },
    {
      date: "March 2nd, 2022",
      description: "Unbound goes live on Polygon mainnet",
      link: "https://x.com/unboundfinance/status/1498174888955486208"
    },
    {
      date: "March 3rd, 2022",
      description: "Unbound Partnership with Quickswap",
      link: "https://x.com/unboundfinance/status/1499436102931070983?lang=ar"
    },
    {
      date: "May 15th, 2022",
      description: "Unbound goes live on BSC mainnet",
      link: "https://bscscan.com/address/unboundfinance"
    },
    {
      date: "June 13th, 2022",
      description: "UNB Flexible Staking on Kucoin",
      link: "https://x.com/unboundfinance/status/1536276972900618240"
    },
    {
      date: "August 1st, 2022",
      description: "Unbound partners with Router protocol",
      link: "https://x.com/routerprotocol/status/1581991668496334854"
    },
    {
      date: "September 7th, 2022",
      description: "Unbound partners with Multichain",
      link: "https://x.com/unboundfinance/status/1567385109871067136"
    },
    {
      date: "September 14th, 2022",
      description: "Unbound Live on Fantom mainnet",
      link: "https://x.com/unboundfinance/status/1569959340232118275"
    }

  ],
  "2023": [
    {
      date: "January 8th, 2023",
      description: "Unbound V2 Second Security Audit completed",
      link: "https://unbound.finance/security-audit"
    },
    {
      date: "March 25th, 2023",
      description: "Unbound live and ready for trading on Changelly",
      link: "https://x.com/unboundfinance/status/1639506178773508098"
    },
    {
      date: "April 11th, 2023",
      description: "Unbound V2 live on Arbitrum mainnet",
      link: "https://x.com/unboundfinance/status/1645771111127461895"
    },
    {
      date: "December 7th, 2023",
      description: "UNB transfers into an OFT through integration with LayerZero",
      link: "https://layerzero.unbound.finance"
    }
  ],
  "2024": [
    {
      date: "February 2024",
      description: "Unbound server launched on Discord",
      link: "https://discord.gg/unboundfinance"
    },
    {
      date: "April 2024",
      description: "Website and application revamped for an enhanced user experience.",
      link: "https://unbound.finance"
    },
    {
      date: "14th May 2024",
      description: "Unbound DAO live",
      link: "https://x.com/unboundfinance/status/1790354780507759093"
    },
    {
      date: "27th July 2024",
      description: "$UNB bridging to Arbitrum chain live via the Stargate bridge",
      link: "https://x.com/unboundfinance/status/1817144311844044890"
    }
  ]
};
