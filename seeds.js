const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eCommerceDatabase");

const Laptops = require("./models/laptops");
const Headphones = require("./models/headphones");
const Consoles = require("./models/consoles");
const Phones = require("./models/phones");
const Processors = require("./models/processors");
const Tvs = require("./models/tvs");

const seedLaptops = [
  {
    name: "Huawei MateBook D 15",
    brand: "Huawei",
    processor: "Intel",
    graphics: "Intel",
    screen: 15.6,
    price: 2399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_12_13_24_17_561_06.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_12_13_24_12_515_03.jpg",
    category: "laptops",
  },
  {
    name: "Dell Inspiron 5515",
    brand: "Dell",
    processor: "Ryzen",
    graphics: "AMD",
    screen: 15.6,
    price: 3499,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_27_11_26_45_11_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_19_8_38_49_295_01.jpg",
    category: "laptops",
  },
  {
    name: "Dell Inspiron G15",
    brand: "Dell",
    processor: "Ryzen",
    graphics: "Nvidia",
    screen: 15.6,
    price: 3789,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_17_16_54_41_358_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_19_8_38_49_295_01.jpg",
    category: "laptops",
  },
  {
    name: "HP Pavilion 15",
    brand: "HP",
    processor: "Ryzen",
    graphics: "AMD",
    screen: 15.6,
    price: 3099,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_23_8_53_29_703_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_23_8_53_22_454_01.jpg",
    category: "laptops",
  },
  {
    name: "LG GRAM 2021 17Z90P",
    brand: "LG",
    processor: "Intel",
    graphics: "Intel",
    screen: 17,
    price: 6799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_8_9_17_39_619_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_8_9_17_36_10_02.jpg",
    category: "laptops",
  },
  {
    name: "Dell XPS 17 9710",
    brand: "Dell",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 17,
    price: 15799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_8_15_49_37_453_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/6/pr_2020_6_26_10_48_50_282_05.jpg",
    category: "laptops",
  },
  {
    name: "Lenovo Legion 5 Pro-16",
    brand: "Lenovo",
    processor: "AMD",
    graphics: "Nvidia",
    screen: 16,
    price: 5599,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_11_12_3_38_665_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_18_14_13_30_532_00.jpg",
    category: "laptops",
  },
  {
    name: "Lenovo IdeaPad 5 Pro-16",
    brand: "Lenovo",
    processor: "AMD",
    graphics: "Nvidia",
    screen: 16,
    price: 5049,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_20_8_34_10_120_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_10_14_13_3_229_01.jpg",
    category: "laptops",
  },
  {
    name: "Dell Vostro 5402",
    brand: "Dell",
    processor: "Intel",
    graphics: "Intel",
    screen: 14,
    price: 3799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_8_12_36_4_676_03.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_8_12_35_58_552_00.jpg",
    category: "laptops",
  },
  {
    name: "Lenovo V14",
    brand: "Lenovo",
    processor: "Intel",
    graphics: "Intel",
    screen: 14,
    price: 2399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/3/pr_2020_3_26_15_31_37_399_08.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/3/pr_2020_3_26_15_31_21_105_01.jpg",
    category: "laptops",
  },
  {
    name: "ASUS ZenBook",
    brand: "Asus",
    processor: "Intel",
    graphics: "Intel",
    screen: 14,
    price: 4799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_5_10_43_47_484_02.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_3_10_30_54_417_03.jpg",
    category: "laptops",
  },
  {
    name: "Dell Inspiron 5402",
    brand: "Dell",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 14,
    price: 3849,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_11_9_42_13_820_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_11_9_40_50_490_05.jpg",
    category: "laptops",
  },
  {
    name: "ASUS VivoBook 14",
    brand: "Asus",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 14,
    price: 1899,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_26_15_37_16_375_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_26_15_24_44_228_02.jpg",
    category: "laptops",
  },
  {
    name: "HP Pavilion 14 Ryzen",
    brand: "HP",
    processor: "AMD",
    graphics: "AMD",
    screen: 14.1,
    price: 3399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_10_11_22_28_863_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_10_11_22_43_251_00.jpg",
    category: "laptops",
  },
  {
    name: "Huawei MateBook 14s",
    brand: "Huawei",
    processor: "Intel",
    graphics: "Intel",
    screen: 14.1,
    price: 4999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_15_10_22_11_32_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_25_14_51_19_894_00.jpg",
    category: "laptops",
  },
  {
    name: "HP Pavilion 14",
    brand: "HP",
    processor: "Intel",
    graphics: "Intel",
    screen: 14.1,
    price: 4649,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_22_16_21_27_161_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_10_11_22_43_251_00.jpg",
    category: "laptops",
  },
  {
    name: "HP ProBook 640 G8",
    brand: "HP",
    processor: "Intel",
    graphics: "Intel",
    screen: 14.1,
    price: 5399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_28_9_16_5_955_06.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_28_9_16_0_268_03.jpg",
    category: "laptops",
  },
  {
    name: "Huawei MateBook 13",
    brand: "Huawei",
    processor: "AMD",
    graphics: "AMD",
    screen: 13.3,
    price: 2999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_15_8_25_50_252_05.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_7_11_50_35_97_03.jpg",
    category: "laptops",
  },
  {
    name: "Dell XPS 13 9305",
    brand: "Dell",
    processor: "Intel",
    graphics: "Intel",
    screen: 13.3,
    price: 6999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_12_6_10_43_789_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_24_11_37_20_401_03.jpg",
    category: "laptops",
  },
  {
    name: "ASUS ZenBook Flip S UX371EA",
    brand: "Asus",
    processor: "Intel",
    graphics: "Intel",
    screen: 13.3,
    price: 6799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_19_13_20_3_899_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_30_8_45_41_161_03.jpg",
    category: "laptops",
  },
  {
    name: "Acer Nitro 5 i5-10300H",
    brand: "Acer",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 17.3,
    price: 4149,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_16_8_40_54_678_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_4_14_9_34_391_03.jpg",
    category: "laptops",
  },
  {
    name: "ASUS TUF Gaming F17",
    brand: "Asus",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 17.3,
    price: 4799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_17_11_31_7_913_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_17_11_31_18_646_05.jpg",
    category: "laptops",
  },
  {
    name: "Acer Aspire 5",
    brand: "Acer",
    processor: "Intel",
    graphics: "Intel",
    screen: 17.3,
    price: 2799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_28_11_38_24_854_08.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_27_8_41_36_273_05.jpg",
    category: "laptops",
  },
  {
    name: "Acer Nitro 5",
    brand: "Acer",
    processor: "Intel",
    graphics: "Nvidia",
    screen: 17.3,
    price: 4599,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_16_8_41_26_283_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_30_14_12_22_214_02.jpg",
    category: "laptops",
  },
  {
    name: "HP ENVY 17",
    brand: "HP",
    processor: "Intel",
    graphics: "Intel",
    screen: 17.3,
    price: 5949,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/1/pr_2022_1_18_8_24_13_475_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/1/pr_2022_1_18_8_24_26_473_04.jpg",
    category: "laptops",
  },
  {
    name: "Apple MacBook Air M1",
    brand: "Apple",
    processor: "Apple",
    graphics: "Apple",
    screen: 13.3,
    price: 4599,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_10_21_37_1_812_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_10_21_33_12_770_00.jpg",
    category: "laptops",
  },
  {
    name: "Apple MacBook Pro M1",
    brand: "Apple",
    processor: "Apple",
    graphics: "Apple",
    screen: 13.3,
    price: 6699,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_10_21_42_34_359_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_18_23_27_58_36_01.jpg",
    category: "laptops",
  },
  {
    name: "Dell XPS 13 9305",
    brand: "Dell",
    processor: "Intel",
    graphics: "Intel",
    screen: 13.3,
    price: 6999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_12_6_10_43_789_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_24_11_37_18_636_02.jpg",
    category: "laptops",
  },
  {
    name: "HP Spectre 13 x360",
    brand: "HP",
    processor: "Intel",
    graphics: "Intel",
    screen: 13.3,
    price: 7699,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_26_8_36_31_678_06.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_17_8_56_32_2_05.jpg",
    category: "laptops",
  },
  {
    name: "ASUS ROG Flow X13",
    brand: "Asus",
    processor: "AMD",
    graphics: "Nvidia",
    screen: 13.3,
    price: 6699,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_23_9_28_26_912_08.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_23_9_28_30_599_10.jpg",
    category: "laptops",
  },
];

