import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://contact@bigswap.xyz",
      },
      {
        label: "Blog",
        href: "https://https://bigswap-finance.medium.com/",
      },
      {
        label: "Community",
        href: "https://https://t.me/BigSwapCommunity",
      },
      {
        label: "BGSP",
        href: "https://docs.BigSwap.Finance/tokenomics/bgsp",
      },
      {
        label: "—",
      },
      {
        label: "Online Store (Coming Soon)",
        href: "https:///",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Troubleshooting",
        href: "https://docs.bigswap.exchange/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.bigswap.exchange/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https:///BigSwap-Finance",
      },
      {
        label: "Documentation",
        href: "https://docs.bigswap.exchange",
      },
      {
        label: "Audits",
        href: "https://docs.bigswap.exchange/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://https://twitter.com/bigswapfinance",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/BigSwapArmy",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://https://www.reddit.com/user/BigSwapCommunity",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/BigSwap-Finance/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/BigSwapCommunity",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
