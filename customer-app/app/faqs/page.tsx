'use client'

import { useState } from 'react'
import Header from '@/components/common/Header'

export default function FaqsPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <>
      <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 my-10">
        <h1 className="text-2xl font-bold text-[#0057A0] mb-4">Frequently Asked Questions</h1>
        <h2 className="text-lg font-semibold text-[#0057A0] mb-6">Have questions? We've got answers.</h2>

        {[
          {
            question: 'How do I apply for a house?',
            answer: 'You must first register with your PEN Number and submit all required documents via the data entry form.',
          },
          {
            question: 'What documents are required?',
            answer:
              'Required documents include: Account Opening Form, NIN Slip, Consent Form, Application Letter, and others listed during application.',
          },
          {
            question: 'How long does approval take?',
            answer: 'Approvals usually take 5–10 working days depending on completeness and verification stages.',
          },
          {
            question: 'Can I change my allocated house?',
            answer: 'No. Once a house is allocated based on RSA balance and availability, it cannot be changed.',
          },
        ].map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`border-b cursor-pointer p-4 ${
              openIndexes.includes(index) ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex justify-between items-center font-semibold">
              {faq.question}
              <span>{openIndexes.includes(index) ? '-' : '+'}</span>
            </div>
            {openIndexes.includes(index) && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </main>
    </>
  )
}
