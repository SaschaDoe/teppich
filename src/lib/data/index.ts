// Categories
export { categories } from './categories';

// Holz
export { parkett } from './holz/parkett';
export { dielen } from './holz/dielen';
export { laminat } from './holz/laminat';
export { kork } from './holz/kork';
export { bambus } from './holz/bambus';

// Kunststoff
export { vinyl } from './kunststoff/vinyl';
export { linoleum } from './kunststoff/linoleum';
export { pvc } from './kunststoff/pvc';
export { gummi } from './kunststoff/gummi';

// Mineralisch
export { fliesen } from './mineralisch/fliesen';
export { feinsteinzeug } from './mineralisch/feinsteinzeug';
export { naturstein } from './mineralisch/naturstein';
export { beton } from './mineralisch/beton';
export { terrazzo } from './mineralisch/terrazzo';

// Fugenlos
export { mikrozement } from './fugenlos/mikrozement';
export { epoxidharz } from './fugenlos/epoxidharz';
export { spachtelboden } from './fugenlos/spachtelboden';

// Textil
export { teppich } from './textil/teppich';
export { sisal } from './textil/sisal';
export { seegras } from './textil/seegras';

// Spezial
export { glas } from './spezial/glas';
export { leder } from './spezial/leder';
export { steinteppich } from './spezial/steinteppich';

// Floor type lookup
import { parkett } from './holz/parkett';
import { dielen } from './holz/dielen';
import { laminat } from './holz/laminat';
import { kork } from './holz/kork';
import { bambus } from './holz/bambus';
import { vinyl } from './kunststoff/vinyl';
import { linoleum } from './kunststoff/linoleum';
import { pvc } from './kunststoff/pvc';
import { gummi } from './kunststoff/gummi';
import { fliesen } from './mineralisch/fliesen';
import { feinsteinzeug } from './mineralisch/feinsteinzeug';
import { naturstein } from './mineralisch/naturstein';
import { beton } from './mineralisch/beton';
import { terrazzo } from './mineralisch/terrazzo';
import { mikrozement } from './fugenlos/mikrozement';
import { epoxidharz } from './fugenlos/epoxidharz';
import { spachtelboden } from './fugenlos/spachtelboden';
import { teppich } from './textil/teppich';
import { sisal } from './textil/sisal';
import { seegras } from './textil/seegras';
import { glas } from './spezial/glas';
import { leder } from './spezial/leder';
import { steinteppich } from './spezial/steinteppich';
import type { FloorType } from '$lib/types/floor';

export const floorTypes: Record<string, FloorType> = {
	// Holz
	parkett,
	dielen,
	laminat,
	kork,
	bambus,
	// Kunststoff
	vinyl,
	linoleum,
	pvc,
	gummi,
	// Mineralisch
	fliesen,
	feinsteinzeug,
	naturstein,
	beton,
	terrazzo,
	// Fugenlos
	mikrozement,
	epoxidharz,
	spachtelboden,
	// Textil
	teppich,
	sisal,
	seegras,
	// Spezial
	glas,
	leder,
	steinteppich
};

export function getFloorType(slug: string): FloorType | undefined {
	return floorTypes[slug];
}

export function getFloorTypesByCategory(categorySlug: string): FloorType[] {
	const categoryMap: Record<string, string[]> = {
		holz: ['parkett', 'dielen', 'laminat', 'kork', 'bambus'],
		kunststoff: ['vinyl', 'linoleum', 'pvc', 'gummi'],
		mineralisch: ['fliesen', 'feinsteinzeug', 'naturstein', 'beton', 'terrazzo'],
		fugenlos: ['mikrozement', 'epoxidharz', 'spachtelboden'],
		textil: ['teppich', 'sisal', 'seegras'],
		spezial: ['glas', 'leder', 'steinteppich']
	};

	const slugs = categoryMap[categorySlug] || [];
	return slugs.map(slug => floorTypes[slug]).filter(Boolean);
}
