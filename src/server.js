import express from "express";
import bodyParser from "body-parser";

const PORT = 3016;
const app = express();

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

const sumText = (txt1, txt2) => {
  const result = txt1 + txt2;
  console.log(txt1, txt2);
};

const toLatter = (t1, t2, t3) => {
  const result = t1 + t2 + t3;
  console.log(t1, t2, t3);
};

const getLength = (data1, data2) => {
  const len1 = data1.length;
  const len2 = data2.length;
  console.log(`첫 번째 문자열의 길이는 ${len1} 이다`);
  console.log(`두 번째 문저열의 길이는 ${len2} 이다`);
};

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);

  sumText("안녕하세요", "저는 해바라기 반 짱구에요.");
  sumText("라이언", "cute");

  toLatter("라이언에게...", "라이언 안뇽?", "어피치가...");

  getLength("카카오프렌즈는 짱이에요.", "깊은산속 옹달샘 누가와서 먹나요");
});
