import React from 'react';
// import * as R from 'ramda';

// const order = [
//     'i', 'l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]

class OrderOfWord extends React.Component {
	//     constructor() {
	//         super();
	//         this.state = {
	//             order: order,
	//             lenthOfOrder: order.length,
	//             givenWord: 'jameela',
	//         };
	//     }

	//     changeStringToArray = () => {
	//         const { givenWord } = this.state;
	//         let stringArray = [];
	//         for (let i = 0; i < givenWord.length; i++) {
	//             stringArray.push(this.state.givenWord.charAt(i));
	//         }
	//         return stringArray;
	//     }

	//     getOrderOfWord = () => {
	//         const charArray = this.changeStringToArray(); // converting string to char array.

	//         const { lenthOfOrder, order } = this.state;
	//         let tempArray = charArray;
	//         let outputArr = [];

	//         for (let i = 0; i < lenthOfOrder; i++) {
	//             const singleChar = order[i];
	//             if (R.includes(singleChar, tempArray)) {
	//                 let count = 0;
	//                 charArray.map((singleElement) => {
	//                     if (singleElement === singleChar) {
	//                         count += 1;
	//                     }
	//                     return count;
	//                 })

	//                 for (let i = 0; i < count; i++) {
	//                     const indexOfChar = R.indexOf(singleChar, tempArray);
	//                     outputArr.push(singleChar); // char added to new array
	//                     tempArray.splice(indexOfChar, 1); // char removed from old array
	//                 }
	//             }
	//         }
	//         return outputArr.join('');
	//     }

	//     getBubbleSortArray = () => {
	//         const list = [1, 67, 74, 1, 0, 100, 11];
	//         const numberList = list;
	//         for (let i = 0; i < list.length - 1; i++) {
	//             for (let j = 0; j < list.length - i - 1; j++) {
	//                 if (numberList[j] > numberList[j + 1]) {
	//                     const temp = numberList[j];
	//                     numberList[j] = numberList[j + 1];
	//                     numberList[j + 1] = temp;
	//                 }
	//             }
	//             return numberList; // bubble sort of list.
	//         }
	//     }

	//     isAlphaBet = (letter) => {
	//         if (((letter.charCodeAt(0) >= 97) && (letter.charCodeAt(0) <= 122))
	//             ||  ((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0) <= 90))) {
	//                 return true;
	//             } return false;
	//     }

	//     getReverseString = (str) => {
	//         // if (str.length === 0) {
	//         //     return "";
	//         // }
	//         // else {
	//         //     return this.getReverseString(str.substr(1)) + str.charAt(0);
	//         // }

	//         // let newStr = "";

	//         // for (let i = str.length-1; i >=0; i--) {
	//         //     newStr += str[i];
	//         // }
	//         // return newStr;

	//         // const strlength = str.length - 1;
	//         // let f = 0;
	//         // let l = strlength;
	//         // while(f < l) {
	//         //     if (this.isAlphaBet(str[f]) && this.isAlphaBet(str[l])) {
	//         //         return str.substr(0, f-1)
	//         //             + str[l]
	//         //             + str[]
	//         //         f++;
	//         //         l--;
	//         //     } else if (this.isAlphaBet(str[f])) {
	//         //         f++;
	//         //     } else if (this.isAlphaBet(str[l])) {
	//         //         l--;
	//         //     } else {
	//         //         console.log('last conditoin');
	//         //     }
	//         // }
	//     }


	//     render() {
	//         const newOrder = this.getOrderOfWord();
	//         const stringReverse = this.getReverseString('B@UD@UM');
	//         return (
	//             <div>
	//                 <h2>
	//                     Order Of Word
	//                 </h2>
	//                 <p>Given Name: {this.state.givenWord}</p>
	//                 <p>New Ordered Word: {newOrder}</p>
	//                 <input type="text" name="inputData" id="1234"/>
	//                 <p>String reverse: {stringReverse}</p>
	//             </div>
	//         );
	//     }
	// }


	// componentWillMount() {
	//     let x = new Date();
	//     let y = new Date(x.getTime() + 10000);
	//     console.log(x);
	//     console.log(y);
	//     while(x.getTime()<y.getTime()){
	//         x = new Date();
	//     }

	//     // while(x) {
	//     //     if (x === 0) {
	//     //         console.log('in infinite loop');
	//     //         x=0;
	//     //         break
	//     //     } 
	//     // }

	// }

	// static getDerivedStateFromProps() {
	//     let x = new Date();
	//     let y = new Date(x.getTime() + 10000);
	//     console.log(x);
	//     console.log(y);
	//     while(x.getTime()<y.getTime()){
	//         x = new Date();
	//     }
	//     return x;
	// }





	// render() {
	//     console.log(1, x, y, z, 'in render*******');
	//     var x=1098;
	//     let y=1234;
	//     const z = 555;  
	//     // setTimeout(console.log(123), 10000);
	//     console.log(10000);
	//     return(
	//         "Hello"
	//     );
	// }

	changeStringToArray = (givenWord) => {
		let stringArray = [];
		for (let i = 0; i < givenWord.length; i++) {
			stringArray.push(givenWord.charAt(i));
		}
		return stringArray;
	}

	getAlphabetOrder = (word) => {
		const arr = this.changeStringToArray(word);
		// const arr = [1, 7, 8, 3, 2, 10, 0];
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i];
			let position = -1;
			let isZero = false;
			for (let j = i - 1; j >= 0; j--) {
				if ((arr[j].charCodeAt()) < key.charCodeAt()) {
					position = j;
					break;
				}
			}
			for (let j = i; j > position; j--) {
				arr[j] = arr[j - 1];
			}
			arr[position + 1] = key;
		}
		return arr;
	}

	getPrime = () => {
		const num = 100;
		for (let i = 2; i <= 100; i++) {
			if ()
		}
	}

	render() {
		const word = 'tz890APCa0l0pc'; // e20g30f40ha50
		const op = this.getAlphabetOrder(word);
		const prime = this.getPrime();
		console.log(op)
		return (
			<div>Hell</div>
		);
	}

}
export default OrderOfWord;