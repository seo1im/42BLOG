import cat1post1, {frontMatter as f1 } from "./Cat1Post1.md"
const Cat1Post1 = {
	arg : f1,
	content : cat1post1,
}

import cat1post2, {frontMatter as f2} from "./Cat1Post2.md"
const Cat1Post2 = {
	arg : f2,
	content : cat1post2,
}

import cat2post1, {frontMatter as f3} from "./Cat2Post1.md"
const Cat2Post1 = {
	arg : f3,
	content : cat2post1,
}

import cat2post2, {frontMatter as f4} from "./Cat2Post2.md"
const Cat2Post2 = {
	arg : f4,
	content : cat2post2,
}

const posts = [ Cat1Post1, Cat1Post2, Cat2Post1, Cat2Post2 ];
export default posts