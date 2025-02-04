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
      link: "https://x.com/unboundfinance/status/1326652377915678721"
    },
    {
      date: "April 2020",
      description: "First draft of the whitepaper is released.",
      link: "https://x.com/unboundfinance/status/1326652377915678721"
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
      link: "https://x.com/unboundfinance/status/1326652377915678721"
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
      link: "https://x.com/unboundfinance/status/1602156394140078083"
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
      date: "November 4th, 2021",
      description: "Unbound goes live on Ethereum mainnet",
      link: "https://x.com/unboundfinance/status/1442738278688456705"
    },
    {
      date: "December 13th, 2021",
      description: "Unbound IDO on Polkastarter commences",
      link: "https://polkastarter.com/projects/unbound"
    }
  ],
  "2022": [
    {
      date: "January 24th, 2022",
      description: "Unbound on-chain staking live on Ethereum and BSC",
      link: "https://x.com/unboundfinance/status/1536276972900618240"
    },
    {
      date: "March 2nd, 2022",
      description: "Unbound goes live on Polygon mainnet",
      link: "https://x.com/unboundfinance/status/1498174888955486208"
    },
    {
      date: "May 15th, 2022",
      description: "Unbound goes live on BSC mainnet",
      link: "https://bscscan.com/address/unboundfinance"
    },
    {
      date: "August 1st, 2022",
      description: "Unbound partners with Router protocol",
      link: "https://x.com/routerprotocol/status/1581991668496334854"
    }
  ],
  "2023": [
    {
      date: "January 8th, 2023",
      description: "Unbound V2 Second Security Audit completed",
      link: "https://unbound.finance/security-audit"
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
