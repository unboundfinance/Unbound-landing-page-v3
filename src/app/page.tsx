/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "./components/Navbar";
import Lines from "@/app/assets/images/png/lines.png";
import OneInchIcon from "@/app/assets/images/png/1inch.png";
import PancakeswapIcon from "@/app/assets/images/png/pancakeswap.png";
import MexcIcon from "@/app/assets/images/png/mexc.png";
import KucoinIcon from "@/app/assets/images/png/kucoin.png";
import StargateIcon from "@/app/assets/images/png/stargate.png";
import HuobiIcon from "@/app/assets/images/png/huobi.png";
import UniswapIcon from "@/app/assets/images/svg/uniswap.svg";
import UnbMainIcon from "@/app/assets/images/png/unb.png";
import UndMainIcon from "@/app/assets/images/png/und.png";
import LightRay from "@/app/assets/images/png/light_ray.png";
import DualLightRay from "@/app/assets/images/png/dual_light_ray.png";
import UnboundLogo from "@/app/assets/images/svg/logo.svg";
import UnboundLineLogo from "@/app/assets/images/png/line_logo.png";
import BorrowIcon from "@/app/assets/images/png/borrow.png";
import RewardIcon from "@/app/assets/images/png/reward.png";
import RepaymentIcon from "@/app/assets/images/png/repayment.png";
import XIcon from "@/app/assets/images/svg/x.svg";
import GithubIcon from "@/app/assets/images/svg/github.svg";
import BnbLogo from "@/app/assets/images/svg/bnb-bnb-logo.svg";
import { Poppins } from "next/font/google";
import { useMemo } from "react";
import Link from "next/link";
import RotateWords from "./components/RotateWords";
import FeatureTimeline from "./components/FeatureTimeline";
import RoadmapTimeline from "./components/RoadmapTimeline";
import StackedItems from "./components/StackedItems";

const poppins = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: ["500", "800"],
});

