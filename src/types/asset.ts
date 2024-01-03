export type AssetList = {
  _id: string;
  assetPrice: string;
  assetStatus: string;
  assetURL: string;
  category: string;
  description: string;
  id: string;
  licenseID: string;
  name: string;
  nftDetails: NftDetails;
  nftFractionalizationDetails: any;
};

type NftDetails = {
  nftBlockMint: string;
  nftCollectionID: string;
};
