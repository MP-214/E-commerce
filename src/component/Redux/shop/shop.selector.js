import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollectionItems = createSelector(
	[selectShop],
	(shop) => shop.collections
);
export const selectCollectionForPreview=createSelector(
	[selectCollectionItems],
	collections=>Object.keys(collections).map(key=>collections[key])

)

export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[selectCollectionItems],
		(collections) => collections[collectionUrlParam]
	)
);
