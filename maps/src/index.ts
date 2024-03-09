import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();
// const company = new Company();
// google.maps;
// console.log(user);
import { CustomMap } from "./CustomMap";
const customMap = new CustomMap();
customMap.addMarker(user);
