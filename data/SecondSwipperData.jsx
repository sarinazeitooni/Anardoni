import images from "../images/images";
function createData(id, title, subtitle, detail, url) {
    return { id, title, subtitle, detail, url };
}
let SecondSwipperData = [
    createData(0,"قشم زیبا",'پلتفرم جامع گردشگری','رایگان',images.firstsmallcard),
    createData(1,"pilapia",'هرجا میخوای برو!','رایگان',images.secondsmallcard),
    createData(2,"بلیط یاب هواپیما",'پلتفرم جامع گردشگری','رایگان',images.thirdsmallcard),
    createData(3,"قشم زیبا",'پلتفرم جامع گردشگری','رایگان',images.firstsmallcard),
    createData(4,"pilapia",'هرجا میخوای برو!','رایگان',images.secondsmallcard),
    createData(5,"سپهر 360",'بلیط ارزان هواپیما','رایگان',images.sixthsmallcard),
    createData(6,"pilapia",'هرجا میخوای برو!','رایگان',images.secondsmallcard),
    createData(7,"سپهر 360",'بلیط ارزان هواپیما','رایگان',images.sixthsmallcard),
    createData(8,"pilapia",'هرجا میخوای برو!','رایگان',images.secondsmallcard),
    createData(9,"سپهر 360",'بلیط ارزان هواپیما','رایگان',images.sixthsmallcard),
];
export default SecondSwipperData;