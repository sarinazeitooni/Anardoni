import images from "../images/images";
function createInformation(title, description) {
    return {title, description};
}
let cardData = [
    {
        id: 0,
        containerImage: images.firstImage,
        detailImage: images.firstDetailImage,
        lastUpdate: "25 روز پیش",
        title: "تقویم 1400",
        subTitle: "همیشه بروز باش!",
        caption: "این برنامه در اناردونی برای دیوایس‌های iOS در دسترس است",
        seller: "امید آقاخانی",
        version: "419",
        previewImages: [
            'https://s.anardoni.com/applications/2021/03/17/photos/pmVC8MQhq/screenshot1_pmVC8MQhq_2021_03_17_10_56_59.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/17/photos/pmVC8MQhq/screenshot2_pmVC8MQhq_2021_03_17_10_56_59.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/17/photos/pmVC8MQhq/screenshot3_pmVC8MQhq_2021_03_17_10_56_59.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/17/photos/pmVC8MQhq/screenshot8_pmVC8MQhq_2021_03_17_10_56_59.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/17/photos/pmVC8MQhq/screenshot7_pmVC8MQhq_2021_03_17_10_56_59.jpeg?format=webp'
        ],
        newItems: ["اپدیت سال 1400"],
        more: ["چند تا ابزار دیگه هم داره از جمله:"],
        description: 'همین الان تقویم سال 1400 رو نصب کنید و از اون لذت ببرید...',
        about: [
            "- تاریخ‌ها رو به شمسی و میلادی و قمری ببینید و مرور کنید.",
            "- در این تقویم اوقات شرعی هر شهری رو خواستید ببینید.",
            "- همینطور در قسمت جداگانه میتونید ببینید آب و هوای شهر مورد نظرتون در چه وضعیه!",
            "- شما می‌تونید توی هر روزی که خواستید یادآوری بزارید و توی خود سیستم عامل iOS هم ذخیره میشه و میتونید مدیریتش کنید!",
            "- لغتنامه هم توی اپ هست که هرچیزی که لازم داشتیدو توی اپ داشته باشید."
        ],
        information: [
            {
                color : "#007bff",
                title : "فروشنده",
                description: 'امید آقاخانی'
            },
            createInformation("سایز",'۱۳.۷۷ مگابایت'),
            createInformation("دسته بندی",'آب و هوا'),
            createInformation("سازگاری",'iPhone'),
            createInformation("محدوده سنی",'4+'),
            createInformation("نسخه",'419'),
            createInformation("قیمت",'رایگان')
        ]

    },{
        id: 1,
        containerImage: images.secondImage,
        detailImage: images.secondDetailImage,
        lastUpdate: "یک ماه پیش",
        title: "نماوا",
        subTitle: "سرویس تماشای آنلاین فیلم و سریال",
        caption: "این برنامه در اناردونی برای دیوایس‌های iOS در دسترس است",
        seller: "آریا رسانه تدبیر (شاتل)",
        version: "2.0.0.744",
        links: ['معرفی و دانلود'],
        previewImages: [
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot1_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot2_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot3_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot4_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot5_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp'
        ],
        newItems: [
            "طراحی چشم نواز جدید و افزایش تجربه کاربری",
            "دسترسی به جدیدترین محتوای فیلم و سریال",
            "جستجوی پیشرفته به همراه فیلتر برای دسترسی آسان تر",
            "ایجاد نمای اختصاصی کودک به همراه قفل کودک برای فرزندان شما",
            "دسته بندی های جدید برای ژانر فیلم ها"
        ],
        more: ["• امکان تماشای بخشی از یک فیلم بر روی یک دستگاه (موبایل، کامپیوتر و...) و تماشای ادامه آن بر روی دستگاه‌های مختلف ",
            "• تماشای بی‌وقفه و بدون قطعی فیلم‌ها و سریال‌های محبوب شما، با بهره‌مندی از قابلیت تنظیم هوشمندانه کیفیت فیلم با توجه به سرعت اینترنت"],
        about: [
            "• تماشای آنلاین جذاب‌ترین و جدیدترین فیلم‌ها و سریال‌های روز ایران و جهان با بهترین کیفیت و به آسان‌ترین شکل ممکن",
            "• پردیس نماوا، سرویسی برای تماشای آنلاین فیلم‌های روز سینمای ایران",
            "• بدون مصرف ترافیک اینترنت (برای مشترکین شاتل) و ترافیک نیم‌بها برای سایر اپراتورها",
            "• کاربران شاتل موبایل می‌توانند بدون خرید اشتراک از نماوا استفاده نمایند و ترافیک مصرفی آن‌ها تمام بها محاسبه خواهد شد",
            "• امکان دانلود داخل برنامه و تماشای آفلاین",
            "• امکان انتخاب زبان صدای فیلم بصورت دلخواه، در حین تماشای فیلم",
        ],
        information: [
            {
                color : "#007bff",
                title : "فروشنده",
                description: 'رسانه تدبیر (شاتل)'
            },
            createInformation("سایز",'۲۲.۸۸ مگابایت'),
            createInformation("دسته بندی",'سرگرمی'),
            createInformation("سازگاری",'iPhone'),
            createInformation("محدوده سنی",'4+'),
            createInformation("نسخه",'2.0.0.744'),
            createInformation("قیمت",'رایگان')
        ]

    },
    {
        id: 2,
        containerImage: images.thirdImage,
        detailImage: images.thirdDetailImage,
        lastUpdate: "یک ماه پیش",
        title: "دیجی‌ استایل | Digistyle",
        subTitle: "فروشگاه اینترنتی لباس",
        caption: "این برنامه در اناردونی برای دیوایس‌های iOS در دسترس است",
        seller: "آوازه نو پوشان پارسی",
        version: "2.3.1",
        links: ['وب اپلیکیشن'],
        previewImages: [
            'https://s.anardoni.com/applications/2021/06/03/photos/nwgxgmLmj/screenshot1_nwgxgmLmj_2021_06_03_17_46_34.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/06/03/photos/nwgxgmLmj/screenshot2_nwgxgmLmj_2021_06_03_17_46_34.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/06/03/photos/nwgxgmLmj/screenshot3_nwgxgmLmj_2021_06_03_17_46_34.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/06/03/photos/nwgxgmLmj/screenshot4_nwgxgmLmj_2021_06_03_17_46_34.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/06/03/photos/nwgxgmLmj/screenshot5_nwgxgmLmj_2021_06_03_17_46_34.jpeg?format=webp'
        ],
        newItems: [
            "تغییراتی ذکر نشده است."
        ],
        more: ["در این راستا سعی شده تا با فروش محصولات تولید داخل کشور مانند" +
        " اناربن، خانه مد راد، هورشید، تچر، پانیسا" +
        "، مکث، پاتن چرم، آر‌ان‌اس، شهر چرم، هاترا، گالری آرتمیس، چرم مشهد،" +
        " آنو جین و... در این سایت خریدی مطمئن در کمترین زمان برای" +
        " خریداران تضمین شود. در کنار تمام محصولات ایرانی شناخته شده و با کیفیت، سعی شده تا با نگاهی" +
        " دقیق و موشکافانه به فرهنگ و سبک زندگی ایرانی و اسلامی، دیجی استایل بعد از تجربه،" +
        " کار و شناخت سلیقه مشتریان در دیجی کالا به این نتیجه رسید محصولات شرکت‌های خارج از ایران هم در کنار تولیدات ایرانی قرار گیرند تا با مقایسه محصولات داخلی و نمونه‌های مطرح جهانی،" +
        " بتوانید بنابر سلیقه خاص خود، تجربه‌ای به یاد ماندنی از خرید اینترنتی داشته باشید."],

        about: [
            "فروشگاه اینترنتی دیجی استایل که یک تجربه منحصربه‌فرد بعد از دیجی کالا است، یکی از بزرگ‌ترین و جامع‌ترین مراکز آنلاین عرضه پوشاک باکیفیت است. در دیجی استایل تمامی کالاهای مرتبط با پوشش، با کیفیتی مطلوب و کم‌نظیر و با قیمتی مناسب ارائه می‌شود. تیم دیجی استایل تمام تلاش خود را کرده است تا محصولاتی را که به مشتریان عرضه می‌کند، علاوه بر تناسب با معیارهای ایرانی و اسلامی، زیبایی و اصالت را هم به همراه داشته باشد.",
            "تمامی محصولات این سایت از جمله لباس، کفش، زیورآلات، لوازم آرایش و سلامت، در نهایت دقت و با تلاش متخصصان تیم دیجی استایل انتخاب شده و در اختیار خریداران قرار گرفته‌اند. یکی از اهداف اصلی فروشگاه اینترنتی مد و لباس دیجی استایل، در کنار برطرف کردن نیاز خرید لباس و خرید کفش و اکسسوری، سریع و مطمئن اینترنتی، معرفی و عرضه کالاهای فاخر ایرانی با کیفیتی کم نظیر و طراحی به روز است."
        ],

        information:
            [
                {
                    color : "#007bff",
                    title : "فروشنده",
                    description: ' نو پوشان پارسی'
                },
                createInformation("سایز",'۶.۰۸ مگابایت'),
                createInformation("دسته بندی",'خرید'),
                createInformation("سازگاری",'iPhone'),
                createInformation("محدوده سنی",'4+'),
                createInformation("نسخه",'2.3.1'),
                createInformation("قیمت",'رایگان')

            ]
    },
    {
        id: 3,
        containerImage: images.secondImage,
        detailImage: images.secondDetailImage,
        lastUpdate: "یک ماه پیش",
        title: "نماوا",
        subTitle: "سرویس تماشای آنلاین فیلم و سریال",
        caption: "این برنامه در اناردونی برای دیوایس‌های iOS در دسترس است",
        seller: "آریا رسانه تدبیر (شاتل)",
        version: "2.0.0.744",
        links: ['معرفی و دانلود'],
        previewImages: [
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot1_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot2_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot3_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot4_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp',
            'https://s.anardoni.com/applications/2021/03/27/photos/XYJBoD6zy/screenshot5_XYJBoD6zy_2021_03_27_06_05_24.jpeg?format=webp'
        ],
        newItems: [
            "طراحی چشم نواز جدید و افزایش تجربه کاربری",
            "دسترسی به جدیدترین محتوای فیلم و سریال",
            "جستجوی پیشرفته به همراه فیلتر برای دسترسی آسان تر",
            "ایجاد نمای اختصاصی کودک به همراه قفل کودک برای فرزندان شما",
            "دسته بندی های جدید برای ژانر فیلم ها"
        ],
        more: ["• امکان تماشای بخشی از یک فیلم بر روی یک دستگاه (موبایل، کامپیوتر و...) و تماشای ادامه آن بر روی دستگاه‌های مختلف ",
            "• تماشای بی‌وقفه و بدون قطعی فیلم‌ها و سریال‌های محبوب شما، با بهره‌مندی از قابلیت تنظیم هوشمندانه کیفیت فیلم با توجه به سرعت اینترنت"],
        about: [
            "• تماشای آنلاین جذاب‌ترین و جدیدترین فیلم‌ها و سریال‌های روز ایران و جهان با بهترین کیفیت و به آسان‌ترین شکل ممکن",
            "• پردیس نماوا، سرویسی برای تماشای آنلاین فیلم‌های روز سینمای ایران",
            "• بدون مصرف ترافیک اینترنت (برای مشترکین شاتل) و ترافیک نیم‌بها برای سایر اپراتورها",
            "• کاربران شاتل موبایل می‌توانند بدون خرید اشتراک از نماوا استفاده نمایند و ترافیک مصرفی آن‌ها تمام بها محاسبه خواهد شد",
            "• امکان دانلود داخل برنامه و تماشای آفلاین",
            "• امکان انتخاب زبان صدای فیلم بصورت دلخواه، در حین تماشای فیلم",
        ],
        information: [
            {
                color : "#007bff",
                title : "فروشنده",
                description: ' رسانه تدبیر (شاتل)'
            },
            createInformation("سایز",'۲۲.۸۸ مگابایت'),
            createInformation("دسته بندی",'سرگرمی'),
            createInformation("سازگاری",'iPhone'),
            createInformation("محدوده سنی",'4+'),
            createInformation("نسخه",'2.0.0.744'),
            createInformation("قیمت",'رایگان')
        ]
    }

];
export default cardData;