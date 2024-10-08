const commonImages = [
  "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1717659487323-7783a99bcf61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const MOCK_EVENTS = [
  {
    id: 1,
    title: "งานแข่งขันแบดมินตัน",
    start_date: "2020-04-01",
    end_date: "2020-04-03",
    location: "มหาวิทยาลัยเชียงใหม่",
    description: "การแข่งขันแบดมินตันระดับประเทศ",
    faculties: ["วิทยาศาสตร์", "เทคโนโลยี"],
    tags: ["แข่งขัน", "แบดมินตัน"],
    images: commonImages,

    email: "contact@cmu.ac.th",
    phone: "053-123-456",
    other_contact: "line: @cmu",
    interested_qty: 100,
  },

  {
    id: 2,
    title: "งานสัมมนาวิชาการ",
    start_date: "2020-05-10",
    end_date: "2020-05-12",
    location: "มหาวิทยาลัยธรรมศาสตร์",
    description: "สัมมนาวิชาการระดับนานาชาติ",
    faculties: ["วิศวกรรมศาสตร์", "บริหารธุรกิจ"],
    tags: ["สัมมนา", "วิชาการ"],
    images: commonImages,
    email: "contact@tu.ac.th",
    phone: "02-123-4567",
    other_contact: "line: @tu",
    interested_qty: 150,
  },
  {
    id: 3,
    title: "งานแสดงศิลปะ",
    start_date: "2020-06-15",
    end_date: "2020-06-20",
    location: "มหาวิทยาลัยศิลปากร",
    description: "แสดงผลงานศิลปะจากนักศึกษาทั่วประเทศ",
    faculties: ["ศิลปกรรมศาสตร์"],
    tags: ["ศิลปะ", "แสดงผลงาน"],
    images: commonImages,
    email: "contact@su.ac.th",
    phone: "034-123-456",
    other_contact: "line: @su",
    interested_qty: 200,
  },
  {
    id: 4,
    title: "งานประกวดนวัตกรรม",
    start_date: "2020-07-01",
    end_date: "2020-07-03",
    location: "มหาวิทยาลัยเกษตรศาสตร์",
    description: "ประกวดนวัตกรรมและเทคโนโลยีใหม่",
    faculties: ["วิทยาศาสตร์", "วิศวกรรมศาสตร์"],
    tags: ["ประกวด", "นวัตกรรม"],
    images: commonImages,
    email: "contact@ku.ac.th",
    phone: "02-123-4568",
    other_contact: "line: @ku",
    interested_qty: 250,
  },
  {
    id: 5,
    title: "งานแข่งขันหุ่นยนต์",
    start_date: "2020-08-10",
    end_date: "2020-08-12",
    location: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    description: "การแข่งขันหุ่นยนต์ระดับประเทศ",
    faculties: ["วิศวกรรมศาสตร์", "เทคโนโลยี"],
    tags: ["แข่งขัน", "หุ่นยนต์"],
    images: commonImages,
    email: "contact@kmutt.ac.th",
    phone: "02-123-4569",
    other_contact: "line: @kmutt",
    interested_qty: 300,
  },
  {
    id: 6,
    title: "งานประชุมวิชาการ",
    start_date: "2020-09-15",
    end_date: "2020-09-17",
    location: "มหาวิทยาลัยมหิดล",
    description: "ประชุมวิชาการระดับนานาชาติ",
    faculties: ["วิทยาศาสตร์", "การแพทย์"],
    tags: ["ประชุม", "วิชาการ"],
    images: commonImages,
    email: "contact@mahidol.ac.th",
    phone: "02-123-4570",
    other_contact: "line: @mahidol",
    interested_qty: 350,
  },
  {
    id: 7,
    title: "งานแสดงดนตรี",
    start_date: "2020-10-20",
    end_date: "2020-10-22",
    location: "มหาวิทยาลัยศรีนครินทรวิโรฒ",
    description: "แสดงดนตรีจากนักศึกษาทั่วประเทศ",
    faculties: ["ดุริยางคศาสตร์"],
    tags: ["ดนตรี", "แสดง"],
    images: commonImages,
    email: "contact@swu.ac.th",
    phone: "02-123-4571",
    other_contact: "line: @swu",
    interested_qty: 400,
  },
  {
    id: 8,
    title: "งานประกวดภาพถ่าย",
    start_date: "2020-11-05",
    end_date: "2020-11-07",
    location: "มหาวิทยาลัยกรุงเทพ",
    description: "ประกวดภาพถ่ายจากนักศึกษาทั่วประเทศ",
    faculties: ["นิเทศศาสตร์"],
    tags: ["ประกวด", "ภาพถ่าย"],
    images: commonImages,
    email: "contact@bu.ac.th",
    phone: "02-123-4572",
    other_contact: "line: @bu",
    interested_qty: 450,
  },
  {
    id: 9,
    title: "งานแข่งขันโปรแกรมมิ่ง",
    start_date: "2020-12-01",
    end_date: "2020-12-03",
    location: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าลาดกระบัง",
    description: "การแข่งขันเขียนโปรแกรมระดับประเทศ",
    faculties: ["วิศวกรรมศาสตร์", "เทคโนโลยีสารสนเทศ"],
    tags: ["แข่งขัน", "โปรแกรมมิ่ง"],
    images: commonImages,
    email: "contact@kmitl.ac.th",
    phone: "02-123-4573",
    other_contact: "line: @kmitl",
    interested_qty: 500,
  },
  {
    id: 10,
    title: "งานสัมมนาเทคโนโลยี",
    start_date: "2021-01-15",
    end_date: "2021-01-17",
    location: "มหาวิทยาลัยเชียงใหม่",
    description: "สัมมนาเทคโนโลยีและนวัตกรรมใหม่",
    faculties: ["วิทยาศาสตร์", "เทคโนโลยี"],
    tags: ["สัมมนา", "เทคโนโลยี"],
    images: commonImages,
    email: "contact@cmu.ac.th",
    phone: "053-123-457",
    other_contact: "line: @cmu",
    interested_qty: 550,
  },
  {
    id: 11,
    title: "งานแสดงภาพยนตร์",
    start_date: "2021-02-20",
    end_date: "2021-02-22",
    location: "มหาวิทยาลัยกรุงเทพ",
    description: "แสดงภาพยนตร์จากนักศึกษาทั่วประเทศ",
    faculties: ["นิเทศศาสตร์"],
    tags: ["ภาพยนตร์", "แสดง"],
    images: commonImages,
    email: "contact@bu.ac.th",
    phone: "02-123-4574",
    other_contact: "line: @bu",
    interested_qty: 600,
  },
];
