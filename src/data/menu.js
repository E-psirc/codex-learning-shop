export const categories = ['全部', '热菜', '凉菜', '主食', '甜品', '饮品']

export const menuItems = [
  { id: 1,  cat: '热菜', name: '宫保鸡丁',     desc: '花生与鸡腿肉丁爆炒，麻辣鲜香',             price: 48,  image: '/images/dish-1.jpg' },
  { id: 2,  cat: '热菜', name: '水煮牛肉',     desc: '嫩滑牛肉片浸入滚热辣椒油，花香飘香',      price: 68,  image: '/images/dish-2.jpg' },
  { id: 3,  cat: '热菜', name: '红烧排骨',     desc: '文火慢炖至骨肉分离，酱香浓郁',              price: 58,  image: '/images/dish-3.jpg' },
  { id: 4,  cat: '热菜', name: '鱼香茄子煲',   desc: '茄子软糯入味，鱼香汁酸甜开胃',           price: 36,  image: '/images/dish-4.jpg' },
  { id: 5,  cat: '热菜', name: '干煸花菜',     desc: '五花肉煸香，花菜焦脆微辣',             price: 32,  image: '/images/dish-5.jpg' },

  { id: 6,  cat: '凉菜', name: '口水鸡',       desc: '白切鸡淋红油芝麻，麻辣鲜嫩',               price: 38,  image: '/images/dish-6.jpg' },
  { id: 7,  cat: '凉菜', name: '凉拌木耳',     desc: '黑木耳拌陈醋蒜泥，脆爽解腻',              price: 22,  image: '/images/dish-7.jpg' },
  { id: 8,  cat: '凉菜', name: '皮蛋豆腐',     desc: '冰镇豆腐配松花蛋，浇酱油辣油',           price: 26,  image: '/images/dish-8.jpg' },
  { id: 9,  cat: '凉菜', name: '蒜泥白肉',     desc: '薄切五花肉卷配蒜泥酱汁',               price: 36,  image: '/images/dish-9.jpg' },

  { id: 10, cat: '主食', name: '蛋炒饭',       desc: '粒粒分明的经典蛋炒饭',                   price: 22,  image: '/images/dish-10.jpg' },
  { id: 11, cat: '主食', name: '担担面',       desc: '芝麻酱肉末芽菜，麻辣浓香',              price: 26,  image: '/images/dish-11.jpg' },
  { id: 12, cat: '主食', name: '小笼包',       desc: '薄皮灌汤，一口鲜嫩',                   price: 32,  image: '/images/dish-12.jpg' },
  { id: 13, cat: '主食', name: '葱油饼',       desc: '外酥里嫩，葱香扑鼻',                   price: 16,  image: '/images/dish-13.jpg' },

  { id: 14, cat: '甜品', name: '红糖糍粑',     desc: '外脆内软，浇红糖黄豆粉',               price: 28,  image: '/images/dish-14.jpg' },
  { id: 15, cat: '甜品', name: '冰粉',         desc: '手工冰粉配葡萄干花生碎，清凉爽口',     price: 18,  image: '/images/dish-15.jpg' },
  { id: 16, cat: '甜品', name: '芒果糯米',   desc: '椰香糯米配新鲜芒果',                   price: 32,  image: '/images/dish-16.jpg' },
  { id: 17, cat: '甜品', name: '酒酿圆子',     desc: '桂花酒酿煮小圆子，暖胃甜香',             price: 24,  image: '/images/dish-17.jpg' },

  { id: 18, cat: '饮品', name: '酸梅汤',       desc: '乌梅山楂桂花熬制，冰镇解暑',               price: 12,  image: '/images/dish-18.jpg' },
  { id: 19, cat: '饮品', name: '茉莉花茶',     desc: '手沏茉莉香片，清雅回甘',               price: 18,  image: '/images/dish-19.jpg' },
  { id: 20, cat: '饮品', name: '杨枝甘露',     desc: '芒果椰汁西柚粒，浓郁清爽',             price: 20,  image: '/images/dish-20.jpg' },
]

export const itemColors = ['#f0e6d6','#e8ddd0','#f5e8dc','#ede0d4','#faf0e6','#f2e8dd','#efe4d8','#ece0d3']

export function getItemColor(id) {
  return itemColors[(id - 1) % itemColors.length]
}

export function getUnit(cat) {
  if (cat === '饮品') return '杯'
  if (cat === '主食') return '份'
  return '例'
}
