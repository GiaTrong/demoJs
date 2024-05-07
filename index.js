// VARIABLE
function demoVaribale() {
  // demo variable - có 3 loại biến var, let, const
  // chỉ nên dùng let và const thôi
  var bien1 = 1;
  let bien2 = 2;
  const bien3 = 3;
  bien2 = 4;
  bien3 = 5;
  console.log(bien1);
  console.log(bien2);
  console.log(bien3);
}

// SCOP OF VARIABLE
function demoScop() {
  // demo scop of variable
  // biến var: phạm vi là HÀM
  // biến let, const : phạm vi là KHỐI - BLOCK
  function demoScopDetail() {
    var bien1 = 1;

    if (bien1 == 1) {
      var bien12 = 4;
      let bien2 = 2;
      const bien3 = 3;
      console.log(bien1);
      console.log(bien2);
      console.log(bien3);
    }

    console.log(bien12);
    console.log(bien3);
  }

  demoScopDetail();

  console.log(bien1);
}

// DATA TYPE
function dataType() {
  // Number
  console.log(42); // Số nguyên
  console.log(3.14); // Số thực

  // String
  console.log("Hello, world!"); // Chuỗi văn bản

  // Boolean
  console.log(true); // Giá trị đúng
  console.log(false); // Giá trị sai

  // Undefined
  let x; // Khai báo biến mà không gán giá trị
  console.log(x); // undefined

  // Null
  let y = null;
  console.log(y); // null

  // Symbol
  const symbol1 = Symbol("description");
  console.log(symbol1); // Symbol(description)

  // Object
  const human = {
    name: "Trọng",
    age: 21,
  };
  console.log(human);

  // Array
  const arr = [1, 2, 3];
  console.log(arr);
}

// Làm việc với STRING
function doWithString() {
  var fullName = `Le Van A`;
  console.log(fullName.length);

  var myString = `Xin chào! Tôi tên Trọng Tôi năm nay 21 tuổi.`;
  //   console.log(myString.indexOf("Tôi")); // Trả về 10
  //   console.log(myString.indexOf("Hải")); // Trả về -1
  //   console.log(myString.indexOf("Trọng")); // Trả về 18
  //   console.log(myString.indexOf("trọng")); // Trả về -1
  //   console.log(myString.indexOf("Tôi", 11)); // Trả về 23

  //   console.log(myString.slice(10, 21)); // Tôi tên Nam
  //   console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
  //   console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
  //   console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
  //   console.log(myString); // Vẫn giữ nguyên chuỗi gốc

  console.log(myString.replace("Tôi", "Mình"));
  console.log(myString.replace(/Tôi/g, "Mình"));
}

// Làm việc với Array
function doWithArray() {
  var list = ["HTML5", "CSS3", "Javascript"];
  console.log(list.toString());
  // Trả về: "HTML5,CSS3,Javascript"

  var list = ["HTML5", "CSS3", "Javascript"];
  console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
  console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
  console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
  console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
  console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"

  var list = ["HTML5", "CSS3", "Javascript"];
  console.log(list.pop()); // Trả về: "Javascript"
  console.log(list); // Trả về: ["HTML5", "CSS3"]

  var list = ["HTML5", "CSS3", "Javascript"];
  console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
  console.log(list);
  // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

  var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.shift()); // Trả về: "HTML5"
console.log(list); // Trả về: ["CSS3", "Javascript"]
}

console.log("hello")
