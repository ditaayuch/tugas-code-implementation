const divideAndSort = (num) => {
  if (typeof num === "number") {
    const splitNum = (num + "").split("0");
    const sortNum = splitNum.map((item) => item.split("").sort().join(""));
    const result = Number(sortNum.join(""));

    console.log(result);
  } else {
    console.log("Parameter harus bertipe number");
  }
};

divideAndSort(5956560159466056);