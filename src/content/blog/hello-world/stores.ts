import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";

export const count = atom<number>(0);

export const persistentCount = persistentAtom<number>(
	"persistent_count",
	0,
	// Encode/decode the non-string value in localStorage.
	{
		encode: JSON.stringify,
		decode: JSON.parse
	}
);
