import Mock from 'mockjs'


const Random = Mock.Random;

export default Mock.mock(RegExp('msg' + '.*'), "get",getData);
Mock.mock(RegExp('ms' + '.*'), "get",getData1);
function getData1(options){
    let item=JSON.parse(options.body)
   let fid= item["flid"]
      let articles = [];
      let page = item["page"]
      console.log(page)
      let yonghu=[];
      let fenlei=[];
     let flwz=[];
     let topimg=[];
        for (let i = 1; i < 100; i++) {
    
            let newArticleObject = {
                id:i,//文章id
                flid:Random.integer(1,10),
                title: Random.csentence(5, 20), //  Random.csentence( min, max ) 文章标题
                
                content: Random.csentence(500, 10000),//文章内容
                
                tag: Random.csentence(2, 5),//标签
    
                xiangqi:Random.csentence(10, 30),//详情
    
                time:Random.datetime('yyyy-MM-dd A HH:mm'),//上传时间，
    
                imgurl:Random.dataImage(), 
                
                userimg:Random.dataImage('100x100'),//作者头像
    
                username: Random.word(3, 8),//作者名字
    
                userword:Random.csentence(10, 20),//作者签名
    
                wznumber:Random.integer(0,200),//文章数量
    
                dongtai:Random.integer(0,200),
    
                zongce:Random.integer(0,200),
    
            }
    
            articles.push(newArticleObject)
    
        }
        for (let i=1;i<=articles.length-1;i++){
                //模拟用分类id获取分类上的文章
            // console.log(articles[i]["id"])
            if(articles[i]["flid"]==fid){
                flwz.push(articles[i])
            }
        }
    
        for (let i =1 ;i<=5;i++){
            let newyonghu={
                txurl:Random.dataImage('100x100'),
                time:Random.datetime('yyyy-MM-dd A HH:mm'),//时间，
                content: Random.csentence(10, 20),//评论内容
                username: Random.word(3, 8),//评论内容
            }
            yonghu.push(newyonghu)
        }
        for (let i =1 ;i<=9;i++){
            let fenlei1={
                id:i,
                name: Random.csentence(2, 4),//分类
            }
            fenlei.push(fenlei1)
        }
    
        return {
            flwz:flwz,
            articles: articles,
            yonghu:yonghu,
            fenlei:fenlei
    
        }
}
function getData(options){
    //模拟评论数据
let comment = {
    status: "成功",
    code: 200,
    data: [
      {
        id: 'comment0001', //主键id
        date: '2018-07-05 08:30',  //评论时间
        ownerId: 'talents100020', //文章的id
        fromId: 'errhefe232213',  //评论者id
        fromName: '犀利的评论家',   //评论者昵称
        fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
        likeNum: 3, //点赞人数
        content: '非常靠谱的程序员',  //评论内容
        reply: [  //回复，或子评论
          {
            id: '34523244545',  //主键id
            commentId: 'comment0001',  //父评论id，即父亲的id
            fromId: 'observer223432',  //评论者id
            fromName: '夕阳红',  //评论者昵称
            fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
            toId: 'errhefe232213',  //被评论者id
            toName: '犀利的评论家',  //被评论者昵称
            toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
            content: '赞同，很靠谱，水平很高',  //评论内容
            date: '2018-07-05 08:35'   //评论时间
          },
          {
            id: '34523244545',
            commentId: 'comment0001',
            fromId: 'observer567422',
            fromName: '清晨一缕阳光',
            fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
            toId: 'observer223432',
            toName: '夕阳红',
            toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
            content: '大神一个！',
            date: '2018-07-05 08:50'
          }
        ]
      },
      {
        id: 'comment0002',
        date: '2018-07-05 08:30',
        ownerId: 'talents100020',
        fromId: 'errhefe232213',
        fromName: '毒蛇郭德纲',
        fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
        likeNum: 0,
        content: '从没见过这么优秀的人',
        reply: []
      }
    ]
  };
  

  
    let item=JSON.parse(options.body)
//    let fid= item["flid"]
  let articles = [];
  let yonghu=[];
  let fenlei=[];
 let flwz=[];
 let xq=[];
 let topimg=[]
 //九宫格图片
 let img=[]
 //问答
 let wd=[]
 //活动
 let hd=[{
     id:1,
     title:Random.csentence(5, 50),//活动标题
     ptime:Random.datetime('MM-dd'),//发布时间
    dizhi:Random.county(true),//活动地址
    renshu:Random.integer(1,999),//活动人数
    jianjie:Random.csentence(5, 300),//活动简介
    img: Random.dataImage(),//背景图
    time:Random.datetime('MM-dd'),

 }]

 //登陆的用户
let user=[{
    id:Random.integer(1,999),
    tx: Random.dataImage(),//头像
    token:Random.string( 'lower',15,15 )
}]

 for(let i =1;i<=9;i++){
     let wd1={
         id:i,
         pname:Random.csentence(1, 5),
         title: Random.csentence(5, 50),
         pimg:Random.dataImage(),//提问者头像
         content: Random.csentence(10, 500),
         pnumber:Random.integer(1,9990),//评论数量
         like:Random.integer(1,999),
         cimg:Random.dataImage(),
         cname:Random.csentence(1,5),
         comment:Random.csentence(10,100),
         time:Random.datetime('MM-dd'),
         ulog:Random.csentence(1,10),//用户签名
     }
     wd.push(wd1)
 }
  for(let i =1;i<=9;i++){
      let img1={
        img:Random.dataImage(),
      }
      img.push(img1)
  }
    for (let i = 1; i < 100; i++) {

        let newArticleObject = {
            id:i,//文章id
            flid:Random.integer(1,10),
            title: Random.csentence(5, 20), //  Random.csentence( min, max ) 文章标题
            
            content: Random.csentence(500, 10000),//文章内容
            
            tag: Random.csentence(2, 5),//标签

            xiangqi:Random.csentence(10, 30),//详情

            time:Random.datetime('yyyy-MM-dd A HH:mm'),//上传时间，

            imgurl:Random.dataImage('500x500'), 
            
            userimg:Random.dataImage('100x100'),//作者头像

            username: Random.word(3, 8),//作者名字

            userword:Random.csentence(10, 20),//作者签名

            wznumber:Random.integer(0,200),//文章数量

            dongtai:Random.integer(0,200),

            zongce:Random.integer(0,200),

        }

        articles.push(newArticleObject)

    }
    // for (let i=1;i<=articles.length-1;i++){
    //         //模拟用分类id获取分类上的文章
    //     // console.log(articles[i]["id"])
    //     if(articles[i]["flid"]==fid){
    //         flwz.push(articles[i])
    //     }
    // }

    for (let i =1 ;i<=5;i++){
        let newyonghu={
            txurl:Random.dataImage(),
            time:Random.datetime('yyyy-MM-dd A HH:mm'),//时间，
            content: Random.csentence(10, 20),//评论内容
            username: Random.word(3, 8),//评论内容
            sigin: Random.csentence(10, 20),//签名
            email:Random.email(),
            sex:'1'
        }
        yonghu.push(newyonghu)
    }
    for (let i =1 ;i<=9;i++){
        let fenlei1={
            id:i,
            name: Random.csentence(2, 4),//分类
        }
        fenlei.push(fenlei1)
    }
    for (let i =1 ;i<10;i++){
        let xq1 = {
            id:i,
            userid:Random.integer(1,10),//发布人id
            username: Random.word(3, 8),//作者名字
            userimg:Random.dataImage(),//发布人头像
            userqm:Random.csentence(10, 50),//发布人签名
            content:Random.csentence(10, 200),//兴趣内容
            time:Random.datetime('yyyy-MM-dd A HH:mm'),//发布时间，
            comment:Random.csentence(10, 50),//评论内容
            commentid:Random.integer(1,10),//评论id
            contentimg:Random.dataImage(),//兴趣图片
            commentnumber:Random.integer(0,999),//评论数量
        }
        xq.push(xq1)
    }
    let topimg1={img:Random.dataImage()}
        
    
    topimg.push(topimg1)
    return {
        flwz:flwz,
        articles: articles,
        yonghu:yonghu,
        fenlei:fenlei,
        xq:xq,
        topimg1:topimg1,
        comment:comment,
        img:img,
        wd:wd,
        hd:hd,
        user:user
    }

}