const seedPhones = [
  {
    name: "Xiaomi POCO X3 PRO NFC",
    brand: "Xiaomi",
    screen: 6.67,
    memory: 256,
    price: 1199,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_27_13_51_45_361_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_25_15_1_39_993_01.jpg",
    category: "phones",
  },
  {
    name: "Apple iPhone 11 64GB Black",
    brand: "Apple",
    screen: 6.1,
    memory: 64,
    price: 2549,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_11_9_8_14_748_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_11_9_8_19_295_02.jpg",
    category: "phones",
  },
  {
    name: "Samsung Galaxy S20 FE Fan Edition Snapdragon Blue",
    brand: "Samsung",
    screen: 6.5,
    memory: 128,
    price: 1999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_21_12_9_23_990_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_21_12_9_34_51_04.jpg",
    category: "phones",
  },
  {
    name: "Xiaomi Redmi 9A 2/32GB Grey",
    brand: "Xiaomi",
    screen: 6.53,
    memory: 32,
    price: 499,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_8_8_14_34_922_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/8/pr_2020_8_5_9_23_16_617_01.jpg",
    category: "phones",
  },
  {
    name: "Apple iPhone 13 128GB Midnight",
    brand: "Apple",
    screen: 6.1,
    memory: 128,
    price: 3999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_20_11_35_51_736_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "phones",
  },
  {
    name: "Samsung Galaxy S21 G991B 8/128 Dual SIM Grey 5G",
    brand: "Samsung",
    screen: 6.2,
    memory: 128,
    price: 2799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_13_7_55_1_133_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_13_7_55_5_7_02.jpg",
    category: "phones",
  },
  {
    name: "Xiaomi Redmi Note 10S 6/64GB Onyx Gray",
    brand: "Xiaomi",
    screen: 6.43,
    memory: 64,
    price: 1249,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_8_10_40_36_705_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_13_9_53_53_632_03.jpg",
    category: "phones",
  },
  {
    name: "Apple iPhone 11 64GB White",
    brand: "Apple",
    screen: 6.1,
    memory: 64,
    price: 2549,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_11_9_11_0_705_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_11_9_11_7_572_02.jpg",
    category: "phones",
  },
  {
    name: "Samsung Galaxy S20 FE Fan Edition Snapdragon Lavendar",
    brand: "Samsung",
    screen: 6.5,
    memory: 128,
    price: 1999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_21_12_5_39_463_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_21_12_5_49_242_04.jpg",
    category: "phones",
  },
  {
    name: "Samsung Galaxy M12 4/64GB Blue",
    brand: "Samsung",
    screen: 6.5,
    memory: 64,
    price: 649,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_4_12_29_8_136_03.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_4_12_29_10_42_04.jpg",
    category: "phones",
  },
];

