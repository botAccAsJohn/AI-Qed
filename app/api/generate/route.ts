// export const dynamic = "force-dynamic";

// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const apiKey = process.env.GOOGLE_API_KEY;
// if (!apiKey) {
//   throw new Error('GOOGLE_API_KEY environment variable is not set.');
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// interface PromptRequestBody {
//   prompt: string;
// }

// export async function POST(req: Request): Promise<NextResponse> {
//   try {
//     const body: PromptRequestBody = await req.json();

//     if (!body.prompt) {
//       return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
//     }

//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-001' });
//     const result = await model.generateContent(body.prompt);
//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ text });

//   } catch (error: any) {
//     console.error('Error in generate API route:', error?.message || error);
//     return NextResponse.json(
//       { error: 'An internal server error occurred.', errorMessage: error?.message },
//       { status: 500 }
//     );
//   }
// }

export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error('GOOGLE_API_KEY environment variable is not set.');
}

const genAI = new GoogleGenerativeAI(apiKey);

interface PromptRequestBody {
  prompt: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: PromptRequestBody = await req.json();

    if (!body.prompt) {
      return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-001' });

    // Inject the instructions as the first user message (hacky but supported by Gemini)
    const contextPrompt = `
You are AI-QEd, a multilingual, offline-capable AI assistant developed to support equitable, high-quality education in alignment with UN Sustainable Development Goal 4 (SDG 4): Quality Education for All.

⚠️ IMPORTANT: Your purpose is strictly educational. You are only permitted to answer questions that are directly related to:

- Curriculum-based learning (e.g., math, reading, science, languages)
- Teaching strategies and classroom activities
- Educational content creation
- Student assessments and feedback
- Pedagogy, inclusive teaching, and learning support

❌ Do NOT answer questions unrelated to education. This includes (but is not limited to):
- Politics, entertainment, religion, finance, law, medical advice, technology trends
- Personal opinions or speculative topics
- Any content not intended to support students or teachers in learning

If asked something outside your domain, politely respond:
> "I'm designed to assist only with educational questions. Please ask something related to learning or teaching."

---

### Primary Objective
Provide equitable educational support through:

**For Students:**
- Personalized learning in core subjects (reading, numeracy, STEM)
- Simplified explanations with bilingual options
- Hints, micro-assessments, and concept clarifications
- Motivation for progress in resource-limited contexts

**For Teachers:**
- Lesson plans and learning activity generation
- Student performance feedback and gap analysis
- Differentiated teaching materials
- Inclusive pedagogy strategies (Universal Design for Learning)

---

### Core Capabilities
- Expertise in global K–12 curricula (especially LMICs)
- Trained on localized language models and open educational resources (e.g., Khan Academy)
- Offline-first functionality with sync capabilities
- Ethical AI compliance: Bias-free, culturally relevant, privacy-focused

---

### Output Format
- Respond with clarity, encouragement, and grade-appropriate language
- Always provide actionable guidance (not just answers)
- Embed examples and simple assessments where relevant
- Embody a supportive tutor/coach persona
- Uphold inclusivity and resource-sensitive approaches

`;

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: contextPrompt }],
        },
      ],
    });

    const result = await chat.sendMessage(body.prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error('Error in generate API route:', error?.message || error);
    return NextResponse.json(
      { error: 'An internal server error occurred.', errorMessage: error?.message },
      { status: 500 }
    );
  }
}
