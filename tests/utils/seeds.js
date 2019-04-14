const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;

const user = [
  {
    _id: ObjectId('5c973c0bf4b1381a4a117f3a'),
    userType: 'normal',
    role: 'host',
    offices: [
      ObjectId('5ca9cd33135c6317cc85a1dd'),
      ObjectId('5c98f80fc54a9e3df2dc4ce7'),
      ObjectId('5c98f410c54a9e3df2dc4cd7'),
      ObjectId('5c98e8fdc54a9e3df2dc4cd1')
    ],
    email: 'pnbao96@gmail.com',
    firstName: 'Bảo',
    lastName: 'Phan',
    avatar:
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/id/49818039_224917045062113_6527732390154993664_n.png',
    joinDate: ISODate('2019-03-24T08:12:59.332Z'),
    __v: 0,
    phone: '+84 349 689 410',
    identity: [
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/id/52782460_2247878905434125_8981426680711086080_n.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/id/52819970_815773655425393_8853715329948319744_n.jpg'
    ],
    bookmarks: [ObjectId('5c9a4858c54a9e3df2dc4dfd')],
    password: '$2a$10$QabZhca8Za8.xYvjGvKxPubsCjEAx/tQx2cEngNhs.CGGCp139Hnm',
    address: 'Đà Nẵng',
    paypal: 'baopp@gmail.com'
  }
];
const offices = [
  {
    _id: ObjectId('5c98f410c54a9e3df2dc4cd7'),
    tags: ['vip', 'phannguyen'],
    reviews: [
      ObjectId('5ca8cebfdb1a0114f0f273be'),
      ObjectId('5ca8cf3d963d300464d91627'),
      ObjectId('5cae0e544519170afcb8bb66'),
      ObjectId('5caed4e8ff71d916c8f6243c'),
      ObjectId('5caed50bff71d916c8f6243e')
    ],
    amenities: ['wifi', 'airConditioning', 'whiteBoard'],
    bookings: [],
    pictures: [
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/1.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190304100518-6e9b_wm.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190304100650-a96e_wm.jpg'
    ],
    availableSchedule: [],
    size: 25,
    title: 'Phúc Quý Office',
    searchTitle: 'phuc quy office',
    category: 'meeting',
    address: '15 Nguyễn Văn Thương - Quận Bình Thạnh, Hồ Chí Minh',
    description:
      'Phúc Quý Office có quà tặng dành cho quý doanh nghiệp những ưu đãi riêng biệt mà chỉ tại đây mới có:\n\n- Miễn phí đăng ký thành lập doanh nghiệp.\n- Miễn phí báo cáo thuế 12 tháng.\n- Miễn phí ngoài giờ, miễn phí phòng họp.\n- Phục vụ 24/24, mọi lúc mọi nơi.\n- Đáp ứng nhu cầu nhanh nhất, ưu tiên giải quyết sự cố (nếu có) một cách sớm nhất.\n\n- Ưu điểm của tòa nhà:\n+ Có thang máy tốc độ cao.\n+ Phòng đẹp, mới, view đẹp.\n+ Có ban công thoáng mát.\n+ Tòa nhà mới xây.\n+ Phòng họp sử dụng miễn phí.\n+ Sảnh lễ tân sử dụng miễn phí.\n\n- Dịch vụ và tiện ích miễn phí có sẵn tại tòa nhà:\n+ Máy lạnh mỗi phòng.\n+ Hệ thống đèn chiếu sáng công nghệ cao.\n+ Quản lý và vận hành tòa nhà.\n+ Có camera quan sát 24/24.\n+ Vệ sinh.\n+ Hệ thống mạng điện thoại và internet.\n+ Gần ngân hàng, khu văn phòng công ty.\n+ Cơm trưa, cafe văn phòng kế bên.',
    shortDescription:
      'Văn phòng đường Nguyễn Văn Thương (D1) phòng mới, có thang máy.',
    phone: '0936912231',
    website: '',
    email: '',
    numSeats: 15,
    location: ObjectId('5c98f410c54a9e3df2dc4cd4'),
    pricing: ObjectId('5c98f410c54a9e3df2dc4cd5'),
    officeRules: ObjectId('5c98f410c54a9e3df2dc4cd6'),
    host: ObjectId('5c973c0bf4b1381a4a117f3a'),
    __v: 0,
    status: 'active'
  },
  {
    _id: ObjectId('5c98f80fc54a9e3df2dc4ce7'),
    tags: ['vip', 'phannguyen'],
    reviews: [
      ObjectId('5ca1b33ac5ac2e0a34d72b29'),
      ObjectId('5ca1b38cc5ac2e0a34d72b2a'),
      ObjectId('5ca1b5dedb037a13b8cf85df'),
      ObjectId('5ca1b637e413881794caf9b2'),
      ObjectId('5ca1e024f5d8a21658f4a75c'),
      ObjectId('5ca1e791852bf406a8b175c6'),
      ObjectId('5ca1e7b6852bf406a8b175c7'),
      ObjectId('5ca1f308852bf406a8b175c8'),
      ObjectId('5ca1fd6e852bf406a8b175c9'),
      ObjectId('5ca1fdaf852bf406a8b175ca'),
      ObjectId('5ca200f1852bf406a8b175cb'),
      ObjectId('5ca20244852bf406a8b175cc'),
      ObjectId('5ca20274852bf406a8b175cd'),
      ObjectId('5ca20329852bf406a8b175ce'),
      ObjectId('5ca203a98f05f612a8ae607d'),
      ObjectId('5ca204da8f05f612a8ae607e'),
      ObjectId('5ca209108f05f612a8ae607f'),
      ObjectId('5ca20a7a7ab9c41b2421b32c'),
      ObjectId('5ca20be046e6db10942a4118'),
      ObjectId('5ca20bfe46e6db10942a4119'),
      ObjectId('5ca20c6f46e6db10942a411a'),
      ObjectId('5ca20d1c46e6db10942a411b'),
      ObjectId('5ca20df365ccf51574eb0886')
    ],
    amenities: ['wifi', 'tv', 'airConditioning'],
    bookings: [],
    pictures: [
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20170117095054-ba71_wm.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20170117095054-13b3_wm.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20170117095054-bc31_wm.jpg'
    ],
    availableSchedule: [],
    size: 30,
    title: 'Office-tel Lexington',
    searchTitle: 'office-tel lexington',
    category: 'meeting',
    address: '67 Mai Chí Thọ, phường An Phú, Quận 2, Hồ Chí Minh',
    description:
      '- Thiết kế: Hiện đại, sang trọng, không gian yên tĩnh, trong lành.\n- Tiện ích:\n+ Hồ bơi tràn siêu đẹp, siêu sang (miễn phí sử dụng).\n+ Phòng tập gym Nutifor hiện đại (miễn phí sử dụng).\n+ Ngân hàng Shinhan của Hàn Quốc.\n+ Cafe, siêu thị, nhà hàng, trường học, nhà trẻ.....\n- Giao thông:\n+ Rất gần siêu thị Metro, TTTM Parkson, BigC, Lotte Cinema, chợ, trường học quốc tế,...\n+ Chỉ 10 phút tới quận 1, 20 phút tới quận 7 và sân bay.',
    shortDescription: 'Tiện nghi trong tầm tay bạn.',
    phone: '0937309292',
    website: '',
    email: '',
    numSeats: 10,
    location: ObjectId('5c98f80fc54a9e3df2dc4ce4'),
    pricing: ObjectId('5c98f80fc54a9e3df2dc4ce5'),
    officeRules: ObjectId('5c98f80fc54a9e3df2dc4ce6'),
    host: ObjectId('5c973c0bf4b1381a4a117f3a'),
    __v: 0,
    status: 'deactive'
  },
  {
    _id: ObjectId('5ca9cd33135c6317cc85a1dd'),
    tags: ['vip', 'phannguyen'],
    status: 'active',
    reviews: [],
    amenities: ['wifi', 'tv', 'airConditioning', 'projector', 'whiteBoard'],
    bookings: [],
    pictures: [
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/1_Chancery_Lane_Community_Bar_.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/AKrqoFYg.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/hg7nOeVw.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/2_Wonderbread_DC-54.jpg'
    ],
    availableSchedule: [],
    size: 140,
    title: 'WeWork E. Town Central',
    category: 'talkshow',
    address: '11 Doan Van Bo, Ward 12, District 4, Hồ Chí Minh',
    description:
      'Located in District 4, WeWork’s coworking space in E. Town Central puts your team in the center of the action. We’ve transformed four floors in this modern high-rise into beautiful communal spaces, sleek private offices, and unique meeting rooms. A selection of couches and share tables offer style and comfort for client meetings, while individual phone booths give you space to take private calls. Commuting is simple with parking readily available nearby; you’ll also have easy access to Districts 1, 3, 5, and Nha Be from this location. Need a break between tasks? Take a walk to the riverfront or take in the scenery along the historic Mong Bridge. After work, the neighborhood is bursting with restaurants and street vendors, giving you countless options for client dinners or team outings. Schedule a visit today to secure your spot at this convenient coworking space in District 4.',
    shortDescription: 'Finding Office Space in E. Town Central',
    phone: '0349689410',
    website: '',
    email: '',
    numSeats: 20,
    location: ObjectId('5ca9cd33135c6317cc85a1da'),
    pricing: ObjectId('5ca9cd33135c6317cc85a1db'),
    officeRules: ObjectId('5ca9cd33135c6317cc85a1dc'),
    host: ObjectId('5c973c0bf4b1381a4a117f3a'),
    searchTitle: 'wework e. town central',
    __v: 0
  },
  [
    ObjectId('5c9a4858c54a9e3df2dc4dfd'),
    [],
    [],
    ['wifi', 'tv', 'airConditioning', 'whiteBoard'],
    [],
    [
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/51328970_2290831331186479_3246256309472854016_n.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52815366_2290831371186475_7577593650528387072_n.jpg',
      'https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52156668_2290831347853144_5913243335987822592_n.jpg'
    ],
    [],
    500,
    'Y-Nest Coworking Space',
    'k-nest coworking space',
    'meeting',
    'Tầng 4 TTTM V+, 505 Minh Khai, Hai Bà Trưng, Hà Nội',
    ' 300m2 không gian tiện ích chung\n Không gian siêu đẹp & yên tĩnh \n Nhiều góc làm việc cố định & linh hoạt\n Wifi mạnh, hỗ trợ máy in, máy chiếu\n Có bốt điện thoại riêng để "nấu cháo điện thoại" nếu cần\n\nChỉ cách Times City vài bước chân, không gian làm việc tuyệt vời từ Y-Nest sẽ mang lại cho các nàng freelancer sự yên tĩnh tập trung để hoàn thành các deadline đang đuổi sát nút.\n\nTrong tháng 3, Y-Nest co-working có chương trình giảm giá 50% (chỉ từ 50.000/người) dành riêng cho các cô nàng theo đuổi phong cách tự do. Tận hưởng ngay không gian làm việc tuyệt vời này nhé!',
    ' Y-Nest_Coworking_Space - giải pháp hoàn hảo cho Startup',
    ' 024 6664 1950',
    ' y-nest.vn',
    ' info@y-nest.vn',
    15,
    ObjectId('5c9a4858c54a9e3df2dc4dfa'),
    ObjectId('5c9a4858c54a9e3df2dc4dfb'),
    ObjectId('5c9a4858c54a9e3df2dc4dfc'),
    ObjectId('5c9a30c8c54a9e3df2dc4da3'),
    0,
    'pending'
  ]
];
module.exports = { user, offices };
