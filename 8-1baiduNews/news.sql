/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : baidunews

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2016-09-21 01:53:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `imgSrc` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `updateAt` int(11) DEFAULT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('5', '精选', '中国人口大迁移：一场你死我活的城市战争', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C30%2C560%2C336%3Bw%3D638/sign=5391bea566061d9569096d7846c426e2/a50f4bfbfbedab64f9df8a5dff36afc378311efa.jpg', '金融猫眼', '1474005427', '1474391774', '中国的经济已经进入改革的深水区，前三十年支撑起中国经济的很大一部分低端制造业在可预见的将来应该会被初级的服务业所取代，而能够聚集起服务业的，为其提供足够的劳动力和市场空间的，只有大型或者超大型的城市群。看清了人的流动趋势，就能找准财富的聚集趋势。\n');
INSERT INTO `news` VALUES ('9', '精选', '音乐产业持续增长，2015年为英国经济贡献41亿英镑！00000', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=70fed4b19f2bd40742c7d0fe43889e9c/b64543a98226cffc67cdf52bb1014a90f703ea40.jpg', '音乐财经', '1474298774', '1474391708', '“不过音乐的价值远超过经济。很多时候人们第一次接触英国文化就是通过我们的音乐，它为我们带来了欢乐。我希望所有我们的孩子，不管是什么背景，都可以生活在有音乐的世界中。”\n');
INSERT INTO `news` VALUES ('10', '社会', '中国人口大迁移：一场你死我活的城市战争', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C30%2C560%2C336%3Bw%3D638/sign=5391bea566061d9569096d7846c426e2/a50f4bfbfbedab64f9df8a5dff36afc378311efa.jpg', '金融猫眼', '1474298915', '1474391774', '中国的经济已经进入改革的深水区，前三十年支撑起中国经济的很大一部分低端制造业在可预见的将来应该会被初级的服务业所取代，而能够聚集起服务业的，为其提供足够的劳动力和市场空间的，只有大型或者超大型的城市群。看清了人的流动趋势，就能找准财富的聚集趋势。\n');
INSERT INTO `news` VALUES ('12', '娱乐', '郑爽拍戏被网友偶遇 与粉丝拥抱笑容灿烂', 'http://img7.aili.com/201609/20/1474337431_42094100.jpg', '腾讯娱乐', '1474378572', null, '近日，有网友晒出一组偶遇郑爽和白敬亭拍戏的照片，郑爽不仅大方签名，还亲密与粉丝拥抱...\n');
INSERT INTO `news` VALUES ('13', '娱乐', '小岳岳凌晨吐槽房子隔音差：请你们小点声音', 'http://img6.aili.com/201609/20/1474337841_73934700.jpg', '网易', '1474378698', null, '今天凌晨，岳云鹏因房子隔音太差被邻居吵到睡不着，并苦言调侃自己清早还要开工，不忘配上自己经典表情包“岳式白眼”，十分诙谐幽默');
INSERT INTO `news` VALUES ('14', '娱乐', '赵丽颖刘翔乔任梁，下一个网络暴力受害者是谁？', 'http://img7.aili.com/201609/20/1474354484_62557700.jpg', '爱丽时尚网', '1474378791', null, '网络暴力从未像现在一样严重到可怕。从王宝强离婚邓超未发声被骂，到乔任梁身亡陈乔恩、赵丽颖被炮轰，再到刘翔力挺吴莎被讽刺，太多无辜的人因为网友的随意指责谩骂受到伤害。对了，乔任梁自杀也跟网络暴力脱不了干系。');
INSERT INTO `news` VALUES ('15', '娱乐', '刘国梁开微博后，第一件事是晒和张继科激吻照', 'http://img6.aili.com/201609/20/1474335583_05118900.jpg', '凤凰娱乐  ', '1474378859', null, '9月19日晚，乒乓球教练刘国梁终于开通微博，发表第一篇微博就是和张继科的合影，他自侃道：“来啦来啦来啦……我就是那个不懂球的胖子!”看来他自己也欣然接受了“胖纸”的称号。');
INSERT INTO `news` VALUES ('16', '娱乐', '杨幂刘恺威互动秀恩爱 这次还带上小糯米', 'http://img6.aili.com/201609/12/1473644559_98257200.jpg', '凤凰娱乐', '1474378958', null, '刘恺威在微博中写道：“今年有个小美女准备了手工大礼，我们都不跟她抢第一，祝糯米妈咪生日快乐!@杨幂。”随后杨幂也转发微博表示感谢：“最喜欢的礼物，这手艺跟我当年不相上下，谢谢糯米米和糯米爸爸!”一家人十分甜蜜。\n \n微博发出后，网友纷纷留言祝福，“看到你们秀恩爱我就放心了，求合照”，“大幂幂生日快乐，永远幸福”，“祝幂幂生日快乐，越来越幸福”');
INSERT INTO `news` VALUES ('17', '百家', '河南一公司规定买苹果7直接辞退：为唤起员工爱国心', 'http://upload.cankaoxiaoxi.com/2016/0920/1474357416579.jpg', '澎湃新闻网', '1474391562', null, '网友的爆料来自于公司的一纸通知。通知中写道：凡我公司员工严禁购买和使用iPhone7和iPhone7Plus，一经发现违规者，直接到公司办理辞职手续。\n此外，公司在通知中还提到，“如果我们经济较宽裕，如果我们条件允许，请让我们更关心父母的健康，更关爱孩子的成长，更关注生命的可贵，更关怀国家的兴亡。”');
INSERT INTO `news` VALUES ('19', '军事', '中国超级工程令西方汗颜 面积远超英法德', 'http://img.xinjunshi.com/uploads/allimg/160920/0T632G57-0.jpg', '环球新军事', '1474393842', null, '大三线建设是新中国在1964年至1978年间，展开的、延续时间最长、规模最为宏大的一次工业体系建设。简单地说，就是在以四川为中心的广大西南地区建立相对于全国独立的、“小而全”的国民经济体系、工业生产体系、资源能源体系。\n　　军工制造体系、交通通讯体系、科技研发体系和战略储备体系。为什么要这样做?一句话，就是建立中华民族的“战略大后方”。由于地理和历史的原因。当时中国70%的工业分布于东北和沿海地区，从军事经济学的角度看，这种工业布局显得非常脆弱。');
INSERT INTO `news` VALUES ('20', '军事', '法国人终于承认：中国陆军实力排名世界前列！', 'http://img.xinjunshi.com/uploads/allimg/160919/091421AU-0.jpg', '环球新军事', '1474393891', null, '99式主战坦克是中国自行研制的新一代主战坦克，该坦克是中国的第三代主战坦克，该坦克在2015年抗日战争胜利70周年阅兵上进行了展示，让世界看到了99式主战坦克最新改进型的外形和性能。99式主战坦克采用德国MTU的动力宝，功率达到1500马力，达到了主流先进坦克的标准，而主炮则采用一门125毫米长身管高倍径榴弹炮，性能非常强大。而且该坦克还装备了先进的操作系统和自动武器塔，具备强大能力的同时也有先进的技术。');
INSERT INTO `news` VALUES ('21', '百家', '杭州白领放弃购房：爸妈存几十万 不够一周蒸发', 'http://b.hiphotos.baidu.com/news/pic/item/342ac65c10385343521903be9b13b07ecb80885f.jpg', '菜鸟理财', '1474393989', null, '外地人是杭州当下购房主力。透明售房网的数据显示，今年以来，杭州楼市外地购房群体占比不断攀升，G20之后一周，外地人的购买比例达39.3%，其中25.4%的外来购房者购买了两套及两套以上的商品房。值得一提的是，在杭州之前，苏州、厦门分别在8月12日和9月5日出台了相关限购政策。');
