export interface ShopLink {
	name: string;
	url: string;
}

export interface QuickFact {
	label: string;
	value: string;
	desc: string;
}

export interface Material {
	name: string;
	id: string;
	icon: string;
	description: string;
	pros: string[];
	cons: string[];
	priceRange: string;
	pricePerSqm: string;
	durability: number;
	comfort: number;
	maintenance: number;
	bestFor: string[];
	shopLinks: ShopLink[];
}

export interface RoomRecommendation {
	name: string;
	icon: string;
	description: string;
	requirements: string[];
	recommendedMaterials: string[];
	avoidMaterials: string[];
	thickness: string;
	colorTips: string;
	specialTips: string[];
}

export interface StainRemoval {
	stain: string;
	icon: string;
	steps: string[];
	warning?: string;
}

export interface MaintenanceSchedule {
	frequency: string;
	tasks: string[];
	icon: string;
}

export interface CareGuide {
	basics: {
		icon: string;
		title: string;
		description: string;
		tips: string[];
	}[];
	maintenanceSchedule: MaintenanceSchedule[];
	stainRemovals: StainRemoval[];
	materialSpecificCare: {
		material: string;
		icon: string;
		tips: string[];
	}[];
}

export interface FloorType {
	id: string;
	name: string;
	slug: string;
	icon: string;
	description: string;
	heroTitle: string;
	heroDescription: string;
	quickFacts: QuickFact[];
	materials: Material[];
	rooms: RoomRecommendation[];
	careGuide: CareGuide;
}

export interface FloorCategory {
	id: string;
	name: string;
	slug: string;
	icon: string;
	description: string;
	color: string;
	floorTypes: {
		id: string;
		name: string;
		slug: string;
		icon: string;
		shortDescription: string;
	}[];
}
