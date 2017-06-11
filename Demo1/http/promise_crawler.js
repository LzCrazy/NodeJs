/**
 * Created by jalance on 2017/5/30.
 */
/**
 * Created by jalance on 2017/5/29.
 */
var http = require("http");
var cheerio = require('cheerio');
var Promise = require('Promise');
var baseUrl= "http://www.imooc.com/learn/348";
var url = "http://www.imooc.com/learn/348";
var videos=[348,259,197,134,75]


//过滤爬取信息
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title=$('#main .path span').text();
    var number=parseInt($($(".status .status_item .js-learn-num").text(),10));


//     courseData= {
//         title:title,
//         number:number,
//         videos:[{
//             chapterTitle: '',
//             videos: [
//                 title: '',
//         id: ''
// ]
// }]
// }

    var courseData={
        title:title,
        number:number,
        videos:[]
    }


    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle=chapter.find('strong').text();
        var videos=chapter.find('.video').children('a');
        var chapterData={
            chapterTitle:chapterTitle,
            videos:[]
        }
        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle=video.text();
            var id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
        })
        courseData.video.push(chapterData);


    })
    return courseData
}

//打印爬取的数据
function printCourseInfo(courseData) {
    courseData.forEach(function(courseData){
        console.log(courseData.number+'人学过'+courseData.title+'\n');
    })


    courseData.forEach(function (courseData) {
        console.log('###'+courseData.title+'\n');

        courseData.videos.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function (video) {
            console.log('[' + video.id + ']' + video.title + '\n');
            })
        })
    })
}

function getPageAsync(url) {
    return new Promise(function (resolve,reject) {
        console.log('爬' + url);

        http.get(url, function (res) {
            var html = "";
            res.on('data', function (data) {
                html += data;
            })
            res.on('end', function () {
                resolve(html);


                // var courseData=filterChapters(html);
                // printCourseInfo(courseData);
            });
        }).on('error', function (e) {
            reject(e);
            console.log("获取课程出错");

        });
    })
}

var fetchCourseArray = [];

videoIds.forEach(function (id) {
    fetchCourseArray(getPageAsync(baseUrl+id));
})

Promise
    .all([])
    .then(function (pages) {
        var courseData=[];
        pages.forEach(function (html) {
            var courses = filterChapters(html);

            courseData.push(courses);
        })
        courseData.sort(function(a,b){
            return a.number < b.number
        }) 
        

        printCourseInfo(courseData)
    })