const seedConsoles = [
  {
    name: "Microsoft Xbox Series S",
    brand: "Microsoft",
    memory: 512,
    price: 1349,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_22_9_32_42_104_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_22_9_32_49_697_03.jpg",
    category: "consoles",
  },
  {
    name: "Nintendo Switch Joy-Con - Szary",
    brand: "Nintendo",
    memory: 32,
    price: 1399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/8/pr_2019_8_28_15_1_27_630_03.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "consoles",
  },
  {
    name: "Nintendo Switch Lite - Niebieski",
    brand: "Nintendo",
    memory: 32,
    price: 989,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_7_7_15_25_557_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_7_7_15_27_353_01.jpg",
    category: "consoles",
  },
  {
    name: "Microsoft Xbox Series X",
    brand: "Microsoft",
    memory: 1000,
    price: 2549,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/7/pr_2020_7_10_12_7_39_728_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/7/pr_2020_7_10_12_7_43_730_01.jpg",
    category: "consoles",
  },
  {
    name: "Nintendo Switch Lite Dialga & Palkia Edition",
    brand: "Nintendo",
    memory: 32,
    price: 1019,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_5_12_45_5_560_02.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_5_12_45_3_841_01.jpg",
    category: "consoles",
  },
];

const seedProcesors = [
  {
    name: "Intel Core i5-11400F",
    brand: "Intel",
    cores: 6,
    cache: 12,
    price: 759,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_16_17_21_50_504_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_16_17_21_52_848_01.jpg",
    category: "processors",
  },
  {
    name: "Intel Core i3-10100F",
    brand: "Intel",
    cores: 4,
    cache: 6,
    price: 389,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/5/pr_2020_5_6_16_8_32_905_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "Intel Core i5-12600K",
    brand: "Intel",
    cores: 10,
    cache: 20,
    price: 1399,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_26_7_31_43_884_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "Intel Core i7-11700K",
    brand: "Intel",
    cores: 8,
    cache: 16,
    price: 1779,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_15_10_17_21_931_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_15_10_17_19_400_00.jpg",
    category: "processors",
  },
  {
    name: "Intel Core i5-12600KF",
    brand: "Intel",
    cores: 10,
    cache: 20,
    price: 1299,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_26_7_44_49_855_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "AMD Ryzen 5 5600X",
    brand: "AMD",
    cores: 6,
    cache: 35,
    price: 1279,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_9_12_59_29_839_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "AMD Ryzen 7 5800X",
    brand: "AMD",
    cores: 8,
    cache: 36,
    price: 1679,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_9_13_47_7_306_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "AMD Ryzen 7 3800X",
    brand: "AMD",
    cores: 8,
    cache: 36,
    price: 1389,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/7/pr_2019_7_19_11_28_56_534_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "AMD Ryzen 9 5900X",
    brand: "AMD",
    cores: 12,
    cache: 70,
    price: 2339,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_9_13_56_59_540_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
  {
    name: "AMD Ryzen 7 5700G",
    brand: "AMD",
    cores: 8,
    cache: 20,
    price: 1449,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_4_13_57_4_57_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_28_11_30_27_943_08.jpg",
    category: "processors",
  },
];

const seedTvs = [
  {
    name: "LG 70UP77003LB",
    brand: "LG",
    screenSize: 70,
    energyClass: "G",
    price: 3599,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_30_12_5_27_239_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_30_12_5_3_665_08.jpg",
    category: "tvs",
  },
  {
    name: "Philips 70PUS7855",
    brand: "Philips",
    screenSize: 70,
    energyClass: "F",
    price: 3099,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_7_16_16_56_393_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_2_13_32_26_666_02.jpg",
    category: "tvs",
  },
  {
    name: "Samsung QE75Q67AA",
    brand: "Samsung",
    screenSize: 75,
    energyClass: "E",
    price: 4999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_11_40_57_160_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_11_41_2_643_03.jpg",
    category: "tvs",
  },
  {
    name: "Samsung QE75Q80AA",
    brand: "Samsung",
    screenSize: 75,
    energyClass: "G",
    price: 7299,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_15_41_4_201_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_15_49_32_662_00.jpg",
    category: "tvs",
  },
  {
    name: "Philips 75PUS8546",
    brand: "Philips",
    screenSize: 75,
    energyClass: "G",
    price: 5999,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_2_13_36_58_16_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_2_13_37_3_718_03.jpg",
    category: "tvs",
  },
  {
    name: "Xiaomi Mi LED TV P1 55",
    brand: "Xiaomi",
    screenSize: 55,
    energyClass: "G",
    price: 2299,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_19_14_40_7_258_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_19_14_40_9_555_01.jpg",
    category: "tvs",
  },
  {
    name: "Philips 55PUS7855",
    brand: "Philips",
    screenSize: 55,
    energyClass: "G",
    price: 2099,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_12_8_21_44_998_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_12_8_21_46_763_01.jpg",
    category: "tvs",
  },
  {
    name: "LG OLED55B13LA",
    brand: "LG",
    screenSize: 55,
    energyClass: "G",
    price: 5899,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_12_10_49_10_150_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2021/3/pr_2021_3_12_10_49_8_166_03.jpg",
    category: "tvs",
  },
  {
    name: "Philips 58PUS8546",
    brand: "Philips",
    screenSize: 58,
    energyClass: "G",
    price: 3299,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_3_14_8_19_249_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_2_13_8_46_903_05.jpg",
    category: "tvs",
  },
  {
    name: "Samsung QE55Q77AA",
    brand: "Samsung",
    screenSize: 55,
    energyClass: "F",
    price: 3699,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_14_14_10_200_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_24_14_14_13_684_02.jpg",
    category: "tvs",
  },
];

const seedHeadphones = [
  {
    name: "Xiaomi Mi True Wireless Earbuds Basic 2",
    brand: "Xiaomi",
    type: "Wireless",
    color: "Black",
    price: 69,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_16_12_40_50_484_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_16_12_40_48_844_00.jpg",
    category: "headphones",
  },
  {
    name: "Razer Kraken X",
    brand: "Razer",
    type: "Wired",
    color: "Black",
    price: 139,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_28_14_42_38_837_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_28_14_42_32_415_02.jpg",
    category: "headphones",
  },
  {
    name: "Apple AirPods Pro z MagSafe",
    brand: "Apple",
    type: "Wireless",
    color: "White",
    price: 949,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_18_21_13_10_396_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_18_21_13_13_958_02.jpg",
    category: "headphones",
  },
  {
    name: "SteelSeries Arctis 1 Czarne",
    brand: "SteelSeries",
    type: "Wired",
    color: "Black",
    price: 219,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/5/pr_2020_5_19_8_30_38_386_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/6/pr_2019_6_11_16_58_32_166_01.jpg",
    category: "headphones",
  },
  {
    name: "Logitech G435 czarne",
    brand: "Logitech",
    type: "Wireless",
    color: "Black",
    price: 349,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_13_15_46_45_651_05.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_13_15_46_40_198_02.jpg",
    category: "headphones",
  },
  {
    name: "Logitech G PRO X LIGHTSPEED",
    brand: "Logitech",
    type: "Wireless",
    color: "Black",
    price: 799,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/7/pr_2020_7_30_7_48_16_713_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_22_14_2_35_729_01.jpg",
    category: "headphones",
  },
  {
    name: "Huawei Freebuds 4i czarne ANC",
    brand: "Huawei",
    type: "Wireless",
    color: "Black",
    price: 279,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_17_8_52_28_970_04.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_17_8_52_22_487_01.jpg",
    category: "headphones",
  },
  {
    name: "SteelSeries Arctis 3 Czarne",
    brand: "SteelSeries",
    type: "Wired",
    color: "Black",
    price: 349,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/1/pr_2019_1_7_8_16_49_840_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/1/pr_2019_1_7_8_16_56_247_02.jpg",
    category: "headphones",
  },
  {
    name: "Logitech G PRO X GAMING HEADSET",
    brand: "Logitech",
    type: "Wired",
    color: "Black",
    price: 499,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_18_17_10_13_635_01.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_25_9_0_59_192_03.jpg",
    category: "headphones",
  },
  {
    name: "JBL Tune 510BT Czarne",
    brand: "JBL",
    type: "Wireless",
    color: "Black",
    price: 169,
    img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_28_13_25_29_732_00.jpg",
    scdImg:
      "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/1/pr_2021_1_28_13_26_58_405_00.jpg",
    category: "headphones",
  },
];

Laptops.insertMany(seedLaptops);
Phones.insertMany(seedPhones);
Consoles.insertMany(seedConsoles);
Processors.insertMany(seedProcesors);
Tvs.insertMany(seedTvs);
Headphones.insertMany(seedHeadphones);
