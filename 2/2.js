const max = function () {
    let result = [];
    if (arguments.length === 0) {
      return "null";
    } else if (arguments[0] === "" || arguments[0] == 2 ** 53) {
      return "Big Error";
    } else {
      for (const key in arguments) {
        if (
          typeof BigInt(arguments[key]) === "bigint" ||
          Number.isInteger(arguments[key])
        ) {
          result[key] = BigInt(arguments[key]);
        } else {
          return "Big Error";
        }
      }
    }
    result.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  
    return result[result.length - 1];
  };
  
  try {
    console.log("1---------");
    console.log(max(1n, 10n, 5n));
    console.log("2---------");
    console.log(max("10", 5n, 1));
    console.log("3---------");
    console.log(max());
    console.log("4---------");
    console.log(max(2 ** 53 - 1));
    console.log("5---------");
    console.log(max(2 ** 53));
    console.log(max(9007199254740992));
    console.log("7---------");
    console.log(max("10" / 2));
    console.log("8---------");
    console.log(max(10 - 12, 10 - 10, 10 - 11));
    console.log("9---------");
    console.log(max(0n));
    console.log("10---------");
    console.log(max(""));
    console.log("6---------");
    console.log(max("10" / 3));
  } catch (error) {
    console.log("big error");
  }
  