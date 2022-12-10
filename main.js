   
                        //    BIRINCHI MASALA VA KAMENTARYA
 
 
 //  "Biz bu Masalada bitta arry ichidagi sonlarni yig'indisi va juft sonlarni topishimiz kerak. Birinchi arrayni conslga chiqarib oldik. Biz newArry nomli bitta bo'sh arry yaratib oldik va newItem degan bitta o'zgaruvchi yaratdik va uning qiymatini 0-ga tenglab qoydik. Sonlar mavjud bo'lgan arryni for-of bilan aylanib chiqdik undan keyin for arryni har safat aylanganda uning (arry) ichdagi har bir raqamga tenglab qoshib ketdik va yig'indisni console-logda chiqarib oldik-(newItem)ni. Undan keyin forni ichda if bilan shart berdik arry ichidagi har bir raqam modili bo'linsa 2-ga va uning qoldig'i teng-tengn bo'lsa 0-ga bizga shu qiymatga ega bo'lga sonlarni bo'sh bolgan arryga (newArry)-ga qo'shib ber dedik va newArryni console-logda chiqarib oldik"


//  var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
//  console.log(arry); 

//  var newArry = [];
//  var newItem = 0;  

//  for (var item of arry) {
      
//     newItem += item;

//     if(item % 2 == 0){ 
 
//    newArry.push(item);
    
//     }  
//  } 
//  console.log(newArry); 
//  console.log(newItem); 


                                    //  IKKINCHI MASALA VA KAMENTARYA  

//    "Biz bu masalada arry oichidagi sonlarni to'gri yaxlitlab olamiz va minusga teng bo'lgan sonlarni to'gri songa qaytarish kerak. Birnchi arryni console-logda chiqarib oldik. Bitta bo'sh arry yartib oldik. For-of bilan arryni aylanib chiqdik ichdagi har bitta elemamntni itemga tenglab oldik. If bilan sht berib oldik va agar arry ichdagi har bir raqam (item) 0-dan kichik bo'lsa bunga teng sonlarni -1ga ko'paytrib oldik va newArryga qo'shib qo'ydik.Elsda esa Math egan abyektni round degan methodisdan foydalangan holatda to'gri yaxlitlab oldik va bo'sh (newArry)ga qo'shib qo'ydik"
// var arry = [1, 2.65, -8, -2, 0.25, 9.99];
 
// console.log(arry);  
//  var newArry = []; 

// for (var item of arry) {   
       
//    if(item < 0){ 
//     newArry.push(item * -1);
    
//    }else{ 
//     newArry.push(Math.round(item));
//    } 
// } 
// console.log(newArry);  
 
                            // UCHINCHI MASALA VA KAMENTARYA 
 
//    "Biz masalada arry ichdaga stiring typeofi sitinga teng bo'lganlarni alohoida arreyga yig'ib olamiz va ularning soni nechda ekanini anqlab olamiz. Biz bitta bo'sh bolgan newArry yaratib oldik va bita o'zgaruvchi yaratdik va uni qiymatdi 0-lga tenglab olik. for-of bilan arry aylanib olamiz va arry ichdagi har bir elementni itemga tenglanb oldik. for ichda if bilan shart berib oldik shartdab her bir item elemntni typeofni tekshirib oldik va stringa teng bo'lganlarni bo'sh arryga push qildik va yuqordagi o'zgaruvchni sikil har safar ishlaganda qo'shib ketsin dedik. console-logda countni va newArryni chiqarib oldik"
 
//  var arry = [1, 2, 3, 'aple', 4, 5, 6, 'peach', 7, 8, 9, 'banana', 10];

// var newArry = []; 
// var count = 0;

// for (var item of arry) {
      
//     if(typeof item === "string"){ 
//      count++;
//      newArry.push(item); 
//     }  
// }  
// console.log(count);
// console.log(newArry);  
 
                                        //    TORTICHI MASALA VA KAMENTARYA
 
//    "Bu shartimizda arry ichdagi har raqamni 0-ga teng bo'lganlarni arry oxrga va 0-dan ketta bo'lganlarni boshiga joylashtirishimiz kerak bo'ladi. Biz bitta bo'sh newArry yaratib oldik va for-of bilan numberisni aylanib chiqdik uning ichdagi har bir elementni itemga tenglab qoydik. for ichda ifda shat berib oldik numberis ichdagi har bir raqam 0-ga teng bo'lsa newArryga push qil va teng bo'lmaganlarni newArryga unshift qilib oldik console-logda newArryni chaqirib chiqarin oldik."                                     

// var numberis = [1, 0, 5, 9, 0, 7, 0];
// var newArry = [];
// for (var item of numberis) {
//    if(item == 0){ 
//     newArry.push(item)
//    } else{ 
//     newArry.unshift(item);
//    }
// }  
// console.log(newArry);

                        //   BESHICHI MASALA VA KAMENTARYA 


//     "Bu masalada arry ichdagi uzinligi eng kattasi bo'lgan sitiringni topib bitta bo'sh bo'lgan arryga chiqarib olishimiz kerak. Biz bitta bo'sh bo'lgan newArr yaratib oldik va for-of bilan arryni aylanib chiqdik va arry ichdagi har bir sitringni itemga tenglab oldik for ichda if bilan shart berib oldik arry ichdagi har bir item.length katta > bo'lsa newArry.lengthdan newArr teng qil itemni  console-logda newArrni chiqarib olamiz."                    

// var arry = ["apple", "for", "godbaye", "filter", "main"];
// var newArr = "";
// for (var item of arry) {
//  if(item.length > newArr.length){ 
//     newArr = item; 
//  }
// }
// console.log(newArr);  
 

                        //    OLTINCHI MASALA VA KOMENTARIYA
//     "Biz bu masalada arreyni ichdagi minusga teng bo'lgan raqamlarni bir birga qo'shib ularnin uzinligni topish kerak. Bitta bo'sh bo'lgan newArry yaratib oldik va ikkta o'zgaruvchi yartdik va for-of bilan arryni aylanib chiqdik va uning ichdagi har bitta elamentni itemga tenglab oldik. for ichda ifda shat berib oldik arry ichdagi har bir item kichik < bo'lsa 0-dan countga qo'shib tenglab ketdik elsda esa countNew sikil aylanganda bittaga qo'shib bordik. newArryga push qildik ikkta o'zgaruvchni va newArryni console-logda chaqirib oldik"                               
// var arr = [1, -2, -3, -4, 5, 6, 10];
// var newArry = [];
// var count = 0; 
// var countNew = 0;
// for (var item of arr) {
//     if(item < 0 ){  
//     count += item;
//     }else{ 
//         countNew++;
//     }
// }
// newArry.push(count, countNew);
// console.log(newArry); 


                        //    YETTINCHI MASALA VA KOMENTARYA
 
//     "Bu masalada arreyda mavjud bo'lgan sonlarning minusga teng bo'lganlarni. Bitta newArry bo'sh arry yaratib oldik va arrni for-of bilan aylanib chiqdik va har bitta elementni itemga tenglab ketdik. for-of ichda if bilan shart berib olamiz har arrey ichidagi elementlar  0-dan kichi bo'lsa newArryga push qilib ketdik va newArryni console-logda chiqarib oldik."
                        
// var arr = [1, -2, -3, -4, 5, 6, 10]; 
// var newArry = [];
// for (var item of arr){
//     if(item < 0){ 
//      newArry.push(item)
//     }
// } 
// console.log(newArry);








