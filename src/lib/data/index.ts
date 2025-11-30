// Categories
export { categories } from './categories';

// Holz
export { parkett } from './holz/parkett';
export { laminat } from './holz/laminat';

// Kunststoff
export { vinyl } from './kunststoff/vinyl';

// Mineralisch
export { fliesen } from './mineralisch/fliesen';

// Textil
export { teppich } from './textil/teppich';

// Floor type lookup
import { parkett } from './holz/parkett';
import { laminat } from './holz/laminat';
import { vinyl } from './kunststoff/vinyl';
import { fliesen } from './mineralisch/fliesen';
import { teppich } from './textil/teppich';
import type { FloorType } from '$lib/types/floor';

export const floorTypes: Record<string, FloorType> = {
	parkett,
	laminat,
	vinyl,
	fliesen,
	teppich
};

export function getFloorType(slug: string): FloorType | undefined {
	return floorTypes[slug];
}

export function getFloorTypesByCategory(categorySlug: string): FloorType[] {
	const categoryMap: Record<string, string[]> = {
		holz: ['parkett', 'laminat'],
		kunststoff: ['vinyl'],
		mineralisch: ['fliesen'],
		textil: ['teppich']
	};

	const slugs = categoryMap[categorySlug] || [];
	return slugs.map(slug => floorTypes[slug]).filter(Boolean);
}
