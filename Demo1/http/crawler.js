/**
 * Created by jalance on 2017/5/29.
 */
var http = require("http");
var cheerio = require('cheerio');
var url = "http://www.imooc.com/learn/348";


//过滤爬取信息
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');


    // [{
    //     chapterTitle: '',
    //     videos:[
    //         title:'',
    //         id:''
    //     ]
    // }]

    var courseData=[];
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
        courseData.push(chapterData);


    })
    return courseData
}

//打印爬取的数据
function printCourseInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function (video) {
            console.log('[' + video.id + ']' + video.title + '\n');
        })
    })
}

http.get(url,function (res) {
    var html = "";

    res.on('data',function (data) {
        html += data;
    })
    res.on('end', function () {
        var courseData=filterChapters(html);
        printCourseInfo(courseData);
    });


}).on('error',function () {
    console.log("获取课程出错");

})