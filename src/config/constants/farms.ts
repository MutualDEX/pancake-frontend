import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'BGSP',
    lpAddresses: {
      97: '',
      56: '0xe9f861b22cd5240494ecc14afea02659ec59864f',
    },
    token: serializedTokens.bgsp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'BGSP-BNB LP',
    lpAddresses: {
      97: '0x66bffcac0782200d6276142768f79600a458bb04',
      56: '0x3509a6640cbe27bbccb7f20e0eaf5c3eba930df3',
    },
    token: serializedTokens.bgsp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {   
    pid: 655,
    lpSymbol: 'BSFE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2fc1fc3dbf746f2c42718753f4ac9866d94466b5',
    },
    token: serializedTokens.bsfe,
    quoteToken: serializedTokens.wbnb,
   },
    { 
    pid: 644,
    lpSymbol: 'BSFE-BGSP LP',
    lpAddresses: {
      97: '',
      56: '0x398bdf7ffef30c557dcdfcae9b2de13f31b63434',
    },
    token: serializedTokens.bsfe,
    quoteToken: serializedTokens.bgsp,
   },   
   {
    pid: 623,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xec6557348085aa57c72514d67070dc863c0a5a8c',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.usdt,
   },
   {
    pid: 599,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '',
      56: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 588,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 586,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109c8025f272414fd9e2faa805a583708a017f',
    },
    token: serializedTokens.doge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 585,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 583,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 572,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 564,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 562,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 561,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 558,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  /*{
    pid: 506,
    lpSymbol: 'ERTHA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70531B39E2Bb4d8dA59E2Ce41a98eBA2990F8497',
    },
    token: serializedTokens.ertha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 505,
    lpSymbol: 'FUSE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6483F166b9E4310A165a55FEa04F867499aded06',
    },
    token: serializedTokens.fuse,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 386,
    lpSymbol: 'HOTCROSS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf23bad605e94de0e3b60c9718a43a94a5af43915',
    },
    token: serializedTokens.hotcross,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 504,
    lpSymbol: 'PRL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb5FEAE037c2330a8F298F39bcE96dd6E69f4Fa0E',
    },
    token: serializedTokens.prl,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 498,
    lpSymbol: '8PAY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x92c3E2cddDb0CE886bCA864151BD4d611A86E563',
    },
    token: serializedTokens['8pay'],
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 503,
    lpSymbol: 'FROYO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1Ce76390Dd210B9C9ae28373FDf79714206ECb73',
    },
    token: serializedTokens.froyo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 497,
    lpSymbol: 'AOG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x88c9bf5E334e2591C6A866D5E20683E31226Be3d',
    },
    token: serializedTokens.aog,
    quoteToken: serializedTokens.busd,
    isCommunity: false,
  },
  {
    pid: 502,
    lpSymbol: 'APX-BUSD',
    lpAddresses: {
      97: '',
      56: '0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c',
    },
    token: serializedTokens.apx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 501,
    lpSymbol: 'BCOIN-BNB',
    lpAddresses: {
      97: '',
      56: '0x2Eebe0C34da9ba65521E98CBaA7D97496d05f489',
    },
    token: serializedTokens.bcoin,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 500,
    lpSymbol: 'INSUR-BNB',
    lpAddresses: {
      97: '',
      56: '0xD01bf29EdCA0285A004a25e325A449ba56e5926E',
    },
    token: serializedTokens.insur,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 499,
    lpSymbol: 'BATH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xEE90C67C9dD5dE862F4eabFDd53007a2D95Df5c6',
    },
    token: serializedTokens.bath,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 496,
    lpSymbol: 'GM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1C640a98a0c62120B0AD23C15FfF8dC1a2Fb9C4D',
    },
    token: serializedTokens.gm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 495,
    lpSymbol: 'WOOP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04',
    },
    token: serializedTokens.woop,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 492,
    lpSymbol: 'SDAO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x43b95976cF0929478bC13332C9cd2D63Bf060976',
    },
    token: serializedTokens.sdao,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 493,
    lpSymbol: 'ANTEX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4DcB7b3b0E8914DC0e6D366521604cD23E7991E1',
    },
    token: serializedTokens.antex,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 494,
    lpSymbol: 'BBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3D5A3E3824da092851026fCda3D8a0B7438c4573',
    },
    token: serializedTokens.bbt,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 491,
    lpSymbol: 'HIGH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe98ac95A1dB2fCaaa9c7D4ba7ecfCE4877ca2bEa',
    },
    token: serializedTokens.high,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 490,
    lpSymbol: 'CCAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x845d301C864d48027DB73ec4394e6DDBE52Cbc39',
    },
    token: serializedTokens.ccar,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 489,
    lpSymbol: 'DPT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x141e9558f66Cc21c93628400cCa7d830c15c2c24',
    },
    token: serializedTokens.dpt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 488,
    lpSymbol: 'THG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x486697ae24469cB1122F537924Aa46E705B142Aa',
    },
    token: serializedTokens.thg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 485,
    lpSymbol: 'TT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6DA32849Fc5E1c23894d9E08166912F15bDb2E95',
    },
    token: serializedTokens.tt,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 486,
    lpSymbol: 'GMEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6a24a877bb7D07fba59397DecBBAED5F92890AeA',
    },
    token: serializedTokens.gmee,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 487,
    lpSymbol: 'HTD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0c3b12fCA25bfa840E0553DA97C532e9Abd3913d',
    },
    token: serializedTokens.htd,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 484,
    lpSymbol: 'IDIA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x71E6de81381eFE0Aa98f56b3B43eB3727D640715',
    },
    token: serializedTokens.idia,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 483,
    lpSymbol: 'XCV-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD39F05AB936Aa201235005c47B83268f2d9833f8',
    },
    token: serializedTokens.xcv,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 482,
    lpSymbol: 'NABOX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x29b4abb0f8734EA672a0e82FA47998F710B6A07a',
    },
    token: serializedTokens.nabox,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 481,
    lpSymbol: 'SANTOS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x06043B346450BbCfdE066ebc39fdc264FdFFeD74',
    },
    token: serializedTokens.santos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 480,
    lpSymbol: 'QUIDD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD6d206F59cC5a3BfA4Cc10bc8Ba140ac37Ad1C89',
    },
    token: serializedTokens.quidd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 479,
    lpSymbol: 'ZOO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x85e5889Fc3Ed01B4e8B56bbc717D7643294d2c31',
    },
    token: serializedTokens.zoo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 450,
    lpSymbol: 'SFUND-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74fA517715C4ec65EF01d55ad5335f90dce7CC87',
    },
    token: serializedTokens.sfund,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 447,
    lpSymbol: 'GNT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3747e3e107223539FD09bb730b055A1f11F78Adf',
    },
    token: serializedTokens.gnt,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 477,
    lpSymbol: 'SHEESHA-BNB',
    lpAddresses: {
      97: '',
      56: '0xB31Ecb43645EB273210838e710f2692CC6b30a11',
    },
    token: serializedTokens.sheesha,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 478,
    lpSymbol: 'BCOIN-BUSD',
    lpAddresses: {
      97: '',
      56: '0xd76026a78a2A9aF2f9F57fe6337eED26Bfc26AED',
    },
    token: serializedTokens.bcoin,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 476,
    lpSymbol: 'QI-BNB',
    lpAddresses: {
      97: '',
      56: '0xf924E642f05ACC57fc3b14990c2B1a137683b201',
    },
    token: serializedTokens.qi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 475,
    lpSymbol: 'KART-BNB',
    lpAddresses: {
      97: '',
      56: '0x0927C49A18eAc4512112e7a226275e2c36f2C3Db',
    },
    token: serializedTokens.kart,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 474,
    lpSymbol: 'PORTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0A292e96ABb35297786a38fDD67Dc4f82689E670',
    },
    token: serializedTokens.porto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 425,
    lpSymbol: 'DVI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x89ebf9cd99864f6e51bd7a578965922029cab977',
    },
    token: serializedTokens.dvi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 351,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7275278C94b5e20708380561C4Af98F38dDC6374',
    },
    token: serializedTokens.jgn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 446,
    lpSymbol: 'BMON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x00e53C169dA54a7E11172aEEDf8Eb87F060F479e',
    },
    token: serializedTokens.bmon,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 438,
    lpSymbol: 'WSG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x37Ff7D4459ad96E0B01275E5efffe091f33c2CAD',
    },
    token: serializedTokens.wsg,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 469,
    lpSymbol: 'ZOO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xd5D00B0aD40FF6d8C1a6F7e72F185B6fB3c3fd1F',
    },
    token: serializedTokens.zoo,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 473,
    lpSymbol: 'ETERNAL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbd26e08411483C4BEBba80939FA5a775beE22338',
    },
    token: serializedTokens.eternal,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 472,
    lpSymbol: 'XWG-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x936928146a21AfCcd30DfA84824A780572B1630B',
    },
    token: serializedTokens.xwg,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 471,
    lpSymbol: 'DAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x062f88E2B4896e823ac78Ac314468c29eEC4186d',
    },
    token: serializedTokens.dar,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 470,
    lpSymbol: 'FINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6dB23b5360c9D2859fDcbf41c56494e7b8573649',
    },
    token: serializedTokens.fina,
    quoteToken: serializedTokens.busd,
  },*/
]

export default farms
