export function capitalizeFirstWord(string) {
   const words = string.split(" ");
   const firstWord = words[0][0].toUpperCase() + words[0].slice(1);

   if (words.length === 1) return firstWord;

   return firstWord + " " + words.slice(1).join(" ");
}