const Home = () => {
  const links = useMemo<any[]>(
    () => [
      {
        title: "Whitepaper",
        href: "https://wiki.unbound.finance/",
        icon: null,
      },
      {
        title: "Governance",
        href: "https://snapshot.org/#/unboundfi.eth",
        icon: null,
      },
      {
        title: "Media Kit",
        href: "/assets/unboundBrandAssets.zip",
        icon: null,
      },
    ],
    []
  );

  const daoLinks = useMemo<any[]>(
    () => [
      {
        title: "Discussions",
        href: "https://discord.gg/uSyeqqDNwF",
        icon: null,
      },
      {
        title: "Governance",
        href: "https://snapshot.org/#/unboundfi.eth",
        icon: null,
      },
      {
        title: "FAQs",
        href: "https://wiki.unbound.finance/unbound-dao",
        icon: null,
      },
    ],
    []
  );

  const socialLinks = useMemo<any[]>(
    () => [
      {
        title: "Twitter(X)",
        href: "https://twitter.com/unboundfinance",
        icon: XIcon,
      },
  
      {
        title: "Github",
        href: "https://github.com/unbound-finance/",
        icon: GithubIcon,
      },
    ],
    []
  );

  return (
    <main className="w-full relative flex min-h-screen flex-col items-center justify-between bg-[#18191F] overflow-hidden">
      <div className="block w-full">
        {/* HERO SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative h-screen flex flex-col justify-between text-white w-full z-10">
            <Navbar />
            <div>
              <p className="text-[128px] capitalize tracking-tight font-medium">
                Unbound Finance
              </p>
              <div className="text-white text-2xl font-light w-[60%] leading-relaxed">
                Borrow USD-Pegged UND Stablecoin at 0% Interest Using
                Concentrated Liquidity Positions and LP Tokens as Collateral
              </div>
              <div className="flex items-center space-x-4 mt-6 mb-16">
                <Link
                  href="https://app.unbound.finance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-sm rounded-full bg-primary uppercase py-2 px-4">
                    Launch App
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} target="_blank" rel="noreferrer">
                  <Image
                    src={link.icon.src}
                    alt={link.title}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
            <img
              src={Lines.src}
              className="absolute scale-125 -z-10"
              alt="lines"
            />
            <div className="h-full absolute -z-10 right-0 flex flex-col justify-center">
              <div className="relative flex items-center justify-center">
                <img
                  src={UnboundLineLogo.src}
                  alt="line_logo"
                  className="blur-md inset-0 -z-20"
                  width={512}
                />
                <img
                  src={UnboundLineLogo.src}
                  alt="line_logo"
                  className="inset-0 absolute -z-10"
                  width={512}
                />
              </div>
            </div>
          </section>
        </div>

        {/* ROADMAP SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="flex flex-col mt-40 mb-8 relative z-20">
            <p className="text-white text-8xl tracking-tighter leading-tight">
              The world of DeFi is always growing and so is{" "}
              <span className="text-secondary">Unbound</span>
            </p>
            <div className="mt-24">
              <RoadmapTimeline />
            </div>
          </section>
        </div>

        {/* ONE PLACE TO SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-10 flex flex-col mt-40">
            <div className="flex tracking-tighter box-content h-[96px]">
              <p className="text-white text-8xl">One place to</p>
              <RotateWords
                adjectives={["Deposit", "Borrow", "Earn", "Repay"]}
                className="text-secondary text-8xl pl-6"
              />
            </div>
            <div className="flex justify-end relative">
              <FeatureTimeline />
              <div className="h-full absolute -z-10 -left-20 flex flex-col justify-center">
                <div
                  className="relative flex items-center justify-center"
                  style={{ width: 1500, height: 1500 }}
                >
                  <div
                    className="absolute left-72 top-10 -z-10 w-full h-full"
                    style={{
                      backgroundImage: `url(${LightRay.src})`,
                      backgroundColor: "#18191F",
                      backgroundBlendMode: "screen",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      scale: 1.4,
                    }}
                  />
                </div>
              </div>
            </div>
            <img
              src={Lines.src}
              className="absolute scale-95 md:-bottom-[32rem] -z-10"
              alt="lines"
            />
          </section>
        </div>

        {/* FEATURES SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-10 flex flex-col my-20">
            <p className="text-white text-8xl">Features</p>
            <div className="grid grid-cols-3 gap-8 divide-x-[1px] divide-[#49C1BF]/25 text-white mt-24">
              <div className="flex flex-col space-y-4 pr-8 py-6">
                <Image
                  src={BorrowIcon.src}
                  alt="borrow_icon"
                  width={96}
                  height={96}
                  className="mb-6"
                />
                <p className="text-4xl">Zero Interest Borrowing</p>
                <span className="text-lg font-thin">
                  Borrow UND stablecoin at 0% interest rates
                </span>
              </div>
              <div className="flex flex-col space-y-4 pl-8 py-6">
                <Image
                  src={RepaymentIcon.src}
                  alt="repayment_icon"
                  width={96}
                  height={96}
                  className="mb-6"
                />
                <p className="text-4xl">
                  Flexible <br /> Repayment
                </p>
                <span className="text-lg font-thin">
                  Repay your loan anytime for ultimate control and convenience
                </span>
              </div>
              <div className="flex flex-col space-y-4 pl-8 py-6">
                <Image
                  src={RewardIcon.src}
                  alt="reward_icon"
                  width={96}
                  height={96}
                  className="mb-6"
                />
                <p className="text-4xl">Automated Farming Rewards</p>
                <span className="text-lg font-thin">
                  Earn LP mining rewards automatically while your collateralized
                  assets work for you
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* TOKEN SECTIONS */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-10 flex flex-col">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src={UndMainIcon.src}
                  alt="und"
                  width={720}
                  height={720}
                />
                <div
                  className="absolute -top-20 left-0 w-[500px] h-[800px] rotate-[-70deg] rounded-full blur-3xl -z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #00487080 0%, #18191F 100%)",
                  }}
                />
              </div>
              <div className="flex flex-col space-y-6 text-white">
                <p className="text-secondary text-8xl tracking-tighter leading-tight my-4">
                  $UND
                </p>
                <p className="font-thin text-xl leading-relaxed">
                  UND functions as the native stablecoin within the Unbound
                  ecosystem. This ERC-20 token is backed by liquidity and exhibits a
                  soft peg to the US dollar, promoting stability and utility.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-10 flex flex-col">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="relative">
                <Image
                  src={UnbMainIcon.src}
                  alt="unb"
                  width={720}
                  height={720}
                />
                <div
                  className="absolute -top-20 left-0 w=[500px] h-[800px] rotate-[-70deg] rounded-full blur-3xl -z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #00487080 0%, #18191F 100%)",
                  }}
                />
              </div>
              <div className="flex flex-col space-y-6 text-white">
                <p className="text-secondary text-8xl tracking-tighter leading-tight my-4">
                  $UNB
                </p>
                <p className="font-thin text-xl leading-relaxed">
                  At the core of Unbound Finance lies the UNB Token, serving as the
                  backbone for governance. It empowers holders to vote on platform
                  development and participate in decentralized decision-making.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* EXCHANGES SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-30 mt-24 mb-40">
            <div className="flex flex-col space-y-6 items-center justify-center">
              <p className="text-4xl text-secondary font-medium">
                Where To Buy/Sell/Trade $UNB?
              </p>
              <div className="flex items-center space-x-16 text-white pt-12">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <p>Decentralized Exchanges</p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex items-center space-x-2 rounded-lg bg-black/30 p-3">
                      <Image
                        src={UniswapIcon.src}
                        alt="uniswap"
                        width={24}
                        height={24}
                      />
                      <p>Uniswap</p>
                      <StackedItems
                        items={[
                          {
                            name: "polygon",
                            href: "https://app.uniswap.org/swap?outputCurrency=0xB2E787C6C83D6d75f466371a2966b27a8b700828&chain=polygon",
                            image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
                          },
                          {
                            name: "bnb",
                            href: "https://app.uniswap.org/swap?outputCurrency=0xB2E787C6C83D6d75f466371a2966b27a8b700828&chain=bnb",
                            image: BnbLogo,
                          },
                        ]}
                      />
                    </div>
                    <Link
                      href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xB2E787C6C83D6d75f466371a2966b27a8b700828"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center space-x-2 rounded-lg bg-black/30 p-3">
                        <Image
                          src={PancakeswapIcon.src}
                          alt="pancakeswap"
                          width={24}
                          height={24}
                        />
                        <p>PancakeSwap</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <p>Centralized Exchanges</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 rounded-lg bg-black/30 p-3">
                      <Image
                        src={HuobiIcon.src}
                        alt="huobiIcon"
                        width={24}
                        height={24}
                      />
                      <p>Huobi</p>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-black/30 p-3">
                      <Image
                        src={KucoinIcon.src}
                        alt="kucoinIcon"
                        width={24}
                        height={24}
                      />
                      <p>Kucoin</p>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-black/30 p-3">
                      <Image
                        src={MexcIcon.src}
                        alt="mexcIcon"
                        width={24}
                        height={24}
                      />
                      <p>MEXC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* DAO SECTION */}
        <div className="w-full max-w-7xl mx-auto">
          <section className="relative z-20 flex flex-col items-center justify-center my-40 mb-56">
            <div className="flex flex-col justify-center items-center font-medium">
              <p className="text-white text-8xl leading-snug">Introducing</p>
              <p className="text-secondary text-8xl">The Unbound DAO</p>
              <p className="text-white mt-8 text-xl font-light text-center leading-loose md:w-[80%]">
                As a community-owned protocol, Unbound Governance empowers UNB token holders to influence the protocol&apos;s direction. Each token holder plays an important role in shaping the protocol&apos;s future by participating in voting on all protocol decisions. The combined voices of token holders steer the protocol&apos;s development, ensuring it remains aligned with the community&apos;s values and aspirations.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              {daoLinks.map((link, i) => (
                <Link key={i} href={link.href} target="_blank" rel="noreferrer">
                  <button className="appearance-none outline-none text-lg p-3 px-4 rounded-lg bg-primary/20 text-white hover:text-secondary hover:border hover:border-secondary transition-all duration-75 ease-in leading-7">
                    {link.title}
                  </button>
                </Link>
              ))}
            </div>
            <img
              src={Lines.src}
              className="absolute scale-110 md:-top-80 -z-10"
              alt="lines"
            />
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute inset-x-0 bottom-0 bg-black w-full py-6 h-[80px] z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full w-full">
          <div className="flex items-center space-x-2">
            <Image src={UnboundLogo.src} alt="logo" width={24} height={24} />
            <p className={`text-white ${poppins.className} uppercase text-xl font-semibold`}>
              Unbound
            </p>
          </div>
          <div className="flex items-center space-x-8 text-white text-lg">
            {links.map((link, i) => (
              <Link key={i} href={link.href} target="_blank" rel="noreferrer">
                {link.title}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} target="_blank" rel="noreferrer">
                  <Image src={link.icon.src} alt={link.title} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND EFFECT */}
      <div
        className="absolute w=[1000px] h=[500px] -right-10 top-10 rotate-[-70deg] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, #00F9FF30 0%, #18191F 100%)",
        }}
      />
    </main>
  );
};

export default Home;
