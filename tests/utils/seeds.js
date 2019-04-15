const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;

const users = [
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
  },
  {
    _id: ObjectId("5c988f55d63cee34458b09f5"),
    userType: "normal",
    role: "host",
    offices: [
      ObjectId("5caf667519b80424711ffc0d"),
      ObjectId("5caf656b19b80424711ffbec"),
      ObjectId("5ca6307e90485c1d032a12d0"),
      ObjectId("5c9b44b4c54a9e3df2dc4f14"),
      ObjectId("5c9b43ccc54a9e3df2dc4f07"),
      ObjectId("5c9b4303c54a9e3df2dc4f03"),
      ObjectId("5c9b406fc54a9e3df2dc4ef6"),
      ObjectId("5c9b3d30c54a9e3df2dc4ee7"),
      ObjectId("5c9b39b3c54a9e3df2dc4ed4"),
      ObjectId("5c9b35ccc54a9e3df2dc4ec1"),
      ObjectId("5c9b3434c54a9e3df2dc4eae"),
      ObjectId("5c9a1d74c54a9e3df2dc4d96"),
      ObjectId("5c9a0a6ac54a9e3df2dc4d84")
    ],
    email: "kienndse04193@fpt.edu.vn",
    firstName: "Kien",
    lastName: "Nguyen Duc",
    avatar: "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/id/Y%C5%8Dichi_Hiruma.jpg",
    joinDate: ISODate("2019-03-25T08:20:37.860Z"),
    __v: 0,
    phone: "",
    identity: null,
    bookmarks: [
      ObjectId("5c999873c54a9e3df2dc4d26"),
      ObjectId("5c98f410c54a9e3df2dc4cd7"),
      ObjectId("5c9a1d74c54a9e3df2dc4d96"),
      ObjectId("5c9b35ccc54a9e3df2dc4ec1")
    ],
    password: "$2a$10$6Cki.CDwSBbA58aXnqIiw.DW8e7ZTSSX6UvtATnTYdBflK0VG8jMS"
  },
  {
    _id: ObjectId("5c9890b2d63cee34458b09f6"),
    userType: "google",
    role: "host",
    offices: [
      ObjectId("5c98923cd63cee34458b09fa")
    ],
    email: "hiepnb97@gmail.com",
    firstName: "Hoàng",
    lastName: "Hiệp",
    avatar: "https://lh3.googleusercontent.com/-AbenYeLO2G0/AAAAAAAAAAI/AAAAAAAAGP0/S1wx25x-7t4/s96-c/photo.jpg",
    joinDate: ISODate("2019-03-25T08:26:26.774Z"),
    __v: 0
  },
  {
    _id: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    userType: "normal",
    role: "host",
    offices: [
      ObjectId("5c9b1c3dc54a9e3df2dc4e9f"),
      ObjectId("5c9b1a28c54a9e3df2dc4e8c"),
      ObjectId("5c9b1872c54a9e3df2dc4e7a"),
      ObjectId("5c9b16f6c54a9e3df2dc4e67"),
      ObjectId("5c9b15c7c54a9e3df2dc4e57"),
      ObjectId("5c9a4e60c54a9e3df2dc4e46"),
      ObjectId("5c9a4d3ac54a9e3df2dc4e36"),
      ObjectId("5c9a4b38c54a9e3df2dc4e23"),
      ObjectId("5c9a495ec54a9e3df2dc4e10"),
      ObjectId("5c9a4858c54a9e3df2dc4dfd"),
      ObjectId("5c9a41cbc54a9e3df2dc4dec"),
      ObjectId("5c9a3e96c54a9e3df2dc4ddc"),
      ObjectId("5c9a3cf2c54a9e3df2dc4dc9"),
      ObjectId("5c9a3b13c54a9e3df2dc4dba"),
      ObjectId("5c9a3956c54a9e3df2dc4da7")
    ],
    email: "anhpdhse04550@fpt.edu.vn",
    firstName: "Pham Dinh Hoang Anh",
    lastName: "- K11 FUG HN",
    avatar: "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/id/BANA3154%281%29.png",
    joinDate: ISODate("2019-03-26T14:01:44.081Z"),
    __v: 0,
    phone: "+84 837 479 696",
    bookmarks: [
      ObjectId("5c999873c54a9e3df2dc4d26")
    ],
    password: "$2a$10$kov5dojz0fNc9nZbJkIsmeaxymnmDKffZ50E3GDD4k9VZ7uaPexk2",
    address: "",
    identity: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/id/IMG_9872.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/id/IMG_9930.JPG"
    ]
  },
  {
    _id: ObjectId("5c9cdbd72406fc146b9e665d"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    email: "lamnnse04185@fpt.edu.vn",
    firstName: "Ngô",
    lastName: "Ngọc Lâm",
    avatar: "https://lh4.googleusercontent.com/-TYi3CPzPFWk/AAAAAAAAAAI/AAAAAAAAALE/5iLvEijMpWI/s96-c/photo.jpg",
    joinDate: ISODate("2019-03-28T14:36:07.517Z"),
    __v: 0
  },
  {
    _id: ObjectId("5c9de5742406fc146b9e666b"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    email: "hiephvse04523@fpt.edu.vn",
    firstName: "Hiệp",
    lastName: "Hoàng",
    avatar: "https://lh5.googleusercontent.com/-K1ggpKm2w8Y/AAAAAAAAAAI/AAAAAAAACRA/gIVajo0jRUI/s96-c/photo.jpg",
    joinDate: ISODate("2019-03-29T09:29:24.551Z"),
    __v: 0
  },
  {
    _id: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    userType: "normal",
    offices: [
      ObjectId("5ca088184433ea13b4adf847")
    ],
    role: "host",
    firstName: "Anh za1",
    lastName: "Nguyen Minh",
    password: "$2a$10$o0FN/ZFx7ik9dKh5bKfN1ur74bOBRlItg9SwLBc8/S2BT7IUSa5bC",
    email: "xiaosasori@gmail.com",
    avatar: "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/id/11262400.jpg",
    joinDate: ISODate("2019-03-30T03:06:09.540Z"),
    __v: 0,
    phone: "+84 96 339 28 88",
    identity: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/id/cat.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/id/autumn.jpg"
    ],
    bookmarks: [
      ObjectId("5c98f80fc54a9e3df2dc4ce7"),
      ObjectId("5c999873c54a9e3df2dc4d26"),
      ObjectId("5c99975bc54a9e3df2dc4d1b")
    ],
    address: "tran duy hung"
  },
  {
    _id: ObjectId("5ca42886785cfa1fb0b49e3a"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "admin",
    bookmarks: [],
    firstName: "batah",
    lastName: "admin",
    password: "$2a$10$PzmCImOx84DvEcOTh2qDbeD2J.VgSKoaxDhmSvVmpceskrXom0B.i",
    email: "admin@batah.space",
    avatar: "http://gravatar.com/avatar/admin@batah.space?d=identicon",
    joinDate: ISODate("2019-04-03T03:29:10.983Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca481cedcff777e5e3a3270"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [
      ObjectId("5c98f410c54a9e3df2dc4cd7")
    ],
    firstName: "Doi",
    lastName: "Nguyen",
    password: "$2a$10$nHPFdk0ARG1f5r0gfzpG3OovRGBA4uVC1gxsjuhQz6Qf8qccrwvxW",
    email: "kiennd115@gmail.com",
    avatar: "http://gravatar.com/avatar/kiennd115@gmail.com?d=identicon",
    joinDate: ISODate("2019-04-03T09:50:06.434Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca5c89090485c1d032a12ca"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "trungns1374@gmail.com",
    firstName: "Trung",
    lastName: "Nguyen",
    avatar: "https://lh4.googleusercontent.com/-INxKqDMUXi4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfhut5FUCndcagpCvag53a_QLdwbg/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-04T09:04:16.807Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca5caaa90485c1d032a12cc"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "trungna1374@gmail.com",
    firstName: "Trung",
    lastName: "Nguyễn Sỹ",
    avatar: "https://lh5.googleusercontent.com/-mDYMjB0m68Q/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfJmaV1ZTHqLJ6e4_plgqin8YHCvg/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-04T09:13:14.815Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca858e290485c1d032a12df"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "trungnsse04051@fpt.edu.vn",
    firstName: "Trung",
    lastName: "Nguyen Sy",
    avatar: "https://lh5.googleusercontent.com/-_4-bY6gZ-Rw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reRJLuvCJRcHsdmB9ACAqNeLcjW_w/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-06T07:44:34.704Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab6c6b78f39c57175c512b"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "baopnse04414@fpt.edu.vn",
    firstName: "Bảo",
    lastName: "P. N.",
    avatar: "https://lh4.googleusercontent.com/-4M6TKrd-g0c/AAAAAAAAAAI/AAAAAAAAADc/hBY992MWMnk/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-08T15:44:43.204Z"),
    __v: 0,
    password: "$2a$10$Wkub8XmZEbp7uLQq5N2mfumRKrASYlUa4OXe2DmF1VXNYa.Layt7a"
  },
  {
    _id: ObjectId("5cadb12219b80424711ffbd4"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    firstName: "anh",
    lastName: "hoang",
    password: "$2a$10$vcbMPm8KdLilBTHcEVUjSOblDUQs5oeNWRifHZMHyB.yhHXfi5y/2",
    email: "123@123",
    avatar: "http://gravatar.com/avatar/123@123?d=identicon",
    joinDate: ISODate("2019-04-10T09:02:26.704Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadb27e19b80424711ffbd9"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    firstName: "sadas",
    lastName: "dsad",
    password: "$2a$10$sc6RxqIUgFB1VhQCBJgWGe3Ri9iK/MO9Btp4deBCd3a816a3fiYqu",
    email: "sadsa@123213",
    avatar: "http://gravatar.com/avatar/sadsa@123213?d=identicon",
    joinDate: ISODate("2019-04-10T09:08:14.430Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadb2b319b80424711ffbda"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    firstName: "anh",
    lastName: "anh",
    password: "$2a$10$hHfvqgR/DDHnvzxgBxvHke8HJ/in5K1CL0PCOxO7DcJx5WpyYEAe6",
    email: "123@321",
    avatar: "http://gravatar.com/avatar/123@321?d=identicon",
    joinDate: ISODate("2019-04-10T09:09:07.539Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadb2fc19b80424711ffbdb"),
    userType: "normal",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    firstName: "anh",
    lastName: "anh",
    password: "$2a$10$CdutU14vZlR9AylDnB5suOGaBGwiSaDJHz2jNJQhFgQC6q9UwMfwu",
    email: "anh",
    avatar: "http://gravatar.com/avatar/anh?d=identicon",
    joinDate: ISODate("2019-04-10T09:10:20.461Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadb88819b80424711ffbdc"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "luoicua301@gmail.com",
    firstName: "Hoàng Anh",
    lastName: "Phạm Đình",
    avatar: "https://lh3.googleusercontent.com/-e25NHz25bQE/AAAAAAAAAAI/AAAAAAAAAAg/RjVtRJ5rpVA/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-10T09:34:00.883Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cafb83219b80424711ffc3d"),
    userType: "google",
    offices: [],
    identity: [],
    role: "guest",
    bookmarks: [],
    email: "nguyenduckiengaming151196@gmail.com",
    firstName: "Kiên",
    lastName: "Nguyễn Đức",
    avatar: "https://lh3.googleusercontent.com/-o_S_GdQiJQI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdVSXw8TZgK20hC4J9TSON6CwXEhw/s96-c/photo.jpg",
    joinDate: ISODate("2019-04-11T21:57:06.139Z"),
    __v: 0
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
    _id: ObjectId("5c98f969c54a9e3df2dc4cfa"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20170217153536-5c74_wm.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20170217153618-0293_wm.jpg"
    ],
    availableSchedule: [],
    size: 300,
    title: "Việt Land Office",
    searchTitle: "viet land office",
    category: "meeting",
    address: "37 Cộng Hòa, Tân Bình, Hồ Chí Minh",
    description: "- Vị trí: Các tuyến đường trung tâm: Cộng Hòa, Trường Sơn, Bạch Đằng, Hoàng Văn Thụ...\n+ Dịch vụ của tòa nhà:\n- Có điều hòa.\n- Hệ thống chiếu sáng tiêu chuẩn.\n- Thang máy tốc độ cao.\n- Máy phát điện dự phòng.\n- PCCC tiêu chuẩn.\n- Tầng hầm để xe diện tích lớn.\n- Hệ thống an ninh 24/24 với hệ thống camera giám sát.\n\nĐội ngũ quản lý chuyên nghiệp và phương châm vì sự phát triển bền vững giúp cho quý công ty được phục vụ nhanh nhất, mang lại sự hài lòng ở mức độ cao nhất.",
    shortDescription: "Cao ốc văn phòng quận Tân Bình",
    phone: "0906391898",
    website: " www.officecenter.com.vn",
    email: "doanbestway@gmail.com",
    numSeats: 60,
    location: ObjectId("5c98f969c54a9e3df2dc4cf7"),
    pricing: ObjectId("5c98f969c54a9e3df2dc4cf8"),
    officeRules: ObjectId("5c98f969c54a9e3df2dc4cf9"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "deactive"
  },
  {
    _id: ObjectId("5c98fd22c54a9e3df2dc4d0c"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190319154126-744c_wm.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190319154111-0da8_wm.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190319154118-c309_wm.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190319154135-5805_wm.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/20190319154116-87cf_wm.jpg"
    ],
    availableSchedule: [],
    size: 43,
    title: "VĂN PHÒNG LẦU 2",
    searchTitle: "van phong lau 2",
    category: "meeting",
    address: "22 Nguyễn Văn Nguyễn, P Tân Định, Quận 1, Hồ Chí Minh",
    description: "Đã có nội thất, sàn trải thảm, bàn ghế làm việc.\nMặt tiền đường ô tô để thoải mái.",
    shortDescription: "Văn phòng mới, nội thất đẹp.",
    phone: "0935959179",
    website: "",
    email: "danglt293@gmail.com",
    numSeats: 20,
    location: ObjectId("5c98fd22c54a9e3df2dc4d09"),
    pricing: ObjectId("5c98fd22c54a9e3df2dc4d0a"),
    officeRules: ObjectId("5c98fd22c54a9e3df2dc4d0b"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c99975bc54a9e3df2dc4d1b"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-thao-503-5.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-thao-503-3.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-tai-tphcm-503-1-1.jpg"
    ],
    availableSchedule: [],
    size: 75,
    title: "Phòng Hội Nghị 503",
    searchTitle: "phong hoi nghi 503",
    category: "talkshow",
    address: "39 Trần Quốc Thảo, P6, Quận 3, Hồ Chí Minh",
    description: "Các thiết bị hỗ trợ khi thuê hội trường của chúng tôi\nTại đây chúng tôi sở hữu các phòng đạt tiêu chuẩn, đẹp, hệ thống điều hòa 2 chiều giúp không gian rất thoáng mát.\nHệ thống chiếu sáng, máy chiếu hiện đại, mới, màn chiếu rộng, sáng, nét.\nCó hệ thống thang máy tốc độ rất nhanh phục vụ cho việc lên xuống của quý học viên.\nCó tầng hầm và bãi để xe bên chân tòa nhà rộng, có chỗ để ôtô.\nHệ thống wifi riêng cho từng phòng tốc độ cao phục vụ nhiều máy cùng vào một lúc.\nCó bảng trắng, flipchart, viết lông đầy đủ.\nBàn ghế mới, hệ thống âm thanh hiện đại và đầy đủ: loa, mic và máy tính chỉnh nhạc, máy chiếu.\nCác hành lang và ban công rộng rãi, thoáng mát. Toalet Nam, Nữ sạch sẽ có chị lao công dọn dẹp liên tục cả ngày.\nƯu điểm nổi trội khi thuê hội trường tại đây:\nVị trí địa lý nằm ngay trung tâm của Thành Phố Hồ Chí Minh\n Giá cho thuê phòng rẻ so với vị trí địa lý.\n Cơ sở hạ tầng hiện đại, mới, trang thiết bị học tập phục vụ đầy đủ.\nĐặc biệt có chính sách hỗ trợ khi thuê phòng không nơi nào có\n( xem chi tiết  >>TẠI ĐÂY<< )\nMọi chi tiết thuê phòng xin liên hệ:\nNếu như bạn đang có nhu cầu tìm kiếm đơn vị cho thuê hội trường tổ chức sự kiện. Hoặc muốn thuê hội trường đẹp giá rẻ. Bạn có thể liên hệ với chúng tôi để được tư vấn miễn phí cũng như được báo giá chính xác nhất cho từng dịch vụ cho thuê hội trường. Sự hài lòng của khách hàng cũng chính là niềm hạnh phúc của chúng tôi\n\nHotline: 0888.793.349\nHoặc Mr. Trịnh Văn Hóa: 0901.645.879 (Phòng Kinh Doanh)\nTrân trọng cảm ơn quý khách hàng đã tin tưởng  hợp tác với chúng tôi trong suốt thời gian qua,  chúng tôi luôn giữ đúng lời cam kết mang đến cho khách hàng sự hài lòng ở chất lượng dịch vụ cao với chi phí thấp nhất.",
    shortDescription: "Phòng Hội nghị chữ U",
    phone: "0888793349",
    website: "https://phonghoinghi.com/phong-503/",
    email: "",
    numSeats: 70,
    location: ObjectId("5c99975bc54a9e3df2dc4d18"),
    pricing: ObjectId("5c99975bc54a9e3df2dc4d19"),
    officeRules: ObjectId("5c99975bc54a9e3df2dc4d1a"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c999873c54a9e3df2dc4d26"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/63c7348eec560c085547.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/4528401f98c7789921d6.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-hoi-thao-LT-2-1.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-hoi-thao-LT-3.jpg"
    ],
    availableSchedule: [],
    size: 150,
    title: "Phòng Hội nghị Sảnh Lotus",
    searchTitle: "phong hoi nghi sanh lotus",
    category: "talkshow",
    address: "33 Cao Thắng, P2, Quận 3, Hồ Chí Minh",
    description: "Các thiết bị hỗ trợ khi thuê phòng của chúng tôi\nTại đây chúng tôi sở hữu các phòng đạt tiêu chuẩn, đẹp, hệ thống điều hòa 2 chiều giúp không gian rất thoáng mát.\nHệ thống chiếu sáng, máy chiếu hiện đại, mới, màn chiếu rộng, sáng, nét.\nCó hệ thống thang máy tốc độ rất nhanh phục vụ cho việc lên xuống của quý học viên.\nCó tầng hầm và bãi để xe bên chân tòa nhà rộng, có chỗ để ôtô.\nHệ thống wifi riêng cho từng phòng tốc độ cao phục vụ nhiều máy cùng vào một lúc.\nCó bảng trắng, flipchart, viết lông đầy đủ.\nBàn ghế mới, hệ thống âm thanh hiện đại và đầy đủ: loa, mic và máy tính chỉnh nhạc, máy chiếu.\nCác hành lang và ban công rộng rãi, thoáng mát. Toalet Nam, Nữ sạch sẽ có chị lao công dọn dẹp liên tục cả ngày.\nƯu điểm nổi trội khi thuê hội trường tại đây\nVị trí địa lý nằm ngay trung tâm của Thành Phố Hồ Chí Minh\n Giá cho thuê phòng rẻ so với vị trí địa lý.\n Cơ sở hạ tầng hiện đại, mới, trang thiết bị học tập phục vụ đầy đủ.\nĐặc biệt có chính sách hỗ trợ khi thuê phòng không nơi nào có\n( xem chi tiết  >>TẠI ĐÂY<< )\nMọi chi tiết thuê phòng xin liên hệ\nNếu như bạn đang có nhu cầu tìm kiếm phòng phù hợp với nhu cầu của mình. Hãy liên hệ với chúng tôi để được tư vấn miễn phí cũng như được báo giá chính xác nhất cho từng dịch vụ. Sự hài lòng của khách hàng cũng chính là niềm hạnh phúc của chúng tôi.\n\nHotline: 0888.793.349\nHoặc Mr. Trịnh Văn Hóa: 0901.645.879 (Phòng Kinh Doanh)\nTrân trọng cảm ơn quý khách hàng đã tin tưởng  hợp tác với chúng tôi trong suốt thời gian qua,  chúng tôi luôn giữ đúng lời cam kết mang đến cho khách hàng sự hài lòng ở chất lượng dịch vụ tốt nhất với chi phí hợp lý.",
    shortDescription: "Nơi tạo dấu ấn thành công cho mỗi doanh nghiệp",
    phone: " 0888793349",
    website: "https://phonghoinghi.com/sanh-lotus/",
    email: "",
    numSeats: 160,
    location: ObjectId("5c999873c54a9e3df2dc4d23"),
    pricing: ObjectId("5c999873c54a9e3df2dc4d24"),
    officeRules: ObjectId("5c999873c54a9e3df2dc4d25"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c999a17c54a9e3df2dc4d34"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-hoi-thao-M-2-643x420.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-hoi-thao-M-4-643x420.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-hoi-thao-M-1.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-hoi-truong-phong-hoi-nghi-sf-1-643x420.jpg"
    ],
    availableSchedule: [],
    size: 248,
    title: "Phòng Hội Nghị Khách Sạn Sen Việt Lầu M",
    searchTitle: "phong hoi nghi khach san sen viet lau m",
    category: "teaching",
    address: "33 Cao Thắng, Phường 2, Quận 3, Hồ Chí Minh",
    description: "Khi công ty của bạn ngày càng phát triển, thì việc gặp gỡ đối tác và khách hàng để giao lưu tri ân là điều không thể thiếu. Để những cuộc gặp gỡ này trở nên thành công tốt đẹp thì việc chọn lựa một địa điểm để tổ chức hội nghị, hội thảo là điều hết sức quan trọng.\n\nHiểu được lòng mong muốn của khách hàng, chúng tôi mang đến cho các bạn dịch vụ cho thuê phòng hội nghị, hội thảo tại Khách sạn Sen Việt với không gian đẳng cấp sang trọng. Phù hợp với những cuộc hội nghị lớn gặp gỡ những đối tác quan trọng. Chúng tôi luôn mong mỏi mang đến cho các bạn những dịch vụ tốt nhất với chi phí thấp nhất\n\nĐặc điểm phòng phòng hội nghị\nKhông gian sang trọng mang đến sự đẳng cấp của người thuê\nPhòng hội nghị tiêu chuẩn, đẹp, hệ thống điều hòa giúp phòng rất thoáng mát.\nHệ thống chiếu sáng, máy chiếu hiện đại, màn chiếu rộng, sáng, nét.\nWifi tốc độ cao, bảng trắng, bảng flipchart, viết lông.\nBàn ghế mới, hệ thống âm thanh hiện đại, đầy đủ, loa, Mic và máy tính chỉnh nhạc, chỉnh máy chiếu.\nPhục vụ nước uống nóng lạnh.\nCó thảm vải trải dưới nền.",
    shortDescription: "Không gian sang trọng mang đến sự đẳng cấp",
    phone: "0888793349",
    website: "https://phonghoinghi.com/khach-san-sen-viet-lau-m/",
    email: "",
    numSeats: 160,
    location: ObjectId("5c999a17c54a9e3df2dc4d31"),
    pricing: ObjectId("5c999a17c54a9e3df2dc4d32"),
    officeRules: ObjectId("5c999a17c54a9e3df2dc4d33"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "approve"
  },
  {
    _id: ObjectId("5c999bcbc54a9e3df2dc4d41"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/platinum-5.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/platinum-3.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/platinum-6.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/platinum-4.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/platinum-7.jpg"
    ],
    availableSchedule: [],
    size: 77,
    title: "Phòng học Platinum",
    searchTitle: "phong hoc platinum",
    category: "teaching",
    address: "180 Lý Chính Thắng, P9, Quận 3, Hồ Chí Minh",
    description: "Các thiết bị hỗ trợ khi thuê phòng của chúng tôi\nTại đây chúng tôi sở hữu các phòng đạt tiêu chuẩn, đẹp, hệ thống điều hòa 2 chiều giúp không gian rất thoáng mát.\nHệ thống chiếu sáng, máy chiếu hiện đại, mới, màn chiếu rộng, sáng, nét.\nCó hệ thống thang máy tốc độ rất nhanh phục vụ cho việc lên xuống của quý học viên.\nCó tầng hầm và bãi để xe bên chân tòa nhà rộng, có chỗ để ôtô.\nHệ thống wifi riêng cho từng phòng tốc độ cao phục vụ nhiều máy cùng vào một lúc.\nCó bảng trắng, flipchart, viết lông đầy đủ.\nBàn ghế mới, hệ thống âm thanh hiện đại và đầy đủ: loa, mic và máy tính chỉnh nhạc, máy chiếu.\nCác hành lang và ban công rộng rãi, thoáng mát. Toalet Nam, Nữ sạch sẽ có chị lao công dọn dẹp liên tục cả ngày.\nƯu điểm nổi trội khi thuê hội trường tại đây\nVị trí địa lý nằm ngay trung tâm của Thành Phố Hồ Chí Minh\n Giá cho thuê phòng rẻ so với vị trí địa lý.\n Cơ sở hạ tầng hiện đại, mới, trang thiết bị học tập phục vụ đầy đủ.\nĐặc biệt có chính sách hỗ trợ khi thuê phòng không nơi nào có\n( xem chi tiết  >>TẠI ĐÂY<< )\nMọi chi tiết thuê phòng xin liên hệ\nNếu như bạn đang có nhu cầu tìm kiếm phòng phù hợp với nhu cầu của mình. Hãy liên hệ với chúng tôi để được tư vấn miễn phí cũng như được báo giá chính xác nhất cho từng dịch vụ. Sự hài lòng của khách hàng cũng chính là niềm hạnh phúc của chúng tôi.\n\nHotline: 0888.793.349\nHoặc Mr. Trịnh Văn Hóa: 0901.645.879 (Phòng Kinh Doanh)\nTrân trọng cảm ơn quý khách hàng đã tin tưởng  hợp tác với chúng tôi trong suốt thời gian qua,  chúng tôi luôn giữ đúng lời cam kết mang đến cho khách hàng sự hài lòng ở chất lượng dịch vụ tốt nhất với chi phí hợp lý.",
    shortDescription: "Chất lượng đi đầu",
    phone: "0888793349",
    website: "https://phonghoinghi.com/phong-platinum/",
    email: "",
    numSeats: 94,
    location: ObjectId("5c999bcbc54a9e3df2dc4d3e"),
    pricing: ObjectId("5c999bcbc54a9e3df2dc4d3f"),
    officeRules: ObjectId("5c999bcbc54a9e3df2dc4d40"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [
      ObjectId("5caf868419b80424711ffc3b")
    ],
    amenities: [
      "wifi",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/5-2.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/8.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/6-1.jpg"
    ],
    availableSchedule: [],
    size: 65,
    title: "Phòng họp Lotus Botique",
    searchTitle: "phong hop lotus botique",
    category: "meeting",
    address: "55/29 Lê Thị Hồng Gấm, Quận 1, Hồ Chí Minh",
    description: "Các thiết bị hỗ trợ khi thuê phòng của chúng tôi\nTại đây chúng tôi sở hữu các phòng đạt tiêu chuẩn, đẹp, hệ thống điều hòa 2 chiều giúp không gian rất thoáng mát.\nHệ thống chiếu sáng, máy chiếu hiện đại, mới, màn chiếu rộng, sáng, nét.\nCó hệ thống thang máy tốc độ rất nhanh phục vụ cho việc lên xuống của quý học viên.\nCó tầng hầm và bãi để xe bên chân tòa nhà rộng, có chỗ để ôtô.\nHệ thống wifi riêng cho từng phòng tốc độ cao phục vụ nhiều máy cùng vào một lúc.\nCó bảng trắng, flipchart, viết lông đầy đủ.\nBàn ghế mới, hệ thống âm thanh hiện đại và đầy đủ: loa, mic và máy tính chỉnh nhạc, máy chiếu.\nCác hành lang và ban công rộng rãi, thoáng mát. Toalet Nam, Nữ sạch sẽ có chị lao công dọn dẹp liên tục cả ngày.\nƯu điểm nổi trội khi thuê hội trường tại đây\nVị trí địa lý nằm ngay trung tâm của Thành Phố Hồ Chí Minh\n Giá cho thuê phòng rẻ so với vị trí địa lý.\n Cơ sở hạ tầng hiện đại, mới, trang thiết bị học tập phục vụ đầy đủ.\nĐặc biệt có chính sách hỗ trợ khi thuê phòng không nơi nào có\n( xem chi tiết  >>TẠI ĐÂY<< )\nMọi chi tiết thuê phòng xin liên hệ\nNếu như bạn đang có nhu cầu tìm kiếm phòng phù hợp với nhu cầu của mình. Hãy liên hệ với chúng tôi để được tư vấn miễn phí cũng như được báo giá chính xác nhất cho từng dịch vụ. Sự hài lòng của khách hàng cũng chính là niềm hạnh phúc của chúng tôi.\n\nHotline: 0888.793.349\nHoặc Mr. Trịnh Văn Hóa: 0901.645.879 (Phòng Kinh Doanh)\nTrân trọng cảm ơn quý khách hàng đã tin tưởng  hợp tác với chúng tôi trong suốt thời gian qua,  chúng tôi luôn giữ đúng lời cam kết mang đến cho khách hàng sự hài lòng ở chất lượng dịch vụ tốt nhất với chi phí hợp lý.",
    shortDescription: "Phòng đạt tiêu chuẩn, đẹp, hệ thống điều hòa 2 chiều giúp không gian rất thoáng mát",
    phone: "0888793349",
    website: "https://phonghoinghi.com/lotus-botique/",
    email: "",
    numSeats: 31,
    location: ObjectId("5c999cc7c54a9e3df2dc4d4c"),
    pricing: ObjectId("5c999cc7c54a9e3df2dc4d4d"),
    officeRules: ObjectId("5c999cc7c54a9e3df2dc4d4e"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c999fe9c54a9e3df2dc4d62"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "tv"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-phong-hop-theo-gio.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/phong-hop-cho-thue.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/thue-phong-hop.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/cho-thue-phong-hoi-thao.png"
    ],
    availableSchedule: [],
    size: 30,
    title: "Sannam Office",
    searchTitle: "sannam office",
    category: "meeting",
    address: "78 phố Duy Tân, quận Cầu Giấy, Hà Nội",
    description: "Đến với Hà Nội Office, Quý khách có thể lựa chọn được một phòng họp đáp ứng đủ 4 tiêu chí cơ bản của 1 phòng họp đạt chuẩn, bao gồm: đối tượng sử dụng đa dạng, bố cục hợp lí, màu sắc, ánh sáng hài hòa, cũng như nội thất tinh tế bên trong phòng họp.\nCho thuê phòng hội thảo\nThiết kế phù hợp với nhiều đối tượng sử dụng\nViệc đầu tư vào một phòng họp hiện đại với đầy đủ các máy móc, trang thiết bị sẽ gây hao tốn rất nhiều nguồn ngân sách của công ty, đặc biệt với các doanh nghiệp vừa và nhỏ. Hà Nội Office, với sứ mệnh tối ưu chi phí cho các doanh nghiệp, đã thiết kế các phòng họp phù hợp với:\nGiám đốc doanh nghiệp vừa & nhỏ\nCá nhân vừa mới thành lập doanh nghiệp\nChuyên viên tư vấn/ Nhóm dự án\nCông ty nước ngoài hoạt động trong thời gian thăm dò thị trường\nCác cá nhân/doanh nghiệp hay phải đi công tác.\ncho thuê phòng họp theo giờ\nKhông gian phòng họp có sức chứa 15 - 30 người, với đầy đủ trang thiết bị hiện đại\nKhi quý khách hàng cần tổ chức những buổi hội nghị khách hàng, đại hội cổ đông, và các hình thức meeting mang tính chuyên nghiệp, hãy liên hệ ngay cho Hà Nội Office để được sử dụng phòng họp hiện đại, chuyên nghiệp với mức giá tiết kiệm nhất.\nBố cục hài hòa giữa hiện đại và sang trọng\nphòng họp cho thuê\nHình ảnh phòng họp dành cho 6 - 8 người tại Hà Nội Office\nMột trong các tiêu chí quan trọng khác khi lựa chọn chính là cách sắp xếp không gian phòng họp. Phòng họp cho thuê tại Hà Nội Office đảm bảo sự tương tác giữa những người tham gia, giữa người thuyết trình diễn giả được thuận lợi nhất. Đặc biệt, phòng họp do Hà Nội Office cung cấp luôn có khoảng không gian dự liệu cần thiết cho các loại máy chiếu, hệ thống đàm thoại hội nghị, các thiết bị âm thanh, ánh sáng nhằm phục vụ và nâng cao chất lượng cuộc họp.\nÁnh sáng và màu sắc\nthuê phòng họp\nKhi bạn thuê phòng họp tại Hà Nội Office, tất cả các phòng được thiết kế với hiệu ánh sáng tốt nhất nhằm tạo cảm giác dễ chịu, hài hòa nhất cho người sử dụng. Ngoài ra, phòng họp có màu sắc hài hòa, trang nhã vừa đủ để các nhân viên có thể giảm bớt căng thẳng trong công việc mà vẫn không mất đi sự nghiêm túc của buổi họp.\nNội thất phòng họp\nBàn ghế họp tại Hà Nội Office được sắp xếp vị trí chỗ ngồi phù hợp, thể hiện sự tôn trọng, đảm bảo được các yếu tố thuận lợi nhất cho chủ tọa và người tham gia cuộc họp. Bàn ghế trong phòng họp của Hà Nội Office tương đối thoải mái, êm ái nhưng vẫn giữ được sự hài hòa với văn phòng.\n Thuê phòng hội thảo\n\nĐối với một công ty, việc trang bị phòng họp là một trong những nhu cầu tối thiểu để có thể mở rộng uy thế và danh tiếng của công ty. Sự ra đời của các công ty chuyên cho thuê phòng họp giúp cho các doanh nghiệp giải quyết vấn đề nan giải, đồng thời đang dần mở ra một thị trường cho thuê văn phòng tiềm năng. Với sự giúp đỡ của Hà Nội Office, Quý khách hàng sẽ tiết kiệm được thời gian quản lý và chi phí đồng thời được sử dụng các dịch vụ chuyên nghiệp cho các hoạt động kinh doanh của mình. Hà Nội Office chính là sự lựa chọn hoàn hảo cho Quý khách hàng cần thuê phòng họp mang tính chuyên nghiệp, hiện đại với mức giá hợp lí nhất.",
    shortDescription: "Tự hào là 1 trong những địa chỉ tin cậy hàng đầu trong thị trường phòng họp cho thuê",
    phone: "0853394567",
    website: "hanoioffice.vn",
    email: "",
    numSeats: 25,
    location: ObjectId("5c999fe9c54a9e3df2dc4d5f"),
    pricing: ObjectId("5c999fe9c54a9e3df2dc4d60"),
    officeRules: ObjectId("5c999fe9c54a9e3df2dc4d61"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    tags: [
      "vip",
      "phannguyen"
    ],
    reviews: [],
    amenities: [
      "tv",
      "wifi",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/phong-hop-cho-thue-quan-ha-dong-6.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/phong-hop-cho-thue-quan-ha-dong-1.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/phong-hop-cho-thue-quan-ha-dong-4.jpg"
    ],
    availableSchedule: [],
    size: 20,
    title: "Hà Đông Office",
    searchTitle: "ha dong office",
    category: "meeting",
    address: "20 Lê Trọng Tấn, Hà Đông, Hà Nội",
    description: "Phòng họp cho thuê quận Hà Đông của Hanoi Office được thiết kế và sắp xếp một cách hiện đại, đảm bảo được sự tương tác giữa mọi người trong phòng họp. Ngoài ra tất cả phòng họp còn được thiết kế ánh sáng, màu sắc hài hòa để tạo không gian ấm cúng, giảm căng thẳng.\n\nPhòng họp cho thuê quận Hà Đông của Hà Nội Office còn được trang bị đầy đủ trang thiết bị như: Máy chiếu (projector) sắc nét và có độ phân giải cao, hệ thống đàm thoại hội nghị., loa mic, ánh sáng, Wifi - Internet tốc độ cao, giấy, bút, … Tất cả các trang thiết bị luôn được sẵn sàng với tình trạng làm việc tốt nhất ngay khi khách hàng có nhu cầu sử dụng.\n\nphong-hop-cho-thue-quan-ha-dong-3\n\n3. Ánh sáng và màu sắc hài hòa\nKhi bạn thuê phòng họp Hà Đông của Hà Nội Office, tất cả các phòng được thiết kế với hiệu ánh sáng tốt nhất nhằm tạo cảm giác dễ chịu, hài hòa nhất cho người sử dụng. Ngoài ra, phòng họp có màu sắc hài hòa, trang nhã vừa đủ để các nhân viên có thể giảm bớt căng thẳng trong công việc mà vẫn không mất đi sự nghiêm túc của buổi họp.\n\n4. Bố cục hài hòa giữa hiện đại và sang trọng\nphong-hop-cho-thue-quan-ha-dong-4\n►►► HÀ NỘI OFFICE - CHO THUÊ VĂN PHÒNG ẢO HÀ ĐÔNG CHUYÊN NGHIỆP NHẤT - CLICK  NGAY! \nMột trong các tiêu chí quan trọng khác khi lựa chọn chính là cách sắp xếp không gian phòng họp. Phòng họp cho thuê quận Hà Đông của Hà Nội Office đảm bảo sự tương tác giữa những người tham gia, giữa người thuyết trình diễn giả được thuận lợi nhất. Đặc biệt, phòng họp do Hà Nội Office cung cấp luôn có khoảng không gian dự liệu cần thiết cho các loại máy chiếu, hệ thống đàm thoại hội nghị, các thiết bị âm thanh, ánh sáng nhằm phục vụ và nâng cao chất lượng cuộc họp.\n\n5. Tối đa hóa mục đích sử dụng\nKhi sử thuê phòng họp cho thuê Hà Đông, doanh nghiệp có thể sử dụng phòng họp cho nhiều mục đích khác nhau tùy vào nhu cầu sử dụng của khách hàng như sử dụng cho hội nghị, phỏng vấn,  hội thảo và đào tạo.\n\nLựa chọn phòng họp cho thuê quận Hà Đông tại Hanoi Office chính là lựa chọn tuyệt vời giúp các doanh nghiệp không cần mất quá nhiều thời gian để tìm một phòng họp phù hợp. Liên hệ ngay với Hanoi Office, chúng tôi sẽ đáp ứng mọi nhu cầu của các bạn.\n\n6. Thiết kế phù hợp với nhiều đối tượng\nViệc đầu tư vào một phòng họp hiện đại với các máy móc, trang thiết bị sẽ gây hao tốn rất nhiều nguồn ngân sách của công ty, đặc biệt với các doanh nghiệp vừa và nhỏ. Phòng họp cho thuê Hà Đông của Hà Nội Office, với sứ mệnh tối ưu chi phí cho các doanh nghiệp, đã thiết kế các phòng họp phù hợp với:\n\nGiám đốc doanh nghiệp vừa & nhỏ\n\nCá nhân vừa mới thành lập doanh nghiệp\n\nChuyên viên tư vấn/ Nhóm dự án\n\nCác công ty nước ngoài đang hoạt động trong thời gian cần thăm dò thị trường\n\nCác cá nhân/doanh nghiệp phải đi công tác, di chuyển nhiều",
    shortDescription: "Giá rẻ, sang trọng, đẳng cấp, chuyên nghiệp",
    phone: "0906198389",
    website: "hanoioffice.vn",
    email: "",
    numSeats: 10,
    location: ObjectId("5c99a1a8c54a9e3df2dc4d6e"),
    pricing: ObjectId("5c99a1a8c54a9e3df2dc4d6f"),
    officeRules: ObjectId("5c99a1a8c54a9e3df2dc4d70"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    tags: [
      "Marvell",
      "BaDinh",
      "HaNoi"
    ],
    reviews: [
      ObjectId("5ca4900a90485c1d032a12c9")
    ],
    amenities: [
      "wifi",
      "airConditioning",
      "tv",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/3_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/1_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/4_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/2_454x340.jpg"
    ],
    availableSchedule: [],
    size: 50,
    title: "Marvell",
    searchTitle: "marvell",
    category: "meeting",
    address: "360 Kim Mã,,, Hà Nội",
    description: "Nằm trong tòa nhà DB Centre – một trong những khu phức hợp lớn nhất của Hà Nội, bao gồm khối khách sạn sang trọng HND, khối căn hộ dịch vụ và khối văn phòng hiện đại. Tòa nhà văn phòng nằm ngay cạnh Khách sạn HND và Khách sạn Lotte Hà Nội, cách Trung Tâm Hội nghị Quốc gia và Hồ Hoàn Kiếm cùng khu phố cổ Hà Nội chỉ 10 phút lái xe. ",
    shortDescription: "Không gian thoáng, đầy đủ tiện nghi cho buôi họp",
    phone: "044786785",
    website: "",
    email: "marvell@gmail.com",
    numSeats: 15,
    location: ObjectId("5caf749219b80424711ffc37"),
    pricing: ObjectId("5caf749219b80424711ffc38"),
    officeRules: ObjectId("5caf749219b80424711ffc39"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a1d74c54a9e3df2dc4d96"),
    tags: [
      "HNTower",
      "HaiBaTrung",
      "HaNoi"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/ext-office-example.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/board-room-example.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/1_454x340.jpg"
    ],
    availableSchedule: [],
    size: 50,
    title: "HN Tower Office",
    searchTitle: "hn tower office",
    category: "meeting",
    address: "58 Hai Bà Trưng, Hà Nội",
    description: "Trung tâm nằm trong tòa nhà Hà Nội Tower ở ngay một vị trí một vị trí thuận tiện của góc đường Hai Bà Trưng và Quán Sứ. Từ đây, bạn chỉ mất khoảng 5 phút lái xe đã có thể tiếp cận Khách sạn Metropole Legend Hà Nội, Hilton Hanoi Opera, khách sạn Melia và gần ngay bên cạnh là Somerset Grand Hanoi, Tòa án Nhân dân, Đại sứ quán Bỉ, Đại sứ quán Na Uy và rất nhiều các khu thương mại và ngân hàng nước ngoài. Phố Hai Bà Trưng là một con phố sầm uất và nổi tiếng ở Hà Nội, thuận tiện đi lại cho bất kì du khách nào.",
    shortDescription: "Trung tâm nằm trong tòa nhà Hà Nội Tower ở ngay một vị trí một vị trí thuận tiện của góc đường Hai Bà Trưng và Quán Sứ.",
    phone: "044123321",
    website: "HNTower.com",
    email: "HNTower@gmail.com",
    numSeats: 20,
    location: ObjectId("5c9a1d74c54a9e3df2dc4d93"),
    pricing: ObjectId("5c9a1d74c54a9e3df2dc4d94"),
    officeRules: ObjectId("5c9a1d74c54a9e3df2dc4d95"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a3956c54a9e3df2dc4da7"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1551148613_IMG_20190116_102054.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533637007_0T8A7378.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1551148613_IMG_20190116_102054.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1551148716_IMG_6667.JPG"
    ],
    availableSchedule: [],
    size: 10,
    title: "HỒ GƯƠM PLAZA",
    searchTitle: "ho guom plaza",
    category: "meeting",
    address: "Tầng 12 - số 102 Phố Trần Phú - Quận Đống Đa, Hà Nội",
    description: "Nằm trên ngã tư giao cắt của đường Trần Phú - một trong những tuyến đường chính nối khu vực phía Tây với trung tâm thủ đô Hà Nội, mặt còn lại tiếp giáp trục đường chính của Khu đô thị mới Mỗ Lao, Không gian làm việc chung CoGo Hồ Gươm Plaza là sự giao thoa tuyệt vời với điều kiện giao thông thuận lợi, thông thoáng, được bao quanh bởi các trung tâm thương mại lớn như Metro Hà Đông và các cơ quan chính quyền, trường đại học, nhà hàng và khách sạn cao cấp. Không gian làm việc chia sẻ CoGo Hồ Gươm Plaza được xây dựng với mong muốn tạo nên một cộng đồng các doanh nghiệp đa dạng và kết nối, hỗ trợ lẫn nhau trong kinh doanh cũng như mở rộng mối quan hệ với nhiều doanh nghiệp, đối tác lớn khác bên ngoài. Hãy lựa chọn CoGo như điểm đến của sự thành công!\n\nCác tiện ích:\nKhông gian chung: Với đồ nội thất độc đáo và thiết kế nghệ thuật, không gian thư giãn của chúng tôi là trái tim và linh hồn của văn phòng của chúng tôi: chúng được thiết kế để khuyến khích sự sáng tạo và năng suất.\nQuản lý cộng đồng: Đội ngũ của chúng tôi sẵn sàng hỗ trợ Bạn.\nLễ tân: Trong giờ làm việc, nhóm của chúng tôi sẵn sàng chào đón bạn, cung cấp trợ giúp được cá nhân hóa và quản lý thư của bạn.\nThời gian làm việc: Bạn có quyền truy cập tòa nhà 24h một ngày và 07 ngày một tuần.\nAn ninh: 24/7\nDịch vụ vệ sinh: Đội ngũ làm sạch của chúng tôi đảm bảo rằng không gian công cộng, phòng họp và văn phòng riêng đều sạch sẽ và sạch sẽ 24 giờ một ngày..\nBuồng điện thoại: Buồng cách âm cho phép bạn thực hiện cuộc điện thoại riêng tư và các cuộc phỏng vấn video trong yên bình.\nĐồ uống miễn phí: Thưởng thức cafe rang, trà, nước detox, nước mát và sử dụng lò vi sóng một cách thuận tiện.\nPhòng họp: Không gian phòng họp sang trọng với đấy đủ trang thiết bị.\nKhu vực in ấn: Máy in đen trắng, in màu cao cấp, máy hủy tài liệu và các đồ dùng văn phòng khác.\nInternet:Wifi và ethernet tốc độ cao.\nPhòng tắm: Sang trọng và tiện nghi\nHội thảo:Các buổi hội thảo mang lại cho bạn những kiến thức và trải nghiệm mới lạ.",
    shortDescription: "Không gian làm việc chung Tiêu chuẩn Quốc tế, sang trọng, hiện đại, thuận tiện giao thông. Thiết kế hiện đại, tối ưu năng suất, phù hợp cho doanh nghiệp từ 2-100 người.  Tiết kiệm chi phí đến hơn 50% so với thuê văn phòng truyền thống, nhà riêng hay chung cư. Nhiều tiện tích miễn phí đi kèm.",
    phone: "(+84) 904 157 900",
    website: "",
    email: "HoGuomPlaza@gmail.com",
    numSeats: 10,
    location: ObjectId("5c9a3956c54a9e3df2dc4da4"),
    pricing: ObjectId("5c9a3956c54a9e3df2dc4da5"),
    officeRules: ObjectId("5c9a3956c54a9e3df2dc4da6"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a3b13c54a9e3df2dc4dba"),
    tags: [
      "Vip"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533637007_LAG_6058.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533637008_LAG_6120.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533637009_LAG_6121.jpg"
    ],
    availableSchedule: [],
    size: 10,
    title: "TNR TOWER (VINCOM)",
    searchTitle: "tnr tower (vincom)",
    category: "meeting",
    address: " Tầng 16 - số 54A Nguyễn Chí Thanh - Đống Đa, Hà Nội",
    description: "Thông tin chi tiết:\nNằm trọn trong khu vực trung tâm cửa ngõ hành chính phía Tây Thủ đô, tại vị trí số 54A đường Nguyễn Chí Thanh – quận Đống Đa - TP. Hà Nội, TNR Tower mang đến cho khách hàng một không gian làm việc chung tiêu chuẩn quốc tế trong tòa nhà văn phòng hạng A , với các trang thiết bị đầy đủ tiện nghi phục vụ cho công việc của bạn . Từ đây bạn cũng có thể tiếp cận nhanh chóng tới cơ quan hành chính Ủy ban liên minh Châu Âu, Đại sứ quán Mỹ, Đại sứ quán Nhật bản, khu Đoàn ngoại giao Vạn Phúc, Đài truyền hình Việt Nam và các trường Đại học uy tín.Cũng như chỉ mất 10 phút là bạn có thể tiếp cận được đường cao tốc Thăng Long - Nội Bài và dễ dàng ra sân bay chỉ trong vòng 45 phút. Đồng thời, chỉ trong vòng bán kính 5km, dễ dàng liên kết với các doanh nghiệp, tập đoàn, cơ quan và các tiện ích khác, đặc biệt là các ngân hàng, khách sạn 5 sao và các tổ hợp trung tâm thương mại.\n\nCác tiện ích:\n\nKhông gian chung: Với đồ nội thất độc đáo và thiết kế nghệ thuật, không gian thư giãn của chúng tôi là trái tim và linh hồn của văn phòng của chúng tôi: chúng được thiết kế để khuyến khích sự sáng tạo và năng suất.\nQuản lý cộng đồng: Đội ngũ của chúng tôi sẵn sàng hỗ trợ Bạn.\nLễ tân: Trong giờ làm việc, nhóm của chúng tôi sẵn sàng chào đón bạn, cung cấp trợ giúp được cá nhân hóa và quản lý thư của bạn.\nThời gian làm việc: Bạn có quyền truy cập tòa nhà 24h một ngày và 07 ngày một tuần.\nAn ninh: 24/7\nDịch vụ vệ sinh: Đội ngũ làm sạch của chúng tôi đảm bảo rằng không gian công cộng, phòng họp và văn phòng riêng đều sạch sẽ và sạch sẽ 24 giờ một ngày..\nBuồng điện thoại: Buồng cách âm cho phép bạn thực hiện cuộc điện thoại riêng tư và các cuộc phỏng vấn video trong yên bình.\nĐồ uống miễn phí: Thưởng thức cafe rang, trà, nước detox, nước mát và sử dụng lò vi sóng một cách thuận tiện.\nPhòng họp: Không gian phòng họp sang trọng với đấy đủ trang thiết bị.\nKhu vực in ấn: Máy in đen trắng, in màu cao cấp, máy hủy tài liệu và các đồ dùng văn phòng khác.\nInternet:Wifi và ethernet tốc độ cao.\nHội thảo:Các buổi hội thảo mang lại cho bạn những kiến thức và trải nghiệm mới lạ.",
    shortDescription: "Không gian làm việc chung Tiêu chuẩn Quốc tế, sang trọng, hiện đại, thuận tiện giao thông. Thiết kế hiện đại, tối ưu năng suất, phù hợp cho doanh nghiệp từ 2-100 người.  Tiết kiệm chi phí đến hơn 50% so với thuê văn phòng truyền thống, nhà riêng hay chung cư. Nhiều tiện tích miễn phí đi kèm",
    phone: "(+84) 912 149 747",
    website: "",
    email: "TnrTower@gmail.com",
    numSeats: 10,
    location: ObjectId("5c9a3b13c54a9e3df2dc4db7"),
    pricing: ObjectId("5c9a3b13c54a9e3df2dc4db8"),
    officeRules: ObjectId("5c9a3b13c54a9e3df2dc4db9"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a3cf2c54a9e3df2dc4dc9"),
    tags: [
      "Vip"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533635438_LAG_5959.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533635437_LAG_5895.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533637009_LAG_6121.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1533635436_LAG_5882.jpg"
    ],
    availableSchedule: [],
    size: 3300,
    title: "VIET TOWER",
    searchTitle: "viet tower",
    category: "talkshow",
    address: "Tầng 3-4, số 01 Phố Thái Hà - Quận Đống Đa, Hà Nội",
    description: "Thông tin chi tiết\nNằm ở số 1 Thái Hà ngay tại ngã tư Tây Sơn - Chùa Bộc - Thái Hà, Viet Tower được đánh giá là tòa nhà có vị trí chiến lược với 2 mặt tiền rộng rãi, không gian thoáng đãng, tầm nhìn đẹp, giao thông thuận tiện và liền kề các khu phố sầm uất và nhà hàng sang trọng trong khu vực. Không gian làm việc chia sẻ CoGo Viet Tower sở hữu mọi thứ bạn cần để phát triển doanh nghiệp.\n\nChúng tôi cung cấp các gói sản phẩm đa dạng cùng tiện ích và ưu đãi phù hợp cho các đối tượng khách hàng trong không gian làm việc chung lên tới 3.300 m2. Bạn cứ yên tâm theo đuổi đam mê, thoả sức sáng tạo, kích thích tiềm năng và thực hiện giấc mơ, những điều còn lại hãy để chúng tôi giải quyết.\n\nCác tiện ích:\n\nKhông gian chung: Với đồ nội thất độc đáo và thiết kế nghệ thuật, không gian thư giãn của chúng tôi là trái tim và linh hồn của văn phòng của chúng tôi: chúng được thiết kế để khuyến khích sự sáng tạo và năng suất.\nQuản lý cộng đồng: Đội ngũ của chúng tôi sẵn sàng hỗ trợ Bạn.\nLễ tân: Trong giờ làm việc, nhóm của chúng tôi sẵn sàng chào đón bạn, cung cấp trợ giúp được cá nhân hóa và quản lý thư của bạn.\nThời gian làm việc: Bạn có quyền truy cập tòa nhà 24h một ngày và 07 ngày một tuần.\nAn ninh: 24/7\nDịch vụ vệ sinh: Đội ngũ làm sạch của chúng tôi đảm bảo rằng không gian công cộng, phòng họp và văn phòng riêng đều sạch sẽ 24 giờ trong ngày.\nBuồng điện thoại: Buồng cách âm cho phép bạn thực hiện cuộc điện thoại riêng tư và các cuộc phỏng vấn video trong yên bình.\nĐồ uống miễn phí: Thưởng thức cafe rang, trà, nước detox, nước mát và sử dụng lò vi sóng một cách thuận tiện.\nPhòng họp: Không gian phòng họp sang trọng với đấy đủ trang thiết bị.\nKhu vực in ấn: Máy in đen trắng, in màu cao cấp, máy hủy tài liệu và các đồ dùng văn phòng khác.\nInternet:Wifi và ethernet tốc độ cao.\nHội thảo:Các buổi hội thảo mang lại cho bạn những kiến thức và trải nghiệm mới lạ.",
    shortDescription: "Không gian làm việc chung Tiêu chuẩn Quốc tế, sang trọng, hiện đại, thuận tiện giao thông. Thiết kế hiện đại, tối ưu năng suất, phù hợp cho doanh nghiệp từ 2-100 người.  Tiết kiệm chi phí đến hơn 50% so với thuê văn phòng truyền thống, nhà riêng hay chung cư. Nhiều tiện tích miễn phí đi kèm",
    phone: "(+84) 932 623 333",
    website: "",
    email: "VietTower@gmail.com",
    numSeats: 100,
    location: ObjectId("5c9a3cf2c54a9e3df2dc4dc6"),
    pricing: ObjectId("5c9a3cf2c54a9e3df2dc4dc7"),
    officeRules: ObjectId("5c9a3cf2c54a9e3df2dc4dc8"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a3e96c54a9e3df2dc4ddc"),
    tags: [],
    reviews: [],
    amenities: [
      "tv",
      "wifi",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690797_pc2.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690798_pc3.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690798_pc5.jpg"
    ],
    availableSchedule: [],
    size: 3000,
    title: "SUN ANCORA",
    searchTitle: "sun ancora",
    category: "meeting",
    address: "      Tầng 04 - số 03 Phố Lương Yên - Quận Hai Bà Trưng, Hà Nội",
    description: "Thông tin chi tiết:\n\nSun Ancora Lương Yên nằm ngay số 03 Lương Yên với tầm view nhìn toàn cảnh Sông Hồng thơ mộng. Đây là vị trí được giới chuyên gia bất động sản đánh giá là siêu đắc địa, đáp ứng mọi yếu tố của người đang tìm kiếm: từ cơ sở hạ tầng, hệ thống giao thông, phong thủy vượng phát, liên kết vùng…Thuận tiện khi chỉ cách Hồ Gươm 6 phút để di chuyển cũng như rất gần các trung tâm lớn của Thủ đô, bệnh viện, trường học, trung tâm văn hóa giải trí và các cơ quan ban ngành.\n\nCác tiện ích:\nKhông gian chung: Với đồ nội thất độc đáo và thiết kế nghệ thuật, không gian thư giãn của chúng tôi là trái tim và linh hồn của văn phòng của chúng tôi: chúng được thiết kế để khuyến khích sự sáng tạo và năng suất.\nQuản lý cộng đồng: Đội ngũ của chúng tôi sẵn sàng hỗ trợ Bạn. \nLễ tân: Trong giờ làm việc, nhóm của chúng tôi sẵn sàng chào đón bạn, cung cấp trợ giúp được cá nhân hóa và quản lý thư của bạn.\nThời gian làm việc: Bạn có quyền truy cập tòa nhà 24h một ngày và 07 ngày một tuần.\nAn ninh: 24/7\nDịch vụ vệ sinh: Đội ngũ làm sạch của chúng tôi đảm bảo rằng không gian công cộng, phòng họp và văn phòng riêng đều sạch sẽ và sạch sẽ 24 giờ một ngày..\nBuồng điện thoại: Cách âm này cho phép bạn thực hiện cuộc điện thoại riêng tư và các cuộc phỏng vấn video trong yên bình.\nĐồ uống miễn phí: Thưởng thức cafe rang, trà, nước detox, nước mát và sử dụng lò vi sóng một cách thuận tiện.\nPhòng họp: Không gian phòng họp sang trọng với đấy đủ trang thiết bị.\nKhu vực in ấn: Máy in đen trắng, in màu cao cấp, máy hủy tài liệu và các đồ dùng văn phòng khác.\nInternet:Wifi và ethernet tốc độ cao.\nPhòng tắm: Sang trọng và tiện nghi\nHội thảo:Các buổi hội thảo mang lại cho bạn những kiến thức và trải nghiệm mới lạ.",
    shortDescription: "Không gian làm việc chung Tiêu chuẩn Quốc tế, sang trọng, hiện đại, thuận tiện giao thông. Thiết kế hiện đại, tối ưu năng suất, phù hợp cho doanh nghiệp từ 2-100 người.  Tiết kiệm chi phí đến hơn 50% so với thuê văn phòng truyền thống, nhà riêng hay chung cư Nhiều tiện tích miễn phí đi kèm",
    phone: " (+84) 904 056 780",
    website: "",
    email: "sunarora@gmail.com",
    numSeats: 15,
    location: ObjectId("5c9a3e96c54a9e3df2dc4dd9"),
    pricing: ObjectId("5c9a3e96c54a9e3df2dc4dda"),
    officeRules: ObjectId("5c9a3e96c54a9e3df2dc4ddb"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a41cbc54a9e3df2dc4dec"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/IMG_0017.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690798_pc5.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690798_pc5.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1542690798_pc5.jpg"
    ],
    availableSchedule: [],
    size: 700,
    title: "Koworking.net",
    searchTitle: "koworking.net",
    category: "meeting",
    address: "Tầng 3 toà nhà Hesco- 135 Trần Phú (Đối diện HV Bưu chính Viễn Thông), Hà Đông, Hà Nội",
    description: "Tổ chức sự kiện, hội thảo tại Koworking\n1. Đặt chỗ: Bạn chỉ cần gọi điện và đặt trước địa điểm, đưa yêu cầu về không gian, cách bài trí, hệ thống âm thanh ánh sáng. Miễn phí huỷ trước 4h diễn ra sự kiện.\n\n\nHiện tại Korworking có hệ thống 5 phòng học sức chứa 25-40 người/ phòng. 1 phòng hội thảo sức chứa 70 người. 1 hội trường lớn với sức chứa 120-150 người.\n\n2. Hỗ trợ check-in miễn phí: Chúng tôi sẽ giúp các bạn làm công tác đón tiếp, check-in sự kiện.\n\n3. Hỗ trợ và trực kỹ thuật miễn phí: Bạn chỉ việc tập trung vào sự kiện của mình, đội ngũ nhân sự nhiệt tình của Koworking sẽ trực và xử lý các vấn đề kỹ thuật phát sinh như máy chiếu, TV, âm thanh, và các hoạt động kỹ thuật khác.",
    shortDescription: "Hệ sinh thái học tập và khởi nghiệp Koworking.net",
    phone: "08989 94848",
    website: "fb.com/koworking.net",
    email: "contact@koworking.net",
    numSeats: 100,
    location: ObjectId("5c9a41cbc54a9e3df2dc4de9"),
    pricing: ObjectId("5c9a41cbc54a9e3df2dc4dea"),
    officeRules: ObjectId("5c9a41cbc54a9e3df2dc4deb"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9a4858c54a9e3df2dc4dfd"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/51328970_2290831331186479_3246256309472854016_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52815366_2290831371186475_7577593650528387072_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52156668_2290831347853144_5913243335987822592_n.jpg"
    ],
    availableSchedule: [],
    size: 500,
    title: "Y-Nest Coworking Space",
    searchTitle: "k-nest coworking space",
    category: "meeting",
    address: "Tầng 4 TTTM V+, 505 Minh Khai, Hai Bà Trưng, Hà Nội",
    description: " 300m2 không gian tiện ích chung\n Không gian siêu đẹp & yên tĩnh \n Nhiều góc làm việc cố định & linh hoạt\n Wifi mạnh, hỗ trợ máy in, máy chiếu\n Có bốt điện thoại riêng để \"nấu cháo điện thoại\" nếu cần\n\nChỉ cách Times City vài bước chân, không gian làm việc tuyệt vời từ Y-Nest sẽ mang lại cho các nàng freelancer sự yên tĩnh tập trung để hoàn thành các deadline đang đuổi sát nút.\n\nTrong tháng 3, Y-Nest co-working có chương trình giảm giá 50% (chỉ từ 50.000/người) dành riêng cho các cô nàng theo đuổi phong cách tự do. Tận hưởng ngay không gian làm việc tuyệt vời này nhé!",
    shortDescription: " Y-Nest_Coworking_Space - giải pháp hoàn hảo cho Startup",
    phone: " 024 6664 1950",
    website: " y-nest.vn",
    email: " info@y-nest.vn",
    numSeats: 15,
    location: ObjectId("5c9a4858c54a9e3df2dc4dfa"),
    pricing: ObjectId("5c9a4858c54a9e3df2dc4dfb"),
    officeRules: ObjectId("5c9a4858c54a9e3df2dc4dfc"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9a495ec54a9e3df2dc4e10"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/51328970_2290831331186479_3246256309472854016_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52815366_2290831371186475_7577593650528387072_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52156668_2290831347853144_5913243335987822592_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/54428703_424242274804902_2066520860180611072_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/54517811_423226058239857_2415544801895120896_n.jpg"
    ],
    availableSchedule: [],
    size: 500,
    title: "CEN X SPACE",
    searchTitle: "cen x space",
    category: "teaching",
    address: "Tang 3, tòa nhà Dolphin Plaza, số 6 Nguyễn Hoàng, Mỹ đình, Hà Nội",
    description: "Một trong những không gian văn phòng chia sẻ lớn nhất tại Hà Nội.\n\n☘ Với tổng diện tích mặt sàn lên đến hơn 2.000m2, #CEN_X_SPACE sở hữu:\n+ 15 phòng Privite Office\n+ 2 phòng hội thảo lớn\n+ 3 phòng họp\n+ Hơn 300 ghế ngồi tự do \n+ Không gian tổ chức sự kiện lên đến 300 người cùng hệ thống màn hình LED hiện đại\n\n👉👉 CEN X SPACE – Dịch vụ đẳng cấp 5 sao với những tiện ích hạng sang.\n\n✨ Nổi bật với phong cách thiết kế theo cảm hứng vũ trụ. \n✨ Một không gian làm việc truyền cảm hứng.\n✨ Nơi bạn cần riêng tư – có riêng tư; muốn hòa nhập – có hòa nhập.",
    shortDescription: "CEN X SPACE tự hào là một trong những sản phẩm chiến lược, góp phần làm hoàn hảo hơn hệ sinh thái bất động sản của CENLAND",
    phone: "024.2114.101",
    website: "",
    email: "",
    numSeats: 20,
    location: ObjectId("5c9a495ec54a9e3df2dc4e0d"),
    pricing: ObjectId("5c9a495ec54a9e3df2dc4e0e"),
    officeRules: ObjectId("5c9a495ec54a9e3df2dc4e0f"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9a4b38c54a9e3df2dc4e23"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/51328970_2290831331186479_3246256309472854016_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/51328970_2290831331186479_3246256309472854016_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/52156668_2290831347853144_5913243335987822592_n.jpg"
    ],
    availableSchedule: [],
    size: 200,
    title: "iHouse Coworking Space",
    searchTitle: "ihouse coworking space",
    category: "meeting",
    address: "Số 131, Yên Hòa, Cầu Giấy, Hà Nội",
    description: "🌱 Văn Phòng \"Ăn Liền\" Tại Ốc Đảo Xanh.\n\n▪️ Bạn đang tìm kiếm không gian văn phòng đầy đủ tiện nghị, thân thiện, xanh mát và tràn đầy cảm hứng?\n\n▪️ Bạn cảm thấy những hợp đồng thuê nhà thật rắc rối và tốn thời gian?\n\n▪️ Bạn thường phải sắm rất nhiều đồ đạc mỗi khi chuyển đến văn phòng mới?\n\n🔆 Không gian làm việc IHouse Coworking Space mang đến một màu xanh, thân thiện với thiên nhiên giữa lòng Hà Nội.\n\n️🍀 Không phải trả thêm bất kỳ phụ phí nào khác như điện, nước, internet...\n\n️🍀 Trà, nước miễn phí và luôn sẵn sàng cho bạn tự phục vụ.\n\n🍀 Trang bị đầy đủ nội thất văn phòng. Chỉ cần xách laptop đến là có thể làm việc được ngay lập tức.\n\n️🍀 Cung cấp những không gian khác ngoài văn phòng của bạn, có thể sử dụng để tiếp khách hoặc thay đổi chỗ ngồi tìm cảm hứng mới.\n\nHãy để những điều nhỏ bé bình yên trong không gian làm việc của IHouse Coworking Space khơi gợi nguồn cảm hứng sáng tạo vô biên trong bạn mỗi ngày.",
    shortDescription: "iHouse Coworking Space là một không gian làm việc mở dành cho tất cả mọi người: bên cạnh việc cung cấp một không gian làm việc thoải mái để sáng tạo và tư duy, chúng tôi cũng chú trọng vào việc phát triển một cộng đồng freelancers vững mạnh thân thiện và đầy sức sống!",
    phone: " 0982.439.509",
    website: "https://coworking.vn/",
    email: "",
    numSeats: 25,
    location: ObjectId("5c9a4b38c54a9e3df2dc4e20"),
    pricing: ObjectId("5c9a4b38c54a9e3df2dc4e21"),
    officeRules: ObjectId("5c9a4b38c54a9e3df2dc4e22"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9a4d3ac54a9e3df2dc4e36"),
    tags: [
      "Vip"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/NKQ_4302-e1547639448979.jpg"
    ],
    availableSchedule: [],
    size: 1000,
    title: "UP Co-working Space",
    searchTitle: "up co-working space",
    category: "talkshow",
    address: "Level 6 - 8, No. 1 Luong Yen Str. ​Hai Ba Trung Distr., Hà Nội",
    description: "Luong Yen is UP’s first location, located at the Hanoi Creative City building, just a 5 minutes by car from the city centre\nYou don’t even have to leave the building to search for food or good coffee as there are many restaurants offering delicious food downstairs, as well as the famous Lam Cafe is around the corner. Experience the best workspace around Hanoi Old quarter area by booking an UP free trial today.\nFeatures\nOpen Workspace\nWifi & Printing\nEvent Space\nPrivate Offices\nMeeting Rooms\nFree Parking\nFree Coffee & Kitchen Facilities\n24hrs Access & Security\nPrivate Phone Booth\nBreakout Spaces\nOffice\nOffice 4 - 20 persons\nHot desks\nFrom 2,000,000 VND/month or 300,000 VND/3 days",
    shortDescription: "Luong Yen is UP’s first location, located at the Hanoi Creative City building, just a 5 minutes by car from the city centre You don’t even have to leave the building to search for food or good coffee as there are many restaurants offering delicious food downstairs, as well as the famous Lam Cafe is around the corner. Experience the best workspace around Hanoi Old quarter area by booking an UP free trial today.",
    phone: "(+84) 24 73080668",
    website: "",
    email: "admin@up-co.vn",
    numSeats: 100,
    location: ObjectId("5c9a4d3ac54a9e3df2dc4e33"),
    pricing: ObjectId("5c9a4d3ac54a9e3df2dc4e34"),
    officeRules: ObjectId("5c9a4d3ac54a9e3df2dc4e35"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9a4e60c54a9e3df2dc4e46"),
    tags: [
      "Vip"
    ],
    reviews: [],
    amenities: [
      "tv",
      "wifi",
      "airConditioning",
      "whiteBoard",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1547639448979.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/2-1.jpg"
    ],
    availableSchedule: [],
    size: 600,
    title: "TOONG HOANG DAO THUY",
    searchTitle: "toong hoang dao thuy",
    category: "teaching",
    address: "Floor 2, Building 25T2, Hoang Dao Thuy Str., Hà Nội",
    description: "Inspired by the life of bees – the creature known for their work ethic, artistry, and professionalism, the design of Toong Hoang Dao Thuy symbolizes endurance, non-stop renovation and wholehearted dedication.\nAs the first coworking space located in a residential area, Toong Hoang Dao Thuy is surrounded with banks, supermarkets, restaurants, café, lounges, and more. Any individuals and companies who crave for a creative and urban workspace with full of inspiration can find their nest here.\n\nThe artwork of honeybees:\n- Work ethics, dedication, artistics. Those are what bees represent and what we appreciate.\nBusiness Lounge: \n- Where meaningful conversations between you and colleagues, customers, or partners happen.\nBallpit:\n- Never underestimate the power of play.\n\n\n\n\n\n",
    shortDescription: "Inspired by the life of bees – the creature known for their work ethic, artistry, and professionalism, the design of Toong Hoang Dao Thuy symbolizes endurance, non-stop renovation and wholehearted dedication.  As the first coworking space located in a residential area, Toong Hoang Dao Thuy is surrounded with banks, supermarkets, restaurants, café, lounges, and more. Any individuals and companies who crave for a creative and urban workspace with full of inspiration can find their nest here.",
    phone: "+84 96 224 8585",
    website: "",
    email: "info@toong.com.vn",
    numSeats: 150,
    location: ObjectId("5c9a4e60c54a9e3df2dc4e43"),
    pricing: ObjectId("5c9a4e60c54a9e3df2dc4e44"),
    officeRules: ObjectId("5c9a4e60c54a9e3df2dc4e45"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b15c7c54a9e3df2dc4e57"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/4c59db629b44751a2c55_zFCdY01.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1547679.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/f131b07ef1591f074648_CPGp4Z5.jpg"
    ],
    availableSchedule: [],
    size: 300,
    title: "MegaShare",
    searchTitle: "megashare",
    category: "talkshow",
    address: "P809- Tầng 8 - Tòa nhà Toyota Thanh Xuân - 315 Trường Chinh - Hà Nội (gần Ngã Tư Sở), Hà Nội",
    description: "Chỗ ngồi cá nhân\nChỗ ngồi làm việc dành cho cá nhân, đội nhóm. Bao gồm bàn, ghế và các tiện ích văn phòng phục vụ cho công việc\nPhòng làm việc riêng\nPhòng làm việc dành cho công ty, doanh nghiệp. Bao gồm văn phòng riêng, bàn, ghế, tủ để đồ, hệ thống điều hòa, chiếu sáng\nQuầy bar\nPhục vụ đồ uống nhanh, nơi trò chuyện, thư giãn của mọi người\nPhòng họp\nPhòng họp sức chứa tối đa 15 người, trang bị bàn ghế, máy chiếu.",
    shortDescription: "MegaShare Coworking space - Cho thuê văn phòng, cho thuê chỗ ngồi cố định, cho thuê văn phòng đại diện, văn phòng diện tích nhỏ, phù hợp với các Startup, freelancer, doanh nghiệp vừa và nhỏ ... với đầy đủ tiện nghi nội thất bàn ghế, phòng họp, lễ tân, sảnh tiếp khách, tầng hầm gửi xe, bảo vệ 24/24.",
    phone: "0244225696",
    website: "",
    email: "",
    numSeats: 100,
    location: ObjectId("5c9b15c7c54a9e3df2dc4e54"),
    pricing: ObjectId("5c9b15c7c54a9e3df2dc4e55"),
    officeRules: ObjectId("5c9b15c7c54a9e3df2dc4e56"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9b16f6c54a9e3df2dc4e67"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "whiteBoard",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/628864092513.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/503805665775.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/935814760588.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/630178215042.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/648_CPGp4Z5.jpg"
    ],
    availableSchedule: [],
    size: 300,
    title: "We ShareCoworking",
    searchTitle: "we sharecoworking",
    category: "teaching",
    address: "Floor 7th, MAC Plaza, No 10, Tran Phu Street, Mo Lao Ward, Ha Dong Dist, Hanoi City, Hà Nội",
    description: "TẬN HƯỞNG\nTIỆN ÍCH TẠI VĂN PHÒNG\nCông ty TNHH Đầu tư WE Việt Nam – chủ đầu tư WeShare Coworking Space – được thành lập từ tâm huyết của các nhà sáng lập đã từng làm việc nhiều năm cho các công ty, tập đoàn lớn của nước ngoài. Với mục tiêu đưa Việt Nam sánh ngang với các nước phát triển, các thành viên sáng lập WE Việt Nam đã nắm bắt xu hướng xây dựng hệ sinh thái doanh nghiệp từ các nước tiên tiến trên thế giới để từ đó xây dựng nên một cộng đồng hỗ trợ các doanh nghiệp tại Việt Nam.",
    shortDescription: "WeShare Coworking Space là địa điểm cho các doanh nghiệp trải nghiệm, sử dụng không gian văn phòng sáng tạo, hỗ trợ tối đa cho các Startups, Freelancers sáng tạo. Là nơi các nhóm Startup có thể cùng làm việc, networking. Đồng thời, đây là cầu nối cho các doanh nghiệp vừa và nhỏ hỗ trợ lẫn nhau, tiếp cận các nhà đầu tư một cách nhanh chóng.",
    phone: "0848385588",
    website: "http://wevn.vn/",
    email: "Sales@wevn.vn",
    numSeats: 50,
    location: ObjectId("5c9b16f6c54a9e3df2dc4e64"),
    pricing: ObjectId("5c9b16f6c54a9e3df2dc4e65"),
    officeRules: ObjectId("5c9b16f6c54a9e3df2dc4e66"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5c9b1872c54a9e3df2dc4e7a"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/banner-espace-1-min.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/Espace.jpg"
    ],
    availableSchedule: [],
    size: 500,
    title: "eSpace Coworking",
    searchTitle: "espace coworking",
    category: "meeting",
    address: "Số 1 Đinh Lễ, Hoàn Kiếm, Hà Nội",
    description: "Không gian làm việc chung cao cấp\nTọa lạc tại số 1 Đinh Lễ, quận Hoàn Kiếm, Hà Nội, eSpace Coworking là sự kết hợp hoàn hảo giữa không gian làm việc chung và các dịch vụ tiện ích cần thiết cho doanh nghiệp. Giữa lòng thủ đô nhộn nhịp, bạn khó có thể tìm thấy một nơi làm việc ồn ào vừa đủ, yên tĩnh vừa đủ, khác biệt vừa đủ và thoải mái vừa đủ như ở eSpace Coworking.\n\nVới 18 phòng làm việc cá nhân đầy đủ tiện nghi, một không gian làm việc chung chia thành 5 khu vực làm việc riêng biệt với độ ồn khác nhau và một phòng họp rộng rãi, eSpace Coworking là sự lựa chọn hoàn hảo cho công ty của bạn.\n\nĐây sẽ là giải pháp văn phòng toàn diện cho freelancer, startup, solopreneneur (người tự kinh doanh) hay chuyên gia làm việc tại trung tâm thành phố Hà Nội.\n\n· Không gian làm việc chung : Không gian làm việc chung được chia làm 04 khu vực với mức độ tiếng ồn khác nhau: khu Sáng tạo, khu Làm việc nhóm/ Tương tác, khu Làm việc tập trung và khu Làm việc riêng biệt. Mỗi khu vực làm việc được thiết kế và trang bị đồ đạc tạo sự thoải mái và năng suất làm việc cao nhất cho người dùng.\n\n· Phòng làm việc cá nhân tiện nghi: Phòng làm việc cá nhân với sức chứa lên tới 10 người. Đội ngũ kỹ thuật của eSpace Coworking sẵn sàng thiết kế và bày trí lại phòng làm việc tùy theo yêu cầu của khách hàng\n\n· Phòng họp rộng rãi: Phòng họp với sức chứa 15 người có thể chia thành phòng nhỏ hơn, cho phép 2 nhóm cùng sử dụng một lúc.\n\n· Wifi tốc độ cao:  Làm việc tại eSpace bạn sẽ được sử dụng Wifi tốc độ cao, đường truyền tốt, giúp bạn làm việc thuận tiện và nhanh chóng. \n\n· Nhân viên sẵn sàng hỗ trợ: Lễ tân và đội ngũ của eSpace Coworking luôn túc trực từ 8.00 AM đến 6.00 PM để giải đáp mọi thắc mắc của bạn. \n\n· Máy in/ máy photo/ máy scan: Tại eSpace Coworking, bạn có thể sử dụng máy in, máy pho-to, máy scan đen trắng và máy hủy giấy. \n\nTủ cá nhân: Tại eSpace bạn không cần phải lo phải giữ đồ của mình nữa vì chúng tôi trang bị cho mỗi người một tủ cá nhân tiện lợi và an toàn.\n\n· Trà & cà phê miễn phí: Trà và cà phê luôn sẵn có tại khu vực bếp.\n\n· Dịch vụ dọn dẹp hàng ngày: Khu vực làm việc chung, phòng làm việc riêng, phòng họp luôn được dọn dẹp sạch sẽ mỗi ngày.\n\n· Hoạt động cộng đồng hàng tuần: Hàng tuần, tại eSpace Coworking sẽ diễn ra các sự kiện cho cộng đồng nói chung và cho thành viên của eSpace nói riêng. \n\nDịch vụ gia tăng giá trị cộng hưởng: Tại eSpace chúng tôi đồng hành cùng những đối tác tin cậy cung cấp dịch vụ đa dạng trong các ngành với hy vọng sẽ đến đến cho bạn một trải nghiệm tuyệt vời và đầy đủ nhất. Các dịch vụ bao gồm: dịch vụ tư vấn về pháp lý, thuế; dịch vụ kế toán - kiểm toán; dịch vụ sử dụng nội dung để kiểm chứng và thâm nhập thị trường, và còn nhiều loại hình dịch vụ tiện ích khác nữa.\n\neSpace Coworking - Không gian làm việc chung cao cấp\nTham gia với chúng tôi để cùng nhau kiến tạo nên một cộng đồng tràn đầy tinh thần khởi nghiệp phát triển thịnh vượng và chuyên nghiệp. Một tinh thần mà ở đó những con người có cùng chung chí hướng sẽ xây dựng nên một nơi ngập tràn năng lượng, mạng lưới quan hệ và đối tác dễ dàng được mở rộng cùng với đó là nơi mà mọi nỗ lực dù là nhỏ nhất đều đáng được trân trọng. ",
    shortDescription: "Tọa lạc ngay trung tâm thủ đô Hà Nội - số 1 Đinh Lễ, Hoàn Kiếm, eSpace không chỉ là một nơi làm việc mà còn là nơi mọi người kết nối, mở rộng mạng lưới đối tác và cùng nhau phát triển bản thân. Chúng tôi tin rằng chúng ta có thể cùng kiến tạo một cộng đồng nơi chúng ta luôn tràn đầy năng lượng, được kết nối và được trân trọng mọi nỗ lực dù là nhỏ nhất.",
    phone: "+84.916.806.089",
    website: "https://slimweb.vn",
    email: "INFO@ESPACEWORK.COM",
    numSeats: 50,
    location: ObjectId("5c9b1872c54a9e3df2dc4e77"),
    pricing: ObjectId("5c9b1872c54a9e3df2dc4e78"),
    officeRules: ObjectId("5c9b1872c54a9e3df2dc4e79"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b1a28c54a9e3df2dc4e8c"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1111-01_dygTXyi.png",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1112_ky91UKA.png",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/1112-01_EXCHj3u.png"
    ],
    availableSchedule: [],
    size: 600,
    title: "The Mahogany",
    searchTitle: "the mahogany",
    category: "meeting",
    address: "Tầng 3 - Toà nhà Huyndai - số 11 Hoàng Cầu Mới - Đống Đa, Hà Nội",
    description: "The Mahogany Coworking Space chủ yếu cung cấp chỗ ngồi làm việc cho cá nhân và văn phòng, phòng họp, đem đến những không gian làm việc thoáng đãng, yên tĩnh, kết nối Wifi tốc độ cao và được trang bị đầy đủ máy tính, máy in và các thiết bị tiện ích khác, giúp khách hàng tập trung học tập và làm việc.\nChỗ ngồi cá nhân\nMiễn phí gửi xe, trà/ cafe. Wifi tốc độ cao\nPhòng họp/ lớp học\nĐầy đủ bảng, máy chiếu,..\nKhông gian tổ chức sự kiện\nQuy mô tối đa 120 người",
    shortDescription: "The Mahogany Coworking Space chủ yếu cung cấp chỗ ngồi làm việc cho cá nhân và văn phòng, phòng họp, đem đến những không gian làm việc thoáng đãng, yên tĩnh, kết nối Wifi tốc độ cao và được trang bị đầy đủ máy tính, máy in và các thiết bị tiện ích khác, giúp khách hàng tập trung học tập và làm việc.",
    phone: "0249742743",
    website: "",
    email: "",
    numSeats: 100,
    location: ObjectId("5c9b1a28c54a9e3df2dc4e89"),
    pricing: ObjectId("5c9b1a28c54a9e3df2dc4e8a"),
    officeRules: ObjectId("5c9b1a28c54a9e3df2dc4e8b"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b1c3dc54a9e3df2dc4e9f"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/TLH_2_ks7s6pf.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/TLH_rGRVk3l.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/TLH1_gMxV8zw.jpg"
    ],
    availableSchedule: [],
    size: 300,
    title: "View Photos The Learning Hub",
    searchTitle: "view photos the learning hub",
    category: "teaching",
    address: " 14 Phố Ngô Quyền, Hà Nội",
    description: "The Learning Hub is a home for all dreamers committed to creating positive impact.\n\nOur dream: To support individuals committed to creating positive impact by bringing them together and creating a community of inspiration and collaboration.\n\nWhat do we mean by positive impact? To us, positive impact means creating a sustainable, just, and inclusive economy that values people and planet above profit. It is the belief that work does not end with financial results, but can have a deep social, environmental and/or creative purpose.\n\nWhy a shared space? We wish to gather people that are hungry for meaningful work, deep connections and creative inspiration; to harness this energy in one place, so it can be strengthened and developed into a strong culture of collaboration within Hanoi's community of change-makers.",
    shortDescription: "The Learning Hub là điểm đến mà những người tinh tế mới có thể biết và tìm đến. Tuy diện tích không lớn nhưng đây cũng là một trong những không gian được nhiều người biết đến với những điểm riêng biệt.",
    phone: "08343322222",
    website: "",
    email: "",
    numSeats: 100,
    location: ObjectId("5c9b1c3dc54a9e3df2dc4e9c"),
    pricing: ObjectId("5c9b1c3dc54a9e3df2dc4e9d"),
    officeRules: ObjectId("5c9b1c3dc54a9e3df2dc4e9e"),
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b3434c54a9e3df2dc4eae"),
    tags: [
      "PhongHoc",
      "VanLinh"
    ],
    reviews: [],
    amenities: [
      "tv",
      "wifi",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/loai-1.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/loai1-2.JPG"
    ],
    availableSchedule: [],
    size: 50,
    title: "Van Linh Edu",
    searchTitle: "van linh edu",
    category: "teaching",
    address: "155 Nguyễn Văn Linh, Đà Nẵng",
    description: "70% CLB, nhóm học không có không gian hội họp, seminar yên tỉnh đúng nghĩa. Và Họ thường xuyên phải thay đổi địa điểm gặp mặt. Mỗi lần gặp mặt phải đến quán café đông đúc, ồn ào, dẫn tới việc triển khai các công việc có phần kém hiệu quả.\n\n    Rất nhiều bạn/anh/chị rất muốn chia sẽ những kiến thức tuyệt vời của bản thân với cộng đồng, hội nhóm của mình bằng các buổi seminar. Thế NHƯNG chỉ vì không gian tổ chức, phòng seminar (phòng, âm thanh, micro head phone, .....), địa điểm seminar thiếu chuyên nghiệp, khiến kế hoạch, dự án đó bị CHẾT ngay từ thai nghén. Hoặc chất lượng seminar không cao bởi quá nhiều yếu tố ngoại vi xen vào.\n\n    Tại nhiều trường đại học, việc học theo nhóm, thuyết trình cuối khóa, bảo vệ đề tài liên miên…tuy nhiên các nhóm lại không có 1 không gian yên tĩnh, chuyên nghiệp như 1 phòng họp nhóm để thực hành… họ luôn phải chui ở 1 phòng trọ chật hẹp và thiếu thiết bị khiến cho việc diễn tập chuẩn bị không được suôn sẻ, dẫn đến kết quả thuyết trình cuối cùng của họ trên lớp không như ý muốn.\n\n     Hiểu được những khó khăn, nguyện vọng của đa phần các bạn sinh viên, quản lý CLB. »»»»» Để hỗ trợ các bạn, anh, chị có không gian phù hợp tuyệt vời để chia sẻ với giá rẻ hơn thị trường 2 lần. ",
    shortDescription: "Phòng đào tạo, seminar, dạy thêm, sinh hoạt CLB đội nhóm",
    phone: "0511324189",
    website: "",
    email: "",
    numSeats: 25,
    location: ObjectId("5c9b3434c54a9e3df2dc4eab"),
    pricing: ObjectId("5c9b3434c54a9e3df2dc4eac"),
    officeRules: ObjectId("5c9b3434c54a9e3df2dc4ead"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b35ccc54a9e3df2dc4ec1"),
    tags: [
      "TranTong"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/IMG_8204.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/IMG_8153.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/IMG_8153.JPG"
    ],
    availableSchedule: [],
    size: 50,
    title: "Trần Tống Office",
    searchTitle: "tran tong office",
    category: "teaching",
    address: "22 Trần Tống, Đà Nẵng",
    description: "-Trang thiết bị trong phòng: Có đủ Tivi để trình chiếu, Bảng, Bút viết, Đèn điện, Hệ thống âm thanh, Bàn Ghế.\n- Tiện Nghi kèm theo: điều hòa, máy quạt, bình hoa.\n- Phòng sạch sẽ thoáng mát.\n- Gần chỗ gửi xe, photo tài liệu.\n- Gần khu ăn uống.\n- Ngoài ra nếu các bạn có yêu cầu nào thêm bên mình sẽ liên hệ hỗ trợ (ví dụ phục vụ teabreak buổi trưa, ...).\n- Có xuất VAT theo yêu cầu của khách.",
    shortDescription: "Phòng sạch sẽ thoáng mát.",
    phone: "0511189764",
    website: "",
    email: "",
    numSeats: 30,
    location: ObjectId("5c9b35ccc54a9e3df2dc4ebe"),
    pricing: ObjectId("5c9b35ccc54a9e3df2dc4ebf"),
    officeRules: ObjectId("5c9b35ccc54a9e3df2dc4ec0"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b39b3c54a9e3df2dc4ed4"),
    tags: [
      "Avatar",
      "Hotel",
      "DaNang"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "tv",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/lon_36_88542670.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/lon_36_558246000.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/lon_36_1416971560.jpg"
    ],
    availableSchedule: [],
    size: 200,
    title: "Avatar Hotel",
    searchTitle: "avatar hotel",
    category: "talkshow",
    address: "104 Hoàng Kế Viêm, Đà Nẵng",
    description: "Khách sạn AVATAR là địa điểm lý tưởng để các công ty tổ chức hội nghị, hội thảo hay lễ ký kết hợp đồng, chuyên đề tới hội nghị họp mặt, các sự kiện và triển lãm tại Đà Nẵng. Với kinh nghiệm tổ chức với số lượng sự kiện hàng tháng, AVATAR đã thực sự làm hài lòng khách hàng với sự chuyên nghiệp, cẩn trọng, chu đáo.\n\nTất cả các phòng hội nghị tại AVATAR Đà Nẵng đều được trang bị các trang thiết bị truyền thông hiện đại, có thể đáp ứng được những yêu cầu khắt khe nhất để tổ chức hội nghị, hội thảo quốc tế. Một hệ thống điều hòa nhiệt độ thân thiện với môi trường vừa được đưa vào sử dụng sẽ giúp cho các phòng hội nghị luôn được cân bằng toàn thời gian.\n\nKhách sạn AVATAR có đủ các loại phòng họp - hội nghị và nắm vững các cách bố trí phù hợp nhất, đáp ứng theo số lượng người tham dự, hình thức.",
    shortDescription: "Khách sạn AVATAR là địa điểm lý tưởng để các công ty tổ chức hội nghị, hội thảo hay lễ ký kết hợp đồng, chuyên đề tới hội nghị họp mặt, các sự kiện và triển lãm tại Đà Nẵng. Với kinh nghiệm tổ chức với số lượng sự kiện hàng tháng, AVATAR đã thực sự làm hài lòng khách hàng với sự chuyên nghiệp, cẩn trọng, chu đáo.",
    phone: "0511456425",
    website: "avatarhotel.com",
    email: "avatarhotel@gmail.com",
    numSeats: 150,
    location: ObjectId("5c9b39b3c54a9e3df2dc4ed1"),
    pricing: ObjectId("5c9b39b3c54a9e3df2dc4ed2"),
    officeRules: ObjectId("5c9b39b3c54a9e3df2dc4ed3"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b3d30c54a9e3df2dc4ee7"),
    tags: [
      "HAIAN",
      "DaNang"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/6_HaiAn.jpg"
    ],
    availableSchedule: [],
    size: 40,
    title: "HAIAN Beach Hotel",
    searchTitle: "haian beach hotel",
    category: "meeting",
    address: "278 Võ Nguyên Giáp, Đà Nẵng",
    description: "Khách sạn Hải An là nơi lý tưởng để các công ty, đoàn thể tổ chức các hội nghị, hội thảo, triển lãm trong nước hay quốc tế, với nhiều phòng chức năng và đầy đủ trang thiết bị hội họp hiện đại nhất mang lại sự đẳng cấp cho các hội thảo. Với sức chứa hơn 350 khách, mỗi góc của ballroom được thiết kế rất tinh xảo, hiện đại, dễ dàng set up theo mọi nhu cầu đặc biệt của Quý khách, đáp ứng được cho những hội thảo đòi hỏi sự chuyên nghiệp, đẳng cấp và mang tính bảo mật cao nhất.\n\nVới những gói hội nghị và hội thảo đặc biệt Quý khách sẽ được tặng thêm tiệc nhẹ giữa giờ.",
    shortDescription: "Phòng họp hiện đại, thiết kế sang trọng",
    phone: "0511987456",
    website: "",
    email: "",
    numSeats: 15,
    location: ObjectId("5c9b3d30c54a9e3df2dc4ee4"),
    pricing: ObjectId("5c9b3d30c54a9e3df2dc4ee5"),
    officeRules: ObjectId("5c9b3d30c54a9e3df2dc4ee6"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b406fc54a9e3df2dc4ef6"),
    tags: [
      "OneOpera",
      "DaNang"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/7_1.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/7_.jpg"
    ],
    availableSchedule: [],
    size: 200,
    title: "One Opera",
    titleSearch: "one opera",
    category: "talkshow",
    address: "115 Nguyễn Văn Linh, Đà Nẵng",
    description: "Tất cả các phòng hội nghị đều được trang bị các trang thiết bị truyền thông hiện đại, có thể đáp ứng được những yêu cầu khắt khe nhất để tổ chức hội nghị, hội thảo quốc tế bao gồm hệ thống mạng không dây, hệ thống âm thanh và các công cụ dịch thuật hiện đại. Một hệ thống điều hòa nhiệt độ thân thiện với môi trường vừa được đưa vào sử dụng sẽ giúp cho các phòng hội nghị luôn được cân bằng toàn thời gian.",
    shortDescription: "Khách sạn One Opera Danang là địa điểm lý tưởng để những công ty tổ chức hội nghị, họp mặt, các sự kiện và triễn lãm an tâm khi tìm một địa điểm mới ở khu vực Đông Nam Á.",
    phone: "0511947283",
    website: "",
    email: "",
    numSeats: 100,
    location: ObjectId("5c9b406fc54a9e3df2dc4ef3"),
    pricing: ObjectId("5c9b406fc54a9e3df2dc4ef4"),
    officeRules: ObjectId("5c9b406fc54a9e3df2dc4ef5"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b4303c54a9e3df2dc4f03"),
    tags: [
      "Deutsches Haus"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/6_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/9_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/4_454x340.jpg"
    ],
    availableSchedule: [],
    size: 50,
    title: "Deutsches Haus",
    searchTitle: "deutsches haus",
    category: "meeting",
    address: "33 Lê Duẩn, Hồ Chí Minh",
    description: "Vị trí này gần các đại sứ quán, khách sạn, trung tâm mua sắm, các địa danh lịch sử Cao ốc Hạng A. Đây sẽ là tòa nhà văn phòng hàng đầu tại Thành phố Hồ Chí Minh. Chất lượng của Tòa nhà sẽ cao hơn rất nhiều so với phân khúc hiện có trên thị trường.",
    shortDescription: "Khu Trung tâm Thương mại sang trọng, đối diện Đại sứ quán Hoa Kỳ. Hầu hết các khu văn phòng hàng đầu đều nằm trong vòng 5 phút lái xe.",
    phone: "012345134",
    website: "",
    email: "",
    numSeats: 20,
    location: ObjectId("5c9b4303c54a9e3df2dc4f00"),
    pricing: ObjectId("5c9b4303c54a9e3df2dc4f01"),
    officeRules: ObjectId("5c9b4303c54a9e3df2dc4f02"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b43ccc54a9e3df2dc4f07"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/3_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/4_454x340.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/6_454x340.jpg"
    ],
    availableSchedule: [],
    size: 40,
    title: "Saigon Tower",
    searchTitle: "saigon tower",
    category: "meeting",
    address: "29 Lê Duẩn, Hồ Chí Minh",
    description: "Một trong những trung tâm thương mại Regus tại Thành phố Hồ Chí Minh là Saigon Tower là một tòa nhà nổi tiếng nằm tại khu trung tâm thương mại của thành phố. Trụ sở Regus nằm trên tầng 16, từ đây chúng ta có thể thấy một số cảnh đẹp của khu vực xung quanh và sông Sài Gòn. Đây là một tòa nhà lớn có mặt tiền được lát đá granit rất ấn tượng với phong cách kiến trúc đặc biệt là điểm đến của nhiều tập đoàn quốc tế. Ở đây có sự hiện diện của các công ty luật, công ty tư vấn quản lý, hãng hàng không quốc tế, ngân hàng và các công ty dầu khí. Saigon Tower nằm đối diện trực tiếp với lãnh sự quán Mỹ và Pháp và nằm cạnh lãnh sự quán Anh.Tòa nhà nằm tại một vị trí thuận tiện cho giao thông.",
    shortDescription: "Một trong những trung tâm thương mại Regus tại Thành phố Hồ Chí Minh là Saigon Tower là một tòa nhà nổi tiếng nằm tại khu trung tâm thương mại của thành phố.",
    phone: "05123542",
    website: "",
    email: "",
    numSeats: 5,
    location: ObjectId("5c9b43ccc54a9e3df2dc4f04"),
    pricing: ObjectId("5c9b43ccc54a9e3df2dc4f05"),
    officeRules: ObjectId("5c9b43ccc54a9e3df2dc4f06"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5c9b44b4c54a9e3df2dc4f14"),
    tags: [
      "M-Building"
    ],
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/int-office-example.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/shared-office-example.jpg"
    ],
    availableSchedule: [],
    size: 50,
    title: "M-Building",
    searchTitle: "m-building",
    category: "meeting",
    address: "C7B Lu Gia, Hồ Chí Minh",
    description: "Thành phố Hồ Chí Minh là một địa điểm tuyệt đẹp mang đến cho bạn sự hứng khởi ngay cả khi vi vu qua những con đường quanh co và những tòa nhà có kiến trúc đa dạng. Do đó, bất cứ trung tâm làm việc linh hoạt nào tại đây cũng phải mang lại được nguồn năng lượng như vậy. Tòa nhà Regus M, tọa lạc tại Khu đô thị ở ngoại ô Phú Mỹ Hưng, dám đối đầu và vượt qua thử thách, với nhiều văn phòng, phòng họp và không gian văn phòng lưu động tuyệt vời. Tòa nhà này thân thiện với môi trường theo chứng nhận EDGE – là nơi lý tưởng dành cho các chuyên gia hiện đại, những người cần một nơi làm việc phù hợp với triết lý cá nhân.\n\nVới kết nối Wi-Fi tốc độ cao, hỗ trợ hành chính tại chỗ thân thiện, không gian được điều chỉnh nhiệt độ và ngập tràn ánh sáng tự nhiên, cũng thật dễ hiểu lý do tại sao trung tâm này lại được nhiều doanh nghiệp hàng đầu ưa chuộng. Kết nối giao thông công cộng vô cùng thuận tiện với các điểm xe buýt Nhà mẫu Phú Mỹ Hưng và Trường Nam Sài Gòn bên kia đường. Chỉ cách Trung tâm thương mại Crescent Mall nổi tiếng 5 phút đi bộ và nằm đối diện Trung tâm Hội nghị và Triển lãm Sài Gòn, trung tâm này trở thành địa điểm thuận tiện cho việc mua sắm và tổ chức sự kiện. Hơn thế nữa, trung tâm còn được bao bọc bởi các không gian xanh tráng lệ gồm Công viên Nam Sài Gòn and Công viên Hồ Bán Nguyệt cũng như Sân tập Golf Phú Mỹ Hưng đẳng cấp thế giới.Trung tâm của Regus\n\nTòa nhà Regus M là trung tâm kinh doanh kiểu mẫu thể hiện những tiềm năng đích thực của nơi làm việc linh hoạt. Tại vị trí đắc địa này, bạn sẽ có thể sử dụng Wi-Fi siêu nhanh, kết nối giao thông thuận tiện và tổ hợp không gian làm việc được trang bị đầy đủ để doanh nghiệp của bạn lựa chọn.",
    shortDescription: "Thành phố Hồ Chí Minh là một địa điểm tuyệt đẹp mang đến cho bạn sự hứng khởi ngay cả khi vi vu qua những con đường quanh co và những tòa nhà có kiến trúc đa dạng. Do đó, bất cứ trung tâm làm việc linh hoạt nào tại đây cũng phải mang lại được nguồn năng lượng như vậy.",
    phone: "032124534",
    website: "",
    email: "",
    numSeats: 10,
    location: ObjectId("5c9b44b4c54a9e3df2dc4f11"),
    pricing: ObjectId("5c9b44b4c54a9e3df2dc4f12"),
    officeRules: ObjectId("5c9b44b4c54a9e3df2dc4f13"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0,
    status: "pending"
  },
  {
    _id: ObjectId("5ca088184433ea13b4adf847"),
    tags: [
      "haha"
    ],
    reviews: [
      ObjectId("5ca35e99dcff777e5e3a326b")
    ],
    amenities: [
      "airConditioning",
      "tv"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/AI.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/autumn.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/bhutan.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/cc.jpg"
    ],
    availableSchedule: [],
    size: 14,
    title: "dep trai 4",
    category: "meeting",
    address: "fsdfsd,,,, Hà Nội",
    description: "asfsdfsdf sdf sd",
    shortDescription: "asdas",
    phone: "423423",
    website: "",
    email: "",
    numSeats: 3,
    location: ObjectId("5caa2df7b0e43e0fe8d48272"),
    pricing: ObjectId("5caa2df7b0e43e0fe8d48273"),
    officeRules: ObjectId("5caa2df7b0e43e0fe8d48274"),
    host: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    __v: 0,
    status: "active",
    searchTitle: "dep trai 4"
  },
  {
    _id: ObjectId("5ca6307e90485c1d032a12d0"),
    tags: [],
    reviews: [],
    amenities: [
      "wifi",
      "tv"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/558338.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/558292.jpg"
    ],
    availableSchedule: [],
    size: 19,
    title: "Test",
    category: "meeting",
    address: "95 Le Trong Tan,, Đà Nẵng",
    description: "Anh và tôi thật ra gặp nhau và quen nhau cũng đã được mấy năm\nMà chẳng có chi hơn lời hỏi thăm\nRằng giờ này đã ăn sáng chưa?\nỞ bên đấy nắng hay mưa? ",
    shortDescription: "Anh và tôi thật ra gặp nhau và quen nhau cũng đã được mấy năm ",
    phone: "123456765",
    website: "",
    email: "",
    numSeats: 10,
    location: ObjectId("5caf660619b80424711ffc07"),
    pricing: ObjectId("5caf660619b80424711ffc08"),
    officeRules: ObjectId("5caf660619b80424711ffc09"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    searchTitle: "test",
    __v: 0,
    status: "active"
  },
  {
    _id: ObjectId("5ca9cd33135c6317cc85a1dd"),
    tags: [
      "vip",
      "phannguyen"
    ],
    status: "active",
    reviews: [],
    amenities: [
      "wifi",
      "tv",
      "airConditioning",
      "projector",
      "whiteBoard"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/1_Chancery_Lane_Community_Bar_.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/AKrqoFYg.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/hg7nOeVw.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/2_Wonderbread_DC-54.jpg"
    ],
    availableSchedule: [],
    size: 140,
    title: "WeWork E. Town Central",
    category: "talkshow",
    address: "11 Doan Van Bo, Ward 12, District 4, Hồ Chí Minh",
    description: "Located in District 4, WeWork’s coworking space in E. Town Central puts your team in the center of the action. We’ve transformed four floors in this modern high-rise into beautiful communal spaces, sleek private offices, and unique meeting rooms. A selection of couches and share tables offer style and comfort for client meetings, while individual phone booths give you space to take private calls. Commuting is simple with parking readily available nearby; you’ll also have easy access to Districts 1, 3, 5, and Nha Be from this location. Need a break between tasks? Take a walk to the riverfront or take in the scenery along the historic Mong Bridge. After work, the neighborhood is bursting with restaurants and street vendors, giving you countless options for client dinners or team outings. Schedule a visit today to secure your spot at this convenient coworking space in District 4.",
    shortDescription: "Finding Office Space in E. Town Central",
    phone: "0349689410",
    website: "",
    email: "",
    numSeats: 20,
    location: ObjectId("5ca9cd33135c6317cc85a1da"),
    pricing: ObjectId("5ca9cd33135c6317cc85a1db"),
    officeRules: ObjectId("5ca9cd33135c6317cc85a1dc"),
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    searchTitle: "wework e. town central",
    __v: 0
  },
  {
    _id: ObjectId("5caf656b19b80424711ffbec"),
    tags: [
      "Chir Laf Test",
      "af",
      "fd"
    ],
    status: "pending",
    reviews: [],
    amenities: [
      "wifi",
      "airConditioning",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/558292.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/G4JK02t8OSui_xqYnAJ-EM8lUpk-4F_EdhGLpd_E4jw.png"
    ],
    availableSchedule: [],
    size: 10,
    title: "Chir Laf Test",
    category: "meeting",
    address: "12 Ham Nghi,, Hà Nội",
    description: "Khong gian dep, ngay trung tam, gan sieu thi, co bai do xe",
    shortDescription: "Thoang mat, rong rai",
    phone: "123123123",
    website: "",
    email: "",
    numSeats: 12,
    location: ObjectId("5caf65f719b80424711ffc04"),
    pricing: ObjectId("5caf65f719b80424711ffc05"),
    officeRules: ObjectId("5caf65f719b80424711ffc06"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    searchTitle: "chir laf test",
    __v: 0
  },
  {
    _id: ObjectId("5caf667519b80424711ffc0d"),
    tags: [],
    status: "pending",
    reviews: [],
    amenities: [
      "tv",
      "projector"
    ],
    bookings: [],
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c988f55d63cee34458b09f5/558338.jpg"
    ],
    availableSchedule: [],
    size: 10,
    title: "1231241234",
    category: "meeting",
    address: "234 asdf,, Hồ Chí Minh",
    description: "124gasdfasd/asdfasdf  a sdfasdf",
    shortDescription: "asdfdgh",
    phone: "123123123",
    website: "",
    email: "",
    numSeats: 31,
    location: ObjectId("5caf685c19b80424711ffc0f"),
    pricing: ObjectId("5caf685c19b80424711ffc10"),
    officeRules: ObjectId("5caf685c19b80424711ffc11"),
    host: ObjectId("5c988f55d63cee34458b09f5"),
    searchTitle: "1231241234",
    __v: 0
  },
];

const availableSchedules = [
  {
    _id: ObjectId("5c97700e37acf615004b5b8f"),
    slots: [
      4,
      2
    ],
    date: ISODate("2019-03-26T11:54:30.992Z"),
    office: ObjectId("5c97700e37acf615004b5b8e"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09fb"),
    slots: [
      8,
      7,
      9,
      11,
      10
    ],
    date: ISODate("2019-03-27T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09fc"),
    slots: [
      8,
      9,
      10
    ],
    date: ISODate("2019-03-29T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09fd"),
    slots: [
      9,
      10
    ],
    date: ISODate("2019-03-30T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09fe"),
    slots: [
      8,
      11
    ],
    date: ISODate("2019-03-28T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b0a00"),
    slots: [
      1,
      9,
      10,
      11
    ],
    date: ISODate("2019-03-31T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b0a01"),
    slots: [],
    date: ISODate("2019-04-01T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09ff"),
    slots: [
      7,
      8,
      11,
      10,
      9
    ],
    date: ISODate("2019-03-26T08:26:36.016Z"),
    office: ObjectId("5c98923cd63cee34458b09fa"),
    __v: 0
  },
  {
    _id: ObjectId("5c98e8fdc54a9e3df2dc4cd2"),
    slots: [
      3
    ],
    date: ISODate("2019-03-28T14:42:41.972Z"),
    office: ObjectId("5c98e8fdc54a9e3df2dc4cd1"),
    __v: 0
  },
  {
    _id: ObjectId("5c98e8fdc54a9e3df2dc4cd3"),
    slots: [
      3
    ],
    date: ISODate("2019-03-31T14:42:41.972Z"),
    office: ObjectId("5c98e8fdc54a9e3df2dc4cd1"),
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a08"),
    slots: [
      6,
      8
    ],
    date: ISODate("2019-03-23T16:24:53.035Z"),
    office: ObjectId("5c98ef569acaf30bc4da7a06"),
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a09"),
    slots: [
      6,
      7
    ],
    date: ISODate("2019-03-24T16:24:53.035Z"),
    office: ObjectId("5c98ef569acaf30bc4da7a06"),
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a07"),
    slots: [
      6
    ],
    date: ISODate("2019-03-22T16:24:53.035Z"),
    office: ObjectId("5c98ef569acaf30bc4da7a06"),
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a0b"),
    slots: [
      6,
      7,
      8
    ],
    date: ISODate("2019-03-26T16:24:53.035Z"),
    office: ObjectId("5c98ef569acaf30bc4da7a06"),
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a0a"),
    slots: [
      6
    ],
    date: ISODate("2019-03-25T16:24:53.035Z"),
    office: ObjectId("5c98ef569acaf30bc4da7a06"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a11"),
    slots: [
      7,
      6
    ],
    date: ISODate("2019-03-30T15:19:11.095Z"),
    office: ObjectId("5c98f1f29acaf30bc4da7a0f"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a10"),
    slots: [
      6,
      7
    ],
    date: ISODate("2019-03-28T15:19:11.095Z"),
    office: ObjectId("5c98f1f29acaf30bc4da7a0f"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a13"),
    slots: [
      6,
      7,
      8
    ],
    date: ISODate("2019-03-31T15:19:11.095Z"),
    office: ObjectId("5c98f1f29acaf30bc4da7a0f"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a12"),
    slots: [
      7
    ],
    date: ISODate("2019-03-29T15:19:11.095Z"),
    office: ObjectId("5c98f1f29acaf30bc4da7a0f"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a14"),
    slots: [
      6
    ],
    date: ISODate("2019-04-01T15:19:11.095Z"),
    office: ObjectId("5c98f1f29acaf30bc4da7a0f"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a19"),
    slots: [
      3
    ],
    date: ISODate("2019-03-27T15:23:06.568Z"),
    office: ObjectId("5c98f28e9acaf30bc4da7a18"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a1c"),
    slots: [
      11
    ],
    date: ISODate("2019-03-31T15:23:06.568Z"),
    office: ObjectId("5c98f28e9acaf30bc4da7a18"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a1d"),
    slots: [
      11
    ],
    date: ISODate("2019-04-02T15:23:06.568Z"),
    office: ObjectId("5c98f28e9acaf30bc4da7a18"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a1a"),
    slots: [
      2,
      7
    ],
    date: ISODate("2019-03-29T15:23:06.568Z"),
    office: ObjectId("5c98f28e9acaf30bc4da7a18"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a1b"),
    slots: [
      9
    ],
    date: ISODate("2019-03-28T15:23:06.568Z"),
    office: ObjectId("5c98f28e9acaf30bc4da7a18"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cd8"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-03-26T15:27:53.162Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cda"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-03-30T15:27:53.162Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cd9"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-03-28T15:27:53.162Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cdd"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-04-05T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cde"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-04-07T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cdf"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-04-09T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cdb"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-04-01T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4ce1"),
    slots: [
      5,
      6,
      7
    ],
    date: ISODate("2019-04-04T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4ce1"),
    slots: [
      5,
      6,
      7
    ],
    date: ISODate("2019-04-04T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4ce2"),
    slots: [
      6
    ],
    date: ISODate("2019-04-06T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4ce3"),
    slots: [
      6
    ],
    date: ISODate("2019-04-08T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cdc"),
    slots: [
      7,
      8,
      9,
      10,
      11
    ],
    date: ISODate("2019-04-03T15:27:53.163Z"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ce8"),
    slots: [
      8,
      9,
      6
    ],
    date: ISODate("2019-03-28T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ce9"),
    slots: [
      1
    ],
    date: ISODate("2019-03-31T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cea"),
    slots: [
      10,
      1,
      5,
      9,
      8,
      7,
      11
    ],
    date: ISODate("2019-03-26T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ceb"),
    slots: [
      9
    ],
    date: ISODate("2019-03-27T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cec"),
    slots: [
      11,
      10,
      6,
      7,
      8
    ],
    date: ISODate("2019-04-03T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cef"),
    slots: [
      2,
      1,
      10,
      9
    ],
    date: ISODate("2019-04-05T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ced"),
    slots: [
      11,
      7,
      9
    ],
    date: ISODate("2019-03-30T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cf0"),
    slots: [
      7
    ],
    date: ISODate("2019-04-02T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cf1"),
    slots: [
      4
    ],
    date: ISODate("2019-04-01T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cf5"),
    slots: [
      8,
      1,
      3,
      9
    ],
    date: ISODate("2019-04-08T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cf2"),
    slots: [
      6,
      4
    ],
    date: ISODate("2019-03-29T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cf4"),
    slots: [
      6,
      10,
      9
    ],
    date: ISODate("2019-04-07T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4cee"),
    slots: [
      5,
      4
    ],
    date: ISODate("2019-04-04T15:45:07.122Z"),
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    __v: 0
  },
];

const bookedSchedules = [
  {
    _id: ObjectId("5ca0402aee25e11d9c1074d9"),
    slots: [
      4
    ],
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    date: ISODate("2019-04-01T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca04318eefb241e10ffcd64"),
    slots: [
      4,
      5
    ],
    office: ObjectId("5c999873c54a9e3df2dc4d26"),
    date: ISODate("2019-04-02T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca04350eefb241e10ffcd67"),
    slots: [
      6,
      7
    ],
    office: ObjectId("5c999873c54a9e3df2dc4d26"),
    date: ISODate("2019-04-02T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca32d500a97d0192859de1c"),
    slots: [
      5
    ],
    office: ObjectId("5ca088184433ea13b4adf847"),
    date: ISODate("2019-04-02T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca4826adcff777e5e3a3273"),
    slots: [
      11,
      3
    ],
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    date: ISODate("2019-04-09T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48eca90485c1d032a12c4"),
    slots: [
      9
    ],
    office: ObjectId("5c98fd22c54a9e3df2dc4d0c"),
    date: ISODate("2019-04-05T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48f4e90485c1d032a12c7"),
    slots: [
      7
    ],
    office: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    date: ISODate("2019-04-04T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca63f443e71e204ec2b1eeb"),
    slots: [
      7,
      8
    ],
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    date: ISODate("2019-04-07T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca641db1d514514b0c7b964"),
    slots: [
      9
    ],
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    date: ISODate("2019-04-07T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca643cb7f45ca1dc0724491"),
    slots: [
      10
    ],
    office: ObjectId("5c98f969c54a9e3df2dc4cfa"),
    date: ISODate("2019-04-06T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca644553fb5641f54669c45"),
    slots: [
      2
    ],
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    date: ISODate("2019-04-05T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca644dd4d0b3d0d2cf50f3c"),
    slots: [
      3
    ],
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    date: ISODate("2019-04-05T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca64579c592cd1d50289c90"),
    slots: [
      3
    ],
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    date: ISODate("2019-04-05T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca8c7dc78f39c57175c5123"),
    slots: [
      2,
      9
    ],
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    date: ISODate("2019-04-10T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9c31777a2581e2c8794a8"),
    slots: [
      10,
      11,
      7,
      8
    ],
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    date: ISODate("2019-04-09T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cee6135c6317cc85a1f1"),
    slots: [
      1,
      4,
      5
    ],
    office: ObjectId("5ca9cd33135c6317cc85a1dd"),
    date: ISODate("2019-04-08T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa269d78f39c57175c5127"),
    slots: [
      8
    ],
    office: ObjectId("5ca6307e90485c1d032a12d0"),
    date: ISODate("2019-04-16T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab5a7d926efe1ac0fcec4f"),
    slots: [
      11,
      12
    ],
    office: ObjectId("5ca088184433ea13b4adf847"),
    date: ISODate("2019-04-18T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac0fe40ff43a171c6b8c07"),
    slots: [
      13,
      14
    ],
    office: ObjectId("5ca088184433ea13b4adf847"),
    date: ISODate("2019-04-18T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf67a19b80424711ffbe0"),
    slots: [
      1
    ],
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    date: ISODate("2019-04-10T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb02bfacdd1f208f88942b6"),
    slots: [
      12
    ],
    office: ObjectId("5ca088184433ea13b4adf847"),
    date: ISODate("2019-04-19T00:00:00.000Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb1d4b0fe3ffa0bd08fb25a"),
    slots: [
      16,
      17,
      18
    ],
    office: ObjectId("5ca088184433ea13b4adf847"),
    date: ISODate("2019-04-16T00:00:00.000Z"),
    __v: 0
  },

];
const bookings = [
  {
    _id: ObjectId("5ca4826adcff777e5e3a3274"),
    bookee: ObjectId("5ca481cedcff777e5e3a3270"),
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    bookedSchedules: ObjectId("5ca4826adcff777e5e3a3273"),
    payment: ObjectId("5ca4826adcff777e5e3a3272"),
    createdAt: ISODate("2019-04-03T09:52:42.477Z"),
    __v: 0,
    email: "kiennd115@gmail.com",
    firstName: "Doi",
    lastName: "Nguyen",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca48eca90485c1d032a12c5"),
    bookee: ObjectId("5c988f55d63cee34458b09f5"),
    office: ObjectId("5c98fd22c54a9e3df2dc4d0c"),
    bookedSchedules: ObjectId("5ca48eca90485c1d032a12c4"),
    payment: ObjectId("5ca48eca90485c1d032a12c3"),
    createdAt: ISODate("2019-04-03T10:45:30.034Z"),
    __v: 0,
    email: "kienndse04193@fpt.edu.vn",
    firstName: "Kien",
    lastName: "Nguyen Duc",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca48f4e90485c1d032a12c8"),
    bookee: ObjectId("5c973c0bf4b1381a4a117f3a"),
    office: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    bookedSchedules: ObjectId("5ca48f4e90485c1d032a12c7"),
    payment: ObjectId("5ca48f4e90485c1d032a12c6"),
    createdAt: ISODate("2019-04-03T10:47:42.783Z"),
    __v: 0,
    email: "pnbao96@gmail.com",
    firstName: "Bảo",
    lastName: "Phan",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca63f443e71e204ec2b1eec"),
    bookee: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    bookedSchedules: ObjectId("5ca63f443e71e204ec2b1eeb"),
    payment: ObjectId("5ca63f443e71e204ec2b1eea"),
    createdAt: ISODate("2019-04-04T17:30:44.983Z"),
    __v: 0,
    email: "xiaosasori@gmail.com",
    firstName: "www",
    lastName: "Nguyen Minh",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca641db1d514514b0c7b965"),
    bookee: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    bookedSchedules: ObjectId("5ca641db1d514514b0c7b964"),
    payment: ObjectId("5ca641db1d514514b0c7b963"),
    createdAt: ISODate("2019-04-04T17:41:47.264Z"),
    __v: 0,
    email: "xiaosasori@gmail.com",
    firstName: "www",
    lastName: "Nguyen Minh",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca643cb7f45ca1dc0724492"),
    bookee: ObjectId("5c906c8bc548932224ef4e12"),
    office: ObjectId("5c98f969c54a9e3df2dc4cfa"),
    bookedSchedules: ObjectId("5ca643cb7f45ca1dc0724491"),
    payment: ObjectId("5ca643cb7f45ca1dc0724490"),
    createdAt: ISODate("2019-04-04T17:50:03.868Z"),
    __v: 0,
    email: "anhnmse04500@fpt.edu.vn",
    firstName: "Nguyen Minh Anh",
    lastName: "- K11 FUG HN",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca644563fb5641f54669c46"),
    bookee: ObjectId("5c906c8bc548932224ef4e12"),
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    bookedSchedules: ObjectId("5ca644553fb5641f54669c45"),
    payment: ObjectId("5ca644553fb5641f54669c44"),
    createdAt: ISODate("2019-04-04T17:52:22.052Z"),
    __v: 0,
    email: "anhnmse04500@fpt.edu.vn",
    firstName: "Nguyen Minh Anh",
    lastName: "- K11 FUG HN",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca644dd4d0b3d0d2cf50f3d"),
    bookee: ObjectId("5c906c8bc548932224ef4e12"),
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    bookedSchedules: ObjectId("5ca644dd4d0b3d0d2cf50f3c"),
    payment: ObjectId("5ca644dd4d0b3d0d2cf50f3b"),
    createdAt: ISODate("2019-04-04T17:54:37.594Z"),
    __v: 0,
    email: "anhnmse04500@fpt.edu.vn",
    firstName: "Nguyen Minh Anh",
    lastName: "- K11 FUG HN",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca64579c592cd1d50289c91"),
    bookee: ObjectId("5c906c8bc548932224ef4e12"),
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    bookedSchedules: ObjectId("5ca64579c592cd1d50289c90"),
    payment: ObjectId("5ca64579c592cd1d50289c8f"),
    createdAt: ISODate("2019-04-04T17:57:13.280Z"),
    __v: 0,
    email: "anhnmse04500@fpt.edu.vn",
    firstName: "Nguyen Minh Anh",
    lastName: "- K11 FUG HN",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca8c7dc78f39c57175c5124"),
    bookee: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    bookedSchedules: ObjectId("5ca8c7dc78f39c57175c5123"),
    payment: ObjectId("5ca8c7dc78f39c57175c5122"),
    createdAt: ISODate("2019-04-06T15:38:04.285Z"),
    __v: 0,
    email: "anhpdhse04550@fpt.edu.vn",
    firstName: "Pham Dinh Hoang Anh",
    lastName: "- K11 FUG HN",
    phone: "0963392888"
  },
  {
    _id: ObjectId("5ca9c31777a2581e2c8794a9"),
    firstName: "Anh",
    lastName: "Nguyen Minh",
    phone: "+84 96 339 28 88",
    email: "xiaosasori@gmail.com",
    bookee: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    bookedSchedules: ObjectId("5ca9c31777a2581e2c8794a8"),
    payment: ObjectId("5ca9c31777a2581e2c8794a7"),
    createdAt: ISODate("2019-04-07T09:29:59.126Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cee6135c6317cc85a1f2"),
    firstName: "Bảo",
    lastName: "Phan",
    phone: "+84 349 689 410",
    email: "pnbao96@gmail.com",
    bookee: ObjectId("5c973c0bf4b1381a4a117f3a"),
    office: ObjectId("5ca9cd33135c6317cc85a1dd"),
    bookedSchedules: ObjectId("5ca9cee6135c6317cc85a1f1"),
    payment: ObjectId("5ca9cee6135c6317cc85a1f0"),
    createdAt: ISODate("2019-04-07T10:20:22.592Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa269d78f39c57175c5128"),
    bookee: ObjectId("5c988f55d63cee34458b09f5"),
    office: ObjectId("5ca6307e90485c1d032a12d0"),
    bookedSchedules: ObjectId("5caa269d78f39c57175c5127"),
    payment: ObjectId("5caa269d78f39c57175c5126"),
    createdAt: ISODate("2019-04-07T16:34:37.420Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab5a7d926efe1ac0fcec50"),
    firstName: "Bảo",
    lastName: "Phan",
    phone: "+84 349 689 410",
    email: "pnbao96@gmail.com",
    bookee: ObjectId("5c973c0bf4b1381a4a117f3a"),
    office: ObjectId("5ca088184433ea13b4adf847"),
    bookedSchedules: ObjectId("5cab5a7d926efe1ac0fcec4f"),
    payment: ObjectId("5cab5a7d926efe1ac0fcec4e"),
    createdAt: ISODate("2019-04-08T14:28:13.235Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac0fe40ff43a171c6b8c08"),
    firstName: "Bảo",
    lastName: "Phan",
    phone: "+84 349 689 410",
    email: "pnbao96@gmail.com",
    bookee: ObjectId("5c973c0bf4b1381a4a117f3a"),
    office: ObjectId("5ca088184433ea13b4adf847"),
    bookedSchedules: ObjectId("5cac0fe40ff43a171c6b8c07"),
    payment: ObjectId("5cac0fe40ff43a171c6b8c06"),
    createdAt: ISODate("2019-04-09T03:22:12.507Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf67a19b80424711ffbe1"),
    identity: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/id/IMG_9872.JPG",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9a30c8c54a9e3df2dc4da3/id/IMG_9930.JPG"
    ],
    firstName: "Pham Dinh Hoang Anh",
    lastName: "- K11 FUG HN",
    phone: "+84 837 479 696",
    email: "anhpdhse04550@fpt.edu.vn",
    bookee: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    bookedSchedules: ObjectId("5cadf67a19b80424711ffbe0"),
    payment: ObjectId("5cadf67a19b80424711ffbdf"),
    createdAt: ISODate("2019-04-10T13:58:18.625Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb02bfacdd1f208f88942b7"),
    identity: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/id/cat.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/id/autumn.jpg"
    ],
    firstName: "Anh za1",
    lastName: "Nguyen Minh",
    phone: "+84 96 339 28 88",
    email: "xiaosasori@gmail.com",
    bookee: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    office: ObjectId("5ca088184433ea13b4adf847"),
    bookedSchedules: ObjectId("5cb02bfacdd1f208f88942b6"),
    payment: ObjectId("5cb02bfacdd1f208f88942b5"),
    createdAt: ISODate("2019-04-12T06:11:06.454Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb1d4b0fe3ffa0bd08fb25b"),
    identity: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/id/52782460_2247878905434125_8981426680711086080_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/id/52819970_815773655425393_8853715329948319744_n.jpg"
    ],
    firstName: "Bảo",
    lastName: "Phan",
    phone: "+84 349 689 410",
    email: "pnbao96@gmail.com",
    bookee: ObjectId("5c973c0bf4b1381a4a117f3a"),
    office: ObjectId("5ca088184433ea13b4adf847"),
    bookedSchedules: ObjectId("5cb1d4b0fe3ffa0bd08fb25a"),
    payment: ObjectId("5cb1d4b0fe3ffa0bd08fb259"),
    createdAt: ISODate("2019-04-13T12:23:12.260Z"),
    __v: 0
  },

];

const conversations = [
  {
    _id: ObjectId("5ca4832bdcff777e5e3a3276"),
    participants: [
      ObjectId("5ca481cedcff777e5e3a3270"),
      ObjectId("5c973c0bf4b1381a4a117f3a")
    ],
    messages: [
      ObjectId("5ca4832bdcff777e5e3a3275"),
      ObjectId("5ca4877717d9911ae1c88bf0"),
      ObjectId("5ca487eb17d9911ae1c88bf4"),
      ObjectId("5ca487f817d9911ae1c88bf5"),
      ObjectId("5ca88c9fcffdda56ea16dcb0"),
      ObjectId("5ca88d9c78f39c57175c511c")
    ],
    read: true,
    createdAt: ISODate("2019-04-06T11:29:32.771Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca487bf17d9911ae1c88bf2"),
    participants: [
      ObjectId("5ca481cedcff777e5e3a3270"),
      ObjectId("5ca4832bdcff777e5e3a3275")
    ],
    messages: [
      ObjectId("5ca487bf17d9911ae1c88bf1"),
      ObjectId("5ca487d817d9911ae1c88bf3")
    ],
    read: false,
    createdAt: ISODate("2019-04-03T10:15:27.960Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca72de8b9da8b1f60beea3f"),
    read: true,
    participants: [
      ObjectId("5c9edd213a7e4905ac5f6fe6"),
      ObjectId("5c973c0bf4b1381a4a117f3a")
    ],
    messages: [
      ObjectId("5ca72de8b9da8b1f60beea3e"),
      ObjectId("5ca72fa5f95b53131024e33e"),
      ObjectId("5cac3de9b51e4218ed0f1762"),
      ObjectId("5cae03e012d7df1c80a5c3d2")
    ],
    createdAt: ISODate("2019-04-10T14:55:28.133Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca72ffdf95b53131024e340"),
    read: true,
    participants: [
      ObjectId("5c906c8bc548932224ef4e12"),
      ObjectId("5c973c0bf4b1381a4a117f3a")
    ],
    messages: [
      ObjectId("5ca72ffdf95b53131024e33f"),
      ObjectId("5ca733e0605dee12600afe1a"),
      ObjectId("5ca734b6605dee12600afe1b"),
      ObjectId("5ca734cbdd6c250518e9b68f"),
      ObjectId("5ca73634dd6c250518e9b690"),
      ObjectId("5ca73731dd6c250518e9b691")
    ],
    createdAt: ISODate("2019-04-05T11:08:33.474Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88dbb78f39c57175c511e"),
    read: true,
    participants: [
      ObjectId("5c973c0bf4b1381a4a117f3a"),
      ObjectId("5c988f55d63cee34458b09f5")
    ],
    messages: [
      ObjectId("5ca88dbb78f39c57175c511d"),
      ObjectId("5ca88dca78f39c57175c511f"),
      ObjectId("5ca88dd978f39c57175c5120"),
      ObjectId("5ca88de778f39c57175c5121"),
      ObjectId("5caa255f78f39c57175c5125"),
      ObjectId("5caa270a78f39c57175c5129"),
      ObjectId("5caa272f78f39c57175c512a")
    ],
    createdAt: ISODate("2019-04-07T16:37:03.302Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac67023fe2401d34651304"),
    read: false,
    participants: [
      ObjectId("5c9edd213a7e4905ac5f6fe6"),
      ObjectId("5ca42886785cfa1fb0b49e3a")
    ],
    messages: [
      ObjectId("5cac67023fe2401d34651303"),
      ObjectId("5cac67a53fe2401d34651305"),
      ObjectId("5cae1e55be22741eec33c0a7")
    ],
    createdAt: ISODate("2019-04-10T16:48:21.746Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cacc6bb19b80424711ffbd0"),
    read: true,
    participants: [
      ObjectId("5c9a30c8c54a9e3df2dc4da3"),
      ObjectId("5ca42886785cfa1fb0b49e3a")
    ],
    messages: [
      ObjectId("5cacc6bb19b80424711ffbcf"),
      ObjectId("5cacc78519b80424711ffbd1"),
      ObjectId("5cacc79c19b80424711ffbd2"),
      ObjectId("5cacc7a519b80424711ffbd3")
    ],
    createdAt: ISODate("2019-04-09T16:26:13.416Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf6da19b80424711ffbe4"),
    read: false,
    participants: [
      ObjectId("5c9a30c8c54a9e3df2dc4da3"),
      ObjectId("5c973c0bf4b1381a4a117f3a")
    ],
    messages: [
      ObjectId("5cadf6da19b80424711ffbe3"),
      ObjectId("5cae29c319b80424711ffbe8")
    ],
    createdAt: ISODate("2019-04-10T17:37:07.264Z"),
    __v: 0
  },

];

const creditCardInformations = [
  {
    _id: ObjectId("5c935844f3db480b60662302"),
    cardNumber: "123",
    expiresOnMonth: 5,
    expiresOnYear: 2020,
    securityCode: "123456789",
    fullName: "Hoang Van Hiep",
    country: "VietNam",
    createdAt: ISODate("2019-03-21T09:24:20.944Z"),
    __v: 0
  },

];

const locations = [
  {
    _id: ObjectId("5c9072f72e5e350580be85a5"),
    lat: 15.9785431,
    lng: 108.2620534,
    address: "98 thanh xuan, Hanoi",
    __v: 0
  },
  {
    _id: ObjectId("5c90af9073c36f0e0ca0f1ee"),
    lat: 21.0133687,
    lng: 105.5272942,
    address: "69 thanh xuan, Hanoi",
    __v: 0
  },
  {
    _id: ObjectId("5c93b651ba54c40e50e4a879"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93b68ec72894068895bdc3"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93b70a123abf22f4662005"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93b8db586ad30548231b3f"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93b915fc76560f480b4263"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93bb42fc76560f480b426e"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93bb7efc76560f480b4279"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c93bfbb4020061cd4ff20d6"),
    lat: 21.0170303,
    lng: 105.7839017,
    address: "Keangnam, Mễ Trì, Từ Liêm, Hanoi, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9451301b99540b24252a1d"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9452098259b200a861d2e7"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9741ffca22b41b5bf25599"),
    lat: 21.0222742,
    lng: 105.8163242,
    address: "22 Thành Công, Ba Đình, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c97700e37acf615004b5b8b"),
    lat: 28.4089123,
    lng: 77.3177894,
    address: "Faridabad, Haryana, India",
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09f7"),
    lat: 10.8507688,
    lng: 106.7985617,
    address: "Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Hồ Chí Minh 715650, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98e8fdc54a9e3df2dc4cce"),
    lat: 41.670293,
    lng: -87.620825,
    address: "12312 S Michigan Ave, Chicago, IL 60628, USA",
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a03"),
    lat: 21.0091819,
    lng: 105.5309972,
    address: "Tòa nhà Viettel - Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a0c"),
    lat: 21.0133687,
    lng: 105.5272942,
    address: "KM29 Đại Lộ Thăng Long, Thạch Hoà, Thạch Thất, Khu GD&ĐT, Khu CNC Hòa Lạc Hà Nội 155300, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98f28d9acaf30bc4da7a15"),
    lat: 21.027964,
    lng: 105.8510132,
    address: "Hoàn Kiếm, Hanoi, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cd4"),
    lat: 10.802338,
    lng: 106.720701,
    address: "15 Đường Nguyễn Văn Thương, Phường 25, Bình Thạnh, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ce4"),
    lat: 10.7984364,
    lng: 106.7517804,
    address: "67 Đường Mai Chí Thọ, An Phú, Quận 2, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98f969c54a9e3df2dc4cf7"),
    lat: 10.800829,
    lng: 106.656605,
    address: "37 Cộng Hòa, Phường 4, Tân Bình, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c98fd22c54a9e3df2dc4d09"),
    lat: 10.792005,
    lng: 106.6879873,
    address: "22 Nguyễn Văn Nguyễn, Tân Định, Quận 1, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c99975bc54a9e3df2dc4d18"),
    lat: 10.7793721,
    lng: 106.6898306,
    address: "39 Trần Quốc Thảo, Phường 6, Quận 3, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c999873c54a9e3df2dc4d23"),
    lat: 10.769514,
    lng: 106.6821349,
    address: "33 Cao Thắng, Phường 2, Quận 3, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c999a17c54a9e3df2dc4d31"),
    lat: 10.769514,
    lng: 106.6821349,
    address: "33 Cao Thắng, Phường 2, Quận 3, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c999bcbc54a9e3df2dc4d3e"),
    lat: 10.7840377,
    lng: 106.6840031,
    address: "180 Lý Chính Thắng, Phường 9, Quận 3, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c999cc7c54a9e3df2dc4d4c"),
    lat: 10.768371,
    lng: 106.698283,
    address: "55/29 Lê Thị Hồng Gấm, Phường Nguyễn Thái Bìn, Quận 1, Hồ Chí Minh, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c999fe9c54a9e3df2dc4d5f"),
    lat: 21.0315367,
    lng: 105.7831518,
    address: "78 Phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c99a1a8c54a9e3df2dc4d6e"),
    lat: 20.9629564,
    lng: 105.7643,
    address: "20 Lê Trọng Tấn, Hà Cầu, Hà Đông, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a1d74c54a9e3df2dc4d93"),
    lat: 21.0262507,
    lng: 105.8460146,
    address: "58 Hai Bà Trưng, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3956c54a9e3df2dc4da4"),
    lat: 20.9797258,
    lng: 105.7874647,
    address: "Trần Phú, Văn Quán, Hà Đông, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3b13c54a9e3df2dc4db7"),
    lat: 21.0229461,
    lng: 105.8098437,
    address: "Nguyễn Chí Thanh, Ba Đình, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3cf2c54a9e3df2dc4dc6"),
    lat: 21.0155316,
    lng: 105.8164951,
    address: "Thái Hà, Láng Hạ, Đống Đa, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3e96c54a9e3df2dc4dd9"),
    lat: 21.0115475,
    lng: 105.8626896,
    address: "Lương Yên, Bạch Đằng, Hai Bà Trưng, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a41cbc54a9e3df2dc4de9"),
    lat: 20.9797258,
    lng: 105.7874647,
    address: "Trần Phú, Văn Quán, Hà Đông, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4858c54a9e3df2dc4dfa"),
    lat: 20.9959104,
    lng: 105.8576533,
    address: "Minh Khai, Hai Bà Trưng, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a495ec54a9e3df2dc4e0d"),
    lat: 21.0306198,
    lng: 105.7748661,
    address: "Nguyễn Hoàng, Mỹ Đình 2, Từ Liêm, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4b38c54a9e3df2dc4e20"),
    lat: 21.023216,
    lng: 105.7948113,
    address: "Yên Hòa, Yên Hoà, Cầu Giấy, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4d3ac54a9e3df2dc4e33"),
    lat: 21.0115475,
    lng: 105.8626896,
    address: "Lương Yên, Bạch Đằng, Hai Bà Trưng, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4e60c54a9e3df2dc4e43"),
    lat: 21.0060791,
    lng: 105.8040298,
    address: "Hoàng Đạo Thúy, Thanh Xuân, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b15c7c54a9e3df2dc4e54"),
    lat: 20.9651796,
    lng: 105.8415939,
    address: "Thanh Xuân, Hoàng Liệt, Hoàng Mai, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b16f6c54a9e3df2dc4e64"),
    lat: 20.9797258,
    lng: 105.7874647,
    address: "Trần Phú, Văn Quán, Hà Đông, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1872c54a9e3df2dc4e77"),
    lat: 21.0259011,
    lng: 105.8538708,
    address: "Đinh Lễ, French Quarter, Tràng Tiền, Hoàn Kiếm, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1a28c54a9e3df2dc4e89"),
    lat: 21.0203854,
    lng: 105.826789,
    address: "Ô Chợ Dừa, Đống Đa, Hanoi, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1c3dc54a9e3df2dc4e9c"),
    lat: 21.0261271,
    lng: 105.8555514,
    address: "Phố Ngô Quyền, Hoàn Kiếm, Hà Nội, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b3434c54a9e3df2dc4eab"),
    lat: 16.0594744,
    lng: 108.2117482,
    address: "155 Nguyễn Văn Linh, Vĩnh Trung, Thanh Khê, Đà Nẵng 550000, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b35ccc54a9e3df2dc4ebe"),
    lat: 16.0588187,
    lng: 108.2116724,
    address: "22 Trần Tống, Vĩnh Trung, Thanh Khê, Đà Nẵng 550000, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b39b3c54a9e3df2dc4ed1"),
    lat: 16.0491458,
    lng: 108.2454209,
    address: "104 Hoàng Kế Viêm, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    __v: 0
  },
  {
    _id: ObjectId("5c9b3d30c54a9e3df2dc4ee4"),
    lat: 16.0531226,
    lng: 108.2476443,
    address: "278 Võ Nguyên Giáp, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    __v: 0
  },

];

