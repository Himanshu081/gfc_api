const axios =require('axios');
const cheerio = require('cheerio');


const page_url='https://coronaharyana.in/?search=Gurugram';
const ggn_url='https://coronaharyana.in/?city=6';
const oxygen_data_url ='https://life.coronasafe.network/haryana/gurgaon/oxygen';
const food_data_url ='https://life.coronasafe.network/haryana/gurgaon/food';

// async function getGurgaonOverView(){
// const {data} =await axios.get(ggn_url);
// console.log(data.slice(5000,10000));
// const $=cheerio.load(data);
// const overViewData=[]

// $('.test_bg').each((index,element)=>{
//     const $element =$(element);
//     const totalBeds =$element.find('#dt_vnt').parent().parent().html();
//     // console.log(totalBeds);

// });

// }


// async function getFoodData(){
// const {data} =await axios.get(food_data_url);
// const $=cheerio.load(data);
// const foodData =[]

// $('.max-w-3xl ').each((index,element) =>{
//     const $element =$(element);
//     const name =  $element.find('div h1').text();
//     const location= $element.find('div+div+div svg ').next().first().text();
//     const verified =$element.find('.text-red-600').text();
//     const address =$element.find('.items-start span:nth-child(1)').text();
//     const phoneNo =$element.find('a:nth-child(2)').text().replace(/\D/g,'').match(/.{1,10}/g);
//     const checkedOn =$element.find('span time').text();
//     // const description =$element.find('div .mr-1').css("text-overflow", "none").text();
//     // console.log(description);

//     const data={
//         name,location,verified,address,phoneNo,checkedOn
//     }

//      foodData.push(data);


// });
//  console.log(foodData)



// }


// async function getOxygenData(){
// const {data} =await axios.get(oxygen_data_url);
// const $=cheerio.load(data);


// const oxygenData =[]
// $('.max-w-3xl ').each((index,element) =>{
//     const $element =$(element);
//     const title =  $element.find('div h1').text();
//     const verified =$element.find('.text-red-600').text();
//     const location= $element.find('div+div+div svg ').next().first().text();
//     const phoneNo = $element.find('a:nth-child(2)').text().replace(/\D/g,'');
//     const Quantity =$element.find('span:nth-child(3)').eq(1).text();
//     const price =$element.find('.mx-1').eq(1).next().text();
//     const checkedOn =$element.find('span time').text();
//     const data ={
//         location,phoneNo,Quantity,price,checkedOn
//     }
//     oxygenData.push(data);

// });
// console.log(oxygenData)


// };

async function getHospitalData(){
const {data} =await axios.get(page_url);
const $=cheerio.load(data);
// const mydiv= $('.community-post ');
const hospitalsData =[];

$('.community-post:contains("Availability of Drugs")').each((index,element)=>{
    const $element =$(element);
    const hospitalName = $element.find('div h6').text().trim();
    const bedAvailability =$element.find('.entry-content p').text().trim().replace(/\n/g, '');
    const bedsInfo =$element.find('div:contains("Availability of Drugs") .entry-content p').next().text().trim().replace(/\n/g, '');
    const otherDetails =$element.find('.entry-content div+div').text().trim().replace(/\n/g, '');
    const lastUpdated =$element.find('.post-meta-wrapper ul').text().trim();

    const data ={
        hospitalName,bedAvailability,bedsInfo,otherDetails,lastUpdated
    }
    hospitalsData.push(data);

   
});
return hospitalsData;
// console.log(hospitalsData.length);
// console.log(hospitalsData);


}; 

module.exports =getHospitalData;