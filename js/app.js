window.addEventListener("load", function () {
    console.log("Hello World!");
});
$(document).bind("mobileinit", function () {


});
$(document).on('pageinit', '#languageChoose', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});
$(document).on('pageinit', '#deshboard', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});
$(document).on('pageinit', '#kalemaDetails', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});
$(document).on('pageinit', '#settings', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});
var kalemaList = {
    "kalema": [
    {
        id: 1,
        name: 'কালেমা-ই তাইয়্যেবা',
        englishName: 'Kalma Tayyaba',
        arbi: 'لَا اِلَهَ اِلاَّ اللهُ مُحَمَّدُ رَّسُوْ لُ الله',
        bangla: 'লা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ',
        english: 'Laa ilaaha illal Lahoo Mohammadur Rasool Ullah',
        description: 'আল্লাহ ভিন্ন ইবাদত বন্দেগীর উপযুক্ত আর কেহই নাই। হযরত মুহাম্মদ ছাল্লাল্লাহু আলাইহি ওয়াছাল্লাম তাঁহার প্রেরিত রসূল।',
        englishDescription: '(There is) none worthy of worship except Allah. Muhammad is Messenger of ALLAH',
        audio: 'audio/tayeeb.mp3'
    }
    ,
    {
        id: 2,
        name: 'কালেমা-ই শাহাদত',
        englishName: 'Kalma Shahadat',
        arbi: 'اشْهَدُ انْ لّآ اِلهَ اِلَّا اللّهُ وَحْدَه لَا شَرِيْكَ لَه، وَ اَشْهَدُ اَنَّ مُحَمَّدً اعَبْدُهوَرَسُولُه',
        bangla: 'আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওহদাহু লা-শারীকালাহু ওয়াশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাছুলুহু ।',
        english: 'Ashahado An Laa ilaaha illal Laho Wahtha Ho La Shareekala Hoo Wa Ash Hado Anna Mohammadan Abdo Hoo Wa Rasoolohoo',
        description: 'আমি সাক্ষ্য দিতেছি যে , অল্লাহ ভিন্ন আর কেহই ইবাদতের উপযুক্ত নাই তিনি এক তাঁহার কোন অংশীদার নাই । আমি আরও সাক্ষ্য দিতেছি যে, হযরত মুহাম্মদ (সাল্লাহু আলাইহে ওয়া সাল্লাম) আল্লাহর শ্রেষ্ঠ বান্দা এবং তাঁহার প্রেরিত নবী',
        englishDescription: 'I testify that (there is) no partner for Him. And I testify that certainly Muhammad (is) His worshipper and His Messenger',
        audio: 'audio/shahadat.mp3'
    },
    {
        id: 3,
        name: 'কালেমা-ই তাওহীদ',
        englishName: 'Kalma Tauheed',
        arbi: 'لا الهَ اِلَّا اللّهُ وَحْدَهُ لا شَرِيْكَ لَهْ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْى وَ يُمِيْتُ وَ هُوَحَىُّ لَّا يَمُوْتُ اَبَدًا اَبَدًا ط ذُو الْجَلَالِ وَ الْاِكْرَامِ ط بِيَدِهِ الْخَيْرُ ط وَهُوَ عَلى كُلِّ شَئ ٍ قَدِيْرٌ',
        bangla: 'লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারিকা লাহু, লাহুল মুলকু ওলাহুল হামদু উহয়ী ওয়া ইয়োমিতু ওয়া হুয়া হাইয়ুল লা ইয়ামুতু আবাদান আবাদা জুল জালালি ওয়াল ইকরাম বি ইয়াদিহিল খাইর ওয়া হুয়া আলা কুল্লি শাইয়িন কাদির',
        english: 'Laa ilaha illal Lahoo Wahdahoo Laa Shareekalahoo Lahul Mulko Walahul Hamdo Yuhee Wa Yumeeto Wa Hoa Haiy Yul La Yamooto Abadan Abada Zul Jalal Lay Wal Ikraam Beyadihil Khair. Wa hoa Ala Kulli Shai In Qadeer.',
        description: 'আল্লাহ ব্যতীত কোন উপাস্য নেই, তিনি এক ও অদ্বিতীয়। তাঁর কোন অংশীদার নেই। সকল ক্ষমতা এবং প্রশংসা তাঁরই জন্য। তিনিন জীবন ও মৃত্যুর মালিক। তিনি চিরঞ্জীব, তিনি সকল সম্মানের মালিক। তাঁর হাতেই সকল মঙ্গল এবং তিনি সবকিছুর উপর ক্ষমতা রাখেন।',
        englishDescription: '(There is) none worthy of worship except God. He is only One. (There are) no partners for Him. For He (is) the Kingdom. And for Him (is) the Praise. He gives life and causes death. And He (is) Alive. He will not die, never, ever. Possessor of Majesty and Reverence. In His hand (is) the goodness. And He (is) the goodness. And He (is) on everything powerful.',
        audio: 'audio/tawhid.mp3'
    }, {
        id: 4,
        name: 'কালেমা-ই রদ্দেকুফর',
        englishName: 'Kalma Radde Kufr',
        arbi: 'اَللّهُمََّ اِنّىْ اَعُوْدُ بِكَ مِنْ انْ اُشْرِكَ بِكَ شَيئًا وََّ اَنَا اَعْلَمُ بِه وَ اسْتَغْفِرُكَ لِمَا لا اَعْلَمُ بِه تُبْتُ عَنْهُ وَ تَبَرَّاْتُ مِنَ الْكُفْرِ وَ الشّرْكِ وَ الْكِذْبِ وَ الْغِيْبَةِ وَ الْبِدْعَةِ وَ النَّمِيْمَةِ وَ الْفَوَاحِشِ وَ الْبُهْتَانِ وَ الْمَعَاصِىْ كُلِّهَا وَ اَسْلَمْتُ وَ اَقُوْلُ لآ اِلهَ اِلَّا اللّهُ مُحَمَّدُ رَّسُوْلُ اللّهِ',
        bangla: 'আল্লাহুম্মা ইন্নি আউযুবিকা মিন উশরিকা বিকা শাইআও ওয়ানা আলামু বিহি ওয়াস্তাগফিরুকা লিমালা আলামু বিহি তুবতু আনহু ওয়া তাবাররাতু মিনাল-কুফরি ওয়াশ-শিরকী ওয়াল-কিজবি ওয়ালা-গিবাতি ওয়াল-বিদাতি ওয়ান্না-মিমাতি ওয়াল-ফাওয়া হিমি ওয়াল-রুহতানী ওয়াল-মাআসি কুল্লিহা ওয়াসলামতু ওয়াকুলু লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ (সাঃ)',
        english: 'Allahumma innii a\'udhu bika min an ushrika bika shai-anw- wa ana a\'lamu bihii. Was tagh fi ru ka limaa laa alamu bihee. Tubtu anhu wa tabarra-tu min al-kufri wash-shirki wal-kizdhbi wal-ghiibati wal-bid’ati wan-namiimati wal fawaahishi wal-buhtani w-al-ma’aasii kulliha. Wa aslamtu wa aquulu La illaha illAllahu Muhammadur RasulAllah',
        description: 'হে আল্লাহ্‌ নিশ্চয়, ক্ষমা চাই শিরক করা থেকে (আল্লাহ্‌র সাথে কাউকে শরিক করা), আমি ক্ষমা চাই সকল পাপ থেকে যা সম্পর্কে আমি সচেতন নই বা জানি না, আমি পুনরায় ঘোষণা করছি, আমি সকল প্রকার কুফর থেকে, শিরক থেকে, মিথ্যা (কথা বলা), গীবত, বিদাত, পরনিন্দা, অশ্লীলতা এবং অন্যান্য সকল পাপ থেকে মুক্ত। আমি ইসলাম স্বীকার এবং বিশ্বাস করি এবং ঘোষণা দিচ্ছি যে, আল্লাহ্‌ ছাড়া কোন প্রভু নেই এবং মুহাম্মদ (সাঃ) আল্লাহ্‌র প্রেরিত রাসুল।',
        englishDescription: 'O Allah! Certainly I seek protection with You from, that I associate partner with You anything and I know it. And I seek forgiveness from You for that I do not know it. I repended from it and I made myself free from disbelief and polytheism and the falsehood and the back-biting and the innovation and the tell-tales and the bad deeds and the blame and the disobedience, all of them. And I submit and I say (there is) none worthy of worship except Allah, Muhammad is the Messenger of Allah.',
        audio: 'audio/radde kuff.mp3'
    }, {
        id: 5,
        name: 'কালেমা-ই তামজীদ',
        englishName: 'Kalma Tamjeed',
        arbi: 'سُبْحَان لِلّه وَ الْحَمْدُ لِلّهِ وَ لآ اِلهَ اِلّا اللّهُ، وَ اللّهُ اَكْبَرُ وَلا حَوْلَ وَلاَ قُوَّة ِلَّا بِاللّهِ الْعَلِىّ الْعَظِيْم',
        bangla: 'সুবহানআল্লাহী ওয়ালহামদু লিল্লাহী ওয়ালা ইলাহা ইল্লাল্লাহু ওয়াল্লাহু আকবার, ওয়ালা হাওলা ওয়ালা কুয়াতা ইল্লা বিল্লাহিল আলিইল আযীম',
        english: 'Subhanallahe Wal Hamdulillahe Wa Laa ilaha illal Laho Wallahooakbar. Wala Haola Wala Quwwata illa billahil AliYil Azeem',
        description: 'মহিমান্বিত আল্লাহ্‌র, সমস্ত প্রশংসা আল্লাহ্‌র। আল্লাহ্‌ ছাড়া কোন মাবুদ নাই। আল্লাহ্‌ মহান। সমস্ত পবিত্রতা আল্লাহ্‌র, সকল প্রশংসা আল্লাহ্‌র। আল্লাহ্‌ ছাড়া কোন শক্তি নাই, কোন ক্ষমতা নাই, তিনি সম্মানিত, তিনি মহান।',
        englishDescription: 'Exalted is Allah, and praise be to Allah, and there is no deity except Allah, and Allah is the Greatest. And there is no might nor power except in Allah, the Most High, the Most Great.',
        audio: 'audio/tamjid.mp3'
    }, {
        id: 6,
        name: 'কালেমা-ই আস্তাগফের',
        englishName: 'Kalma Astaghfar',
        arbi: 'اسْتَغْفِرُ اللّهَ رَبِّىْ مِنْ كُلِّ ذَنْبٍ اَذْنَبْتُه عَمَدًا اَوْ خَطَاً سِرًّا اَوْ عَلَانِيَةً وَاَتُوْبُ اِلَيْهِ مِنْ الذَّنْبِ الَّذِىْ اَعْلَمُ وَ مِنْ الذَّنْبِ الَّذِىْ لا اَعْلَمُ اِنَّكَ اَنْتَ عَلَّامُ الغُيُبِ وَ سَتَّارُ الْعُيُوْبِ و َغَفَّارُ الذُّنُوْبِ وَ لا حَوْلَ وَلا قُوَّةَ اِلَّا بِاللّهِ الْعَلِىِّ العَظِيْم',
        bangla: 'আস্তাগফিরুল্লাহা রাব্বি মিন কুল্লি জামবি আয নাবতুহু আমাদান আওখাতাআন সিররান আওয়ালা নিয়াতান ওয়াতুবু ইলাইহি মিনাযযামবিল্লাজি ওয়ামিনাযযামবিল্লাজি লা আলামু ইন্নাকা আনতা আল্লামুল গুয়ুবী ওয়া সাত্তারুল উইয়ুবী ওয়া গাফফারুজজুনুবি ওয়ালা হাওলা ওয়ালা কুয়াতা ইল্লা বিল্লাহিল আলিউল আযীম।',
        english: 'Astaghfirullah Rabbi Min Kullay Zambin Aznabtuho Amadan Ao Khat An Sirran Ao Alaniatan Wa Atoobo ilaihe Minaz Zambil Lazee Aalamo Wa Minaz Zambil Lazee La Aalamo innaka Anta Allamul Ghuyoobi Wa Sattaarul Oyobi Wa Ghaffaruz Zunoobi Wala Haola Wala Quwwata illa billahil AliYil Azeem.',
        description: 'আমি আল্লাহ্‌র কাছে ক্ষমা চাই সকল পাপ থেকে, যা আমি সংঘটিত করেছি আমার জ্ঞাতসারে অথবা অজ্ঞাতসারে, গোপনে বা প্রকাশ্যে এবং আমি আমার পালনকর্তার আশ্রয় চাই সেই পাপ থেকে, যে পাপ আমি জানি এবং যে পাপ আমি জানিনা। অবশ্যই আপনি লুকানো এবং গোপন (ভুল) পাপ সম্পর্কে জানেন এবং ক্ষমাশীল। আল্লাহ্‌ ছাড়া কোন শক্তি নেই, কোন ক্ষমতা নেই, তিনি সম্মানিত, তিনি মহান',
        englishDescription: 'I seek forgiveness from God, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly You, You (are) the knower of the hidden things and the Concealer (of) the mistakes and the Forgiver (of) the sins. And (there is) no power and no strength except from God, the Most High, the Most Great',
        audio: 'audio/astagfar.mp3'
    }
    ]

};
$(document).on("pageshow", "#languageChoose", function () { // When entering pagetwo
    if (localStorage.getItem("language")) {
        $.mobile.changePage("#deshboard");
    }
    $("input[type='radio']").bind("change", function (event, ui) {
        // console.log($(this).val());
        localStorage.removeItem("language");
        localStorage.setItem("language", $(this).val())
        $.mobile.changePage("#deshboard");
    });
});
$(document).on("pageshow", "#deshboard", function () { // When entering pagetwo

    function bindList() {
        localStorage.removeItem("kalemaIndex");
        var li = "";
        for (var i = 0; i < kalemaList.kalema.length; i++) {
            if (localStorage.getItem("language").toString().toLowerCase() == "bangla")
                li += '<li id="kalemaSelect"><a href="#prayerTime" data-transition="flip"><img class="radio-icon" src="images/Islam_Logo.png" /><h1 class="list-p">' + kalemaList.kalema[i].name + '</h1></a></li>';
            if (localStorage.getItem("language").toString().toLowerCase() == "english")
                li += '<li id="kalemaSelect"><a href="#prayerTime" data-transition="flip"><img class="radio-icon" src="images/Islam_Logo.png" /><h1 class="list-p">' + kalemaList.kalema[i].englishName + '</h1></a></li>';
        }
        if (localStorage.getItem("language").toString().toLowerCase() == "bangla")
            $("#deshboard #desHead").html("কালেমা সমূহ");
        else
            $("#deshboard #desHead").html("Kalema List");

        $("#deshboard #kalemaList").html("");
        $("#deshboard #kalemaList").append(li).listview('refresh');
    }
    bindList();
    $('#deshboard #kalemaList').on('click', ' > li', function () {
        var selected_index = $(this).index();
        /*console.log(selected_index);
        console.log(radioList.radio[selected_index].station);
        localStorage.setItem("radioLink", radioList.radio[selected_index].station);
        localStorage.setItem("radioName", radioList.radio[selected_index].name);*/
        $.mobile.transitionFallbacks.slideout = "none";
        localStorage.setItem("kalemaIndex", selected_index);
        $.mobile.changePage("#kalemaDetails");
    });


});

