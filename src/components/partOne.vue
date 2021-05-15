<template>
  <div class="page">
    <div class="header">
      <div class="nav-list">
        <div class="nav-item">首页</div>
        <div class="nav-item">论文咨询</div>
        <div class="nav-item">期刊投稿</div>
        <div class="nav-item">在线咨询</div>
      </div>
    </div>
    <div class="banner">
      <div>硕博资深团队</div>
      <div class="red">一对一论文服务</div>
      <div class="label">十年经验 ·覆盖全学科 ·论文/期刊/职称全方位服务</div>
      <div class="label-list">
        <div class="label-item">
          <span class="icon icon1"></span>
          全网低价
        </div>
        <div class="label-item">
          <span class="icon icon2"></span>
          合格付款
        </div>
        <div class="label-item">
          <span class="icon icon3"></span>
          全网可查
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">你是否为以下情况担忧？</div>
      <div class="question-list">
        <div class="item">
          <p>1.没思路无从入手？</p>
          硕博团队，10年写作经验,一对一指导
        </div>
        <div class="item">
          <p>2.学科偏门？</p>
          覆盖全学科，助你成功
        </div>
        <div class="item">
          <p>3.重复高被打回？</p>
          论文去重，高效快速，正规可查
        </div>
        <div class="item">
          <p>4.考不过毕业难？</p>
          精选优秀导师，全程服务
        </div>
        <div class="item">
          <p>5.不知道如何修改？</p>
          专业老师为您一对一服务
        </div>
      </div>
      <div class="company-wrap">
        <div class="intro">
          <div class="company-intro">公司简介</div>
          <div>
            国内高端论文咨询机构，专业提供“论文”、“期刊”咨询，10年的运营沉淀让我们积累了丰富的团队经验建立了一套完善的服务体系，秉承“诚信做人，用心做事”的服务宗旨，为上万名客户提供了完美的论文咨询。
          </div>
        </div>
        <div class="intro-list">
          <div class="intro-item">
            <div class="top">10年团队运营经验</div>
            <div class="bottom">10年的运营沉淀，我们积累了丰富的服务经验及成熟的服务体系，更好的为广大用户提供服务！！！</div>
          </div>
          <div class="intro-item">
            <div class="top">100余人师资团队</div>
            <div class="bottom">现我们拥有100余人的论文团队，所合作的均为高校老师，论文咨询有保证！</div>
          </div>
          <div class="intro-item">
            <div class="top">20多个学科覆盖</div>
            <div class="bottom">
              致力于在医学、管理、教育、经济、新闻、法律、中文、历史、政治、计算机、电子信息、化工、农业等20多个领域为您提供专业、优质、高效的论文咨询，助您成功！
            </div>
          </div>
          <div class="intro-item">
            <div class="top">1000余家杂志社</div>
            <div class="bottom">
              目前我们已拥有丰富的论文、期刊合作资源，以满足各个行业领域客户的需求，其中包括北大核心刊物、科技统计源核心刊物、SCI刊物，EI刊物，CSSCI刊物、以及国家级省级重点普通刊物！
            </div>
          </div>
        </div>
      </div>
      <div class="company-wrap service-wrap">
        <div class="intro">
          <div class="company-intro">服务流程</div>
          <div>
            服务流程分步骤一步步有序的进行，每一步都会和客户进行确认，有利于确认需求及及时修改，服务过程中有问题或者建议也会及时与客户沟通。交给我们，您放心！
          </div>
        </div>
        <div class="intro-list">
          <div class="intro-item">
            <div class="top">免费咨询</div>
            <div class="bottom">
              提供论文、期刊方面的免费咨询服务，可根据客户具体要求提供免费估价。客户可根据时间等方面的需求来安排论文、期刊等服务。
            </div>
          </div>
          <div class="intro-item">
            <div class="top">支付定金</div>
            <div class="bottom">再次与客户确定具体要求，支付定金，填具体要求表单，进行服务安排。</div>
          </div>
          <div class="intro-item">
            <div class="top">客户验收</div>
            <div class="bottom">
              服务完成后，与客户进行验收流程，验收无问题后，再进行下一步。
            </div>
          </div>
          <div class="intro-item">
            <div class="top">支付尾款</div>
            <div class="bottom">
              客户验收无问题后，支付尾款，售后服务长达几个月，由售后小姐姐一对一为您服务。
            </div>
          </div>
          <div class="intro-item">
            <div class="top">销毁文件</div>
            <div class="bottom">
              全程保护客户隐私，服务完成后销毁相关文件。
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="text">
          <span class="left-icon icon"></span>
          <span>联系我们 · 随时为您服务！</span>
          <span class="right-icon icon"></span>
        </div>
        <div>一秒咨询，随时在线，诚信服务，用心做人！！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partOne",
};
</script>

<style lang="less" scoped>
.nav-list {
  display: flex;
  height: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  background: url(../assets/nav-bg.png) no-repeat center/cover;
  .nav-item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.banner {
  height: 345px;
  padding-top: 50px;
  text-align: center;
  font-size: 36px;
  background: url(../assets/banner-bg.jpg) no-repeat center/cover;
  .red {
    color: rgba(193, 25, 50, 1);
    margin-bottom: 40px;
  }
  .label {
    color: rgb(34, 34, 34, 255);
    font-size: 15px;
  }
  .label-list {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    margin-top: 40px;
    color: #fff;
    font-size: 15px;
    .label-item {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .icon {
      width: 43px;
      height: 38px;
      background: no-repeat center/cover;
      margin-bottom: 4px;
      &.icon1 {
        background-image: url(../assets/icon1.png);
      }
      &.icon2 {
        background-image: url(../assets/icon2.png);
      }
      &.icon3 {
        background-image: url(../assets/icon3.png);
      }
    }
  }
}
.content {
  min-height: 500px;
  background: url(../assets/content-bg.jpg) no-repeat center/cover;
  .title {
    padding: 15px 0;
    text-align: center;
    font-size: 20px;
    color: rgb(0, 34, 34, 255);
  }
}
.question-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  color: #fff;
  font-size: 12px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 88px;
    padding: 10px 4px 4px;
    border-radius: 4px;
    margin-bottom: 15px;
    background: url(../assets/question.jpg) no-repeat center/cover;
    p {
      margin-bottom: 10px;
    }
  }
}
.company-wrap {
  padding: 10px;
  .intro {
    margin-bottom: 15px;
    font-size: 13px;
    .company-intro {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
.intro-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  font-size: 12px;
  .intro-item {
    width: 48%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 12px;
    background: url(../assets/intro-bg.jpg) no-repeat center/cover;
    .top {
      font-size: 16px;
      padding-bottom: 2px;
      margin-bottom: 4px;
      font-weight: 500;
      border-bottom: 1px solid;
    }
  }
}
.footer {
  text-align: center;
  padding-bottom: 30px;
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .icon {
    display: inline-block;
    width: 48px;
    height: 19px;
    background: url(../assets/title-left.jpg) no-repeat center/cover;
  }
  .right-icon {
    background-image: url(../assets/title-right.jpg);
  }
}
</style>
