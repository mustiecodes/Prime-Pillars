'use client';

import { useEffect, useState } from 'react';

type DocumentStatus = 'accepted' | 'rejected' | 'pending';

type DocumentData = {
  id: number;
  title: string;
  url: string;
  status: DocumentStatus;
  rejection_comment: string | null;
};

type ClientProfileData = {
  full_name: string;
  pfa: string;
  email: string;
  application_id: number;
  documents: DocumentData[];
};

export default function ClientProfile({
  pen,
  onRemove,
}: {
  pen: string;
  onRemove?: () => void;
}) {
  const [data, setData] = useState<ClientProfileData | null>(null);
  const [showPreview, setShowPreview] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/dashboard/client/${pen}`)
      .then((res) => res.json())
      .then((profile) => {
        setData(profile);
        const previewMap: Record<number, boolean> = {};
        profile.documents.forEach((doc: DocumentData) => {
          previewMap[doc.id] = false;
        });
        setShowPreview(previewMap);
      })
      .catch(() => alert('❌ Failed to load client profile'));
  }, [pen]);

  const updateDocumentStatus = async (
    docId: number,
    status: DocumentStatus
  ) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/dashboard/document/${docId}/review`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status, rejection_comment: '' }),
        }
      );
      if (!res.ok) throw new Error('Update failed');

      setData((prev) => {
        if (!prev) return prev;
        const updatedDocs = prev.documents.map((doc) =>
          doc.id === docId
            ? { ...doc, status, rejection_comment: '' }
            : doc
        );
        return { ...prev, documents: updatedDocs };
      });
    } catch (err: any) {
      alert('❌ ' + err.message);
    }
  };

  const handleApprove = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/dashboard/application/${data?.application_id}/submit`,
        { method: 'POST' }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submit failed');
      alert(result.message);
      onRemove?.(); // remove from parent list
    } catch (err: any) {
      alert('❌ ' + err.message);
    }
  };

  const handleFeedback = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/dashboard/application/${data?.application_id}/feedback`,
        { method: 'POST' }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Feedback failed');
      alert('📩 Feedback sent to: ' + result.sent_to.join(', '));
      onRemove?.(); // remove from parent list
    } catch (err: any) {
      alert('❌ ' + err.message);
    }
  };

  if (!data) return <p>Loading...</p>;

  const allAccepted = data.documents.every((doc) => doc.status === 'accepted');
  const anyRejected = data.documents.some((doc) => doc.status === 'rejected');

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Client Profile: {pen}</h2>

      <div className="mb-4 text-sm space-y-1">
        <p>
          <strong>Full Name:</strong> {data.full_name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>PFA:</strong> {data.pfa}
        </p>
      </div>

      <div className="space-y-4">
        {data.documents.map((doc) => (
          <div key={doc.id} className="border rounded-xl p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{doc.title}</p>
              <div className="space-x-2">
                <button
                  onClick={() => updateDocumentStatus(doc.id, 'accepted')}
                  className={`px-3 py-1 rounded ${
                    doc.status === 'accepted'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  Accept
                </button>
                <button
                  onClick={() => updateDocumentStatus(doc.id, 'rejected')}
                  className={`px-3 py-1 rounded ${
                    doc.status === 'rejected'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  Reject
                </button>
                {doc.url.toLowerCase().endsWith('.pdf') && (
                  <button
                    onClick={() =>
                      setShowPreview((prev) => ({
                        ...prev,
                        [doc.id]: !prev[doc.id],
                      }))
                    }
                    className="px-3 py-1 rounded bg-purple-500 text-white"
                  >
                    {showPreview[doc.id] ? 'Hide Preview' : 'Preview'}
                  </button>
                )}
              </div>
            </div>

            {showPreview[doc.id] && (
              <iframe
                src={`http://localhost:5000${doc.url}`}
                width="100%"
                height="500px"
                className="rounded border"
              />
            )}

            {doc.status === 'rejected' && doc.rejection_comment && (
              <p className="mt-2 text-sm text-red-600">
                ❌ Rejected: {doc.rejection_comment}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {allAccepted && (
          <button
            onClick={handleApprove}
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            ✅ Approve Application
          </button>
        )}

        {anyRejected && (
          <button
            onClick={handleFeedback}
            className="px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium"
          >
            📩 Send Feedback
          </button>
        )}
      </div>
    </div>
  );
}
