import classaction from "./classaction";
import consumerprotection from "./consumerprotection";
import medicalclaims from "./medicalclaims";
import personalinjury from "./personalinjury";

const allArticles = [
    ...classaction,
    ...consumerprotection,
    ...medicalclaims,
    ...personalinjury,
] as TArticle[]

export default allArticles;