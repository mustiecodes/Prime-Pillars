'use client'

export default function DownloadableFormsPage() {
    const downloadFile = (filePath: string) => {
        window.location.href = filePath
    }

    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 my-10">
                <h1 className="text-2xl font-bold text-[#0057A0] mb-6">Downloadable Forms</h1>

                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[#0057A0] mb-4">ARM Pensions</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">Account Opening Form</span>
                            <button onClick={() => downloadFile('/forms/arm-account-opening.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">Consent Form</span>
                            <button onClick={() => downloadFile('/forms/arm-consent.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[#0057A0] mb-4">Stanbic IBTC</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">Application Letter</span>
                            <button onClick={() => downloadFile('/forms/stanbic-application.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">Indemnity Form</span>
                            <button onClick={() => downloadFile('/forms/stanbic-indemnity.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-[#0057A0] mb-4">TrustFund</h2>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">NIN Verification Form</span>
                            <button onClick={() => downloadFile('/forms/trustfund-nin.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                        <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                            <span className="font-medium">Undertaking Form</span>
                            <button onClick={() => downloadFile('/forms/trustfund-undertaking.pdf')} className="bg-[#0057A0] text-white px-4 py-1 rounded hover:bg-[#003f7a]">Download</button>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
