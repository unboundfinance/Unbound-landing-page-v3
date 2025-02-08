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
      link: "https://wiki.unbound.finance"
    },
    {
      date: "May 2020",
      description: "Development of proof of concept kicks off.",
     
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
   
  ],
  "2022": [
    {
      date: "January 24th, 2022",
      description: "Unbound on-chain staking live on Ethereum and BSC",

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
    }
  ],
  "2023": [

    {
      date: "March 25th, 2023",
      description: "UNB ready and live for trading on Changelly",
      link: "https://x.com/Changelly_team/status/1639246809477382146"
    },
    {
      date: "April 5th, 2023",
      description: "Unbound partners with Changelly",
      link: "https://x.com/Changelly_team/status/1639246809477382146"
    }
  ],
  "2024": [

    {
      date: "April 2024",
      description: "Website and application revamped for an enhanced user experience.",
      link: "https://unbound.finance/"
    },
    {
      date: "14th May 2024",
      description: "Unbound DAO live",
      link:"https://x.com/unboundfinance/status/1768539959357788395"
    },
  ],
};
