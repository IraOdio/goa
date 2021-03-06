window.onload = function () {
    //document.body.classList.add('loaded_hiding');
    whiteAlert();
    main();
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        //document.body.classList.remove('loaded_hiding');
    }, 1500);
};

var css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";
console.log("%cExample %s", css, 'all code runs happy');

/*
* devObj - JS-OBJECT;
* .scene - BABYLON.Scene
* .meshes - meshes for create Instance
* .maraphon - ???
* */

function whiteAlert(){
    let whiteAlertHome = document.getElementById('whiteAlertHome');
    let buttonCloseThis = document.getElementById('buttonCloseThis');
    buttonCloseThis.onclick = function(){
        whiteAlertHome.style="top:-50%";
        setTimeout(function () {
            whiteAlertHome.style="display:none;"
            document.body.classList.remove('firstVisitedBody');
        },700);
    }

}
function main() {
    /*region --------------------lowLevelProcedureProlog----------------------------*/
    //Переменные DOM-Интерфейса >>>>>>>>>>>>>>>>>>>>> begin
    var greenSphereValue = document.getElementById('greenSphereValue');
    var redSphereValue = document.getElementById('redSphereValue');
    var debug = document.getElementById('debug');
    var siGUI = document.getElementById('siGUI');
    var openClose = document.getElementById('OpenClose');
    var screenButton = document.getElementById('screenButton'); screenButton.style="display:none;"
    var thisPOST = document.getElementById('thisPOST');
    var GUIFROMSCENE = document.getElementById('GUIFROMSCENE');
    var INFOFROMSCENE = document.getElementById('INFOFROMSCENE');
    var listVariables = document.getElementById('listVariables');
    var hideInfo = document.getElementById('hideInfo');
    // Новый GUI
    var siGUIDown = document.getElementById('siGUI-Down');
    var siGUIDownText = document.getElementById('siGUI-Down-Text');
    var siGUIDownButton = document.getElementById('siGUI-Down-ControlButton');
    //П еременные DOM-Интерфейса >>>>>>>>>>>>>>>>>>>>> end
    // Классы для DOM-Элементов >>>>>>>>>>>>>> begin
    var classesObj = {
        button:'siGUI-Button',
        buttonl2:'siGUI-Button-Level2',
        buttonAlg:'siGUI-Button-Algoritm',
        buttonAlgError:'siGUI-Button-Algoritm-Red',
        buttonAlgSuccess:'siGUI-Button-Algoritm-Green',
        buttonAlgActive:'siGUI-Button-Algoritm-Yellow',
        inputText:'siGUI-InputText',
        hideHR:'hide-hr'
    };
    // Классы для DOM-Элементов >>>>>>>>>>>>>> end
    var canvas = document.getElementById('index');
    var labelFps = document.getElementById('label_fps');
    var showscene = thisPOST.getAttribute('data-showscene');
    var kW, kH;
    kW = 0.97;
    kH = 0.89;
    var devObj;
    resizeCanvas(canvas);
    var engine = new BABYLON.Engine(canvas, true);
    //var engine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };
    /*endregion*/
    var createScene = function () {
        return devScene();
    };

    function devScene() {
        devObj = {scene: new BABYLON.Scene(engine)};
        /*-----------------------------------------------------------------------*/
        var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 10, -25), devObj.scene);
        camera.keysUp = [ 87];
        camera.keysDown = [ 83];
        camera.keysLeft = [ 65];
        camera.keysRight = [ 68];
        camera.rotation.x = 0.14;
        camera.position.x = 11;
        camera.attachControl(canvas, true);
        devObj.camera = camera;
        domInterface(devObj);
        // Декоративные элементы сцены
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 700.0, devObj.scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", devObj.scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("res/textures/TropicalSunnyDay/TropicalSunnyDay", devObj.scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -3, 0), scene);
        light.intensity = 0.7;
        var planeChess = BABYLON.MeshBuilder.CreatePlane('planeChess', {size: 48}, devObj.scene);
        planeChess.rotation.x = Math.PI / 2;
        planeChess.position.x = 11;
        planeChess.position.y = -2;
        var materialChess = new BABYLON.StandardMaterial('materialChess', devObj.scene);
        materialChess.invertNormalMapX = true;
        materialChess.invertNormalMapY = true;
        var textureChess = new BABYLON.Texture('res/textures/chess.jpg', devObj.scene);
        textureChess.uScale = 8;
        textureChess.vScale = 8;
        materialChess.diffuseTexture = textureChess;
        planeChess.material = materialChess;
        devObj.meshes = {meshPlaneChess: planeChess};
        devObj.forDrawText = {};
        devObj.forGUI3D = {};
        devObj.forDrawText.font = "24px monospace";
        devObj.forDrawText.fontColor = "black";
        devObj.forDrawText.bgColor = "white";
        devObj.forDrawText.Width_dT = 128;
        devObj.forDrawText.Height_dT = 128;
        devObj.forDrawText.Width_dTdT = 0;
        devObj.forDrawText.Height_dTdT = 64;
        devObj.forDrawText.value = "5";
        // Декоративные элементы сцены

        if(!showscene||showscene=='start'){
            //console.log('Вызов начальной сцены');
            startScene(devObj);
        }
        if(showscene=='maraphon1'){
            easyMaraphon1(devObj);
            hideInfo.setAttribute('data-ismaraphon','Марафон №1');
        }
        if(showscene=='maraphon2'){
            marafon1(devObj);
            hideInfo.setAttribute('data-ismaraphon','Марафон №2');
        }
        if(showscene=='maraphonN'){
            marafon2(devObj);
            hideInfo.setAttribute('data-ismaraphon','Марафон ТТТ');
        }




        //Обработчик сцены
        let axesViewer = new BABYLON.AxesViewer(devObj.scene);
        devObj.scene.onPointerObservable.add(onPickDown, BABYLON.PointerEventTypes.POINTERDOWN, false, this);

        function onPickDown(eventData) {
            //co(eventData.pickInfo.pickedPoint);
        }
        // devObj.scene.registerBeforeRender(function () {
        //    console.log(camera.rotation);
        // });


        /*-----------------------------------------------------------------------*/
        return devObj.scene;
    }

    function guiInterface(devObj)
    {
        // var gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        // var button = BABYLON.GUI.Button.CreateSimpleButton("button", "Clicks: 0");
        // button.top = "0px";
        // button.left = "0px";
        // button.width = "150px";
        // button.height = "50px";
        // button.cornerRadius = 20;
        // button.thickness = 4;
        // button.children[0].color = "#DFF9FB";
        // button.children[0].fontSize = 24;
        // button.color = "#FF7979";
        // button.background = "#EB4D4B";
        //
        // var clicks = 0;
        // button.onPointerClickObservable.add(function () {
        //     clicks++;
        //     if (clicks % 2 == 0) {
        //         button.background = "#EB4D4B";
        //     } else {
        //         button.background = "#007900";
        //     }
        //     button.children[0].text = "Clicks: " + clicks;
        // });
        //
        // gui.addControl(button);
    }

    function domInterface(devObj) {
        openClose.onclick = function (e) {
          siGUI.classList.toggle('open');
        };
        screenButton.onclick = function (e) {
            BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, devObj.camera,{ width: engine.getRenderWidth(), height: engine.getRenderHeight() });
        };
        siGUI.classList.add(classesObj.hideHR);
        siGUIDownButton.onclick = function () {
            siGUIDown.classList.toggle('open');
        }
    }
    function startScene(devObj){
        GUIFROMSCENE.style="display:none;";
    }
    function easyMaraphon1(devObj)
    {
        var controlStageButton = document.getElementById('controlStageButton');
        var controlStagesmsOkno = document.getElementById('controlStage-smsOkno');
        function addTextsiGuiDownText(text){
            siGUIDownText.innerHTML = text + siGUIDownText.innerHTML;
        }
        var idInterval = secundomerf(); // секундомер останавливается через clearInterval
        devObj.maraphon = {
            stage0:function(){
                var anchor = new BABYLON.TransformNode("");
                var manager = new BABYLON.GUI.GUI3DManager(devObj.scene);
                var panel = new BABYLON.GUI.Container3D();
                panel.orientation = 0;
                manager.addControl(panel);
                panel.linkToTransformNode(anchor);
                devObj.forGUI3D.manager = manager;
                devObj.forGUI3D.panel = panel;
                var planeYellow = BABYLON.MeshBuilder.CreateBox('planeYellow', {width:20,height:20,depth:2}, devObj.scene);
                planeYellow.material = niceTextureAlpha('planeYellowMaterial',devObj);
                planeYellow.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                planeYellow.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                planeYellow.rotation.x = Math.PI / 2; planeYellow.position.x = -10;
                planeYellow.position.y = -2;
                var planeRed = BABYLON.MeshBuilder.CreateBox('planeRed', {width:20,height:20,depth:2}, devObj.scene);
                planeRed.material = niceTextureAlpha('planeRedMaterial',devObj);
                planeRed.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                planeRed.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Red();
                planeRed.rotation.x = Math.PI / 2;
                planeRed.position.y = -2; planeRed.position.x = 10;
                devObj.meshes.meshPlaneChess.position.x = 0;
                devObj.camera.position.x = -3;
                var arrayInt = [1,1,1,1,1];
                var vector =[
                    new BABYLON.Vector3(-2, 1, 4),
                    new BABYLON.Vector3(-2, 1, 2),
                    new BABYLON.Vector3(2, 1, 0),
                    new BABYLON.Vector3(2, 1, -2),
                    new BABYLON.Vector3(2, 1, -4),
                ];
                var sides = ["yellow","yellow","red","red","red"];
                var meshes = [];
                var guiMeshes = [];
                var step = 3;
                devObj.forDrawText.font = "bold 88px monospace";
                devObj.forDrawText.fontColor = "greenyellow";
                devObj.forDrawText.bgColor = "black";
                devObj.forDrawText.Width_dT = 256;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 100;
                devObj.forDrawText.Height_dTdT = 78;
                devObj.forDrawText.value = "5";
                planeYellow.countYellow = 2;
                planeRed.countRed = 3;
                var planeCountYellow =BABYLON.MeshBuilder.CreateBox('planeCountYellow', {width:16,height:4,depth:0.1}, devObj.scene);
                devObj.forDrawText.value =  planeYellow.countYellow;
                planeCountYellow.material = drawText("planeCountYellow",devObj);
                planeCountYellow.position.z = 12; planeCountYellow.position.x = -10;
                var planeCountRed =BABYLON.MeshBuilder.CreateBox('planeCountYellow', {width:16,height:4,depth:0.1}, devObj.scene);
                devObj.forDrawText.value = planeRed.countRed;
                devObj.forDrawText.fontColor = "red";
                planeCountRed.material = drawText("planeCountYellow",devObj);
                planeCountRed.position.z = 12; planeCountRed.position.x = 10;
                var stageAlg = "yellow_red";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.fontColor = "green";
                arrayInt.forEach(function(value,index,array){
                    var box = BABYLON.MeshBuilder.CreateBox('boxBi'+index,{size:2},devObj.scene);
                    devObj.forDrawText.value = value;
                    box.material = drawText("boxBiDT"+index,devObj);
                    box.egoValue = value;
                    box.position = vector[index];
                    var sphere1 = BABYLON.Mesh.CreateSphere('Sph1'+index,16,4,devObj.scene);
                    sphere1.position = box.position.clone();
                    var material = niceTextureAlpha("koshI" + index, devObj);
                    sphere1.material = material; sphere1.isPickable = false; sphere1.isVisible = false;
                    box.addChild(sphere1);
                    meshes.push(box);
                    function pDA(){
                        this.myProperty.statusClick = true;
                        if(stageAlg!="success"){
                            if(this.myProperty.side == "yellow"){
                                this.myProperty.side = "red";
                                this._currentMesh.position.x = this._currentMesh.position.x * (-1);
                                planeYellow.countYellow--;
                                planeRed.countRed++;
                                /*region сменаКоличестваНаPlaneДублируемыйКод*/
                                devObj.forDrawText.value =  planeYellow.countYellow;
                                devObj.forDrawText.fontColor = "greenyellow";
                                planeCountYellow.material = drawText("planeCountYellow",devObj);
                                devObj.forDrawText.value = planeRed.countRed;
                                devObj.forDrawText.fontColor = "red";
                                planeCountRed.material = drawText("planeCountYellow",devObj);
                                /*endregion*/
                                if(planeRed.countRed == 5){
                                    stageAlg = "red_yellow";
                                    addTextsiGuiDownText("<div style='color:yellow'>Теперь вам необходимо перекинуть все единицы на желтое поле.</div>");
                                }
                            } else {
                                if( stageAlg=="yellow_red"){
                                    addTextsiGuiDownText("<div style='color:yellow'>Сперва вам необходимо перекинуть все единицы на красное поле.</div>");
                                } else {
                                    this.myProperty.side = "yellow";
                                    this._currentMesh.position.x = this._currentMesh.position.x * (-1);
                                    planeRed.countRed--;
                                    planeYellow.countYellow++;
                                    /*region сменаКоличестваНаPlaneДублируемыйКод*/
                                    devObj.forDrawText.value =  planeYellow.countYellow;
                                    devObj.forDrawText.fontColor = "greenyellow";
                                    planeCountYellow.material = drawText("planeCountYellow",devObj);
                                    devObj.forDrawText.value = planeRed.countRed;
                                    devObj.forDrawText.fontColor = "red";
                                    planeCountRed.material = drawText("planeCountYellow",devObj);
                                    /*endregion*/
                                    if(planeYellow.countYellow==3){
                                        stageAlg="success";
                                        addTextsiGuiDownText("<div style='color:mediumspringgreen'>Отлично! Задача решена, нажмите кнопку {ПРОЙТИ ДАЛЬШЕ}, что бы перейти к следующему этапу.</div>");
                                    }
                                }
                            }
                        }

                    }
                    function pEA() {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    }
                    function pOA(){
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    }
                    function pUA(){
                        this.myProperty.statusClick = false;
                    }
                    var guiBox = guiFromMesh('guiBoxI'+index,box,devObj, {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA, poinerUpAnimtaion:pUA});
                    guiBox.myProperty = {statusClick:false,side:sides[index]};
                    guiMeshes.push(guiBox);
                });
                controlStageButton.onclick = function () {
                    stageAlg="success";
                    if(stageAlg=="success"){
                        devObj.lastPlanePositionZ = 48;
                        meshes.forEach(function (item) {
                            item.dispose();
                        });
                        devObj.maraphon.stage2();
                    }

                    //lastStage(idInterval);
                };
            },
            stage1:function(){
                var PlaneChessStage3 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage3');
                PlaneChessStage3.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = (devObj.lastPlanePositionZ / 2) + 30;
                devObj.camera.rotation.x = 0.5;
                var arrayInt = [1,4,2];
                var vector = [
                    new BABYLON.Vector3(-8, 1, devObj.lastPlanePositionZ),
                    new BABYLON.Vector3(0, 1, devObj.lastPlanePositionZ),
                    new BABYLON.Vector3(8, 1, devObj.lastPlanePositionZ),
                ];
                var meshes = [];
                var guiMeshes = [];
                devObj.forDrawText.font = "bold 88px monospace";
                devObj.forDrawText.fontColor = "green";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 256;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 100;
                devObj.forDrawText.Height_dTdT = 78;
                devObj.forDrawText.value = "5";
                addTextsiGuiDownText("<div style='color:yellow;'>Задача - Определить максимальное число из трех представленных: "+arrayInt[0]
                    +","+arrayInt[1]+","+arrayInt[2]+". Алгоритм данной задачи весьма прост - изначально максимальным числом считается первый элемент, он выделен" +
                    " красным цветом, вам необходимо его сравнить со следующим элементом и определить какой из них больше по значению, именно больший по значению вы" +
                    " должны определить как максимальный элемент... </div>");
                arrayInt.forEach(function(value,index,array){
                    var box = BABYLON.MeshBuilder.CreateBox('boxBi'+index,{size:5},devObj.scene);
                    if(index==0){
                        devObj.forDrawText.fontColor = "red";
                    } else {
                        devObj.forDrawText.fontColor = "green";
                    }
                    devObj.forDrawText.value = value;
                    box.material = drawText("boxBiDT"+index,devObj);
                    box.position = vector[index];
                    box.egoValue = value;
                    meshes.push(box);
                    function pDA(){
                        this.myProperty.statusClick = true;
                    }
                    function pEA() {

                    }
                    function pOA(){

                    }
                    function pUA(){
                        this.myProperty.statusClick = false;
                    }
                    var guiBox = guiFromMesh('guiBoxI'+index,box,devObj, {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA, poinerUpAnimtaion:pUA});
                    guiMeshes.push(guiBox);
                });
                meshes[meshes.length-1].isVisible=false;
                var currentIndex = 0;
                var stageAlg = "Iteration-1";
                /*
                Итерация 1 - Означает этап сравнения первого и второго элемента
                Итерация 2 - Означает этап сравнения первого и третьего элемента
                Итерация 3 - Означает этап сравнения второго и третьего элемента
                * */
                canvas.onkeydown = function(e){
                    if(stageAlg!="success"){
                        if (e.code == "ArrowLeft") {
                            if (stageAlg == "Iteration-1") {
                                if(currentIndex!=0){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if (stageAlg == "Iteration-2") {
                                if(currentIndex!=0){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex!=1){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            }
                        }
                        if (e.code == "ArrowRight") {
                            if (stageAlg == "Iteration-1") {
                                if(currentIndex !=1){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if (stageAlg == "Iteration-2") {
                                if(currentIndex!=2){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex !=2){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            }
                        }
                        if (e.code == "Enter") {
                            if(stageAlg=="Iteration-1"){
                                if(currentIndex==0){
                                    if(meshes[currentIndex].egoValue > meshes[currentIndex+1].egoValue){
                                        addTextsiGuiDownText("<div style='color:greenyellow'>Первая итерация завершена. Вы сделали правильно сравнение!</div>");
                                        stageAlg="Iteration-2";
                                        meshes[1].isVisible = false; meshes[meshes.length-1].isVisible=true;
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }

                                } else if(currentIndex==1){
                                    if(meshes[currentIndex].egoValue > meshes[currentIndex-1].egoValue){
                                        addTextsiGuiDownText("<div style='color:greenyellow'>Первая итерация завершена. Вы сделали правильно сравнение!</div>");
                                        stageAlg="Iteration-3";
                                        meshes[0].isVisible = false; meshes[meshes.length-1].isVisible=true;
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            } else if (stageAlg=="Iteration-2"){
                                if(currentIndex==0){
                                    if (meshes[currentIndex].egoValue > meshes[2].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                } else if (currentIndex == 2) {
                                    if (meshes[currentIndex].egoValue > meshes[0].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex==1){
                                    if (meshes[currentIndex].egoValue > meshes[2].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                } else if(currentIndex==2){
                                    if (meshes[currentIndex].egoValue > meshes[1].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            }
                            if(stageAlg=="success"){
                                addTextsiGuiDownText("<div>Данная задача успешно завершена. Что бы пройти дальше, нажмите на кнопку {ПРОЙТИ ДАЛЬШЕ}.</div>");
                            }
                        }
                    }

                };
                var variableFuncSuccess = function(){
                    devObj.forDrawText.fontColor = "orangered";
                    devObj.forDrawText.bgColor = "black";
                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                    meshes[currentIndex].material = drawText("daxz", devObj);
                    addTextsiGuiDownText("<div style='color:greenyellow'>Вторая итерация завершена. Вы сделали правильно сравнение!</div>");
                    stageAlg="success";
                }
                controlStageButton.onclick = function () {
                    if(stageAlg=="success"){
                        devObj.lastPlanePositionZ = 96+48;
                        devObj.maraphon.stage3();
                    }
                    //lastStage(idInterval);
                };
            },
            stage2:function(){
                var PlaneChessStage2 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage2');
                PlaneChessStage2.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = devObj.lastPlanePositionZ / 2;
                var planeYellow = BABYLON.MeshBuilder.CreateBox('planeYellow', {width:20,height:20,depth:2}, devObj.scene);
                planeYellow.material = niceTextureAlpha('planeYellowMaterial',devObj);
                planeYellow.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                planeYellow.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                planeYellow.rotation.x = Math.PI / 2; planeYellow.position.x = -10;
                planeYellow.position.y = -2; planeYellow.position.z =  devObj.lastPlanePositionZ;
                var planeRed = BABYLON.MeshBuilder.CreateBox('planeRed', {width:20,height:20,depth:2}, devObj.scene);
                planeRed.material = niceTextureAlpha('planeRedMaterial',devObj);
                planeRed.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                planeRed.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Red();
                planeRed.rotation.x = Math.PI / 2;
                planeRed.position.y = -2; planeRed.position.x = 10;  planeRed.position.z =  devObj.lastPlanePositionZ;
                var planeGreen = BABYLON.MeshBuilder.CreateBox('planeGreen', {width:20,height:20,depth:2}, devObj.scene);
                planeGreen.material = niceTextureAlpha('planeGreenMaterial',devObj);
                planeGreen.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Green();
                planeGreen.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Green();
                planeGreen.rotation.x = Math.PI / 2;
                planeGreen.position.y = -2; planeGreen.position.x = 0;  planeGreen.position.z = devObj.lastPlanePositionZ+20;
                devObj.meshes.meshPlaneChess.position.x = 0;
                devObj.camera.position.x = -3;
                var arrayInt = [2,3];
                var vector =[
                    new BABYLON.Vector3(-10, 1,  devObj.lastPlanePositionZ),
                    new BABYLON.Vector3(10, 1, devObj.lastPlanePositionZ),
                ];
                var sides = ["yellow","red"];
                var meshes = [];
                var guiMeshes = [];
                var step = 3;
                devObj.forDrawText.font = "bold 88px monospace";
                devObj.forDrawText.fontColor = "greenyellow";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 256;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 100;
                devObj.forDrawText.Height_dTdT = 78;
                devObj.forDrawText.value = "5";
                var stageAlg = "goGreen";
                arrayInt.forEach(function(value,index,array){
                    var box = BABYLON.MeshBuilder.CreateBox('boxBi'+index,{size:6},devObj.scene);
                    devObj.forDrawText.value = value;
                    box.material = drawText("boxBiDT"+index,devObj);
                    box.egoValue = value;
                    box.position = vector[index];
                    var sphere1 = BABYLON.Mesh.CreateSphere('Sph1'+index,16,12,devObj.scene);
                    sphere1.position = box.position.clone();
                    var material = niceTextureAlpha("koshI" + index, devObj);
                    sphere1.material = material; sphere1.isPickable = false; sphere1.isVisible = false;
                    box.addChild(sphere1);
                    meshes.push(box);
                    function pDA(){
                        this.myProperty.statusClick = true;
                        if(stageAlg!="success"){
                            //console.log(stageAlg);
                            if(stageAlg=="goGreen"){
                                this.myProperty.side="green";
                                this._currentMesh.position.x = 0;
                                this._currentMesh.position.z = devObj.lastPlanePositionZ+20;
                                stageAlg="goSwitch";
                            }
                            if(stageAlg=="goSwitch"){
                                //console.warn(this.myProperty.side);
                                if(this.myProperty.side=="yellow"){
                                    this.myProperty.side="red";
                                    stageAlg="switchToYellow";
                                } else if(this.myProperty.side=="red") {
                                    this.myProperty.side="yellow";
                                    stageAlg="switchToRed";
                                }
                                if( this.myProperty.side!="green"){
                                    this._currentMesh.position.x = this._currentMesh.position.x * (-1);
                                }
                            }
                            if(stageAlg=="switchToYellow"){
                                if(this.myProperty.side=="green"){
                                    this._currentMesh.position.z= devObj.lastPlanePositionZ;
                                    this._currentMesh.position.x = -10;
                                    stageAlg="success";
                                }
                            }
                            if(stageAlg=="switchToRed"){
                                if(this.myProperty.side=="green"){
                                    this._currentMesh.position.z= devObj.lastPlanePositionZ;
                                    this._currentMesh.position.x = 10;
                                    stageAlg="success";
                                }
                            }

                        }

                    }
                    function pEA() {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    }
                    function pOA(){
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    }
                    function pUA(){
                        this.myProperty.statusClick = false;
                    }
                    var guiBox = guiFromMesh('guiBoxI'+index,box,devObj, {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA, poinerUpAnimtaion:pUA});
                    guiBox.myProperty = {statusClick:false,side:sides[index]};
                    guiMeshes.push(guiBox);
                });
                controlStageButton.onclick = function () {
                    stageAlg="success";
                    if(stageAlg=="success"){
                        devObj.lastPlanePositionZ = 96;
                        meshes.forEach(function (item) {
                            item.dispose();
                        });
                        addTextsiGuiDownText("Задача решена!");
                        devObj.maraphon.stage1();
                    }
                    //lastStage(idInterval);
                };
            },
            stage3:function(){
                var PlaneChessStage2 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage2');
                PlaneChessStage2.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = (devObj.lastPlanePositionZ / 2) + 50;
                devObj.camera.rotation.x = 0.5;
                var arrayInt = [7,4,1];
                var vector = [
                    new BABYLON.Vector3(-8, 1, devObj.lastPlanePositionZ),
                    new BABYLON.Vector3(0, 1, devObj.lastPlanePositionZ),
                    new BABYLON.Vector3(8, 1, devObj.lastPlanePositionZ),
                ];
                var meshes = [];
                var guiMeshes = [];
                devObj.forDrawText.font = "bold 88px monospace";
                devObj.forDrawText.fontColor = "green";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 256;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 100;
                devObj.forDrawText.Height_dTdT = 78;
                devObj.forDrawText.value = "5";
                addTextsiGuiDownText("<div style='color:yellow;'>Задача - Определить минимальное число из трех представленных: "+arrayInt[0]
                    +","+arrayInt[1]+","+arrayInt[2]+". Алгоритм данной задачи весьма прост - изначально минимальным числом считается первый элемент, он выделен" +
                    " красным цветом, вам необходимо его сравнить со следующим элементом и определить какой из них меньше по значению, именно меньший по значению вы" +
                    " должны определить как минимальный элемент... </div>");
                arrayInt.forEach(function(value,index,array){
                    var box = BABYLON.MeshBuilder.CreateBox('boxBi'+index,{size:5},devObj.scene);
                    if(index==0){
                        devObj.forDrawText.fontColor = "red";
                    } else {
                        devObj.forDrawText.fontColor = "green";
                    }
                    devObj.forDrawText.value = value;
                    box.material = drawText("boxBiDT"+index,devObj);
                    box.position = vector[index];
                    box.egoValue = value;
                    meshes.push(box);
                    function pDA(){
                        this.myProperty.statusClick = true;
                    }
                    function pEA() {

                    }
                    function pOA(){

                    }
                    function pUA(){
                        this.myProperty.statusClick = false;
                    }
                    var guiBox = guiFromMesh('guiBoxI'+index,box,devObj, {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA, poinerUpAnimtaion:pUA});
                    guiMeshes.push(guiBox);
                });
                meshes[meshes.length-1].isVisible=false;
                var currentIndex = 0;
                var stageAlg = "Iteration-1";
                /*
                Итерация 1 - Означает этап сравнения первого и второго элемента
                Итерация 2 - Означает этап сравнения первого и третьего элемента
                Итерация 3 - Означает этап сравнения второго и третьего элемента
                * */
                canvas.onkeydown = function(e){
                    if(stageAlg!="success"){
                        if (e.code == "ArrowLeft") {
                            if (stageAlg == "Iteration-1") {
                                if(currentIndex!=0){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if (stageAlg == "Iteration-2") {
                                if(currentIndex!=0){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex!=1){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex--;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            }
                        }
                        if (e.code == "ArrowRight") {
                            if (stageAlg == "Iteration-1") {
                                if(currentIndex !=1){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if (stageAlg == "Iteration-2") {
                                if(currentIndex!=2){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex !=2){
                                    devObj.forDrawText.fontColor = "green";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                    currentIndex++;
                                    devObj.forDrawText.fontColor = "red";
                                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                                    meshes[currentIndex].material = drawText("daxz", devObj);
                                }
                            }
                        }
                        if (e.code == "Enter") {
                            if(stageAlg=="Iteration-1"){
                                if(currentIndex==0){
                                    if(meshes[currentIndex].egoValue < meshes[currentIndex+1].egoValue){
                                        addTextsiGuiDownText("<div style='color:greenyellow'>Первая итерация завершена. Вы сделали правильно сравнение!</div>");
                                        stageAlg="Iteration-2";
                                        meshes[1].isVisible = false; meshes[meshes.length-1].isVisible=true;
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }

                                } else if(currentIndex==1){
                                    if(meshes[currentIndex].egoValue < meshes[currentIndex-1].egoValue){
                                        addTextsiGuiDownText("<div style='color:greenyellow'>Первая итерация завершена. Вы сделали правильно сравнение!</div>");
                                        stageAlg="Iteration-3";
                                        meshes[0].isVisible = false; meshes[meshes.length-1].isVisible=true;
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            } else if (stageAlg=="Iteration-2"){
                                if(currentIndex==0){
                                    if (meshes[currentIndex].egoValue < meshes[2].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                } else if (currentIndex == 2) {
                                    if (meshes[currentIndex].egoValue < meshes[0].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            } else if(stageAlg=="Iteration-3"){
                                if(currentIndex==1){
                                    if (meshes[currentIndex].egoValue < meshes[2].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                } else if(currentIndex==2){
                                    if (meshes[currentIndex].egoValue < meshes[1].egoValue) {
                                        variableFuncSuccess();
                                        stageAlg="success";
                                    } else {
                                        addTextsiGuiDownText("<div style='color:red;'>Вы сделали неправильное сравнение! Попробуйте еще раз.</div>");
                                    }
                                }
                            }
                            if(stageAlg=="success"){
                                addTextsiGuiDownText("<div>Данная задача успешно завершена. Что бы пройти дальше, нажмите на кнопку {ПРОЙТИ ДАЛЬШЕ}.</div>");
                            }
                        }
                    }

                };
                var variableFuncSuccess = function(){
                    devObj.forDrawText.fontColor = "orangered";
                    devObj.forDrawText.bgColor = "black";
                    devObj.forDrawText.value = meshes[currentIndex].egoValue;
                    meshes[currentIndex].material = drawText("daxz", devObj);
                    addTextsiGuiDownText("<div style='color:greenyellow'>Вторая итерация завершена. Вы сделали правильно сравнение!</div>");
                    stageAlg="success";
                    lastStage(idInterval);
                }
                controlStageButton.onclick = function () {
                    if(stageAlg=="success"){
                        // devObj.lastPlanePositionZ = 96+48;
                        // devObj.maraphon.stage3();
                        lastStage(idInterval);
                    }

                };
            },
        };
        devObj.maraphon.stage0();

    }
    function marafon1(devObj)
    {
        var controlStageButton = document.getElementById('controlStageButton');
        var controlStagesmsOkno = document.getElementById('controlStage-smsOkno');
        function addTextsiGuiDownText(text){
            siGUIDownText.innerHTML = text + siGUIDownText.innerHTML;
        }
        var idInterval = secundomerf(); // секундомер останавливается через clearInterval
        devObj.maraphon = {
            stage0:function(){
                var anchor = new BABYLON.TransformNode("");
                var manager = new BABYLON.GUI.GUI3DManager(devObj.scene);
                var panel = new BABYLON.GUI.Container3D();
                panel.orientation = 0;
                manager.addControl(panel);
                panel.linkToTransformNode(anchor);
                devObj.forGUI3D.manager = manager;
                devObj.forGUI3D.panel = panel;
                var arrayInt = [1,2,3,4,5,6,7,8,9,10,11]; // 10 len
                var left = 0; var right = arrayInt.length-1;
                var mid = Math.floor((left+right)/2);
                /*
                [1,2,3,4,5,6,7,8,9,10,11] -> l = 0, r = 10, mid = 5 (=6;  mid > 8 ? NO
                 [-1,-2,-3,-4,-5,-6,7,8,9,10,11] -> l = mid + 1 (6), r = 10, mid = 8 (=9; mid > 8 ? YES
                  [-1,-2,-3,-4,-5,-6,7,8,-9,-10,-11] -> l = 6, r = mid - 1 (7), mid = 6 (=7; mid > 8 ? NO
                  [-1,-2,-3,-4,-5,-6,-7,8,-9,-10,-11] -> l = mid + 1 (7), r = 7, mid = 7 (=8; - End
                  Алгоритм делится на этапы:
                  1) Выбор середины
                  2) Определение в какой стороне находится искаемый элемент
                  3) Если mid > searchInt - то искомый элемент находится в левой стороне, правая отсекается
                  4) Если mid < searchInt - то искомый элемент находится в правой стороне, левая отсекается
                  5) Если mid = searchInt - то искомый элемент найден
                * */
                var searchInt = 8; // на текущий момент работает со значением 4,8 и значения выше 11, т.е. ласт элемента массива
                var meshes = [];
                var guiMeshes = [];
                var step = 3.5;
                addTextsiGuiDownText("<div style='color:white;'>Перед вами представлены ячейки, символизирующие элементы массива в неотсортированном порядке, " +
                    "вам необходимо провести поиск элемента <span style='color:greenyellow;'>со значением \""+searchInt+"\"</span> алгоритмом бинарного поиска, но перед этим вам необходимо отсортировать ячейки, " +
                    "если они неотсортированны, вы можете передвигать ячейку наведя курсор на неё и зажав кнопку ЛКМ. Как только массив будет отсортирован," +
                    " нажмите на кнопку {МАССИВ ОТСОРТИРОВАН}</div>");
                devObj.forDrawText.font = "bold 88px monospace";
                devObj.forDrawText.fontColor = "black";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 256;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 100;
                devObj.forDrawText.Height_dTdT = 78;
                devObj.forDrawText.value = "5";
                arrayInt.forEach(function(value,index,array){
                    var box = BABYLON.MeshBuilder.CreateBox('boxBi'+index,{size:2},devObj.scene);
                    devObj.forDrawText.value = value;
                    box.material = drawText("boxBiDT"+index,devObj);
                    box.position.x = ((index-2)*step); box.egoValue = value;
                    var sphere1 = BABYLON.Mesh.CreateSphere('Sph1'+index,16,4,devObj.scene);
                    sphere1.position = box.position.clone();
                    var material = niceTextureAlpha("koshI" + index, devObj);
                    sphere1.material = material; sphere1.isPickable = false; sphere1.isVisible = false;
                    box.addChild(sphere1);
                    meshes.push(box);
                    function pDA(){
                        this.myProperty.statusClick = true;
                    }
                    function pEA() {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    }
                    function pOA(){
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    }
                    function pUA(){
                        this.myProperty.statusClick = false;
                    }
                    var guiBox = guiFromMesh('guiBoxI'+index,box,devObj, {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA, poinerUpAnimtaion:pUA});
                    guiBox.myProperty = {statusClick:false};
                    guiBox.onPointerMoveObservable.add(function (coord, obj) {
                        if (obj.target.myProperty.statusClick) {
                            if (coord.x < 32 && coord.x > -8) {
                                obj.target.position.x = coord.x;
                            }
                            if (coord.y > 0 && coord.y < 3) {
                                obj.target.position.y = coord.y;
                            }
                        }
                    });
                    guiMeshes.push(guiBox);
                    //panel.addControl(guiBox);
                });
                /*region guiInterface*/
                controlStageButton.onclick = function(){

                }
                var stageSortButton = document.createElement('button');
                stageSortButton.textContent = "Массив отсортирован"; stageSortButton.classList.add(classesObj.button);
                stageSortButton.classList.add(classesObj.buttonAlg); stageSortButton.classList.add(classesObj.buttonAlgActive);
                GUIFROMSCENE.append(stageSortButton);
                var selectMidButton = document.createElement('button');
                selectMidButton.textContent = "Середина выбрана"; selectMidButton.classList.add(classesObj.button);
                selectMidButton.classList.add(classesObj.buttonAlg);
                GUIFROMSCENE.append(selectMidButton);
                var clipButton = document.createElement('button');
                clipButton.textContent = "Отсечена часть массива"; clipButton.classList.add(classesObj.button);
                clipButton.classList.add(classesObj.buttonAlg);
                GUIFROMSCENE.append(clipButton);

                /*endregion*/
                stageSortButton.onclick = function () {
                    while (!checkMeshOnSort(meshes)) {
                        meshes.forEach(function (value, index, array) {
                            if (index != array.length - 1) {
                                if (value.position.x > array[index + 1].position.x) {
                                    array[index] = array[index + 1];
                                    array[index + 1] = value;
                                }
                            }
                        })
                    }
                    let sendArrayForCheck = [];
                    meshes.forEach(function (value, index, array) {
                        sendArrayForCheck.push(value.egoValue);
                    });
                    var selectMid = false;
                    if (checkArrayOnSort(sendArrayForCheck)) {
                        addTextsiGuiDownText("<span style='color:yellowgreen;'>Отлично! Массив отсортирован </span>, теперь выберете середину массива по следующей формуле:" +
                            " Левая граница = " + left + " , Правая граница = " + right + " , Середина = (Левая граница + Правая граница) / 2 - деление без остатка." +
                            " Учтите, отсчет элементов массива необходимо начинать с нуля.");
                        stageSortButton.classList.add(classesObj.buttonAlgSuccess);
                        stageSortButton.disabled = true;
                        selectMidButton.classList.add(classesObj.buttonAlgActive);
                        guiMeshes.forEach(function (item,i) {
                            item.pointerDownAnimation = function () {
                                this.myProperty.statusClick = false;
                                if(!selectMid){
                                    clipButton.onclick = function(){};
                                    // Если середина массива не выбрана
                                    if( Number(this._currentMesh.egoValue) == arrayInt[mid] ){
                                        //console.log('СЕРЕДИНА ВЫБРАНА');
                                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                                        /*region сменаМатериалаСферы*/
                                        this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
                                        this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                                        /*endregion*/
                                        this.pointerOutAnimation = function(){};
                                        siGUIDownText.innerHTML =  "<div style='color:yellow;'>Отлично! Середина выбрана успешно</div>" + siGUIDownText.innerHTML ;
                                        if(Number(this._currentMesh.egoValue) == arrayInt[arrayInt.length-1] && arrayInt[arrayInt.length-1] < searchInt){
                                            /*region сбросНавешанныхКлассов На Кнопки*/
                                            clipButton.className = ""; clipButton.classList.add(classesObj.button); clipButton.classList.add(classesObj.buttonAlg);
                                            stageSortButton.className = ""; stageSortButton.classList.add(classesObj.button); stageSortButton.classList.add(classesObj.buttonAlg);
                                            selectMidButton.className = ""; selectMidButton.classList.add(classesObj.button); selectMidButton.classList.add(classesObj.buttonAlg);
                                            /*endregion*/
                                            /*region сменаМатериалаСферы*/
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();
                                            /*endregion*/
                                            addTextsiGuiDownText("<div style='color:white;'>Упс! В данном массиве искомого элемента неоказалось. Теперь вы можете пройти дальше, нажав кнопку {ПРОЙТИ ДАЛЬШЕ}</div>");
                                            console.log('else Number');
                                            controlStageButton.onclick = function () {
                                                devObj.lastPlanePositionZ = 48;
                                                stageSortButton.remove(); selectMidButton.remove(); clipButton.remove();
                                                devObj.maraphon.stage2();
                                            };
                                        } else {

                                            selectMidButton.classList.add(classesObj.buttonAlgSuccess);
                                            clipButton.classList.add(classesObj.buttonAlgActive);
                                            siGUIDownText.innerHTML = "На данном шаге вам необходимо самостоятельно отсечь ненужные элементы массива" +
                                                ", сравните значение центрального элемента массива с искомым и выясните, больше оно или меньше, соответственно часть в которой" +
                                                " искомый элемент явно не находится, необходимо отсечь, после того как вы закончите с отсечением элементов, нажмите на кнопку <span style='color:yellow;'>{ОТСЕЧЕНА ЧАСТЬ МАССИВА}</span>." +
                                                "Внимание! Центральный элемент тоже надо отсечь. <br>" + siGUIDownText.innerHTML;
                                        }
                                        selectMid = true;
                                        if(arrayInt[mid]==searchInt){
                                            if(Number(this._currentMesh.egoValue) == arrayInt[mid]){
                                                console.log('ХДЕ?');
                                                /*region сбросНавешанныхКлассов На Кнопки*/
                                                clipButton.className = ""; clipButton.classList.add(classesObj.button); clipButton.classList.add(classesObj.buttonAlg);
                                                stageSortButton.className = ""; stageSortButton.classList.add(classesObj.button); stageSortButton.classList.add(classesObj.buttonAlg);
                                                selectMidButton.className = ""; selectMidButton.classList.add(classesObj.button); selectMidButton.classList.add(classesObj.buttonAlg);
                                                /*endregion*/
                                                /*region сменаМатериалаСферы*/
                                                this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
                                                this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Green();
                                                /*endregion*/
                                                siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Отлично! Элемент найден. Теперь вы можете пройти дальше, нажав кнопку {ПРОЙТИ ДАЛЬШЕ}</div>" + siGUIDownText.innerHTML;
                                                controlStageButton.onclick = function () {
                                                    devObj.lastPlanePositionZ = 48;
                                                    stageSortButton.remove(); selectMidButton.remove(); clipButton.remove();
                                                    devObj.maraphon.stage2();
                                                };

                                            } else {
                                            }

                                        } else {

                                        }

                                    } else {
                                        //console.log('это не середина');
                                        selectMidButton.classList.add(classesObj.buttonAlgError);
                                        siGUIDownText.innerHTML = "<div style='color:red;'>Выбранный вами элемент не является серединой массива</div>" + siGUIDownText.innerHTML  ;
                                    }
                                } else {
                                    if(arrayInt[mid] > searchInt){ // Если искомый элемент в левой стороне
                                        if(Number(this._currentMesh.egoValue) >= arrayInt[mid]){
                                            this.myProperty.clipped = true;
                                            this._currentMesh.getChildMeshes()[0].isVisible = true;
                                            this.pointerOutAnimation = function(){};
                                            /*region сменаМатериалаСферы*/
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                                            /*endregion*/
                                            addTextsiGuiDownText("<div style='color:yellowgreen;'>Элемент с значением = "+Number(this._currentMesh.egoValue) +" успешно отсечен.</div>");
                                            if(clipButton.classList.contains(classesObj.buttonAlgError)){
                                                clipButton.classList.remove(classesObj.buttonAlgError);
                                            }
                                        } else {
                                            clipButton.classList.add(classesObj.buttonAlgError);
                                            addTextsiGuiDownText("<div style='color:red;'>Элемент с значением = "+Number(this._currentMesh.egoValue) +" не может быть отсечен на данном этапе.</div>");
                                        }
                                        clipButton.onclick = function(){
                                            var flag123 = true;
                                            guiMeshes.forEach(function (item) {
                                                if(Number(item._currentMesh.egoValue) >= arrayInt[mid]){
                                                    if(!item.myProperty.clipped == true) {flag123 = false}
                                                }
                                            });
                                            if(flag123){
                                                clipButton.classList.add(classesObj.buttonAlgSuccess);
                                                /*region сбросНавешанныхКлассов На Кнопки*/
                                                clipButton.className = ""; clipButton.classList.add(classesObj.button); clipButton.classList.add(classesObj.buttonAlg);
                                                stageSortButton.className = ""; stageSortButton.classList.add(classesObj.button); stageSortButton.classList.add(classesObj.buttonAlg);
                                                selectMidButton.className = ""; selectMidButton.classList.add(classesObj.button); selectMidButton.classList.add(classesObj.buttonAlg);
                                                /*endregion*/
                                                siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Отлично! Итерация пройдена.</div>" + siGUIDownText.innerHTML;
                                                addTextsiGuiDownText("<div style='color:yellow'>Если искомый элемент не достигнут, вам необходимо выполнить те же действия с оставшейся частью массива.</div>");
                                                right = mid -1; selectMid = false; mid = Math.floor((left+right)/2);
                                                selectMidButton.classList.add(classesObj.buttonAlgActive);
                                            } else {
                                                addTextsiGuiDownText("<div style='color:white;'>Вы что-то сделали не так.</div>");
                                                clipButton.classList.add(classesObj.buttonAlgError);
                                            }
                                        }
                                    }
                                    if(arrayInt[mid] <searchInt){ // Если искомый элемент в правой
                                        if(Number(this._currentMesh.egoValue) <= arrayInt[mid]){
                                            this.myProperty.clipped = true;
                                            this._currentMesh.getChildMeshes()[0].isVisible = true;
                                            this.pointerOutAnimation = function(){};
                                            /*region сменаМатериалаСферы*/
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
                                            this._currentMesh.getChildMeshes()[0].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                                            /*endregion*/
                                            addTextsiGuiDownText("<div style='color:yellowgreen;'>Элемент с значением = "+Number(this._currentMesh.egoValue) +" успешно отсечен.</div>");
                                            if(clipButton.classList.contains(classesObj.buttonAlgError)){
                                                clipButton.classList.remove(classesObj.buttonAlgError);
                                            }
                                        }
                                        else {
                                            clipButton.classList.add(classesObj.buttonAlgError);
                                            addTextsiGuiDownText("<div style='color:red;'>Элемент с значением = "+Number(this._currentMesh.egoValue) +" не может быть отсечен на данном этапе.</div>");
                                        }
                                        clipButton.onclick = function(){
                                            var flag123 = true;
                                            guiMeshes.forEach(function (item) {
                                                if(Number(item._currentMesh.egoValue) <= arrayInt[mid]){
                                                    if(!item.myProperty.clipped == true) {flag123 = false}
                                                }
                                            });
                                            if(flag123){
                                                clipButton.classList.add(classesObj.buttonAlgSuccess);
                                                /*region сбросНавешанныхКлассов На Кнопки*/
                                                clipButton.className = ""; clipButton.classList.add(classesObj.button); clipButton.classList.add(classesObj.buttonAlg);
                                                stageSortButton.className = ""; stageSortButton.classList.add(classesObj.button); stageSortButton.classList.add(classesObj.buttonAlg);
                                                selectMidButton.className = ""; selectMidButton.classList.add(classesObj.button); selectMidButton.classList.add(classesObj.buttonAlg);
                                                /*endregion*/
                                                siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Отлично! Итерация пройдена.</div>" + siGUIDownText.innerHTML;
                                                addTextsiGuiDownText("<div style='color:yellow'>Если искомый элемент не достигнут, вам необходимо выполнить те же действия с оставшейся частью массива.</div>");
                                                left = mid + 1; selectMid = false; mid = Math.floor((left+right)/2);
                                                selectMidButton.classList.add(classesObj.buttonAlgActive);
                                            } else {
                                                addTextsiGuiDownText("<div style='color:white;'>Вы что-то сделали не так.</div>");
                                                clipButton.classList.add(classesObj.buttonAlgError);
                                            }
                                        }
                                    }
                                    if(arrayInt[mid]==searchInt){
                                        if(Number(this._currentMesh.egoValue) == arrayInt[mid]){

                                        }
                                    }
                                }
                            }
                        })

                    } else {
                        //controlStagesmsOkno.textContent = "Массив не отсортирован!";
                        stageSortButton.classList.add(classesObj.buttonAlgError);
                    }
                };
                controlStageButton.onclick = function () {
                    devObj.lastPlanePositionZ = 48;
                    stageSortButton.remove(); selectMidButton.remove(); clipButton.remove();
                    devObj.maraphon.stage2();
                };
            },
            stage1: function () {
                //co('stage1');
                GUIFROMSCENE.style="display:none;";
                // 3D GUI
                var anchor = new BABYLON.TransformNode("");
                var manager = new BABYLON.GUI.GUI3DManager(devObj.scene);
                var panel = new BABYLON.GUI.Container3D();
                panel.orientation = 0;
                manager.addControl(panel);
                panel.linkToTransformNode(anchor);
                devObj.forGUI3D.manager = manager;
                devObj.forGUI3D.panel = panel;
                let arrayInt = [1, 3,2,5, 7, 8, 9];
                //var searchInt = arrayInt[Math.floor((arrayInt.length)/2)];
                var searchInt = 7;
                let meshes = [];
                let step = 6;
                let font = "bold 94px monospace";
                arrayInt.forEach(function (value, index, array) {
                    var standardMaterial = new BABYLON.StandardMaterial("standartMaterial" + index, devObj.scene);
                    standardMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
                    let dynamicTexture = new BABYLON.DynamicTexture("dynamicTexture" + index, {
                        width: 256,
                        height: 128
                    }, devObj.scene);
                    standardMaterial.diffuseTexture = dynamicTexture;
                    var box = BABYLON.MeshBuilder.CreateBox("boxBubbleI" + index, {size: 3}, devObj.scene);
                    box.material = standardMaterial;
                    box.position.x = ((index-1) * step);
                    dynamicTexture.drawText(value, 100, 78, font, "green", "white", true, true);
                    let sphere1 = BABYLON.Mesh.CreateSphere("SphereI" + index, 16, 6, devObj.scene);
                    sphere1.position = box.position.clone();
                    let material = niceTextureAlpha("koshI" + index, devObj);
                    sphere1.material = material;
                    sphere1.isPickable = false;
                    sphere1.isVisible = false;
                    box.addChild(sphere1);
                    box.egoValue = value;
                    meshes.push(box);
                    let guiBox = new BABYLON.GUI.MeshButton3D(box, "guiBoxI" + index);
                    guiBox.myProperty = {statusClick: false}
                    guiBox.pointerDownAnimation = function () {
                        //co('удержание мыши |');
                        this.myProperty.statusClick = true;
                    };
                    guiBox.pointerEnterAnimation = function () {
                        // Наведение курсора на МЕШ
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    };
                    guiBox.pointerOutAnimation = function () {
                        // Отведение курсора с меша, противоположно pointerEnter
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    };
                    guiBox.onPointerMoveObservable.add(function (coord, obj) {
                        if (obj.target.myProperty.statusClick) {
                            if (coord.x < 32 && coord.x > -1) {
                                obj.target.position.x = coord.x;
                            }
                            if (coord.y > 0 && coord.y < 8) {
                                obj.target.position.y = coord.y;
                            }
                        }
                    });
                    guiBox.pointerUpAnimation = function () {
                        //co('удержание мыши прекращено | ');
                        this.myProperty.statusClick = false;

                    };
                    panel.addControl(guiBox);
                })
                let boxLine = BABYLON.MeshBuilder.CreateBox('boxline1', {width: 48, height: 1}, devObj.scene);
                let line1Texture = new BABYLON.Texture('res/textures/line1.jpg');
                let boxLineMaterial = new BABYLON.StandardMaterial("boxLineMaterial", devObj.scene);
                line1Texture.uScale = 8;
                line1Texture.vScale = 8;
                boxLineMaterial.diffuseTexture = line1Texture;
                boxLine.material = boxLineMaterial;
                boxLine.position.y = -2;
                boxLine.position.x = 11;
                boxLine.position.z = 3;
                let boxLineInstance = boxLine.createInstance('boxline2');
                boxLineInstance.position.z = -3;
                let sphereButtonStart = BABYLON.Mesh.CreateSphere("SphereButton", 16, 4, devObj.scene);
                sphereButtonStart.material = niceTextureAlpha("sphereButtonMaterial", devObj);
                sphereButtonStart.material.alpha = 0.7;
                sphereButtonStart.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Yellow();
                sphereButtonStart.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Yellow();
                sphereButtonStart.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Red();
                sphereButtonStart.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Green();
                sphereButtonStart.position.z = -10;
                sphereButtonStart.position.y = 1;
                let guiSphereButtonStart = new BABYLON.GUI.MeshButton3D(sphereButtonStart, "guiSphereButtonStart");
                guiSphereButtonStart.pointerDownAnimation = function () {
                    // Проверка кубиков / Сортировочка
                    while (!checkMeshOnSort(meshes)) {
                        meshes.forEach(function (value, index, array) {
                            if (index != array.length - 1) {
                                if (value.position.x > array[index + 1].position.x) {
                                    array[index] = array[index + 1];
                                    array[index + 1] = value;
                                }
                            }

                        })
                    }
                    let sendArrayForCheck = [];
                    meshes.forEach(function (value, index, array) {
                        sendArrayForCheck.push(value.egoValue);
                    });
                    if (checkArrayOnSort(sendArrayForCheck)) {
                        sphereButtonStart.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Green();
                        sphereButtonStart.isPickable = false;
                       // plusGreenSphereCount();
                        var coverBoxes = BABYLON.MeshBuilder.CreateBox('coverBoxes', {
                            width: 48,
                            height: 6,
                            depth: 8
                        }, devObj.scene);
                        coverBoxes.position.x = 11;
                        coverBoxes.position.y = 1;
                        coverBoxes.material = niceTextureAlpha('coverBoxesMaterial', devObj);
                        coverBoxes.material.alpha = 0.7;
                        coverBoxes.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.FromHexString("#fff900");
                        coverBoxes.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                        coverBoxes.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Black();
                        coverBoxes.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Green();
                        boxLine.dispose(); //boxLineInstance.dispose();
                        //coverBoxes.dispose();
                        coverBoxes.isVisible = false;
                        if(binarySearch(arrayInt,searchInt,meshes,coverBoxes,devObj)){
                            setTimeout(function () {
                                devObj.maraphon.stage2();
                            },5500);
                        }
                    } else {
                        sphereButtonStart.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                        //plusRedSphereCount();
                    }
                };
                guiSphereButtonStart.pointerUpAnimation = function () {
                };
                panel.addControl(guiSphereButtonStart);
                devObj.lastPlanePositionZ = 48;
            }
            , stage2: function () {
                GUIFROMSCENE.style="";
                var PlaneChessStage2 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage2');
                PlaneChessStage2.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = devObj.lastPlanePositionZ / 2;
                var arrayInt = [
                    5, //  -15,14,
                    5, 4, //  -18,11,
                    4, 3, //  -15,14,
                    3, 2, //  -15,14,
                    2, 1, //  -15,14,
                    1, //
                    1, 2, //
                    2, 3, //
                    6, 4, //
                    24, 5, //
                    120 //  -15,14
                ];
                var arrayString = [
                    "5!", //  -15,14,
                    5, "4!", //  -18,11,
                    4, "3!", //  -15,14,
                    3, "2!", //  -15,14,
                    2, "1!", //  -15,14,
                    1, //
                    1, "2", //
                    2, "3", //
                    6, "4", //
                    24, "5", //
                    120 //  -15,14
                ];
                var vector =[
                    new BABYLON.Vector3(-15,19,devObj.lastPlanePositionZ+6), // 5
                    new BABYLON.Vector3(-18,16,devObj.lastPlanePositionZ+6), // 5
                    new BABYLON.Vector3(-12,16,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(-15,12,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(-9,12,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(-12,8,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(-6,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(-9,4,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(-3,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(0,0,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(3,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(9,4,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(6,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(12,8,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(9,12,devObj.lastPlanePositionZ+6), // 6
                    new BABYLON.Vector3(15,12,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(12,16,devObj.lastPlanePositionZ+6), // 24
                    new BABYLON.Vector3(18,16,devObj.lastPlanePositionZ+6), // 5
                    new BABYLON.Vector3(15,19,devObj.lastPlanePositionZ+6), // 120
                ];
                var vectorCharMultiple = [
                    new BABYLON.Vector3(6,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(9,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(12,12,devObj.lastPlanePositionZ+6), // 6
                    new BABYLON.Vector3(15,16,devObj.lastPlanePositionZ+6), // 24
                ];
                var selectMesh = [];
                var meshes = [];
                var currentStage = 1;
                function pDA(){
                }
                function pEA() {
                    console.log('pEA');
                }
                function pOA(){
                    console.log('pOA');
                }
                function pUA(){
                    console.log('pUA');
                }
                devObj.forDrawText.font = "24px monospace";
                devObj.forDrawText.fontColor = "black";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 128;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 0;
                devObj.forDrawText.Height_dTdT = 64;
                devObj.forDrawText.value = "5";
                arrayInt.forEach(function (value, index, array) {
                    devObj.forDrawText.value = arrayString[index];
                    var mSphere = BABYLON.Mesh.CreateSphere("mSphereI" + index, 16, 4, devObj.scene);
                    mSphere.position = vector[index];
                    mSphere.position.x= mSphere.position.x+ 10; // вставленный костыль из-за лени менять массив векторов
                    if (index >= array.length / 2) {
                        mSphere.rotation.y = 0.15;
                    } else {
                        mSphere.rotation.y = -1.5;
                    }
                    if (index >= array.length / 2 && value < 10) {
                        mSphere.rotation.y = -0.9;
                    }
                    mSphere.rotation.z = Math.PI;
                    mSphere.material = drawText('mSphereTextI' + index, devObj);
                    mSphere.statusClick = false;
                    mSphere.dontSelect = false;
                    var niceCube = BABYLON.MeshBuilder.CreateBox('cube'+index,{size:5},devObj.scene);
                    var niceCubeSelect = BABYLON.MeshBuilder.CreateBox('niceCubeSelect'+index,{size:5},devObj.scene);
                    niceCube.position = mSphere.position.clone(); niceCubeSelect.position = mSphere.position.clone();
                    niceCubeSelect.material = niceTextureAlpha('niceCubeSelect'+index,devObj);
                    niceCube.material = niceTextureAlpha('cubeT'+index,devObj);
                    niceCube.material.alpha = 0.4;
                    niceCube.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Yellow();
                    niceCube.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Yellow();
                    niceCubeSelect.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Green();
                    niceCube.isPickable = false; niceCubeSelect.isPickable = false;
                    niceCube.isVisible = false; niceCubeSelect.isVisible = false;
                    mSphere.addChild(niceCube);
                    mSphere.addChild(niceCubeSelect);
                    mSphere.egoValue = value; // читерская строчка НЕОБХОДИМО УДАЛТИЬ В ПРОДЕ
                    meshes.push(mSphere);
                    var pEA = function () {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    };
                    var pOA = function ()
                    {
                        if(!this._currentMesh.dontSelect){
                            this._currentMesh.getChildMeshes()[0].isVisible = false;
                        }
                    };
                    var pDA = function () {
                        if(!this._currentMesh.statusClick && selectMesh.length <2 && !this._currentMesh.dontSelect){
                            this._currentMesh.getChildMeshes()[1].isVisible = true;
                            this._currentMesh.statusClick = true;
                            selectMesh.push(this._currentMesh);
                        } else {
                            if(this._currentMesh.statusClick == true){
                                this._currentMesh.getChildMeshes()[1].isVisible = false;
                                this._currentMesh.statusClick = false;
                                selectMesh.shift();
                            }

                        }
                    };
                    var guiSphere = guiFromMesh('vecGuiSphereI'+index,mSphere,devObj,
                        {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA,
                            poinerUpAnimtaion:pUA}
                    );
                });
                devObj.forDrawText.font = "148px bold";
                devObj.forDrawText.Width_dTdT = 30;
                devObj.forDrawText.Height_dTdT = 134;
                devObj.forDrawText.value = "*";
                vectorCharMultiple.forEach(function(value, index, array){
                    var mSphere = BABYLON.MeshBuilder.CreatePlane("planeMI" + index, {size:2}, devObj.scene);
                    mSphere.position = vectorCharMultiple[index];
                    mSphere.position.x= mSphere.position.x+ 10; // вставленный костыль из-за лени менять массив векторов
                    mSphere.material = drawText('mSphereTextI' + index, devObj);
                });
                // здесь будет интерфейс в dom
                var checkStage = document.createElement('button');
                checkStage.textContent = "Нажмите, если нужно проверить этап.";
                checkStage.classList.add(classesObj.button);
                checkStage.classList.add(classesObj.buttonAlg); checkStage.classList.add(classesObj.buttonAlgActive);
                GUIFROMSCENE.append(checkStage);
                var fFirstValue = 5;
                var fSecondValue = 4;
                // Функция вызывает себе подобную
                siGUIDownText.innerHTML = "Перед вами визуализация рекурсивной функций вычисления факториала числа 5. (5!) " +
                    "Вам необходимо подтвердить свое понимание работы рекурсивной функций. " +
                    "На каждом этапе вам необходимо выбрать сферы, относящиеся к данному этапу и нажать на соответствующую кнопку.";
                siGUIDownText.innerHTML = "На данном этапе рекурсивного спуска функция принимает в себя число 5, выберите сферы подходящие данному этапу, выбрать можно максимум две, возможно хватит и одной <br>" + siGUIDownText.innerHTML;
                addTextsiGuiDownText("<div style='color:yellow;'>Выбор сферы происходят путем клика по ней, выделенная сфера отмечается кубом, если вы выбрали неправильную сферу, повторным кликом вы можете снять выделение.</div>");
                checkStage.onclick = function(){
                    var doNextStage = true;
                    if(currentStage == 1 && doNextStage){
                        var flag4 = false;
                        var oneValue = 5;
                        if(selectMesh.length>0){
                            var firstValue = selectMesh[0].egoValue;
                            if(firstValue == oneValue){
                                selectMesh[0].dontSelect = true;
                                flag4 = true;
                            }
                        }
                        if(flag4) {currentStage = 2;siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #1 пройден!</div>" +siGUIDownText.innerHTML; doNextStage = false;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                    }
                    if(currentStage == 2 && doNextStage){
                        var flag4 = false;
                        if(selectMesh.length>1){
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            siGUIDownText.innerHTML+="firstValue = " + firstValue + " / secondValue = " + secondValue;
                            if(firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue){
                                flag4 = true;
                                selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден!</div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {fFirstValue--;fSecondValue--;}
                    }
                    if(currentStage == 3 && doNextStage){
                        var flag4 = false;
                        if(selectMesh.length>1){
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if(firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue){
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден!</div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {fFirstValue--;fSecondValue--;}
                    }
                    if(currentStage == 4 && doNextStage){
                        var flag4 = false;
                        if(selectMesh.length>1){
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if(firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue){
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден!</div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {fFirstValue--;fSecondValue--;}
                    }
                    if(currentStage == 5 && doNextStage){
                        var flag4 = false;
                        if (selectMesh.length > 1) {
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if (firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue) {
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if (flag4) {
                            siGUIDownText.innerHTML = "<div style='color:yellow;'>Теперь вам необходимо выделить сферу, имеющая отношение к базовому решению рекурсии</div> " +
                                "<div style='color:yellowgreen;'>Этап #" + currentStage + " пройден!</div>" + siGUIDownText.innerHTML;
                            doNextStage = false;
                            currentStage++;
                        } else {
                            siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" + siGUIDownText.innerHTML
                        }
                    }
                    if(currentStage == 6 && doNextStage){
                        var flag4 = false;
                        if(selectMesh.length>0){
                            var firstValue = selectMesh[0].egoValue;
                            var oneValue = 1;
                            if(firstValue == oneValue){
                                flag4 = true;  selectMesh[0].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! Базовое решение достигнуто.</div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                    }
                    if(currentStage == 7 && doNextStage){
                        var flag4 = false;
                        if (selectMesh.length > 1) {
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if (firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue) {
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! </div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {
                            fSecondValue = fFirstValue * fSecondValue;
                            fFirstValue++;
                        }
                    }
                    if(currentStage == 8 && doNextStage){
                        var flag4 = false;
                         if (selectMesh.length > 1) {
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if (firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue) {
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! </div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                            fSecondValue = fFirstValue * fSecondValue;
                            fFirstValue++;
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                        }
                    }
                    if(currentStage == 9 && doNextStage){
                        var flag4 = false;
                        if (selectMesh.length > 1) {
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if (firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue) {
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! </div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                            fSecondValue = fFirstValue * fSecondValue;
                            fFirstValue++;
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                        }
                    }
                    if(currentStage == 10 && doNextStage){
                        var flag4 = false;
                        if (selectMesh.length > 1) {
                            var firstValue = selectMesh[0].egoValue;
                            var secondValue = selectMesh[1].egoValue;
                            if (firstValue == fFirstValue && secondValue == fSecondValue ||firstValue == fSecondValue && secondValue == fFirstValue) {
                                flag4 = true;  selectMesh[0].dontSelect = true;  selectMesh[1].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! </div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                        if(flag4) {
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                            fSecondValue = fFirstValue * fSecondValue;
                            fFirstValue++;
                            //siGUIDownText.innerHTML="fFirstValue = " + fFirstValue + " / fSecondValue = " + fSecondValue +  siGUIDownText.innerHTML;
                        }
                    }
                    if(currentStage == 11 && doNextStage){
                        var flag4 = false;
                        if(selectMesh.length>0){
                            var firstValue = selectMesh[0].egoValue;
                            var oneValue = 120;
                            if(firstValue == oneValue){
                                flag4 = true;  selectMesh[0].dontSelect = true;
                            }
                        }
                        if(flag4) {siGUIDownText.innerHTML = "<div style='color:yellowgreen;'>Этап #"+currentStage+" пройден! Рекурсия пройдена.</div>" +siGUIDownText.innerHTML; doNextStage = false;currentStage++;}
                        else {siGUIDownText.innerHTML = "<div style='color:red;'>Неверно.</div>" +siGUIDownText.innerHTML}
                    }
                    if(currentStage !=1 ){
                        if(currentStage != 6){
                            if(currentStage !=11){
                                if(currentStage <6){
                                    addTextsiGuiDownText("<div style='color:yellow;'>На данном этапе функция вызывает сама себя: "+fSecondValue+"!</div>");
                                } else {
                                    addTextsiGuiDownText("<div style='color:yellow;'>На данном этапе функция вызывает сама себя: "+fFirstValue+"!</div>");
                                }
                            }
                        }
                    }
                    if(!doNextStage) selectMesh = [];
                    if(currentStage == 12){
                        checkStage.className = "";
                        checkStage.classList.add(classesObj.button);
                        checkStage.classList.add(classesObj.buttonAlg);
                        checkStage.disabled = true;
                        addTextsiGuiDownText("<div style='color:yellow;'>Отлично! Вы подтвердили свое понимание рекурсивного решения функции вычисления 5!. Теперь вы можете пройти дальше.</div>");
                        controlStageButton.onclick = function () {
                            //lastStage(idInterval);
                            checkStage.remove();
                            devObj.maraphon.stage3();
                        }
                    }
                }
                devObj.lastPlanePositionZ = devObj.lastPlanePositionZ + devObj.lastPlanePositionZ ;
                controlStageButton.onclick = function () {
                    //lastStage(idInterval);
                    checkStage.remove();
                    devObj.maraphon.stage3();
                }
            },
            stage3:function(){
                siGUIDownText.innerHTML = "Перед вами визуализация рекурсивной функций вычисления факториала числа 4. (4!) " +
                    "Однако, в сравнении с предыдущим этапом на данном, сферы имеют неправильные значения, вам необходимо вручную нанести на них правильные значения, " +
                    " воспользовавшись полем ввода - {Значение сферы} и кнопкой {ПРИМЕНИТЬ ЗНАЧЕНИЕ}. После того, как вы нанесете все значения и будете" +
                    " уверены в правильности их нанесения, нажмите на кнопку {ПРОЙТИ ДАЛЬШЕ}.";
                addTextsiGuiDownText("<div style='color:yellow;'>Примечание: Значение сферы можно переписывать!</div>");
                var PlaneChessStage2 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage3');
                PlaneChessStage2.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = (devObj.lastPlanePositionZ / 2)+4;
                var arrayInt = [
                    4, //  -18,11,
                    4, 3, //  -15,14,
                    3, 2, //  -15,14,
                    2, 1, //  -15,14,
                    1, //
                    1, 2, //
                    2, 3, //
                    6, 4, //
                    24
                ];
                var arrayString = [
                    "4!", //  -18,11,
                    4, "3!", //  -15,14,
                    3, "2!", //  -15,14,
                    2, "1!", //  -15,14,
                    1, //
                    1, "2", //
                    2, "3", //
                    6, "4", //
                    24
                ];
                var arrayStringError = [
                    "5!", //  -18,11,
                    4, "3!", //  -15,14,
                    3, "2!", //  -15,14,
                    2, "1!", //  -15,14,
                    1, //
                    1, "2!", //
                    2, "3!", //
                    4, "5!", //
                    120
                ];
                var vector =[
                    new BABYLON.Vector3(-12,16,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(-15,12,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(-9,12,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(-12,8,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(-6,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(-9,4,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(-3,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(0,0,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(3,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(9,4,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(6,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(12,8,devObj.lastPlanePositionZ+6), // 3
                    new BABYLON.Vector3(9,12,devObj.lastPlanePositionZ+6), // 6
                    new BABYLON.Vector3(15,12,devObj.lastPlanePositionZ+6), // 4
                    new BABYLON.Vector3(12,16,devObj.lastPlanePositionZ+6), // 24
                ];
                var selectMesh = [];
                var meshes = [];
                var vectorCharMultiple = [
                    new BABYLON.Vector3(6,4,devObj.lastPlanePositionZ+6), // 1
                    new BABYLON.Vector3(9,8,devObj.lastPlanePositionZ+6), // 2
                    new BABYLON.Vector3(12,12,devObj.lastPlanePositionZ+6), // 6
                ];
                var currentStage = 1;
                function pDA(){
                }
                function pEA() {
                    console.log('pEA');
                }
                function pOA(){
                    console.log('pOA');
                }
                function pUA(){
                    console.log('pUA');
                }
                devObj.forDrawText.font = "24px monospace";
                devObj.forDrawText.fontColor = "black";
                devObj.forDrawText.bgColor = "white";
                devObj.forDrawText.Width_dT = 128;
                devObj.forDrawText.Height_dT = 128;
                devObj.forDrawText.Width_dTdT = 0;
                devObj.forDrawText.Height_dTdT = 64;
                devObj.forDrawText.value = "5";
                arrayInt.forEach(function (value, index,array) {
                    devObj.forDrawText.value = arrayStringError[index];
                    var mSphere =BABYLON.Mesh.CreateSphere("vecSphereI" + index , 16, 4, devObj.scene);
                    mSphere.position = vector[index];
                    mSphere.position.x= mSphere.position.x+ 10; // вставленный костыль из-за лени менять массив векторов
                    if (index >= array.length/2){
                        mSphere.rotation.y = -0.99;
                    } else {
                        mSphere.rotation.y = -1.5;
                    }
                    if(index >= array.length/2 && value < 10){
                        mSphere.rotation.y = -0.9;
                    }
                    mSphere.rotation.z = Math.PI;
                    mSphere.material = drawText('mSphereTextI' + index, devObj);
                    mSphere.statusClick = false;
                    var niceCube = BABYLON.MeshBuilder.CreateBox('cube'+index,{size:5},devObj.scene);
                    var niceCubeSelect = BABYLON.MeshBuilder.CreateBox('niceCubeSelect'+index,{size:5},devObj.scene);
                    niceCube.position = mSphere.position.clone(); niceCubeSelect.position = mSphere.position.clone();
                    niceCubeSelect.material = niceTextureAlpha('niceCubeSelect'+index,devObj);
                    niceCube.material = niceTextureAlpha('cubeT'+index,devObj);
                    niceCube.material.alpha = 0.4;
                    niceCube.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Red();
                    niceCube.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Red();
                    niceCubeSelect.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Green();
                    niceCube.isPickable = false; niceCubeSelect.isPickable = false;
                    niceCube.isVisible = false; niceCubeSelect.isVisible = false;
                    mSphere.addChild(niceCube);
                    mSphere.addChild(niceCubeSelect);
                    //mSphere.egoValue = arrayString[index]; // читерская строчка НЕОБХОДИМО УДАЛТИЬ В ПРОДЕ
                    meshes.push(mSphere);
                    var pEA = function () {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    };
                    var pOA = function () {
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    };
                    var pDA = function () {
                        // if(!this._currentMesh.statusClick && selectMesh.length <1 ){
                        //     this._currentMesh.getChildMeshes()[1].isVisible = true;
                        //     this._currentMesh.statusClick = true;
                        //     selectMesh.push(this._currentMesh);
                        // } else {
                        //     if(this._currentMesh.statusClick == true){
                        //         this._currentMesh.getChildMeshes()[1].isVisible = false;
                        //         this._currentMesh.statusClick = false;
                        //         selectMesh.shift();
                        //     }
                        // }
                        if(selectMesh.length>0){
                            selectMesh.forEach(function(item){
                               item.getChildMeshes()[1].isVisible = false;
                            });
                        }
                        selectMesh = [];
                        this._currentMesh.getChildMeshes()[1].isVisible = true;
                        selectMesh.push(this._currentMesh);
                    };
                    var guiSphere = guiFromMesh('vecGuiSphereI'+index,mSphere,devObj,
                        {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA,
                            poinerUpAnimtaion:pUA}
                    );

                });
                devObj.forDrawText.font = "148px bold";
                devObj.forDrawText.Width_dTdT = 30;
                devObj.forDrawText.Height_dTdT = 134;
                devObj.forDrawText.value = "*";
                vectorCharMultiple.forEach(function(value, index, array){
                    var mSphere = BABYLON.MeshBuilder.CreatePlane("planeMI" + index, {size:2}, devObj.scene);
                    mSphere.position = vectorCharMultiple[index];
                    mSphere.position.x= mSphere.position.x+ 10; // вставленный костыль из-за лени менять массив векторов
                    mSphere.material = drawText('mSphereTextI' + index, devObj);
                });
                //DOM Элементы
                var inputText = document.createElement('input');
                inputText.setAttribute('placeholder','Значение сферы');
                inputText.classList.add(classesObj.inputText);
                inputText.setAttribute('type','text');
                GUIFROMSCENE.append(inputText);
                var buttonAdd = document.createElement('button');
                buttonAdd.textContent='Применить значение'; buttonAdd.classList.add(classesObj.button);
                buttonAdd.onclick = function(){
                    if(selectMesh.length>0){
                        devObj.forDrawText.value = inputText.value;
                        selectMesh[0].material = drawText('drawedText',devObj);
                        selectMesh[0].egoValue = inputText.value;
                    }
                };
                GUIFROMSCENE.append(buttonAdd);
                devObj.lastPlanePositionZ = PlaneChessStage2.position.z + 24;
                controlStageButton.onclick = function () {
                    var result = false;
                    meshes.forEach(function (item,i) {
                       if(item.egoValue==arrayString[i]){
                           result = true;
                       } else {
                           result = false;
                       }
                    });
                    if(result){
                        lastStage(idInterval);
                        inputText.remove();
                        buttonAdd.remove();
                        //devObj.maraphon.stage4();
                    }

                };
            },
            stage4:function () {
                var PlaneChessStage2 = devObj.meshes.meshPlaneChess.createInstance('PlaneChessStage3');
                PlaneChessStage2.position.z = devObj.lastPlanePositionZ;
                devObj.camera.position.z = (devObj.lastPlanePositionZ )-4;
                var arrayInt = [4,3,2,1,2,4,8,16];
                var vector =[
                    new BABYLON.Vector3(-10,11,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(-5,8,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(-0,5,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(5,2,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(15,2,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(20,5,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(25,8,devObj.lastPlanePositionZ+6),
                    new BABYLON.Vector3(30,11,devObj.lastPlanePositionZ+6),
                ];
                var selectMesh = [];
                var meshes = [];
                function pDA(){
                }
                function pEA() {
                    console.log('pEA');
                }
                function pOA(){
                    console.log('pOA');
                }
                function pUA(){
                    console.log('pUA');
                }
                arrayInt.forEach(function (value, index,array) {
                    var mSphere =BABYLON.Mesh.CreateSphere("vecSphereI" + index , 16, 4, devObj.scene);
                    mSphere.position = vector[index];
                    if (index >= array.length/2){
                        mSphere.rotation.y = 0.15;
                    } else {
                        mSphere.rotation.y = -1.5;
                    }
                    if(index >= array.length/2 && value < 10){
                        mSphere.rotation.y = -0.9;
                    }
                    mSphere.rotation.z = Math.PI;
                    mSphere.statusClick = false;
                    var niceCube = BABYLON.MeshBuilder.CreateBox('cube'+index,{size:5},devObj.scene);
                    var niceCubeSelect = BABYLON.MeshBuilder.CreateBox('niceCubeSelect'+index,{size:5},devObj.scene);
                    niceCube.position = mSphere.position.clone(); niceCubeSelect.position = mSphere.position.clone();
                    niceCubeSelect.material = niceTextureAlpha('niceCubeSelect'+index,devObj);
                    niceCube.material = niceTextureAlpha('cubeT'+index,devObj);
                    niceCube.material.alpha = 0.4;
                    niceCube.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Red();
                    niceCube.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Red();
                    niceCubeSelect.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Green();
                    niceCube.isPickable = false; niceCubeSelect.isPickable = false;
                    niceCube.isVisible = false; niceCubeSelect.isVisible = false;
                    mSphere.addChild(niceCube);
                    mSphere.addChild(niceCubeSelect);
                    meshes.push(mSphere);
                    var pEA = function () {
                        this._currentMesh.getChildMeshes()[0].isVisible = true;
                    };
                    var pOA = function () {
                        this._currentMesh.getChildMeshes()[0].isVisible = false;
                    };
                    var pDA = function () {
                        if(!this._currentMesh.statusClick && selectMesh.length <1 ){
                            this._currentMesh.getChildMeshes()[1].isVisible = true;
                            this._currentMesh.statusClick = true;
                            selectMesh.push(this._currentMesh);

                        } else {
                            if(this._currentMesh.statusClick == true){
                                this._currentMesh.getChildMeshes()[1].isVisible = false;
                                this._currentMesh.statusClick = false;
                                selectMesh.shift();
                            }

                        }


                    };
                    var guiSphere = guiFromMesh('vecGuiSphereI'+index,mSphere,devObj,
                        {pointerDownAnimation:pDA,pointerEnterAnimation:pEA,pointerOutAnimtaion:pOA,
                            poinerUpAnimtaion:pUA}
                    );

                });
                //DOM Элементы
                var inputText = document.createElement('input');
                inputText.setAttribute('placeholder','Значение сферы');
                inputText.classList.add(classesObj.inputText);
                inputText.setAttribute('type','number');
                GUIFROMSCENE.append(inputText);
                var buttonAdd = document.createElement('button');
                buttonAdd.textContent='Применить значение'; buttonAdd.classList.add(classesObj.button);
                buttonAdd.onclick = function(){
                    if(selectMesh.length>0){
                        devObj.forDrawText.value = inputText.value;
                        selectMesh[0].material = drawText('drawedText',devObj);
                        selectMesh[0].egoValue = inputText.value;
                    }

                };
                GUIFROMSCENE.append(buttonAdd);
                controlStageButton.onclick = function () {
                    var result = false;
                    meshes.forEach(function (item,i) {
                        if(item.egoValue==arrayInt[i]){
                            result = true;
                        } else {
                            result = false;
                        }
                    });
                    if(result){
                        inputText.remove();
                        buttonAdd.remove();
                        lastStage(idInterval);
                        // devObj.lastPlanePositionZ = devObj.lastPlanePositionZ + devObj.lastPlanePositionZ;
                        // devObj.maraphon.stage4();
                    }

                };
            }
        };
        devObj.maraphon.stage0();

    }
    function marafon2(devObj) {
        devObj.maraphon2 = {
            stage1: function () {
                // Empty Mesh
                devObj.camera.rotation.x = 0.1;
                devObj.camera.position.z = -35;
                var stageObj = {}; // объект этого этапа
                stageObj.emptyMeshforCode = new BABYLON.Mesh('emptyMeshforCode',devObj.scene); // пустой меш будет использоваться как родитель
                stageObj.meshesOfCode = []; // хз пока хзачем
                devObj.stageObj = stageObj;
                var chirk = BABYLON.MeshBuilder.CreateBox('chirkMesh', {width:6,height:6}, devObj.scene);
                chirk.material = niceTextureAlpha('chirkMaterial',devObj);
                chirk.position = new BABYLON.Vector3(-10,15,7);
                chirk.material.alpha = 0.7;
                chirk.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Red();
                chirk.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Red();
                chirk.material.opacityFresnelParameters.leftColor = BABYLON.Color3.Red();
                chirk.material.opacityFresnelParameters.rightColor = BABYLON.Color3.Red();
                var chirkAnim = new BABYLON.Animation("chirkAnim", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                var keys = [];
                //At the animation key 0, the value of scaling is "1"
                keys.push({
                    frame: 0,
                    value: 1
                });
                //At the animation key 20, the value of scaling is "0.2"
                keys.push({
                    frame: 20,
                    value: 0.001
                });
                //At the animation key 100, the value of scaling is "1"
                keys.push({
                    frame: 100,
                    value: 1
                });
                chirkAnim.setKeys(keys);
                chirk.animations.push(chirkAnim);
                devObj.scene.beginAnimation(chirk, 0, 100, true,7);
                //region Интерфейс из DOM
                var buttonVariable = document.createElement('button');
                buttonVariable.classList.add(classesObj.button);
                buttonVariable.setAttribute('id','buttonVariable');
                buttonVariable.textContent='СОЗДАТЬ ПЕРЕМЕННУЮ';
                GUIFROMSCENE.append(buttonVariable);
                var buttonIF = document.createElement('button');
                buttonIF.classList.add(classesObj.button); buttonIF.textContent="ЕСЛИ"; buttonIF.forMeshes = 'if(';
                GUIFROMSCENE.append(buttonIF);
                var buttonIF2 = document.createElement('button');
                buttonIF2.classList.add(classesObj.button); buttonIF2.textContent="ТО"; buttonIF2.forMeshes = ')';
                GUIFROMSCENE.append(buttonIF2);
                var buttonELSE = document.createElement('button');
                buttonELSE.classList.add(classesObj.button); buttonELSE.textContent="ИНАЧЕ"; buttonELSE.forMeshes = 'else';
                GUIFROMSCENE.append(buttonELSE);
                var buttonBracketLeft = document.createElement('button');
                buttonBracketLeft.classList.add(classesObj.button); buttonBracketLeft.textContent='('; buttonBracketLeft.forMeshes = '(';
                GUIFROMSCENE.append(buttonBracketLeft);
                var buttonBracketRight = document.createElement('button');
                buttonBracketRight.classList.add(classesObj.button); buttonBracketRight.textContent=')'; buttonBracketRight.forMeshes = ')';
                GUIFROMSCENE.append(buttonBracketRight);
                var buttonSignMore = document.createElement('button');
                buttonSignMore.classList.add(classesObj.button); buttonSignMore.textContent = '>'; buttonSignMore.forMeshes = '>';
                var buttonSignLess = document.createElement('button');
                buttonSignLess.classList.add(classesObj.button); buttonSignLess.textContent = '<'; buttonSignLess.forMeshes = '<';
                var buttonEqualSign = document.createElement('button');
                buttonEqualSign.classList.add(classesObj.button); buttonEqualSign.textContent = '=='; buttonEqualSign.forMeshes = '==';
                var buttonSignMoreAndEqual = document.createElement('button');
                buttonSignMoreAndEqual.classList.add(classesObj.button); buttonSignMoreAndEqual.textContent = '>='; buttonSignMoreAndEqual.forMeshes = '>=';
                var buttonSignLessAndEqual = document.createElement('button');
                buttonSignLessAndEqual.classList.add(classesObj.button); buttonSignLessAndEqual.textContent = '<='; buttonSignLessAndEqual.forMeshes = '<=';
                var buttonSignNegative = document.createElement('button');
                buttonSignNegative.classList.add(classesObj.button); buttonSignNegative.textContent='!='; buttonSignNegative.forMeshes= '!=';
                var buttonSignMinus = document.createElement('button');
                buttonSignMinus.classList.add(classesObj.button); buttonSignMinus.textContent = '-'; buttonSignMinus.forMeshes = '-';
                var buttonSignPlus = document.createElement('button');
                buttonSignPlus.classList.add(classesObj.button); buttonSignPlus.textContent = '+'; buttonSignPlus.forMeshes = '+';
                var buttonSignDelit1 = document.createElement('button');
                buttonSignDelit1.classList.add(classesObj.button); buttonSignDelit1.textContent = 'Знак деления / без остатка'; buttonSignDelit1.forMeshes = '/';
                var buttonSignDelit2 = document.createElement('button');
                buttonSignDelit2.classList.add(classesObj.button); buttonSignDelit2.textContent = 'Знак деления % с остатком'; buttonSignDelit2.forMeshes = '%';
                var buttonSignMultiple = document.createElement('button');
                buttonSignMultiple.classList.add(classesObj.button); buttonSignMultiple.textContent = '*'; buttonSignMultiple.forMeshes = '*';
                GUIFROMSCENE.append(buttonSignMore);
                GUIFROMSCENE.append(buttonSignLess);
                GUIFROMSCENE.append(buttonEqualSign);
                GUIFROMSCENE.append(buttonSignMoreAndEqual);
                GUIFROMSCENE.append(buttonSignLessAndEqual);
                GUIFROMSCENE.append(buttonSignNegative);
                GUIFROMSCENE.append(buttonSignMinus);
                GUIFROMSCENE.append(buttonSignPlus);
                GUIFROMSCENE.append(buttonSignMultiple);
                GUIFROMSCENE.append(buttonSignDelit1);
                GUIFROMSCENE.append(buttonSignDelit2);
                //endregion
                // Обработчики
                buttonVariable.onclick = function(e) {
                    var res = prompt('Введите валидное имя переменной латинскими буквами, можете присвоить ей сразу значения, написав в таком формате: mynamevar = 5; Если значением переменной' +
                        'является строка, используйте (одинарные / двойные) кавычки - mynamestring = "strvalue" ','');
                    if(res === null || res == null || res == 'null' || res ==='null' || !res){
                        //console.warn('Не валидное имя переменной');
                        alert('Не валидное имя переменной');
                    } else {
                        if(res.indexOf('=') !='-1'){
                            //console.log('значение есть');
                        } else {
                            // console.log('значение нет');
                            res+= "=''";
                        }
                        var crVariable = document.createElement('button');
                        crVariable.classList.add(classesObj.button); crVariable.textContent = res; crVariable.forMeshes = res;
                        listVariables.append(crVariable);
                    };
                };
                function handlerAny() {
                    this.setAttribute('data-increment',Number(this.getAttribute('data-increment'))+1);
                    var inc = Number(this.getAttribute('data-increment'));
                    //var mesh = createChildMeshe('char'+this.forMeshes+'I'+this.getAttribute('data-increment'),this.forMeshes,this.textContent);
                    var position = new BABYLON.Vector3(0,0,0);
                    position.x = Number(GUIFROMSCENE.getAttribute('data-positionX'));
                    position.y = Number(GUIFROMSCENE.getAttribute('data-positionY'));
                    position.z = Number(GUIFROMSCENE.getAttribute('data-positionZ'));
                    var mesh = createChildMeshe('meshForCode',position,this.forMeshes,this.textContent);
                    chirk.position.x = Number(position.x + 12);
                    position.x = Number(position.x + 6);
                    GUIFROMSCENE.setAttribute('data-positionX',position.x);
                    //stageObj.startVector3.x = stageObj.startVector3.x +6;
                    stageObj.emptyMeshforCode.addChild(mesh);
                    //console.log(stageObj.emptyMeshforCode.getChildMeshes());
                }
                var buttonsGui = GUIFROMSCENE.querySelectorAll('.siGUI-Button');
                buttonsGui.forEach(function (value, key) {
                    if(value.getAttribute('id')=='buttonVariable') {
                        value.setAttribute('data-increment','0');
                    } else {
                        value.addEventListener('click',handlerAny);
                        value.setAttribute('data-increment','0');
                    }
                });
                var buttonCheck =  document.createElement('button');
                buttonCheck.classList.add(classesObj.button); buttonCheck.textContent = ' ПРОВЕРИТЬ И СОБРАТЬ';
                buttonCheck.classList.add(classesObj.buttonl2);
                GUIFROMSCENE.prepend(buttonCheck);
                function createChildMeshe(nameMesh,position,forCode,text){
                    var standardMaterial = new BABYLON.StandardMaterial(nameMesh+'Material', devObj.scene);
                    standardMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
                    let dynamicTexture = new BABYLON.DynamicTexture(nameMesh+"dynamicTexture", {
                        width: 256,
                        height: 128
                    }, devObj.scene);
                    standardMaterial.diffuseTexture = dynamicTexture;
                    var meshForCode = BABYLON.MeshBuilder.CreatePlane(nameMesh, {size: 6}, devObj.scene);
                    meshForCode.material = standardMaterial;
                    dynamicTexture.drawText(text, 30, 78, "60px monospace", "green", "white", true, true);
                    meshForCode.forCode = forCode;
                    meshForCode.id = 'meshForCode';
                    meshForCode.position = position;
                    return meshForCode;
                }
                buttonCheck.onclick = function(){
                    var koeka = '';
                    stageObj.emptyMeshforCode.getChildMeshes().forEach(function (item,i) {
                        koeka += item.forCode;
                    });
                    console.log(koeka);
                }
                //>>>>>>>>>>>>>>>>
                devObj.lastPlanePositionZ = 48;
            }
        }
        devObj.maraphon2.stage1();
    }
    function secundomerf() {
        var secundomer = document.getElementById('thisInfoValue');
        //$('.timer').text('00:00:00')
        secundomer.textContent = '00:00';
        var this_date = new Date();
        var start_time_interval = '';
        clearInterval(start_time_interval);
        start_time_interval = setInterval(function(){
            var new_date = new Date() - this_date;
            var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
            var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
            var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
            if (sec.toString().length   == 1) sec   = '0' + sec;
            if (min.toString().length   == 1) min   = '0' + min;
            if (hours.toString().length == 1) hours = '0' + hours;
            //$('.timer').text(hours + ':' + min + ':' + sec);
            //secundomer.textContent=hours+':'+min+':'+sec;
            secundomer.textContent=+min+':'+sec;
        },100);
        return start_time_interval;
    }

    /*region какиетофункций*/
    function binarySearch(arrayInt,searchInt,meshes,coverBoxes,devObj) {
        var l = 0; var r = arrayInt.length-1;
        var mid; var flag = false;
        var meshInstances = [];
        while((l<=r)&& (flag !=true)){
            // coverBoxes.scaling = new BABYLON.Vector3(0.02,1,1);
            mid = Math.floor((l+r)/2);
            //console.log('mid = ' + mid + ' / l = ' + l + ' / r = ' + r);
            var instance = coverBoxes.createInstance('instance1');
            instance.scaling = new BABYLON.Vector3(0.02,1,1);
            instance.position = meshes[mid].position.clone();
            instance.isVisible = false;
            meshInstances.push(instance);
            if(arrayInt[mid]==searchInt) {
                flag = true;
                meshInstances[meshInstances.length-1].scaling = new BABYLON.Vector3(0.13,1,1);
                meshInstances[meshInstances.length-1].position = meshes[mid].position.clone();
                meshInstances[meshInstances.length-1].position.x = meshInstances[meshInstances.length-1].position.x;

            }else if(arrayInt[mid] > searchInt) {
                r = mid -1;
                var animationBox = new BABYLON.Animation("myAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                var keys = [
                    {
                        frame:0,
                        value:0.1
                    },
                    {
                        frame:50,
                        value:0.1*(Number(arrayInt.length-mid)-1)
                    },
                    {
                        frame:100,
                        value:0.25*(Number(arrayInt.length-mid)-1)
                    },
                ];
                animationBox.setKeys(keys);
                instance.animations.push(animationBox);
                instance.position = meshes[mid+1].position.clone();
                instance.position.x = instance.position.x -2.5;
                devObj.scene.beginAnimation(instance, 0, 100, true);
                //instance.scaling = new BABYLON.Vector3(0.25*(Number(arrayInt.length-mid)-1),1,1);
            }
            else {
                l = mid +1;
                var animationBox = new BABYLON.Animation("myAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                var keys = [
                    {
                        frame:0,
                        value:0.1
                    },
                    {
                        frame:50,
                        value:0.15*(mid-1)
                    },
                    {
                        frame:100,
                        value:0.25*(mid-1)
                    },
                ];
                animationBox.setKeys(keys);
                instance.animations.push(animationBox);
                instance.position = meshes[mid-1].position.clone();
                instance.position.x = instance.position.x -2.5;
                devObj.scene.beginAnimation(instance, 0, 100, true);
                //instance.scaling = new BABYLON.Vector3(0.25*(mid-1),1,1);
            }
        }
        (function myLoop (i) {
            setTimeout(function () {
                if(i!=0){
                    //meshInstances[i-1].isVisible = false;
                }
                if(i!=meshInstances.length-1){
                    meshInstances[i].isVisible = true;
                }
                if(i==meshInstances.length-1){
                    meshes.forEach(function (item) {
                        if(item.egoValue != searchInt){
                            item.dispose();
                        }
                    })
                    meshInstances.forEach(function (item,i,array) {
                        if(i!=array.length-1){
                            item.dispose();
                        }
                    })
                    meshes[mid].material = niceTextureAlpha('goldBox',devObj);
                    meshes[mid].material.alpha = 0.55;
                    meshes[mid].material.emissiveFresnelParameters.leftColor = BABYLON.Color3.FromHexString("#fff900");
                    meshes[mid].material.emissiveFresnelParameters.rightColor = BABYLON.Color3.FromHexString("#fff900");
                    meshes[mid].material.opacityFresnelParameters.leftColor = BABYLON.Color3.FromHexString("#fff900");
                    meshes[mid].material.opacityFresnelParameters.rightColor = BABYLON.Color3.FromHexString("#fff900");
                }

                i++;//  your code here
                if (i<meshInstances.length) myLoop(i);      //  decrement i and call myLoop again if i > 0
            }, 1300)
        })(0);


        return flag;

    }
    function checkArrayOnSort(checkedArr) {
        for (let i = 0; i < checkedArr.length; i++) {
            if (i != checkedArr.length - 1) {
                if (checkedArr[i] > checkedArr[i + 1]) {
                    co('Массив неотсортирован: ' + checkedArr + '<br>', 1);
                    return false;
                }
            }
        }
        co('Массив отсортирован: ' + checkedArr + '<br>', 1);
        return true;
    }

    function checkMeshOnSort(meshes) {
        for (let i = 0; i < meshes.length; i++) {
            if (i != meshes.length - 1) {
                if (meshes[i].position.x > meshes[i + 1].position.x) {
                    return false;
                }
            }
        }
        return true;
    }



    //крутая текстура ; Возвращает material
    function niceTextureAlpha(name, devObj) {
        let material = new BABYLON.StandardMaterial(name, devObj.scene);
        material.reflectionTexture = new BABYLON.CubeTexture("res/textures/TropicalSunnyDay/TropicalSunnyDay", devObj.scene);
        material.diffuseColor = new BABYLON.Color3(0, 0, 0);
        material.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        material.alpha = 0.2;
        material.specularPower = 16;
        material.reflectionFresnelParameters = new BABYLON.FresnelParameters();
        material.reflectionFresnelParameters.bias = 0.1;
        material.emissiveFresnelParameters = new BABYLON.FresnelParameters();
        material.emissiveFresnelParameters.bias = 0.6;
        material.emissiveFresnelParameters.power = 4;
        material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
        material.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();
        material.opacityFresnelParameters = new BABYLON.FresnelParameters();
        material.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
        material.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();
        return material;
    }

    function drawText(name, devObj) {
        var standardMaterial = new BABYLON.StandardMaterial(name, devObj.scene);
        let dynamicTexture = new BABYLON.DynamicTexture(name+"dT", {
            width: devObj.forDrawText.Width_dT,
            height: devObj.forDrawText.Height_dT
        }, devObj.scene);
        standardMaterial.diffuseTexture = dynamicTexture;
        dynamicTexture.drawText(devObj.forDrawText.value, devObj.forDrawText.Width_dTdT, devObj.forDrawText.Height_dTdT,
            devObj.forDrawText.font, devObj.forDrawText.fontColor,devObj.forDrawText.bgColor, true, true);
        return standardMaterial;
    }
    function guiFromMesh(name,mesh,devObj,maybeFunc = {
        pointerDownAnimation:function(){},pointerEnterAnimation:function(){},
        pointerOutAnimtaion:function(){},poinerUpAnimtaion:function(){},onPointerMoveObservable:function(coord,obj){}})
    {
        let guiMesh = new BABYLON.GUI.MeshButton3D(mesh, name);
        //co('удержание мыши |');
        guiMesh.pointerDownAnimation = maybeFunc.pointerDownAnimation;
        // Наведение курсора на МЕШ
        guiMesh.pointerEnterAnimation = maybeFunc.pointerEnterAnimation;
        // Отведение курсора с меша, противоположно pointerEnter
        guiMesh.pointerOutAnimation = maybeFunc.pointerOutAnimtaion;
        guiMesh.onPointerMoveObservable.add(maybeFunc.onPointerMoveObservable);
        //co('удержание мыши прекращено | ');
        guiMesh.pointerUpAnimation = maybeFunc.poinerUpAnimtaion;
        devObj.forGUI3D.panel.addControl(guiMesh);
        return guiMesh;
    }


    // инкремент зеленых сфер
    function plusGreenSphereCount() {
        var currentValue = greenSphereValue.textContent;
        currentValue++;
        greenSphereValue.textContent = currentValue;
    }
    // инкремент красных сфер
    function plusRedSphereCount() {
        var currentValue = redSphereValue.textContent;
        currentValue++;
        redSphereValue.textContent = currentValue;
    }
    function co(sms, y = 0) {
        y = y == 1 ? 'y' : y == 2 ? 'o' : y == 3 ? 'r' : 'w';
        let sp = document.createElement('span');
        sp.classList.add(y);
        sp.innerHTML = sms;
        debug.append(sp);
    }
    function random(min, max) {
        return min + Math.random() * (max - min);
    }
    function lastStage(idInterval){
        clearInterval(idInterval);
        var isSession = hideInfo.getAttribute('data-issession');
        var maraphoni = hideInfo.getAttribute('data-ismaraphon');
        var secundomer = document.getElementById('thisInfoValue');
        var result = secundomer.textContent;
        if(isSession=='true'){
            var nickname = document.querySelector('.userBlock .link-User').textContent;
            var res = confirm('Марафон закончен. Ваш никнейм: ' + nickname + ". Ваш результат: " + result + "; Записать результат?");
            if(res){
                //alert('Вы согласились на запись результата');
                var params = {nickname:nickname,score:result,maraphon:maraphoni};
                ajaxSend(params);

            } else {
                alert ('Вы отказались от записи результата');
            }
        } else{
            //var res = prompt('')
            alert('Для записи результата, пожалуйста авторизируйтесь.');
        }
    }

    function ajaxSend(params) {
        var ajaxFile = 'ajaxRecord.php';
        var request = new XMLHttpRequest();
        var strParams = 'nickname='+params.nickname+"&score="+params.score+"&maraphon="+params.maraphon;
        request.open('POST',ajaxFile,true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {

            if(request.readyState === 4 && request.status === 200) {
                //console.log(request.responseText);
                alert(request.responseText);
            }
        });


        request.send(strParams);
    }





    /*endregion*/

    /*region --------------------lowLevelProcedureEpilog----------------------------*/
    var scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
        labelFps.textContent = Math.round(engine.getFps());
    });
    window.addEventListener('resize', function () {
        engine.resize();
        resizeCanvas(canvas);
    });

    /*endregion*/
    function resizeCanvas(canvas) {
        //kW = kH = 0.8;
        canvas.width = window.innerWidth * kW;
        canvas.height = window.innerHeight * kH;
    }
}

