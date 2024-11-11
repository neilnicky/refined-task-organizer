"use client";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

export default function Fruits() {
  const fruitsList: string[] = ["apple", "banana", "orange", "mango", "grapes"];
  const { bin, todos } = useAppSelector((state) => state.todos);

  const combinedText: string[] = [...todos, ...bin].map((item) => item.text);

  const getUniqueFruits = (textArray: string[], fruits: string[]): string[] => {
    return Array.from(
      new Set(textArray.filter((item) => fruits.includes(item)))
    );
  };

  const uniqueFruits = getUniqueFruits(combinedText, fruitsList);

  return (
    <div className="grid m-20 place-items-start">
      <h1>Fruits:</h1>
      {uniqueFruits.map((item, i) => (
        <li key={`fruit-${item}-${i}`}>{item}</li>
      ))}
    </div>
  );
}

// export default function Fruits() {
//   const Fruits = ["apple", "banana", "orange", "mango", "grapes"];

//   const Todos = useAppSelector((state) => state.todos);
//   const { bin, todos } = Todos;
//   const binText = todos.map((item) => item.text);
//   const todoText = bin.map((item) => item.text);
//   const mergedText = binText.concat(todoText);

//   const findFruits = (mergedText: string[], Fruits: string[]): string[] => {
//     return mergedText.filter((item) => Fruits.includes(item));
//   };

//   function removeDuplicates(findFruits: string[]) {
//     return findFruits.filter(
//       (item, index) => findFruits.indexOf(item) === index
//     );
//   }

//   return (
//     <div className="grid m-20 place-items-start">
//       <h1>Fruits:</h1>

//       {removeDuplicates(findFruits(mergedText, Fruits)).map((item, i) => (
//         <li key={`keyoff${item}${i}`}>{item}</li>
//       ))}
//     </div>
//   );
// }
