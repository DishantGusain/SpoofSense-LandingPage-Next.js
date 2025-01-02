// File: /app/api/ContactForm/route.ts
import { NextResponse } from 'next/server';

export async function POST(request) {
 const formData = await request.json();
 
 const response = await fetch('https://send.pageclip.co/FA2Y6j5J99e0hQjHfQTLbTdrfuzQRJOY/test', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Basic FA2Y6j5J99e0hQjHfQTLbTdrfuzQRJOY'
   },
   body: JSON.stringify(formData)
 });

 if (response.ok) {
   return NextResponse.json({ message: 'Form submitted successfully!' });
 } else {
   const errorText = await response.text();
   console.error(errorText);
   return NextResponse.json({ message: 'Submission failed.', error: errorText }, { status: 500 });
 }
}