module.exports = function toReadable (number) {
  let result = "";
  let myNumber = String(number);
  if (myNumber == 0) return 'zero';
  
  if (myNumber.length === 3) {
    switch (myNumber[0]) {
      case '9':
        result = 'nine hundred';
        break;
      case '8':
        result = 'eight hundred';
        break;
      case '7':
        result = 'seven hundred';
        break;
      case '6':
        result = 'six hundred';
        break;
      case '5':
        result = 'five hundred';
        break;
      case '4':
        result = 'four hundred';
        break;
      case '3':
        result = 'three hundred';
        break;
      case '2':
        result = 'two hundred';
        break;
      case '1':
        result = 'one hundred';
        break;
    }                             
    switch (myNumber[1]) {
      case '9':
        result = result + ' ninety';
        break;
      case '8':
        result = result + ' eighty';
        break;
      case '7':
        result = result + ' seventy';
        break;
      case '6':
        result = result + ' sixty';
        break;
      case '5':
        result = result + ' fifty';
        break;
      case '4':
        result = result + ' forty';
        break;
      case '3':
        result = result + ' thirty';
        break;
      case '2':
        result = result + ' twenty';
        break;
      case '0':
        result;
        break;
    }
    switch (myNumber.slice(1)) {
      case '19':
        return result + ' nineteen';
        break;
      case '18':
        return result + ' eighteen';
        break;
      case '17':
        return result + ' seventeen';
        break;
      case '16':
        return result + ' sixteen';
        break;
      case '15':
        return result + ' fifteen';
        break;
      case '14':
        return result + ' fourteen';
        break;
      case '13':
        return result + ' thirteen';
        break;
      case '12':
        return result + ' twelve';
        break;
      case '11':
        return result + ' eleven';
        break;
      case '10':
        return result + ' ten';
        break;
      case '09':
        return result + ' nine';
        break;
      case '08':
        return result + ' eight';
        break;
      case '07':
        return result + ' seven';
        break;
      case '06':
        return result + ' six';
        break;
      case '05':
        return result + ' five';
        break;
      case '04':
        return result + ' four';
        break;
      case '03':
        return result + ' three';
        break;
      case '02':
        return result + ' two';
        break;
      case '01':
        return result + ' one';
        break;
      case '00':
        result;
        break;
    }
    switch (myNumber[2]) {
      case '9':
        result = result + ' nine';
        break;
      case '8':
        result = result + ' eight';
        break;
      case '7':
        result = result + ' seven';
        break;
      case '6':
        result = result + ' six';
        break;
      case '5':
        result = result + ' five';
        break;
      case '4':
        result = result + ' four';
        break;
      case '3':
        result = result + ' three';
        break;
      case '2':
        result = result + ' two';
        break;
      case '1':
        result = result + ' one';
        break;
      case '0':
        result;
        break;
    }
  }
  if (myNumber.length === 2) {
    switch (myNumber[0]) {
      case '9':
        result = result + 'ninety';
        break;
      case '8':
        result = result + 'eighty';
        break;
      case '7':
        result = result + 'seventy';
        break;
      case '6':
        result = result + 'sixty';
        break;
      case '5':
        result = result + 'fifty';
        break;
      case '4':
        result = result + 'forty';
        break;
      case '3':
        result = result + 'thirty';
        break;
      case '2':
        result = result + 'twenty';
        break;
    }
    switch (myNumber.slice(0)) {
      case '19':
        return result + 'nineteen';
        break;
      case '18':
        return result + 'eighteen';
        break;
      case '17':
        return result + 'seventeen';
        break;
      case '16':
        return result + 'sixteen';
        break;
      case '15':
        return result + 'fifteen';
        break;
      case '14':
        return result + 'fourteen';
        break;
      case '13':
        return result + 'thirteen';
        break;
      case '12':
        return result + 'twelve';
        break;
      case '11':
        return result + 'eleven';
        break;
      case '10':
        return result + 'ten';
        break;
    }
    switch (myNumber[1]) {
      case '9':
        result = result + ' nine';
        break;
      case '8':
        result = result + ' eight';
        break;
      case '7':
        result = result + ' seven';
        break;
      case '6':
        result = result + ' six';
        break;
      case '5':
        result = result + ' five';
        break;
      case '4':
        result = result + ' four';
        break;
      case '3':
        result = result + ' three';
        break;
      case '2':
        result = result + ' two';
        break;
      case '1':
        result = result + ' one';
        break;
    }
  } // <--- работает
  if (myNumber.length === 1) {
    switch (myNumber[0]) {
      case '9':
        result = result + 'nine';
        break;
      case '8':
        result = result + 'eight';
        break;
      case '7':
        result = result + 'seven';
        break;
      case '6':
        result = result + 'six';
        break;
      case '5':
        result = result + 'five';
        break;
      case '4':
        result = result + 'four';
        break;
      case '3':
        result = result + 'three';
        break;
      case '2':
        result = result + 'two';
        break;
      case '1':
        result = result + 'one';
        break;
  }
  }
  return result;
}