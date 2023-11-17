import bcModSDK from "bondage-club-mod-sdk";

const modApi = bcModSDK.registerMod({
	name: 'longcraft',
	fullName: 'Longer Crafted Item Descriptions',
	version: '1.0.0',
});

modApi.patchFunction("CraftingModeSet", {
    [`ElementCreateInput("InputDescription", "text", "", "200");`]: `ElementCreateInput("InputDescription", "text", "", "600");`,
});

modApi.patchFunction("DialogDrawCrafting", {
    "substring(0, 200)": "substring(0, 600)",
});

modApi.patchFunction("CraftingConvertSelectedToItem", {
    "substring(0, 200)": "substring(0, 600)",
});

modApi.patchFunction("CraftingSaveServer", {
    "substring(0, 200)": "substring(0, 600)",
});
