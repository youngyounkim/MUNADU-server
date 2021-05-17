import Comments from "./model/Comments";
import Martials from "./model/Martials";
import Reviews from "./model/Reviews";
import Reviews_Replies from "./model/Reviews_Replies";
import Users_Martials from "./model/Users_Martials";
import Users from "./model/Users";
import Channels from "./model/Channels";
import { sequelize } from "./database";

const userSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Users.bulkCreate([
        {
          name: "류제천",
          email: "ryujaecheon@codestates.com",
          password: "1234",
          img: "image",
          address: "codestates",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "김영윤",
          email: "kimyoungyoun@codestates.com",
          password: "1234",
          img: "image",
          address: "codestates",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "김대성",
          email: "kimdaeseong@codestates.com",
          password: "1234",
          img: "image",
          address: "codestates",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const martialSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Martials.bulkCreate([
        {
          name: "WTF 태권도",
          weapon: 0,
          uniform: 0,
          origin: 0,
          sports: 0,
          manner: 0,
          attack: 0,
          nation: "대한민국",
          caption: "대한민국의 국기이자 국제공인스포츠",
          video: "https://www.youtube.com/watch?v=hWzjtwjNgd8",
          kcal: 514,
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTaekwondo&psig=AOvVaw3fh_oBw2s2cAW6iFK3XQPc&ust=1620959851856000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDT-ZLQxfACFQAAAAAdAAAAABAD",
          wiki: "https://namu.wiki/w/%EC%84%B8%EA%B3%84%ED%83%9C%EA%B6%8C%EB%8F%84%EC%97%B0%EB%A7%B9",
        },
        {
          name: "ITF 태권도",
          weapon: 0,
          uniform: 0,
          origin: 0,
          sports: 1,
          manner: 0,
          attack: 0,
          nation: "대한민국",
          caption: "한국의 실전 무예 태권도",
          video: "https://www.youtube.com/watch?v=doLgDKo00MY",
          kcal: 514,
          img: "not yet",
          wiki: "https://namu.wiki/w/%EA%B5%AD%EC%A0%9C%ED%83%9C%EA%B6%8C%EB%8F%84%EC%97%B0%EB%A7%B9?from=ITF%20%ED%83%9C%EA%B6%8C%EB%8F%84",
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const reviewSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Reviews.bulkCreate([
        {
          Martials_id: 1,
          Users_id: 3,
          period: 3,
          comment: "리뷰 남깁니다.",
          score: "4",
          parcticality: "4",
          muscle: "4",
          difficulty: "5",
          intensity: "3",
          injury: "3",
        },
        {
          Martials_id: 2,
          Users_id: 1,
          period: 4,
          comment: "리뷰 남깁니다.",
          score: "4",
          parcticality: "3",
          muscle: "3",
          difficulty: "4",
          intensity: "5",
          injury: "4",
        },
        {
          Martials_id: 1,
          Users_id: 2,
          period: 3,
          comment: "리뷰 남깁니다.",
          score: "4",
          parcticality: "3",
          muscle: "2",
          difficulty: "3",
          intensity: "5",
          injury: "4",
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const userMartialsSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Users_Martials.bulkCreate([
        {
          Martials_id: 1,
          Users_id: 3,
        },
        {
          Martials_id: 2,
          Users_id: 1,
        },
        {
          Martials_id: 1,
          Users_id: 2,
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const commentSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Comments.bulkCreate([
        {
          Martials_id: 1,
          Users_id: 3,
          comment: "한줄평 남깁니다.",
        },
        {
          Martials_id: 2,
          Users_id: 1,
          comment: "한줄평 남깁니다.",
        },
        {
          Martials_id: 1,
          Users_id: 2,
          comment: "한줄평 남깁니다.",
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const reviewRepliesSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Reviews_Replies.bulkCreate([
        {
          Reviews_id: 1,
          Users_id: 3,
          comment: "리뷰에 댓글 답니다.",
        },
        {
          Reviews_id: 2,
          Users_id: 1,
          comment: "리뷰에 댓글 답니다.",
        },
        {
          Reviews_id: 3,
          Users_id: 2,
          comment: "리뷰에 댓글 답니다.",
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};
const channelSeed = async () => {
  sequelize.authenticate().then(async () => {
    try {
      await Channels.bulkCreate([
        {
          name: "비디토리",
          caption: "비디토리 채널",
          url: "https://www.youtube.com/results?search_query=%EB%B9%84%EB%94%94%ED%86%A0%EB%A6%AC",
          img: "Not yet",
        },
        {
          name: "호구커플",
          caption: "호구커플 채널",
          url: "https://www.youtube.com/results?search_query=%ED%98%B8%EA%B5%AC%EC%BB%A4%ED%94%8C",
          img: "Not yet",
        },
        {
          name: "양감독 TV",
          caption: "양감독 TV 채널",
          url: "https://www.youtube.com/channel/UCKxLXXUTY6bt9Dxuu-pJ4Yw",
          img: "Not yet",
        },
      ]);
    } catch (e) {
      console.log(e.message);
    }
  });
};

userSeed();
martialSeed();
reviewSeed();
userMartialsSeed();
commentSeed();
reviewRepliesSeed();
channelSeed();
