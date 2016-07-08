/**
 * Created by Administrator on 2016/7/7 0007.
 */
var Pslide= function(){
    //1.定义数据
    var data=[
        {img:1,h1:'Creative',h2:'DUET'},
        {img:2,h1:'Friendly',h2:'Happy'},
        {img:3,h1:'Tranquilent',h2:'Hussler'},
        {img:4,h1:'Loving',h2:'REBEL'},
        {img:5,h1:'Crazy',h2:'FRIEND'},
        {img:6,h1:'Insecure',h2:'Seek'},
        {img:7,h1:'Lucky',h2:'Frank'}
    ];
    //2.通用函数
    var g = function(id){
        if(id.substr(0,1)=='.'){
            return document.getElementsByClassName(id.substr(1));
        }else if(id.substr(0,1)=='#'){
            return document.getElementById(id.substr(1));
        }
    };

    //3.添加幻灯片操作（所有幻灯片&对应按钮）
    var addSliders = function(){
        //3.1获取模板
        var tpl_main = g('#template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
        var tpl_ctrl = g('#template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
        //3.2定义最终输出HTML的变量
        var out_main=[];
        var out_ctrl=[];
        //3.3遍历所有数据，构建最终输出的HTML
        for(i in data){
            var _html_main = tpl_main
                    .replace(/{{index}}/g,data[i].img)
                    .replace(/{{h2}}/g,data[i].h1)
                    .replace(/{{h3}}/g,data[i].h2)
                    .replace(/{{css}}/g,['','main-i_right'][i%2]);
            var _html_ctrl = tpl_ctrl
                    .replace(/{{index}}/g,data[i].img);
            out_main.push(_html_main);
            out_ctrl.push(_html_ctrl);
        }
        //3.4 html回写
        g('#template_main').innerHTML=out_main.join('');
        g('#template_ctrl').innerHTML=out_ctrl.join('');

        //7.增加#main_background
        g('#template_main').innerHTML += tpl_main
                .replace(/{{index}}/g,'{{index}}')
                .replace(/{{h2}}/g,data[i].h1)
                .replace(/{{h3}}/g,data[i].h2);
        g('#main_{{index}}').id='main_background';
    };
    //4.处理幻灯片
    var switchSlider = function () {
        var len=g('.ctrl-i').length+1;

        for(var j=1; j<len; j++ ){
            (function(arg){

                g('#ctrl_'+j).onclick =function(){
                    //4.1获得展示幻灯片 & 控制按钮DOM
                    var main = g('#main_'+arg);
                    var ctrl = g('#ctrl_'+arg);

                    //4.2获得所有幻灯片&控制按钮
                    var clear_main = g('.main-i');
                    var clear_ctrl = g('.ctrl-i');
                    //4.3 清除所有active
                    for(var i=0; i<clear_ctrl.length; i++){
                        clear_main[i].className = clear_main[i].className.replace(' main-i_active','');
                        clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-i_active','');
                    }

                    main.className += ' main-i_active';
                    ctrl.className += ' ctrl-i_active';

                    //7.1切换时，复制上一张幻灯片到main_background
                    setTimeout(function(){
                        g('#main_background').innerHTML = main.innerHTML;
                    },1000);
                }
            })(j);
        }
    };

    return{
        init:function(){
            addSliders();
            switchSlider(2);
        }
    }
}();

window.onload=function(){
    Pslide.init();
};