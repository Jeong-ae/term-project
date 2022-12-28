const axios = require('axios');
const cheerio = require('cheerio');

const getHTHL = async(keyword) => {
	try {
		return await axios.get('https://www.inflearn.com/courses?s='+keyword)
	} catch(err){
		console.log(err);
	}
}

const parsing = async (keyword) => {
const html = await getHTHL(keyword);
  const $= cheerio.load(html.data);
  const $courseList= $(".course_card_item");

  let everycourses=[];
  $courseList.each((index, info)=>{
    everycourses.push({
        title: $(info).find("div.course_title:eq(0)").text(),
        instructor: $(info).find("div.instructor").text(),
        price: $(info).find("div.price:eq(0)").text(),
        rate: $(info).find("div.star_solid").css("width"),
    })
  });
  console.log(everycourses);
}

parsing('CSS');