$(document).on("pageshow", "#kalemaDetails", function () {


    $.mobile.transitionFallbacks.slideout = "none";
    function bindDetails() {
        console.log("Assi");
        var index = localStorage.getItem("kalemaIndex");
        var arbi =
    {
        title: "Arabic Version",
        desc: kalemaList.kalema[index].arbi
    };
        var bangla =
    {
        title: "Bangla Version",
        desc: kalemaList.kalema[index].bangla
    };
        var english =
    {
        title: "English Version",
        desc: kalemaList.kalema[index].english
    };
        var banglaDesc =
     {
         title: "Description in Bangla",
         desc: kalemaList.kalema[index].description
     };
        var englishDesc =
     {
         title: "Description in English",
         desc: kalemaList.kalema[index].englishDescription
     };


        var li = '';

        li += '<div data-role="collapsible"><h3>' + arbi.title + '</h3><p style="text-align:right;">' + arbi.desc + '</p></div>';
        li += '<div data-role="collapsible"><h3>' + bangla.title + '</h3><p style="text-decoration:none;">' + bangla.desc + '</p></div>';
        li += '<div data-role="collapsible"><h3>' + english.title + '</h3><p>' + english.desc + '</p></div>';
        li += '<div data-role="collapsible"><h3>' + banglaDesc.title + '</h3><p>' + banglaDesc.desc + '</p></div>';
        li += '<div data-role="collapsible"><h3>' + englishDesc.title + '</h3><p>' + englishDesc.desc + '</p></div>';
        $("#kalemDetailsList").html("");
        $("#kalemDetailsList").html(li).collapsibleset('refresh');

    }

    bindDetails();
    //console.log(localStorage.getItem("radioLink"));
    var index = localStorage.getItem("kalemaIndex");
    $('#playRadio').attr("src", kalemaList.kalema[index].audio);
    $("#kalemaTitle").html("");


    if (localStorage.getItem("language").toString().toLowerCase() == "bangla")
        $("#kalemaTitle").html(kalemaList.kalema[index].name);
    else
        $("#kalemaTitle").html(kalemaList.kalema[index].englishName);


    //Toast("It require internet to load.It may need to click pause button first then click pay button.It may also need to take a couple of time to run please wait for few time");
    function Toast(msg) {
        $("<div class='ui-loader ui-overlay-shadow ui-body-b ui-corner-all'><h1>" + msg + "</h1></div>").css({ "text-align": "center", "font-size": "8px", "width": "256px", "background": "#000", "color": "white", "display": "block", "opacity": 0.96, "margin-top": "-10px", "margin-left": "-130px", "white-space": "normal" }).appendTo($.mobile.pageContainer).delay(5000).fadeOut(400, function () { $(this).remove(); });
    }
    $("#imgOn").on("click", function () {

        var img = $("#imgAudio");
        //console.log(img.attr("src"));
        if (img.attr("src").indexOf("radio_off") >= 0) {
            img.attr("src", "images/radio_on.gif");
            //console.log(audio.attr("src"));
            $('#playRadio').trigger("play");

            //  audio.play();
        }
        $("#imgOn").attr("src", "images/play.png");
        $("#imgOff").attr("src", "images/pause_hover.png");
        //  $('#playRadio').trigger("play");
    });
    $("#playRadio").on("ended", function () {
        var img = $("#imgAudio");
        //console.log(img.attr("src"));
        if (img.attr("src").indexOf("radio_on") >= 0) {
            console.log("Source " + $('#playRadio').attr("src"));
            img.attr("src", "images/radio_off.png");
            //$('#playRadio').trigger("pause");
        }
        $("#imgOn").attr("src", "images/play_hover.png");
        $("#imgOff").attr("src", "images/pause.png");
    });
    $("#imgOff").on("click", function () {

        var img = $("#imgAudio");
        //console.log(img.attr("src"));
        if (img.attr("src").indexOf("radio_on") >= 0) {
            console.log("Source " + $('#playRadio').attr("src"));
            img.attr("src", "images/radio_off.png");
            $('#playRadio').trigger("pause");
        }
        $("#imgOn").attr("src", "images/play_hover.png");
        $("#imgOff").attr("src", "images/pause.png");
    });
    $("#stationBack").on("click", function () {
        $("#imgOn").attr("src", "images/play_hover.png");
        $("#imgOff").attr("src", "images/pause.png");

        $('#playRadio').attr("src", "");

        localStorage.removeItem("kalemaIndex");
        $.mobile.changePage('#deshboard', { changeHash: false });

    });

});


$(document).on("pageshow", "#settings", function () {

    $("#radio-choice-h-3a").prop('checked', false).checkboxradio('refresh');
    $("#radio-choice-h-3b").prop('checked', false).checkboxradio('refresh');
    if (localStorage.getItem("language").toString().toLowerCase() == "bangla") {
        $("#settingTitle").html("বিন্যাস");
        $("#radio-choice-h-3b").prop('checked', true).checkboxradio('refresh');

    } else {
        $("#settingTitle").html("Settings");
        $("#radio-choice-h-3a").prop('checked', true).checkboxradio('refresh');
    }
    $("input[type='radio']").bind("change", function (event, ui) {
        // console.log($(this).val());
        localStorage.removeItem("language");
        localStorage.setItem("language", $(this).val())
        // $.mobile.changePage("#deshboard");
    });
});
