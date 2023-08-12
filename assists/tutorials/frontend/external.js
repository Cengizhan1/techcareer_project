//alert("denemöe999")
/*
sd
f
sdf
sd
f
sd */
// alert("pop-up1");
// window.alert("pop-up2");
// document.writeln("Sayfada göster<br/>");
// window.document.writeln("Sayfada göster");

// console.log("console log");
// console.error("console log");
// console.warn("console log");
// console.info("console log");

// single thread

// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// var degiskenAdi55=44.23;
// console.log(degiskenAdi55);
// console.log(typeof degiskenAdi55);

// var $degiskenAdi55="Merhabalar Güzel insanlar";
// console.log($degiskenAdi55);
// console.log(typeof $degiskenAdi55);

// var _$degiskenAdi55=true;
// console.log(_$degiskenAdi55);
// console.log(typeof _$degiskenAdi55);

//var 44&~_$degiskenAdi55=true;

// var _$degiskenAdi55=[];
// var _$degiskenAdi55={};

// Hoisting
// carName="Audi";
// var carName;

///////////////////////////////////////////// 
// let
// let deneme=44;
// console.log(deneme);
// deneme=66;
// console.log(deneme);

// const
// const deneme99=14525;
// deneme99=66666;

///////////////////////////////////////////// 
// Operatör
// + - * / % ++ --
// &&=VE ||=VEYA  ! DEĞİL
// let number1=12;
// let number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// =   ATAMA
// ==  EŞİT (Türüne bakmadan)
// === EŞİT (Türüne bakarak)

///////////////////////////////////////////// 
// let userName=Number(prompt("Lütfen sayı giriniz"));
// console.log(userName);

///////////////////////////////////////////// 
// NaN: Not A Number
// console.log(3 / 4);
// console.log(3 / "asd");

// // infinity
// console.log(0 / 5);
// console.log(5 / 0);

// // undefined
// let data;
// console.log(data);

// // new 
// // null
// // zero
// /////////////////////////////////////////////
// //Örnek-1
// // Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

//  var number1 = parseFloat(prompt("Birinci sayıyı girin:"));
//  var number2 = parseFloat(prompt("İkinci sayıyı girin:"));
//  console.clear();
//  console.log("Girilen sayıların toplamı:",  number1 + number2);

// //Örnek-2
// /* 
// Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
// Formül: (derece*9/5)+32 
// */

// var temperatureCount = parseFloat(prompt("Hava sıcaklığını derece olarak giriniz:"));
// console.clear();
// console.log("Hava sıcaklığı (fahrenhyat cinsinden:)", temperatureCount * 9 / 5);

// //Örnek-3
// // y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// // Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?


// var x = parseFloat(prompt("x değerini girin:"));
// var k = parseFloat(prompt("k değerini girin:"));

// console.log("Denklemin sonucu:",  3 * x + 4 * k);

// // örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// // 4+3*2(3:3-1*6+9:1+(3:3))

// var result = 4 + 3 * 2 * (3 / (3 - 1) * 6 + 9 / 1 + (3 / 3));

// console.log("Sonuç:", result);



// // Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// // -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// var number = -5.9;
// // 1-mutlak değeri alsın 5.9
// var abs = Math.abs(number);
// console.log("Mutlak Değer:", abs);

// // 2-yuvarlama yapsın  6.0
// var yuvarlama = Math.round(number);
// console.log("Yuvarlama:", yuvarlama);

// // 3-karesini alsın 36.00
// var pow = Math.pow(number, 2);
// console.log("Karesi:", pow);

// // 4-karekök alsın 6.0
// var sqrt = Math.sqrt(Math.abs(number));
// console.log("Karekök:", sqrt);

// // 5-yuvarlama yapsın 6.0
// var yuvarlama = Math.round(number);
// console.log("Yuvarlama 2:", yuvarlama);

// // 6-)çıkan sonucu 5 bölsün 6/5=1
// var result = yuvarlama / 5;
// console.log("Sonuç:", result);

// // 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// var minNumber = Math.min(1, 5);
// // 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// if (minNumber % 2 == 1) {
//     minNumber += 3;
// } else {
//     minNumber += 5;
// }
// console.log("En Küçük:", minNumber);

// // Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// // NOT: cast kullalım ?


// var number = parseFloat(prompt("Bir sayı girin:"));

// if (number > 0) {
//     console.log("Girilen sayı pozitif.");
// } else if (number < 0) {
//     console.log("Girilen sayı negatif.");
// } else {
//     console.log("Girilen sayı sıfır.");
// }


// // Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// // eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım


// var password = prompt("Password girin:");
// var repassword = prompt("Password'u tekrar girin:");

// if (password === repassword) {
//     console.log("Şifreler aynı.");
// } else {
//     console.log("Şifreler birbirine uymadı.");
// }


/////////////////////////////////////////////
// string

// let vocabulary="Javascript ÖĞreniyorum Javascript ";
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());

// console.log(vocabulary.startsWith("J"));
// console.log(vocabulary.endsWith(" "));

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("Javascript"));
// console.log(vocabulary.lastIndexOf("Javascript"));

// console.log(vocabulary.substring(1));
// console.log(vocabulary.substring(0,3)); // 0<=X<=3-1

// vocabulary=vocabulary.concat("sona ekle");
// console.log(vocabulary); 

// vocabulary=vocabulary.replace(vocabulary,"yeni değiştir");
// console.log(vocabulary); // 0<=X<=3-1

/////////////////////////////////////////////
// Function

// // 1- parametresizReturnsuz
// function parametresizReturnsuz() {
//     console.log("parametresiz Returnsuz");
// }
// parametresizReturnsuz();

// // 2- parametresizReturnsuz
// function parametreliReturnsuz(number) {
//     console.log("parametreli Returnsuz: " + Math.pow(number, 2));
// }
// parametreliReturnsuz(6);

// // 3- parametresizReturnlu
// function parametresizReturnlu() {
//     return "parametresiz Returnlu";
// }
// const data3 = parametresizReturnlu();
// console.log(data3);

// // 4- parametreliReturnlu
// function parametreliReturnlu(user) {
//     return "parametreli Returnlu: "+ user
// }
// const data4 = parametreliReturnlu("Java Öğreniyorum");
// console.log(data4);

/////////////////////////////////////////////

// // Normal Function 
// function normal() {
//     console.log("normal");
// }
// normal();

// // Anonymous Function 
// const anonymous = function () {
//     console.log("anonymous");
// }
// anonymous();

// // Arrow Function
// const arrow = () => {
//     console.log("arrow");
// }
// arrow();

/////////////////////////////////////////////

// conditional
// let conditional = () => {
//     let number = 10;
//     if (number >= 5) {
//         console.log("5'ten büyük");
//     } else {
//         console.log("5'ten Küçük");
//     }

//     let ternary = (number >= 5) ? "5'ten büyük" : "5'ten Küçük";
//     console.log(ternary);
// }
// //conditional();

// /////////////////////////////////////////////
// // conditional
// let conditional2 = () => {
//     let number = 3;
//     if (number == "1") {
//         console.log("sayı 1");
//     } else if (number === 2) {
//         console.log("sayı 2");
//     } else if (number === 3) {
//         console.log("sayı 3");
//     } else if (number === 4) {
//         console.log("sayı 4");
//     } else if (number === 5) {
//         console.log("sayı 5");
//     } else {
//         console.log("1<=X<=5 dışındadır");
//     }

//     switch (number) {
//         case 1:
//             console.log("sayı 1");
//             break;
//         case 2:
//             console.log("sayı 2");
//             break;
//         case 3:
//             console.log("sayı 3");
//             break;
//         case 4:
//             console.log("sayı 4");
//             break;
//         case 5:
//             console.log("sayı 5");
//             break;

//         default:
//             console.log("1<=X<=5 dışındadır");
//             break;
//     }
// }
// conditional2();


// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// let data = Number(prompt("Bir sayı girin:"));
// console.log(data > 0 ? "Pozitif" : data < 0 ? "Negatif" : "Sayı 0 dır");

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız). 

let oddEvenCalculator = function () {
    let number = prompt('Bir Sayı Giriniz');
    if (number % 2 == 0) {//çift sayı
        console.log(number + " çift sayıdır");
    } else {
        console.log(number + " tek sayıdır");
    }
}
// oddEvenCalculator();


// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

// let weekCount = Number(prompt("Haftanın günleri için 1 ile 7 arasında  bir sayı girin:"));

// switch (weekCount) {
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");
//         break;
//     case 7:
//         console.log("Pazar");
//         break;

//     default:
//         console.log("Geçersiz sayı girdiniz");
//         break;
// }


/////////////////////////////////////////////

