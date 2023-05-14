// this file is only there to limit the number of api calls needed to get around some rate limits.
// "storing" summonerIds

const summonerId = {
  silhim: '2xp2EBviq7UbXSr9FhIEYmm3M4Nl0imIsQq1jlOF7Pk-E58',
  lvance: 'D2-hxWfZoC4lguMEh2ZmaBRU5aW60zKyPpAtGMrVSm2paL4',
  scintmar: '-bq6ZUkGp3IkdMj0LI7-RACAFKwJG4CPwTmKyJEZFz3U5OI',
  schmongo: 'XoO2ZawN7d5EGDRnoCt4m7Iqk2EslJPVMPW4PRysDqf3MOk',
  dimantus: 'XB7b9lE1QlGmFSCfmxayGvYW3GaPRhxV6TbxEnuKkfViNgA',
  fertig11: '91PTpG9JaFF79gjNdmlp-v8tTRCMV5MaZhjKO1fNUAtmx5I',
  hornycopter: 'JzGUkSnV7tPQZHj4STtYDUFZRTFyqWcf12drdFOEbh5u4jw',
  generalmuh: 'zcu8VdRwffVmxitE46cyZqME-yomSvunHZBeZOKFw5-Kb9Q',
  m4pl3g0d: 'CJQ7j9W_tdMYVjKT3f4vODxTu4BmN6z0VA1VYMTkBolgdwvswSP7mTRSJA',
  primeburst74: 'AOgK0HH8bGNYUq_Fbkvss_JrrQIN5aqNvwW4Tz7MO3pVdHA',
  keep0ut: '0JyMtxQEp3Od7d4ww6TvKINoFMGZGjaTOIdu0noLiBRfrE8',
  admiralalpaka: 'TlBRlxG3tx5ny_pxrHsRK6TjGolAOBMKTAIQiFRU55vHFFY',
  krokoefendi: 'QVvz_tWf0arJk-sif-rLHzcza-7ou9TE4tcZEZcqfyURKP8',
  escapes: '8WSdwy-ZkgStrhuOVB-goFkMRQgIRgHJKgUWx9PacEPI1ZA',
  lumpidumpidu: 'QDv134EFUf7JW6ZftFmBHn0fMp8XW6acO4aMr3Y3j2FEJYU',
  carthour: 'G3K0j0kAAgedp692MMBjm_0C4jjTrZeNP5v4OtT7I20wKDs',
  sturlennare: '0Qnr1Qmk4rSBZBtMQMKtM4EsiKEjCWZzVC_9ArNmRfSkdF8t',
};

const iconId = {
  silhim: '3184',
  lvance: '4982',
  scintmar: '918',
  schmongo: '745',
  dimantus: '547',
  fertig11: '5768',
  hornycopter: '4149',
  generalmuh: '5091',
  m4pl3g0d: '5456',
  primeburst74: '4568',
  keep0ut: '915',
  admiralalpaka: '4068',
  krokoefendi: '5765',
  escapes: '5626',
  lumpidumpidu: '23',
  carthour: '22',
  sturlennare: '7',
};

export default function getSummonerIdBySummonerName(summonerName) {
  return summonerId[summonerName.toLowerCase()];
}

export function getIconIdBySummonerName(summonerName) {
  return iconId[summonerName.toLowerCase()];
}
