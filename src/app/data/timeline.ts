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
      link: "https://docs.unbound.finance"
    },
    {
      date: "May 2020",
      description: "Development of proof of concept kicks off.",
      link: "https://unbound.finance/roadmap/may-2020"
    },
    {
      date: "June 2020",
      description: "Protocol is pitched to OGS for feedback.",
    },
    {
      date: "August 2020",
      description: "Official registration of the Unbound Finance domain name.",
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
    },
    {
      date: "April 14th, 2021",
      description: "Unbound launches Zeta Testnet.",
    },
    {
      date: "June 10th, 2021",
      description: "Unbound Finance closes its first round of investment.",
    },
    {
      date: "August 15th, 2021",
      description: "Unbound debuts the first-ever Cross-Chain stablecoin UND on Polygon.",
    },
    {
      date: "August 19th, 2021",
      description: "Unbound unveils its initial official Roadmap.",
    },
    {
      date: "September 2nd, 2021",
      description: "Unbound partners with Harmony.",
    },
    {
      date: "September 28th, 2021",
      description: "Unbound Sandbox mainnet live on Ethereum.",
    },
    {
      date: "November 4th, 2021",
      description: "Unbound goes mainnet live on Ethereum.",
    },
    {
      date: "November 5th, 2021",
      description: "Unbound partners with Kyber Network.",
    },
    {
      date: "November 18th, 2021",
      description: "Unbound partners with Avalache work."
    },
    {
      date: "December 13th, 2021",
      description: "Unbound partners with Avalache work.",
    },
    {
      date: "December 14th, 2021",
      description: "IEO commences on HuobiGlobal.",
    },
    {
      date: "December 17th, 2021",
      description: "UNB staking live on Kucoin.",
    },
    {
      date: "December 17th, 2021",
      description: "UNB deposits and withdrawals available on MEXC.",
    },
    {
      date: "December 20th, 2021",
      description: "UNB flexible promotion live",
    }
    
 ],
  "2022": [
    {
      date: "January 24th, 2022",
      description: "Unbound on-chain staking live on Ethereum and BSC",
      link: "https://unbound.finance/roadmap/january-2022"
    },
    {
      date: "February 17th, 2022",
      description: "Unbound partners with Quickswap",
      link: "https://unbound.finance/roadmap/february-2022"
    },
    {
      date: "March 2nd, 2022",
      description: "Unbound goes live on Polygon mainnet",
      link: "https://x.com/unboundfinance/status/1499057847010996225"
    },
    {
      date: "March 2nd, 2022",
      description: "Unbounder UNB Flexible Staking on Kucoin",
      link: "https://x.com/unboundfinance/status/1499057847010996225"
    },
    {
      date: "March 3rd, 2022",
      description: "Unbound partners with Quickswap",
    },
    {
      date: "March 12th, 2022",
      description: "Unbound launches on Fantom testnet Alpha version",
    },
    {
      date: "May 15th, 2022",
      description: "Unbound goes live on BSC mainnet",
    },
    {
      date: "May 15th, 2022",
      description: "$UNB on-chain staking live on Polygon",
    },
    {
      date: "May 25th, 2022",
      description: "Unbound partners with DFYN",
    },
    {
      date: "May 31th, 2022",
      description: "Unbound live on BNB chain",
    },
    {
      date: "June 2nd, 2022",
      description: "UND-USDC pool live on Kyberswap",
    },
    {
      date: "June 14th, 2022",
      description: "$UND flexible staking live on Kucoin",
    },
    {
      date: "June 25th, 2022",
      description: "Unbound partners with Pangolin",
    },
    {
      date: "June 28th, 2022",
      description: "Unbound live on Avalanche mainnet",
    },
    {
      date: "August 1st, 2022",
      description: "Unbound partners with Routers protocol",
    },
    {
      date: "August 7th, 2022",
      description: "Unbound partners with Multichain",
    },
    {
      date: "September 14th, 2022",
      description: "Unbound live on Fantom mainnet",
    },
    {
      date: "October 20th, 2022",
      description: "Unbound V2 public testnet live",
    },
    {
      date: "November 28th, 2022",
      description: "Unbound live on Lens protocol",
    },
    {
      date: "November 13th, 2022",
      description: "Unbound v2 testnet phase 2 live",
    },
    {
      date: "December 21st, 2022",
      description: "Unbound partners with Defiedge",
    }
  ],
  "2023": [
    {
      date: "January 8th, 2023",
      description: "Unbound V2 Second Security Audit completed",
      link: "https://unbound.finance/roadmap/january-2023"
    },
    {
      date: "March 25th, 2023",
      description: "UNB ready and live for trading on Changelly",
      link: "https://unbound.finance/roadmap/march-2023"
    },
    {
      date: "April 5th, 2023",
      description: "Unbound partners with Changelly",
    },
    {
      date: "April 11th, 2023",
      description: "Unbound v2 live on Arbitrum mainnet",
    },
    {
      date: "October 16th, 2023",
      description: "Unbound partners with Arbidex",
    },
    {
      date: "December 7th, 2023",
      description: "UNB transfers into an OFT through integration with LayerZero",
    },
    {
      date: "December 21th, 2023",
      description: "UNB bridging live on Stargate Finance",
    },
  ],
  "2024": [
    {
      date: "February 2024",
      description: "Unbound server launched on Discord",
    
    },
    {
      date: "April 2024",
      description: "Website and application revamped for an enhanced user experience.",
      link: "https://unbound.finance/roadmap/april-2024"
    },
    {
      date: "14th May 2024",
      description: "Unbound DAO live",
    },
    {
      date: "27th July 2024",
      description: "$UNB bridging to Arbitrum chain live via the Stargate bridge",
    },
    {
      date: "24 Sep 2024",
      description: "Enabling Multichain Voting for UNB Holders in Unbound DAO Governance",
    }

  ],
};
