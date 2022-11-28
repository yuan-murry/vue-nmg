<template>
  <div id="index_main" class="index_main">
    <!--导航-->
    <div class="section section1">
      <div class="index_banner">
        <div class="item">
          <div
            class="items scaleBg"
            style="background-image: url(/images/nmg4.jpg)"
          ></div>
          <div class="inner">
            <div class="block_txt">
              <h4></h4>
              <h2 style="font-size: 30pt">
                开启新征程 书写新篇章—
                <span>自治区十三届人大四次会议剪影</span>
              </h2>
              <h3>
                <div
                  style="
                    text-align: center;
                    margin: 50px 0;
                    font: normal 14px/24px 'MicroSoft YaHei';
                  "
                >
                  <p></p>
                  <p></p>
                </div>
              </h3>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="items scaleBg"
            style="background-image: url(/images/nmg3.jpg)"
          ></div>
          <div class="inner">
            <div class="block_txt">
              <h2 style="font-size: 30pt">
                <span>内蒙古大兴安岭林区：冰窗花“盛开” 美轮美奂</span>
              </h2>
              <h4>
                伴随一轮又一轮降温，内蒙古大兴安岭绰尔林区人家的窗户上又出了冰窗花，这些大自然的杰作，千姿百态、美轮美奂，充满了诗情画意。
              </h4>
              <h4>
                冰窗花，是大自然鬼斧神工造化的风景，晶莹剔透的冰窗花，在阳光的照射下，闪烁着七彩光芒，金黄、翠绿、暗红，在纯白的世界里肆意舞动，严寒中的那朵冷艳冰花，为这洁白无瑕的冬日增添了一抹动人的色彩。
              </h4>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="items scaleBg"
            style="background-image: url(/images/nmg2.jpg)"
          ></div>
          <div class="inner">
            <div class="block_txt">
              <h2 style="font-size: 30pt">
                <span>做群众的贴心人</span>
              </h2>
              <h4>
                11月24日，呼和浩特市玉泉区清泉街社区党委书记、主任武荷香(右)与志愿者一同整理居民出入证。自本轮疫情发生以来，武荷香及时组建由社区党员干部、居民志愿者和下派党员干部组成的抗疫团队，并第一时间联系多家单位和爱心企业，为辖区416户困难群众捐助价值50万元的米面粮油和物资。
              </h4>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="items scaleBg"
            style="background-image: url(/images/nmg1.jpg)"
          ></div>
          <div class="inner">
            <div class="block_txt">
              <h2 style="font-size: 30pt">
                <span>越冬候鸟“做客”额济纳旗</span>
              </h2>
              <h4>
                初冬时节，在额济纳旗沙日淖尔水库，数量众多的赤麻鸭、灰雁、大天鹅等候鸟在栖息觅食。近年来，额济纳旗坚持生态优先、绿色发展理念，全面推进河湖长制、林草长制工作落实，积极开展野生动物栖息地保护管理工作，加强对候鸟迁徙重点停歇水域巡查巡护力度，为候鸟安全迁飞保驾护航，进一步维护生物多样性，促进人与自然和谐共生。
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="left slick_txt">
        <div class="prev slick_arrow"></div>
      </div>
      <div class="right slick_txt">
        <div class="next slick_arrow"></div>
      </div>
      <div class="number" @click.stop.prevent="showMessage">
        <div>
          <span>进入系统</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "@/assets/js/login/vendor.js";
import "@/assets/js/login/jquery.fullPage.min.js";
import "@/assets/js/login/index_slick.js";
export default {
  mounted() {
    /* eslint-disable */
    this.$nextTick(() => {
      $(".index_banner").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        fade: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
            },
          },
        ],
      });
      $(".index_banner").init(function (slick) {
        $(".index_banner .item.slick-current")
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
      $(".index_banner").on("afterChange", function (slick, currentSlide) {
        $(".index_banner .item.slick-current")
          .addClass("active")
          .siblings()
          .removeClass("active");
        var _index = $(".index_banner").slick("slickCurrentSlide");
        $(".section1 .number span")
          .eq(_index)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
      $(".section1 .number span").click(function () {
        var _index = $(this).index();
        $(".index_banner").slick("slickGoTo", _index);
        $(this).addClass("active").siblings().removeClass("active");
      });
      $(".section1 .prev").click(function () {
        $(".index_banner").slick("slickPrev");
      });
      $(".section1 .next").click(function () {
        $(".index_banner").slick("slickNext");
      });

      //导航
      //超过一定高度导航添加类名
      var nav = $("header"); //得到导航对象
      var win = $(window); //得到窗口对象
      var sc = $(document); //得到document文档对象。
      win.scroll(function () {
        if (sc.scrollTop() >= 100) {
          nav.addClass("on");
        } else {
          nav.removeClass("on");
        }
      });

      //移动端展开nav
      $("#navToggle").on("click", function () {
        $(".m_nav").addClass("open");
      });
      //关闭nav
      $(".m_nav .top .closed").on("click", function () {
        $(".m_nav").removeClass("open");
      });

      //二级导航  移动端
      $(".m_nav .ul li").click(function () {
        $(this).children("div.dropdown_menu").slideToggle("slow");
        $(this).siblings("li").children(".dropdown_menu").slideUp("slow");
      });

      //全屏滚动
      $("#index_main").fullpage({
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        continuousHorizontal: true,
        scrollingSpeed: 1000,
        showActiveTooltip: true,
        anchors: ["hero", "one", "two", "three"],
        loopHorizontal: true,
        afterLoad: function (anchorLink, index) {
          if (index == 1) {
            $("header").removeClass("on");
          }
          if (index == 2) {
            $("header").addClass("on");
            $(".section2 h3")
              .addClass("animated fadeInUp")
              .css("animation-delay", ".1s");
          }
          if (index == 3) {
            $("header").addClass("on");
            $(".section3 h3")
              .addClass("animated fadeInUp")
              .css("animation-delay", ".1s");
          }
          if (index == 4) {
            $("header").addClass("on");
            $(".section4 h3")
              .addClass("animated fadeInUp")
              .css("animation-delay", ".1s");
          }
        },
        onLeave: function (index, direction) {},
      });
    });
    /* eslint-enable */
  },
  methods: {
    showMessage() {
      this.$Message.info("开始进入系统");
    },
  },
};
</script>
<style scoped>
@import url("/css/login/index.css");
@import url("/css/login/slick.css");
@import url("/css/login/jquery.fullPage.css");
</style>