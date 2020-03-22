$(function(){

     

     // nav style keep
     $("#nav li a").each(function () {
               $this = $(this);
               if ($this[0].href == String(window.location)) {
                   $this.parent().addClass("active");
               }
     })

     // scroll loading
     window.scrollReveal = new scrollReveal('.blogs ,about, .works');

     // layer control
     $('.works').hover(
          function () { 
                $(this).find('.layer').stop().animate({bottom:'0'},500);
                $(this).find('h4').addClass('hclas')
          },

          function (){

               $(this).find('.layer').stop().animate({bottom:'-35%'},400);
                $(this).find('h4').removeClass('hclas')
          }
      
      )
     
     // mobile
     var switchOn = true;

     $('.switch').click(function () { 

          switchOn ? $(this).find('i').html('&#xe646;'): $(this).find('i').html('&#xe6ae;');
   
          $('.port-nav').toggle();

          switchOn = !switchOn;      
          return false;
                 
      })

     $(document).click(function () { 
          $('.port-nav').hide();
           $('.switch').find('i').html('&#xe6ae;')
      })

      let liks = ['灰灰个人博客',
'脱裤儿任风吹',
'回忆 记录',
'张兴举–一个php程序员&web爱好者的个人网站博客',
'LinkNemo博客',
'梁钟霖个人博客',
'梦影雾花个人博客',
'苏浩个人博客',
'东轩博客',
'种逗南山',
'肖战飞博客',
'梁俊威个人博客',
'刘强个人博客',
'听雨博客',
'李聪个人博客',
'碧羽墨轩',
'姜港生博客',
'天命的博客',
'易学堂',
'SEO优化技术',
'前端路上',
'江西SEO',
'琅枫博客',
'老翁博客',
'Docdog',
'高海兵博客',
'琛苏博客',
'白涛个人博客',
'囧记园地',
'余斗余斗',
'code life博客',
'张先森个人博客',
'罗华博客',
'液位计博客',
'未曾遗忘的青春',
'多骨鱼',
'UniteNC',
'懒得勤快',
'丁合超个人博客',
'微光博客',
'远在上海',
'绿永亭',
'春熙路']



//等高
     $('#aside .case').matchHeight();


})