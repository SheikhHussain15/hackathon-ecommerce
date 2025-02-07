import { groq } from "next-sanity";


export const allProducts = groq`*[_type == 'car']`;
export const nine = groq`*[_type == "car"][0..8]`;
export const six = groq`*[_type == "car"][0..5]`;