// Loop
let loop = () => {
    console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
    // i++
    // ++i
    // i+=1;
    // i=i+1;

    // FOR
    let sum1 = 0;
    for (let i = 1; i <= 10; i++) {
        sum1 = sum1 + i;
    }
    // for(;;){}
    console.log("Toplam: " + sum1);


    // WHILE
    let sum2 = 0;
    let k = 1;
    while (k <= 10) {
        sum2 += k;
        k++;
    }
    // while(true){}
    console.log("Toplam: " + sum2);

    // DO-WHILE
    let sum3 = 0;
    let m = 1;
    do {
        sum3 += m;
        m++;
    } while (m <= 10);
    // while(true){}
    console.log("Toplam: " + sum3);
}
//loop()
//////////////////////////////////////////////////

// Exception Handling
// try-catch
let tryCatchFunction = () => {
    try {
        alertx("DEneme44");
    } catch (err) {
        //console.err(err);
        console.info(err.name);
        //console.log(err.message);
    } finally {
        console.log("db.close");
    }
    console.log("Son satır");

}
// tryCatchFunction()

/////////////////////////////////////////////////
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// return  : metotun çalışmasını durdurur
// break   : döngünün çalışmasını durdurur
// continue: sadece 1 kereye mahsus durur sonra devam eder.

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?


let examplesCommon = () => {

    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = [];
    let evenSum = 0, evenCounter = 0, evenNumber = [];
    let user = Number(prompt("Lütfen sayı giriniz"));

    for (let i = 1; i <= user; i++) {
        if (user == 44) {
            console.log("Secret Key Çıkış yapılıyor");
            break;
        }

        if (user > 50) {
            console.log("50 sayısının üstünü toplama yapma");
            break;
        }

        if (i == 7) {
            console.log("7 toplamaya dahil etmiyorum.");
            continue;
        }

        // ÇİFT
        if (i % 2 == 0) {
            evenCounter++;
            evenSum += i;
            evenNumber.push(i)
        } else {
            oddCounter++;
            oddSum += i;
            oddNumber.push(i)
        }
        commonSum += i;
    } //end loop
    console.log("Genel toplam: " + commonSum);

    console.log("Çift toplam: " + evenSum);
    console.log("Çift adet sayısı: " + evenCounter);
    console.log("Çift sayılar: " + evenNumber);

    console.log("Tek toplam: " + oddSum);
    console.log("Tek adet sayısı: " + oddCounter);
    console.log("Tek sayılar: " + oddNumber);
}
// examplesCommon()



///////////////////////////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma



let maskingName = () => {
    const nameSurname = prompt("İsim ve soyisim girin (ad soyad): ");
    const names = nameSurname.split(" ");
    let finalName;
    names.forEach(function(name, index) {
        finalName = finalName + " " +  name.charAt(0).toUpperCase() + "*".repeat(name.length - 1);
    });
    console.log(finalName);
}
maskingName();

/////////////////////////////////////////////

// Dizi
let arrTuto = () => {
    let arr = [5, 3, 1, 2, 6, 7];
    arr[5] = 99;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
    //console.log(arr.length);
}
//arrTuto();

let arrFunctionRandom = () => {
    let temp = 0;
    let dizi = [];
    for (let i = 0; i < 5; i++) {
        temp = Math.round(Math.random() * 9 + 1);
        dizi[i] = temp;
    }
    return dizi;
}

let arrNewFunction = () => {
    let arr = arrFunctionRandom();
    console.log(arr);

    // arr.push(44);
    // arr.unshift(23);
    // arr.pop();
    // arr.shift();
    // arr.sort().reverse();

    for (let i = 0; i < arr.length; i++) {
        document.writeln(arr[i] + " ")
    }

    document.writeln("<br/>")
    for (let temp in arr) {
        document.writeln(temp);
    }

    document.writeln("<br/>")
    for (let temp of arr) {
        document.writeln(temp);
    }
}
//arrNewFunction()


/////////////////////////////////////////////
// Object

let objTuto = () => {
    let obje = {
        "name": "Hamit",
        "surname": "Mızrak",
        "fullName": function () {
            console.log(this.name + " " + this.surname);
        },
        "java": {
            "name": "JavaSe",
            "version": 21
        },
        "javaee": [],
    };
    console.log(obje.name.toUpperCase());
    console.log(obje.java.version);
    console.log(obje["java"]["version"]); //nested Object
    console.log(obje.fullName());

    // Object Literal
    obje.isLogin = "true";
    console.log(obje.isLogin);

    // JSON.parse,stringfy
    const objectToString=JSON.stringify(obje);
    const javaData=JSON.parse(objectToString).java.name;
    console.log(javaData);
}
// objTuto();