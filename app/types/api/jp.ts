export interface ServantsData {
	readonly id: number;
	readonly collectionNo: number;
	readonly name: string;
	readonly originalName: string;
	readonly type: Type;
	readonly flag: PurpleFlag;
	readonly flags: FlagElement[];
	readonly classId: number;
	readonly className: string;
	readonly attribute: Attribute;
	readonly traits: Trait[];
	readonly rarity: number;
	readonly atkMax: number;
	readonly hpMax: number;
	readonly face: string;
	readonly costume: { [key: string]: Costume };
	readonly overwriteName?: string;
	readonly originalOverwriteName?: string;
}

export type Attribute = "earth" | "human" | "sky" | "star" | "beast";

export interface Costume {
	readonly id: number;
	readonly costumeCollectionNo: number;
	readonly battleCharaId: number;
	readonly shortName: string;
}

export type PurpleFlag = "normal" | "ignoreCombineLimitSpecial" | "goetia";

export type FlagElement =
	| "ignoreCombineLimitSpecial"
	| "onlyUseForNpc"
	| "svtEquipFriendShip"
	| "svtEquipExp"
	| "svtEquipChocolate";

export interface Trait {
	readonly id: number;
	readonly name: string;
}

export type Type = "heroine" | "normal" | "enemyCollectionDetail";
