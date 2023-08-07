import { useRef } from "react";

const useRandomItems = () => {

  const index = useRef();

  function randomItems(arr, quantity = 1) {
    const random = [];
    const randomIndex = [];
    
    for (let i = 0; i < quantity; i++) {
  
      do {
        index.current = Math.floor(Math.random() * arr.length);
      } while (randomIndex.some((rIndex) => rIndex === index.current));
  
      randomIndex.push(index.current);
      random.push(arr[index.current]);
    }
  
    return random;
  }

  return { randomItems };
  
}

export { useRandomItems };