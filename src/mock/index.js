import Mock from "mockjs";
import data from "./data";
Mock.mock("/kingKongList",{errno:0,data:data.kingKongModule.kingKongList});
Mock.mock("/policyDescList",{errno:0,data:data.policyDescList});
Mock.mock("/indexActivityModule",{errno:0,data:data.indexActivityModule});
Mock.mock("/tagList",{errno:0,data:data.tagList});
Mock.mock("/focusList",{errno:0,data:data.focusList});
Mock.mock("/categoryList",{errno:0,data:data.categoryHotSellModule.categoryList});
Mock.mock("/popularItemList",{errno:0,data:data.popularItemList});