const messages = [
  {
    _id: ObjectId("5ca422b7785cfa1fb0b49e38"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5c906c8bc548932224ef4e12"),
    content: "halo",
    createdAt: ISODate("2019-04-03T03:04:23.399Z"),
    __v: 0,
    readAt: ISODate("2019-04-03T03:09:46.874Z")
  },
  {
    _id: ObjectId("5ca423c5785cfa1fb0b49e39"),
    from: ObjectId("5c906c8bc548932224ef4e12"),
    to: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    content: "hellu",
    createdAt: ISODate("2019-04-03T03:08:53.629Z"),
    __v: 0,
    readAt: ISODate("2019-04-03T03:10:36.394Z")
  },
  {
    _id: ObjectId("5ca4260ddcff777e5e3a326e"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5ca422b7785cfa1fb0b49e38"),
    content: "haha",
    createdAt: ISODate("2019-04-03T03:18:37.051Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca4832bdcff777e5e3a3275"),
    from: ObjectId("5ca481cedcff777e5e3a3270"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "alo, cho t hoi?",
    createdAt: ISODate("2019-04-03T09:55:55.566Z"),
    __v: 0,
    readAt: ISODate("2019-04-03T10:14:06.159Z")
  },
  {
    _id: ObjectId("5ca4877717d9911ae1c88bf0"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5ca481cedcff777e5e3a3270"),
    content: "helllo",
    createdAt: ISODate("2019-04-03T10:14:15.202Z"),
    __v: 0,
    readAt: ISODate("2019-04-03T10:16:35.939Z")
  },
  {
    _id: ObjectId("5ca487bf17d9911ae1c88bf1"),
    from: ObjectId("5ca481cedcff777e5e3a3270"),
    to: ObjectId("5ca4832bdcff777e5e3a3275"),
    content: "khong co gi",
    createdAt: ISODate("2019-04-03T10:15:27.955Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca487d817d9911ae1c88bf3"),
    from: ObjectId("5ca481cedcff777e5e3a3270"),
    to: ObjectId("5ca4832bdcff777e5e3a3275"),
    content: "alkjsdf",
    createdAt: ISODate("2019-04-03T10:15:52.060Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca487eb17d9911ae1c88bf4"),
    from: ObjectId("5ca481cedcff777e5e3a3270"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "khong c o cai gi o day",
    createdAt: ISODate("2019-04-03T10:16:11.272Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca487f817d9911ae1c88bf5"),
    from: ObjectId("5ca481cedcff777e5e3a3270"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "adfasdfasdf",
    createdAt: ISODate("2019-04-03T10:16:24.792Z"),
    __v: 0,
    readAt: ISODate("2019-04-05T08:23:49.168Z")
  },
  {
    _id: ObjectId("5ca72de8b9da8b1f60beea3e"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "bdsm",
    createdAt: ISODate("2019-04-05T10:28:56.689Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca72fa5f95b53131024e33e"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "bdsm tap2",
    createdAt: ISODate("2019-04-05T10:36:21.335Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca72ffdf95b53131024e33f"),
    from: ObjectId("5c906c8bc548932224ef4e12"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "em yeu truong edm",
    createdAt: ISODate("2019-04-05T10:37:49.262Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca733e0605dee12600afe1a"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c906c8bc548932224ef4e12"),
    content: "yeu ur mom",
    createdAt: ISODate("2019-04-05T10:54:24.758Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca734cbdd6c250518e9b68f"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c906c8bc548932224ef4e12"),
    content: "hello",
    createdAt: ISODate("2019-04-05T10:58:19.960Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca73634dd6c250518e9b690"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c906c8bc548932224ef4e12"),
    content: "heloo2131",
    createdAt: ISODate("2019-04-05T11:04:20.152Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca73731dd6c250518e9b691"),
    from: ObjectId("5c906c8bc548932224ef4e12"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "hi",
    createdAt: ISODate("2019-04-05T11:08:33.317Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88c9fcffdda56ea16dcb0"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5ca481cedcff777e5e3a3270"),
    content: "Hellloooo Kiên",
    createdAt: ISODate("2019-04-06T11:25:19.557Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88d9c78f39c57175c511c"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5ca481cedcff777e5e3a3270"),
    content: "chào bạn",
    createdAt: ISODate("2019-04-06T11:29:32.762Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88dbb78f39c57175c511d"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c988f55d63cee34458b09f5"),
    content: "chào bạnnn",
    createdAt: ISODate("2019-04-06T11:30:03.870Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88dca78f39c57175c511f"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "hello\n",
    createdAt: ISODate("2019-04-06T11:30:18.884Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88dd978f39c57175c5120"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "alo",
    createdAt: ISODate("2019-04-06T11:30:33.058Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88de778f39c57175c5121"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "khong bao gio dung co mong cho\n",
    createdAt: ISODate("2019-04-06T11:30:47.248Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa255f78f39c57175c5125"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "ert\n",
    createdAt: ISODate("2019-04-07T16:29:19.705Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa270a78f39c57175c5129"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c988f55d63cee34458b09f5"),
    content: "heelooolakdjf",
    createdAt: ISODate("2019-04-07T16:36:26.241Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa272f78f39c57175c512a"),
    from: ObjectId("5c988f55d63cee34458b09f5"),
    to: ObjectId("5c988f55d63cee34458b09f5"),
    content: "asdfasdfa hello",
    createdAt: ISODate("2019-04-07T16:37:03.299Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac3de9b51e4218ed0f1762"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    content: "hello Minh Anh",
    createdAt: ISODate("2019-04-09T06:38:33.243Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac67023fe2401d34651303"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5ca42886785cfa1fb0b49e3a"),
    content: "chao anh admin",
    createdAt: ISODate("2019-04-09T09:33:54.542Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac67a53fe2401d34651305"),
    from: ObjectId("5ca42886785cfa1fb0b49e3a"),
    to: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    content: "chao ban",
    createdAt: ISODate("2019-04-09T09:36:37.473Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cacc6bb19b80424711ffbcf"),
    from: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    to: ObjectId("5ca42886785cfa1fb0b49e3a"),
    content: "đấ",
    createdAt: ISODate("2019-04-09T16:22:19.744Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cacc78519b80424711ffbd1"),
    from: ObjectId("5ca42886785cfa1fb0b49e3a"),
    to: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    content: "anh rep nè",
    createdAt: ISODate("2019-04-09T16:25:41.613Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cacc79c19b80424711ffbd2"),
    from: ObjectId("5ca42886785cfa1fb0b49e3a"),
    to: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    content: "test Feedback ok ",
    createdAt: ISODate("2019-04-09T16:26:04.824Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cacc7a519b80424711ffbd3"),
    from: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    to: ObjectId("5ca42886785cfa1fb0b49e3a"),
    content: "ok anh \n",
    createdAt: ISODate("2019-04-09T16:26:13.414Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf6da19b80424711ffbe3"),
    from: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "ok",
    createdAt: ISODate("2019-04-10T13:59:54.396Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cae03e012d7df1c80a5c3d2"),
    from: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    to: ObjectId("5c973c0bf4b1381a4a117f3a"),
    content: "bao dep trai",
    createdAt: ISODate("2019-04-10T14:55:28.029Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cae1e55be22741eec33c0a7"),
    from: ObjectId("5ca42886785cfa1fb0b49e3a"),
    to: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    content: "Phòng đẹp đấy",
    createdAt: ISODate("2019-04-10T16:48:21.628Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cae29c319b80424711ffbe8"),
    from: ObjectId("5c973c0bf4b1381a4a117f3a"),
    to: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    content: "Cảm ơn bạn",
    createdAt: ISODate("2019-04-10T17:37:07.261Z"),
    __v: 0
  },

];

const notifications = [
  {
    _id: ObjectId("5ca8b9656619e616dc46a9e8"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "accept",
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    message: "Your office Office-tel Lexington has been rejected",
    createdAt: ISODate("2019-04-06T14:36:21.581Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca8b9676619e616dc46a9e9"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "accept",
    office: ObjectId("5c98f969c54a9e3df2dc4cfa"),
    message: "Your office Việt Land Office has been rejected",
    createdAt: ISODate("2019-04-06T14:36:23.308Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca8ce7bdb1a0114f0f273bd"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "accept",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "Your office Phúc Quý Office has been accepted",
    createdAt: ISODate("2019-04-06T16:06:19.441Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca8cf3d963d300464d91628"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "review",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "www Nguyen Minh left a review 2.50 on Phúc Quý Office",
    createdAt: ISODate("2019-04-06T16:09:33.480Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5658d5141fd8f3797b"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "accept",
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    message: "Your office Phòng họp Lotus Botique has been accepted",
    createdAt: ISODate("2019-04-07T06:57:26.788Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5758d5141fd8f3797c"),
    user: ObjectId("5c988f55d63cee34458b09f5"),
    type: "accept",
    office: ObjectId("5c9a1d74c54a9e3df2dc4d96"),
    message: "Your office HN Tower Office has been accepted",
    createdAt: ISODate("2019-04-07T06:57:27.814Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5858d5141fd8f3797d"),
    user: ObjectId("5c988f55d63cee34458b09f5"),
    type: "accept",
    office: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    message: "Your office Marvell has been accepted",
    createdAt: ISODate("2019-04-07T06:57:28.680Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5958d5141fd8f3797e"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9a3956c54a9e3df2dc4da7"),
    message: "Your office HỒ GƯƠM PLAZA has been accepted",
    createdAt: ISODate("2019-04-07T06:57:29.590Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5a58d5141fd8f3797f"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9a3b13c54a9e3df2dc4dba"),
    message: "Your office TNR TOWER (VINCOM) has been accepted",
    createdAt: ISODate("2019-04-07T06:57:30.320Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5b58d5141fd8f37980"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9a3cf2c54a9e3df2dc4dc9"),
    message: "Your office VIET TOWER has been accepted",
    createdAt: ISODate("2019-04-07T06:57:31.173Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5b58d5141fd8f37981"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9a3e96c54a9e3df2dc4ddc"),
    message: "Your office SUN ANCORA has been accepted",
    createdAt: ISODate("2019-04-07T06:57:31.926Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f5f58d5141fd8f37982"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9b16f6c54a9e3df2dc4e67"),
    message: "Your office We ShareCoworking has been accepted",
    createdAt: ISODate("2019-04-07T06:57:35.186Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca99f6058d5141fd8f37983"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9b15c7c54a9e3df2dc4e57"),
    message: "Your office MegaShare has been accepted",
    createdAt: ISODate("2019-04-07T06:57:36.250Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9c31777a2581e2c8794aa"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "booking",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "Anh Nguyen Minh book slots 10,11,7,8 on 2019-04-09 - Phúc Quý Office",
    createdAt: ISODate("2019-04-07T09:29:59.312Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9ce34135c6317cc85a1ee"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "accept",
    office: ObjectId("5ca9cd33135c6317cc85a1dd"),
    message: "Your office WeWork E. Town Central has been accepted",
    createdAt: ISODate("2019-04-07T10:17:24.028Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9ce35135c6317cc85a1ef"),
    user: ObjectId("5c988f55d63cee34458b09f5"),
    type: "accept",
    office: ObjectId("5ca6307e90485c1d032a12d0"),
    message: "Your office Test has been accepted",
    createdAt: ISODate("2019-04-07T10:17:25.309Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cee6135c6317cc85a1f3"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "booking",
    office: ObjectId("5ca9cd33135c6317cc85a1dd"),
    message: "Bảo Phan book slots 1,4,5 on 2019-04-08 - WeWork E. Town Central",
    createdAt: ISODate("2019-04-07T10:20:22.770Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab5a7d926efe1ac0fcec51"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    type: "booking",
    office: ObjectId("5ca088184433ea13b4adf847"),
    message: "Bảo Phan book slots 11,12 on 2019-04-18 - dep trai 4",
    createdAt: ISODate("2019-04-08T14:28:13.369Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac0fe40ff43a171c6b8c09"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    type: "booking",
    office: ObjectId("5ca088184433ea13b4adf847"),
    message: "Bảo Phan book slots 13,14 on 2019-04-18 - dep trai 4",
    createdAt: ISODate("2019-04-09T03:22:12.726Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadbd2019b80424711ffbdd"),
    user: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    type: "accept",
    office: ObjectId("5c9a41cbc54a9e3df2dc4dec"),
    message: "Your office Koworking.net has been accepted",
    createdAt: ISODate("2019-04-10T09:53:36.072Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf67a19b80424711ffbe2"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "booking",
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    message: "Pham Dinh Hoang Anh - K11 FUG HN book slots 1 on 2019-04-10 - Phòng họp Lotus Botique",
    createdAt: ISODate("2019-04-10T13:58:18.630Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cae0e544519170afcb8bb67"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "review",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "Anh Nguyen Minh left a review 4.25 on Phúc Quý Office",
    createdAt: ISODate("2019-04-10T15:40:04.766Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caed4e9ff71d916c8f6243d"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "review",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "Anh za Nguyen Minh left a review 3.00 on Phúc Quý Office",
    createdAt: ISODate("2019-04-11T05:47:21.198Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caed50bff71d916c8f6243f"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "review",
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    message: "Anh za Nguyen Minh left a review 3.00 on Phúc Quý Office",
    createdAt: ISODate("2019-04-11T05:47:55.789Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caf868419b80424711ffc3c"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    type: "review",
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    message: "Doi Nguyen left a review 3.00 on Phòng họp Lotus Botique",
    createdAt: ISODate("2019-04-11T18:25:08.542Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb02bfacdd1f208f88942b8"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    type: "booking",
    office: ObjectId("5ca088184433ea13b4adf847"),
    message: "Anh za1 Nguyen Minh book slots 12 on 2019-04-19 - dep trai 4",
    createdAt: ISODate("2019-04-12T06:11:06.598Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb1d4b0fe3ffa0bd08fb25c"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    type: "booking",
    office: ObjectId("5ca088184433ea13b4adf847"),
    message: "Bảo Phan book slots 16,17,18 on 2019-04-16 - dep trai 4",
    createdAt: ISODate("2019-04-13T12:23:12.266Z"),
    __v: 0
  },

];

const officeRules = [
  {
    _id: ObjectId("5c9072f82e5e350580be85a7"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "fsdf",
    __v: 0
  },
  {
    _id: ObjectId("5c90af9073c36f0e0ca0f1f0"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c93b651ba54c40e50e4a87b"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93b68ec72894068895bdc5"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93b70a123abf22f4662007"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93b8db586ad30548231b41"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93b915fc76560f480b4265"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93bb42fc76560f480b4270"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93bb7ffc76560f480b427b"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c93bfbb4020061cd4ff20d8"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9451301b99540b24252a1f"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c9452098259b200a861d2e9"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c9741ffca22b41b5bf2559b"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c97700e37acf615004b5b8d"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09f9"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98e8fdc54a9e3df2dc4cd0"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a05"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "No pets",
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a0e"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98f28e9acaf30bc4da7a17"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cd6"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ce6"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98f969c54a9e3df2dc4cf9"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c98fd22c54a9e3df2dc4d0b"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c99975bc54a9e3df2dc4d1a"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c999873c54a9e3df2dc4d25"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c999a17c54a9e3df2dc4d33"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c999bcbc54a9e3df2dc4d40"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c999cc7c54a9e3df2dc4d4e"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c999fe9c54a9e3df2dc4d61"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c99a1a8c54a9e3df2dc4d70"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a1d74c54a9e3df2dc4d95"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "Tuyệt đối không được hút thuốc cả trong nhà vệ sinh",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3956c54a9e3df2dc4da6"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "No pet ",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3b13c54a9e3df2dc4db9"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "No Pet",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3cf2c54a9e3df2dc4dc8"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a3e96c54a9e3df2dc4ddb"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a41cbc54a9e3df2dc4deb"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4858c54a9e3df2dc4dfc"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a495ec54a9e3df2dc4e0f"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4b38c54a9e3df2dc4e22"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4d3ac54a9e3df2dc4e35"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9a4e60c54a9e3df2dc4e45"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b15c7c54a9e3df2dc4e56"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b16f6c54a9e3df2dc4e66"),
    smokingAllowed: true,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1872c54a9e3df2dc4e79"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1a28c54a9e3df2dc4e8b"),
    smokingAllowed: false,
    partiesAndEventsAllowed: true,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b1c3dc54a9e3df2dc4e9e"),
    smokingAllowed: true,
    partiesAndEventsAllowed: true,
    additionalRules: "Pet allowed",
    __v: 0
  },
  {
    _id: ObjectId("5c9b3434c54a9e3df2dc4ead"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b35ccc54a9e3df2dc4ec0"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b39b3c54a9e3df2dc4ed3"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },
  {
    _id: ObjectId("5c9b3d30c54a9e3df2dc4ee6"),
    smokingAllowed: false,
    partiesAndEventsAllowed: false,
    additionalRules: "",
    __v: 0
  },

];

const paymentAccounts = [
  {
    _id: ObjectId("5c9358fef3db480b60662304"),
    type: "PAYPAL",
    paypal: ObjectId("5c935886f3db480b60662303"),
    creditcard: ObjectId("5c935844f3db480b60662302"),
    createdAt: ISODate("2019-03-21T09:27:26.779Z"),
    __v: 0
  },
];

const payments = [
  {
    _id: ObjectId("5ca4826adcff777e5e3a3272"),
    serviceFee: 100000,
    officePrice: 500000,
    totalPrice: 1000000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-03T09:52:42.473Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48eca90485c1d032a12c3"),
    serviceFee: 32000,
    officePrice: 320000,
    totalPrice: 320000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-03T10:45:30.023Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48f4e90485c1d032a12c6"),
    serviceFee: 20000,
    officePrice: 200000,
    totalPrice: 200000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-03T10:47:42.758Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca63f443e71e204ec2b1eea"),
    serviceFee: 16000,
    officePrice: 80000,
    totalPrice: 160000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:30:44.776Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca641db1d514514b0c7b963"),
    serviceFee: 8000,
    officePrice: 80000,
    totalPrice: 80000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:41:47.120Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca643cb7f45ca1dc0724490"),
    serviceFee: 41000,
    officePrice: 410000,
    totalPrice: 410000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:50:03.713Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca644553fb5641f54669c44"),
    serviceFee: 25000,
    officePrice: 250000,
    totalPrice: 250000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:52:21.744Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca644dd4d0b3d0d2cf50f3b"),
    serviceFee: 25000,
    officePrice: 250000,
    totalPrice: 250000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:54:37.464Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca64579c592cd1d50289c8f"),
    serviceFee: 25000,
    officePrice: 250000,
    totalPrice: 250000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-04T17:57:13.147Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca8c7dc78f39c57175c5122"),
    serviceFee: 50000,
    officePrice: 250000,
    totalPrice: 500000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-06T15:38:04.280Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9c31777a2581e2c8794a7"),
    serviceFee: 32000,
    officePrice: 80000,
    totalPrice: 320000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-07T09:29:59.007Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cee6135c6317cc85a1f0"),
    serviceFee: 195000,
    officePrice: 650000,
    totalPrice: 1950000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-07T10:20:22.470Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caa269d78f39c57175c5126"),
    serviceFee: 5000,
    officePrice: 50000,
    totalPrice: 50000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-07T16:34:37.415Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab5a7d926efe1ac0fcec4e"),
    serviceFee: 10000,
    officePrice: 50000,
    totalPrice: 100000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-08T14:28:13.148Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cac0fe40ff43a171c6b8c06"),
    serviceFee: 10000,
    officePrice: 50000,
    totalPrice: 100000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-09T03:22:12.350Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cadf67a19b80424711ffbdf"),
    serviceFee: 50000,
    officePrice: 500000,
    totalPrice: 500000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-10T13:58:18.621Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb02bfacdd1f208f88942b5"),
    serviceFee: 5000,
    officePrice: 50000,
    totalPrice: 50000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-12T06:11:06.360Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb1d4b0fe3ffa0bd08fb259"),
    serviceFee: 15000,
    officePrice: 50000,
    totalPrice: 150000,
    paymentMethod: "paypal",
    createdAt: ISODate("2019-04-13T12:23:12.248Z"),
    __v: 0
  },

];

const payoutPendings = [
  {
    _id: ObjectId("5ca6130018dc9918808b566c"),
    status: "paid",
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    money: 1188000,
    createdAt: ISODate("2019-04-04T14:21:52.775Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88c63cffdda56ea16dcaf"),
    status: "paid",
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    money: 1260000,
    createdAt: ISODate("2019-04-07T10:27:31.806Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca88d4d78f39c57175c511b"),
    status: "paid",
    host: ObjectId("5c988f55d63cee34458b09f5"),
    money: 180000,
    createdAt: ISODate("2019-04-07T10:27:09.080Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cfb1135c6317cc85a1f4"),
    status: "paid",
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    money: 3645000,
    createdAt: ISODate("2019-04-07T10:24:57.926Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cab75e578f39c57175c512c"),
    status: "paid",
    host: ObjectId("5c988f55d63cee34458b09f5"),
    money: 45000,
    createdAt: ISODate("2019-04-09T06:44:00.410Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb02fa49d37c422c07fda1b"),
    status: "unpaid",
    host: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    money: 225000,
    createdAt: ISODate("2019-04-12T06:26:44.827Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cb1e3e0fe3ffa0bd08fb25d"),
    status: "unpaid",
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    money: 450000,
    createdAt: ISODate("2019-04-13T13:28:00.417Z"),
    __v: 0
  },

];

const paypalInformations = [
  {
    _id: ObjectId("5c935886f3db480b60662303"),
    email: "hiepnb97@gmail.com",
    createdAt: ISODate("2019-03-21T09:25:26.787Z"),
    __v: 0
  },

];

const pricings = [
  {
    _id: ObjectId("5c9072f72e5e350580be85a6"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c90af9073c36f0e0ca0f1ef"),
    basePrice: 200000,
    __v: 0
  },
  {
    _id: ObjectId("5c93b651ba54c40e50e4a87a"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93b68ec72894068895bdc4"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93b70a123abf22f4662006"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93b8db586ad30548231b40"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93b915fc76560f480b4264"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93bb42fc76560f480b426f"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93bb7ffc76560f480b427a"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c93bfbb4020061cd4ff20d7"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c9451301b99540b24252a1e"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c9452098259b200a861d2e8"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c9741ffca22b41b5bf2559a"),
    basePrice: 500000,
    __v: 0
  },
  {
    _id: ObjectId("5c97700e37acf615004b5b8c"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c98923cd63cee34458b09f8"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c98e8fdc54a9e3df2dc4ccf"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c98ef569acaf30bc4da7a04"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c98f1f29acaf30bc4da7a0d"),
    basePrice: 300000,
    __v: 0
  },
  {
    _id: ObjectId("5c98f28d9acaf30bc4da7a16"),
    basePrice: 500000,
    __v: 0
  },
  {
    _id: ObjectId("5c98f410c54a9e3df2dc4cd5"),
    basePrice: 80000,
    __v: 0
  },
  {
    _id: ObjectId("5c98f80fc54a9e3df2dc4ce5"),
    basePrice: 300000,
    __v: 0
  },
  {
    _id: ObjectId("5c98f969c54a9e3df2dc4cf8"),
    basePrice: 410000,
    __v: 0
  },
  {
    _id: ObjectId("5c98fd22c54a9e3df2dc4d0a"),
    basePrice: 320000,
    __v: 0
  },
  {
    _id: ObjectId("5c99975bc54a9e3df2dc4d19"),
    basePrice: 425000,
    __v: 0
  },
  {
    _id: ObjectId("5c999873c54a9e3df2dc4d24"),
    basePrice: 1375000,
    __v: 0
  },
  {
    _id: ObjectId("5c999a17c54a9e3df2dc4d32"),
    basePrice: 2500000,
    __v: 0
  },
  {
    _id: ObjectId("5c999bcbc54a9e3df2dc4d3f"),
    basePrice: 650000,
    __v: 0
  },
  {
    _id: ObjectId("5c999cc7c54a9e3df2dc4d4d"),
    basePrice: 500000,
    __v: 0
  },
  {
    _id: ObjectId("5c999fe9c54a9e3df2dc4d60"),
    basePrice: 250000,
    __v: 0
  },
  {
    _id: ObjectId("5c99a1a8c54a9e3df2dc4d6f"),
    basePrice: 250000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a1d74c54a9e3df2dc4d94"),
    basePrice: 500000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a3956c54a9e3df2dc4da5"),
    basePrice: 300000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a3b13c54a9e3df2dc4db8"),
    basePrice: 500000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a3cf2c54a9e3df2dc4dc7"),
    basePrice: 1000000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a3e96c54a9e3df2dc4dda"),
    basePrice: 450000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a41cbc54a9e3df2dc4dea"),
    basePrice: 150000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a4858c54a9e3df2dc4dfb"),
    basePrice: 200000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a495ec54a9e3df2dc4e0e"),
    basePrice: 350000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a4b38c54a9e3df2dc4e21"),
    basePrice: 150000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a4d3ac54a9e3df2dc4e34"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c9a4e60c54a9e3df2dc4e44"),
    basePrice: 800000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b15c7c54a9e3df2dc4e55"),
    basePrice: 250000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b16f6c54a9e3df2dc4e65"),
    basePrice: 100000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b1872c54a9e3df2dc4e78"),
    basePrice: 250000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b1a28c54a9e3df2dc4e8a"),
    basePrice: 230000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b1c3dc54a9e3df2dc4e9d"),
    basePrice: 200000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b3434c54a9e3df2dc4eac"),
    basePrice: 50000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b35ccc54a9e3df2dc4ebf"),
    basePrice: 70000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b39b3c54a9e3df2dc4ed2"),
    basePrice: 3000000,
    __v: 0
  },
  {
    _id: ObjectId("5c9b3d30c54a9e3df2dc4ee5"),
    basePrice: 1000000,
    __v: 0
  },

];

const revenues = [
  {
    _id: ObjectId("5ca48cc09efc0219682155f2"),
    total: 6543000,
    withdrawable: 0,
    host: ObjectId("5c973c0bf4b1381a4a117f3a"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48cc09efc0219682155f3"),
    total: 225000,
    withdrawable: 0,
    host: ObjectId("5c988f55d63cee34458b09f5"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48cc09efc0219682155f4"),
    total: 0,
    withdrawable: 0,
    host: ObjectId("5c9890b2d63cee34458b09f6"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48cc19efc0219682155f5"),
    total: 0,
    withdrawable: 0,
    host: ObjectId("5c9a30c8c54a9e3df2dc4da3"),
    __v: 0
  },
  {
    _id: ObjectId("5ca48cc19efc0219682155f8"),
    total: 370000,
    withdrawable: 135000,
    host: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    __v: 0
  },

];

const reviews = [
  {
    _id: ObjectId("5ca204da8f05f612a8ae607e"),
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/44639176_2009766055798348_2999842138641924096_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/43534318_1861890500596067_2535080751129427968_n.jpg"
    ],
    text: "rdghdf",
    stars: 2.5,
    cleanliness: 2,
    accuracy: 3,
    location: 3,
    checkIn: 2,
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    createdAt: ISODate("2019-04-01T12:32:26.206Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca209108f05f612a8ae607f"),
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/44890960_1340249942809603_1459956145228611584_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/11262400.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/45002899_2166949660240032_5206188270483931136_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/42441922_1806050582777397_6313236208654745600_n.jpg",
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/45089387_1854791881236600_5956254044728066048_n.jpg"
    ],
    text: "zzz",
    stars: 3,
    cleanliness: 3,
    accuracy: 3,
    location: 2,
    checkIn: 4,
    office: ObjectId("5c98f80fc54a9e3df2dc4ce7"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    createdAt: ISODate("2019-04-01T12:50:24.897Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca35e99dcff777e5e3a326b"),
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/review/4_Gas_Tower_Conference_Room_.jpg"
    ],
    text: "ít ghế quá nha",
    stars: 2.75,
    cleanliness: 1,
    accuracy: 4,
    location: 1,
    checkIn: 5,
    office: ObjectId("5ca088184433ea13b4adf847"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    createdAt: ISODate("2019-04-02T13:07:37.024Z"),
    __v: 0
  },
  {
    _id: ObjectId("5ca4900a90485c1d032a12c9"),
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c973c0bf4b1381a4a117f3a/review/52650489_383607429106084_4146650569051734016_n.jpg"
    ],
    text: "phòng có vẻ xịn",
    stars: 4.25,
    cleanliness: 5,
    accuracy: 4,
    location: 4,
    checkIn: 4,
    office: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    user: ObjectId("5c973c0bf4b1381a4a117f3a"),
    createdAt: ISODate("2019-04-03T10:50:50.028Z"),
    __v: 0
  },
  {
    _id: ObjectId("5cae0e544519170afcb8bb66"),
    pictures: [],
    text: "Địa chỉ hơi xa. Không gian thoáng đãng",
    stars: 4.25,
    cleanliness: 4,
    accuracy: 5,
    location: 3,
    checkIn: 5,
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    createdAt: ISODate("2019-04-10T15:40:04.501Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caed4e8ff71d916c8f6243c"),
    pictures: [],
    text: "test",
    stars: 3,
    cleanliness: 3,
    accuracy: 3,
    location: 3,
    checkIn: 3,
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    createdAt: ISODate("2019-04-11T05:47:20.960Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caed50bff71d916c8f6243e"),
    pictures: [
      "https://batah.s3.ap-southeast-1.amazonaws.com/5c9edd213a7e4905ac5f6fe6/review/43879831_480357139039269_8684713525106442240_n.jpg"
    ],
    text: "t2",
    stars: 3,
    cleanliness: 3,
    accuracy: 3,
    location: 3,
    checkIn: 3,
    office: ObjectId("5c98f410c54a9e3df2dc4cd7"),
    user: ObjectId("5c9edd213a7e4905ac5f6fe6"),
    createdAt: ISODate("2019-04-11T05:47:55.563Z"),
    __v: 0
  },
  {
    _id: ObjectId("5caf868419b80424711ffc3b"),
    pictures: [],
    text: "asdfasdfa",
    stars: 3,
    cleanliness: 3,
    accuracy: 3,
    location: 3,
    checkIn: 3,
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    user: ObjectId("5ca481cedcff777e5e3a3270"),
    createdAt: ISODate("2019-04-11T18:25:08.533Z"),
    __v: 0
  },

];

const views = [
  {
    _id: ObjectId("5ca0373cb8756d1dbc3ef7f9"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c999a17c54a9e3df2dc4d34"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373cb8756d1dbc3ef7fa"),
    numView: 2,
    numBooking: 0,
    office: ObjectId("5c999bcbc54a9e3df2dc4d41"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373cb8756d1dbc3ef7fb"),
    numView: 17,
    numBooking: 2,
    office: ObjectId("5c999cc7c54a9e3df2dc4d4f"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef7fc"),
    numView: 2,
    numBooking: 0,
    office: ObjectId("5c999fe9c54a9e3df2dc4d62"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef7fd"),
    numView: 8,
    numBooking: 4,
    office: ObjectId("5c99a1a8c54a9e3df2dc4d71"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef7fe"),
    numView: 21,
    numBooking: 1,
    office: ObjectId("5c9a0a6ac54a9e3df2dc4d84"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef7ff"),
    numView: 2,
    numBooking: 0,
    office: ObjectId("5c9a1d74c54a9e3df2dc4d96"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef800"),
    numView: 3,
    numBooking: 0,
    office: ObjectId("5c9a3956c54a9e3df2dc4da7"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef801"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9a3b13c54a9e3df2dc4dba"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef802"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9a3cf2c54a9e3df2dc4dc9"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef803"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9a3e96c54a9e3df2dc4ddc"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef804"),
    numView: 2,
    numBooking: 0,
    office: ObjectId("5c9a41cbc54a9e3df2dc4dec"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef805"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9a4858c54a9e3df2dc4dfd"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef806"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9a495ec54a9e3df2dc4e10"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef807"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9a4b38c54a9e3df2dc4e23"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef808"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9a4d3ac54a9e3df2dc4e36"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373db8756d1dbc3ef809"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9a4e60c54a9e3df2dc4e46"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80a"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b15c7c54a9e3df2dc4e57"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80b"),
    numView: 3,
    numBooking: 0,
    office: ObjectId("5c9b16f6c54a9e3df2dc4e67"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80c"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b1872c54a9e3df2dc4e7a"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80d"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b1a28c54a9e3df2dc4e8c"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80e"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b1c3dc54a9e3df2dc4e9f"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef80f"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b3434c54a9e3df2dc4eae"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef810"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b35ccc54a9e3df2dc4ec1"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef811"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b39b3c54a9e3df2dc4ed4"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef812"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b3d30c54a9e3df2dc4ee7"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef813"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b406fc54a9e3df2dc4ef6"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef814"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b4303c54a9e3df2dc4f03"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef815"),
    numView: 0,
    numBooking: 0,
    office: ObjectId("5c9b43ccc54a9e3df2dc4f07"),
    __v: 0
  },
  {
    _id: ObjectId("5ca0373eb8756d1dbc3ef816"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5c9b44b4c54a9e3df2dc4f14"),
    __v: 0
  },
  {
    _id: ObjectId("5ca088fd4d6f032c9a1bd132"),
    office: ObjectId("5ca088184433ea13b4adf847"),
    numView: 148,
    numBooking: 7
  },
  {
    _id: ObjectId("5ca6307e90485c1d032a12de"),
    numView: 14,
    numBooking: 1,
    office: ObjectId("5ca6307e90485c1d032a12d0"),
    __v: 0
  },
  {
    _id: ObjectId("5ca9cd33135c6317cc85a1ed"),
    numView: 9,
    numBooking: 1,
    office: ObjectId("5ca9cd33135c6317cc85a1dd"),
    __v: 0
  },
  {
    _id: ObjectId("5caf656b19b80424711ffbed"),
    numView: 1,
    numBooking: 0,
    office: ObjectId("5caf656b19b80424711ffbec"),
    __v: 0
  },
  {
    _id: ObjectId("5caf667519b80424711ffc0e"),
    numView: 2,
    numBooking: 0,
    office: ObjectId("5caf667519b80424711ffc0d"),
    __v: 0
  },

];

module.exports = {
  users, offices, availableSchedules, bookedSchedules, bookings, conversations,
  creditCardInformations, locations, messages, notifications, officeRules, paymentAccounts, payments,
  payoutPendings, paypalInformations, pricings, revenues, reviews, views
};
