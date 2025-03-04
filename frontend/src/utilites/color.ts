

interface Color  {
    primary:string,
    secondary: string,
    third?: string
 }
 
 export const colors:Color = {
    primary: "text-[#1f0059]" ,
    secondary:"text-[#fb2576]",
    third:"text-[#303249]"
 }
 export const bgColors:Color = {
    primary: "bg-[#1f0059]" ,
    secondary:"bg-[#fb2576]",
    third:'bg-[#fb257771]'
 }
 
 export const gradiant = {
   primary: "bg-gradient-to-br from-[#14032f82] to-[#9233eae3]",
   secondary: "bg-gradient-to-br from-[#7a46c2] to-[#c084fc] opacity-0 "
 }
 